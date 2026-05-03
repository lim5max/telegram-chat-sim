import { create } from "zustand";
import { chats as initialChats, type Chat, type FeatureKey } from "@/data/chats";

export type GroupMsg = {
  id: number;
  from: "bot" | "user" | "member" | "system";
  author?: string;
  text: string;
  time: string;
  voice?: { duration: string; caption?: string };
  deleted?: boolean;
  anonymous?: boolean;
};

let seq = 5000;
const nextId = () => ++seq;
const now = () => {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

const seedMessages = (chatId: string): GroupMsg[] => {
  switch (chatId) {
    case "kurery-msk":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Аня", time: "09:02", text: "Кто знает оплату за смену в центре?" },
        { id: nextId(), from: "member", author: "Максим", time: "09:05", text: "Подняли. Пик — 380₽/час." },
      ];
    case "product-chatlogix":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Лена", time: "10:12", text: "Обсудим лимиты voice на Pro?" },
        { id: nextId(), from: "member", author: "Игорь", time: "10:14", text: "375 минут мало. Можно 750 за $25." },
      ];
    case "react-ru":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Dan", time: "11:01", text: "В React 19 use() finally стабильно ✅" },
        { id: nextId(), from: "member", author: "Polina", time: "11:08", text: "TanStack Router > всё остальное." },
      ];
    case "startup-club":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Артём", time: "14:20", text: "Закрыли pre-seed на $250k 🎉" },
        { id: nextId(), from: "member", author: "Marina", time: "14:22", text: "Поздравляю! Какая оценка?" },
      ];
    default:
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Tim", time: "23:47", text: "Тестим ночной режим." },
      ];
  }
};

type State = {
  chats: Chat[];
  activeChatId: string;
  messagesByChat: Record<string, GroupMsg[]>;
  adminAlerts: Record<string, number>;
  totalAnonSentToday: number;
  superSummaryOn: boolean;
  superPodcastOn: boolean;
  superPodcastSubscription: null | { expiresAt: string }; // null = free tier, object = paid
  superPodcastFreeMinutesUsed: number; // out of 16
  ignoreMeByChat: Record<string, boolean>;

  setActiveChat: (id: string) => void;
  setIgnoreMe: (chatId: string, on: boolean) => void;
  toggleFeature: (chatId: string, feature: FeatureKey) => void;
  setPodcastVoice: (chatId: string, voice: "Onyx" | "Shimmer") => void;
  setAllowMedia: (chatId: string, allow: boolean) => void;
  pushMessage: (chatId: string, msg: Omit<GroupMsg, "id" | "time"> & { time?: string }) => void;
  sendAnonymous: (chatId: string, text: string) => void;
  markSpamDeleted: (chatId: string, msgId: number) => void;
  setSuperSummary: (on: boolean) => void;
  setSuperPodcast: (on: boolean) => void;
  incUsage: (chatId: string, by?: number) => void;
};

export const useChatsStore = create<State>((set) => ({
  chats: initialChats,
  activeChatId: initialChats[0].id,
  messagesByChat: Object.fromEntries(initialChats.map((c) => [c.id, seedMessages(c.id)])),
  adminAlerts: {},
  totalAnonSentToday: 0,
  superSummaryOn: true,
  superPodcastOn: true,
  superPodcastSubscription: { expiresAt: "04.06.2026" },
  superPodcastFreeMinutesUsed: 8,
  ignoreMeByChat: {},

  setActiveChat: (id) => set({ activeChatId: id }),
  setIgnoreMe: (chatId, on) =>
    set((state) => ({ ignoreMeByChat: { ...state.ignoreMeByChat, [chatId]: on } })),

  setPodcastVoice: (chatId, voice) =>
    set((state) => ({
      chats: state.chats.map((c) =>
        c.id === chatId && c.chatPodcast
          ? { ...c, chatPodcast: { ...c.chatPodcast, voice } }
          : c,
      ),
    })),

  setAllowMedia: (chatId, allow) =>
    set((state) => ({
      chats: state.chats.map((c) =>
        c.id === chatId && c.anonymous
          ? { ...c, anonymous: { ...c.anonymous, allowMedia: allow } }
          : c,
      ),
    })),

  toggleFeature: (chatId, feature) =>
    set((state) => ({
      chats: state.chats.map((c) => {
        if (c.id !== chatId) return c;
        switch (feature) {
          case "summary":
            return { ...c, summary: { active: !(c.summary?.active ?? false) } };
          case "voice":
            return { ...c, voice: { active: !(c.voice?.active ?? false) } };
          case "podcast":
            return {
              ...c,
              chatPodcast: {
                ...(c.chatPodcast ?? { voice: "Onyx", status: "Бесплатная неделя" }),
                active: !(c.chatPodcast?.active ?? false),
              },
            };
          case "kb":
            return {
              ...c,
              knowledgeBase: {
                ...(c.knowledgeBase ?? { quotaUsed: 0, quotaTotal: 100 }),
                active: !(c.knowledgeBase?.active ?? false),
              },
            };
          case "antispam":
            return {
              ...c,
              antispam: {
                ...(c.antispam ?? { deleted24h: 0 }),
                active: !(c.antispam?.active ?? false),
              },
            };
          case "anonymous":
            return {
              ...c,
              anonymous: {
                ...(c.anonymous ?? { allowMedia: false, sentToday: 0 }),
                active: !(c.anonymous?.active ?? false),
              },
            };
        }
      }),
    })),

  pushMessage: (chatId, m) =>
    set((state) => ({
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: [
          ...(state.messagesByChat[chatId] ?? []),
          { id: nextId(), time: m.time ?? now(), ...m } as GroupMsg,
        ],
      },
      chats: state.chats.map((c) =>
        c.id === chatId && (m.from === "user" || m.from === "member")
          ? { ...c, used: c.used + 1 }
          : c,
      ),
    })),

  sendAnonymous: (chatId, text) =>
    set((state) => {
      const newMsg: GroupMsg = {
        id: nextId(),
        from: "bot",
        time: now(),
        anonymous: true,
        text: `📣 Анонимное сообщение:\n\n${text}`,
      };
      return {
        messagesByChat: {
          ...state.messagesByChat,
          [chatId]: [...(state.messagesByChat[chatId] ?? []), newMsg],
        },
        totalAnonSentToday: state.totalAnonSentToday + 1,
        chats: state.chats.map((c) =>
          c.id === chatId
            ? {
                ...c,
                used: c.used + 1,
                anonymous: {
                  ...(c.anonymous ?? { active: true, allowMedia: false, sentToday: 0 }),
                  sentToday: (c.anonymous?.sentToday ?? 0) + 1,
                },
              }
            : c,
        ),
      };
    }),

  markSpamDeleted: (chatId, msgId) =>
    set((state) => ({
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: (state.messagesByChat[chatId] ?? []).map((m) =>
          m.id === msgId ? { ...m, deleted: true, text: "[сообщение удалено]" } : m,
        ),
      },
      adminAlerts: {
        ...state.adminAlerts,
        [chatId]: (state.adminAlerts[chatId] ?? 0) + 1,
      },
      chats: state.chats.map((c) =>
        c.id === chatId
          ? {
              ...c,
              antispam: {
                ...(c.antispam ?? { active: true, deleted24h: 0 }),
                deleted24h: (c.antispam?.deleted24h ?? 0) + 1,
              },
            }
          : c,
      ),
    })),

  setSuperSummary: (on) => set((state) => ({
    superSummaryOn: on,
    // If turning off super-summary, also turn off super podcast
    ...(on ? {} : { superPodcastOn: false }),
  })),
  setSuperPodcast: (on) => set((state) => ({
    superPodcastOn: on,
    // If turning on podcast, auto-enable super-summary
    ...(on && !state.superSummaryOn ? { superSummaryOn: true } : {}),
  })),

  incUsage: (chatId, by = 1) =>
    set((state) => ({
      chats: state.chats.map((c) => (c.id === chatId ? { ...c, used: c.used + by } : c)),
    })),
}));

export const useChat = (id: string) =>
  useChatsStore((s) => s.chats.find((c) => c.id === id));
