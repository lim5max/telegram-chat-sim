import { create } from "zustand";
import {
  chats as initialChats,
  type Chat,
  type FeatureKey,
  type Routine,
  SEED_ROUTINES,
} from "@/data/chats";
import { DEFAULT_SUMMARY_STYLE, type SummaryStyleId } from "@/data/summaryStyles";
import type { ParsedChannel } from "@/lib/channelLink";

export type SummaryChannel = ParsedChannel;

export type GroupMsg = {
  id: number;
  from: "bot" | "user" | "member" | "system";
  author?: string;
  text: string;
  time: string;
  voice?: { duration: string; caption?: string };
  deleted?: boolean;
  anonymous?: boolean;
  buttons?: { label: string; action: string }[];
  collectionId?: string;
};

export type Collection = {
  id: string;
  chatId: string;
  feature: FeatureKey;
  planLabel: string;
  totalAmount: number;
  perPerson: number;
  targetCount: number;
  deadline: string;
  startedAt: string;
  contributors: { name: string; at: string }[];
  status: "active" | "completed" | "cancelled";
};

export const collectionKey = (chatId: string, feature: FeatureKey) => `${chatId}:${feature}`;

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
    case "design-team":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Аня", time: "11:30", text: "Брендбук v2 на финалке, кидаю в Figma 🎨" },
        { id: nextId(), from: "member", author: "Дима", time: "11:34", text: "Лендинг к пятнице успеваем?" },
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
  tabMode: "private" | "group";
  messagesByChat: Record<string, GroupMsg[]>;
  adminAlerts: Record<string, number>;
  totalAnonSentToday: number;
  superSummaryOn: boolean;
  superPodcastOn: boolean;
  superPodcastSubscription: null | { expiresAt: string }; // null = free tier, object = paid
  superPodcastFreeMinutesUsed: number; // out of 16
  ignoreMeByChat: Record<string, boolean>;
  summaryStyleByChat: Record<string, SummaryStyleId>;
  superSummaryStyle: SummaryStyleId;
  summaryChannels: SummaryChannel[];
  routinesByChat: Record<string, Routine[]>;
  pendingBroadcast: string | null;
  collections: Record<string, Collection>;

  setTabMode: (mode: "private" | "group") => void;
  setPendingBroadcast: (action: string | null) => void;
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
  setSummaryStyle: (chatId: string, style: SummaryStyleId) => void;
  setSuperSummaryStyle: (style: SummaryStyleId) => void;
  addSummaryChannel: (channel: SummaryChannel) => void;
  removeSummaryChannel: (id: string) => void;
  incUsage: (chatId: string, by?: number) => void;
  addRoutine: (chatId: string, routine: Routine) => void;
  updateRoutine: (chatId: string, routineId: string, patch: Partial<Routine>) => void;
  deleteRoutine: (chatId: string, routineId: string) => void;
  startCollection: (input: {
    chatId: string;
    feature: FeatureKey;
    planLabel: string;
    totalAmount: number; // цель в ₽
    perPerson: number; // фиксированный взнос в ₽ (пресет)
    deadline: string;
  }) => Collection;
  contributeToCollection: (chatId: string, feature: FeatureKey, name?: string) => void;
  cancelCollection: (chatId: string, feature: FeatureKey) => void;
};

export const useChatsStore = create<State>((set) => ({
  chats: initialChats,
  activeChatId: initialChats[0].id,
  tabMode: "private",
  messagesByChat: Object.fromEntries(initialChats.map((c) => [c.id, seedMessages(c.id)])),
  adminAlerts: {},
  totalAnonSentToday: 0,
  superSummaryOn: true,
  superPodcastOn: true,
  superPodcastSubscription: { expiresAt: "04.06.2026" },
  superPodcastFreeMinutesUsed: 8,
  ignoreMeByChat: {},
  summaryStyleByChat: {},
  superSummaryStyle: DEFAULT_SUMMARY_STYLE,
  summaryChannels: [],
  routinesByChat: { ...SEED_ROUTINES },
  pendingBroadcast: null,
  collections: {},

  setTabMode: (mode) => set({ tabMode: mode }),
  setPendingBroadcast: (action) => set({ pendingBroadcast: action }),
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
          case "askBot":
            return {
              ...c,
              askBot: { active: !(c.askBot?.active ?? false) },
            };
          case "routine":
            return {
              ...c,
              routine: { active: !(c.routine?.active ?? false) },
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

  setSummaryStyle: (chatId, style) =>
    set((state) => ({
      summaryStyleByChat: { ...state.summaryStyleByChat, [chatId]: style },
    })),
  setSuperSummaryStyle: (style) => set({ superSummaryStyle: style }),

  addSummaryChannel: (channel) =>
    set((state) =>
      state.summaryChannels.some((c) => c.id === channel.id)
        ? state // уже добавлен — не дублируем
        : { summaryChannels: [...state.summaryChannels, channel] },
    ),
  removeSummaryChannel: (id) =>
    set((state) => ({
      summaryChannels: state.summaryChannels.filter((c) => c.id !== id),
    })),

  incUsage: (chatId, by = 1) =>
    set((state) => ({
      chats: state.chats.map((c) => (c.id === chatId ? { ...c, used: c.used + by } : c)),
    })),

  addRoutine: (chatId, routine) =>
    set((state) => ({
      routinesByChat: {
        ...state.routinesByChat,
        [chatId]: [...(state.routinesByChat[chatId] ?? []), routine],
      },
      chats: state.chats.map((c) =>
        c.id === chatId ? { ...c, routine: { active: true } } : c,
      ),
    })),

  updateRoutine: (chatId, routineId, patch) =>
    set((state) => ({
      routinesByChat: {
        ...state.routinesByChat,
        [chatId]: (state.routinesByChat[chatId] ?? []).map((r) =>
          r.id === routineId ? { ...r, ...patch } : r,
        ),
      },
    })),

  deleteRoutine: (chatId, routineId) =>
    set((state) => ({
      routinesByChat: {
        ...state.routinesByChat,
        [chatId]: (state.routinesByChat[chatId] ?? []).filter((r) => r.id !== routineId),
      },
    })),

  startCollection: ({ chatId, feature, planLabel, totalAmount, perPerson, deadline }) => {
    const key = collectionKey(chatId, feature);
    // Сколько взносов нужно, чтобы покрыть цель (последний может перекрыть с запасом).
    const targetCount = Math.max(1, Math.ceil(totalAmount / perPerson));
    const fmt = (n: number) => `${n.toLocaleString("ru-RU")} ₽`;
    const collection: Collection = {
      id: `col-${nextId()}`,
      chatId,
      feature,
      planLabel,
      totalAmount,
      perPerson,
      targetCount,
      deadline,
      startedAt: now(),
      contributors: [],
      status: "active",
    };
    set((state) => ({
      collections: { ...state.collections, [key]: collection },
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: [
          ...(state.messagesByChat[chatId] ?? []),
          {
            id: nextId(),
            from: "bot",
            time: now(),
            text: `💰 Сбор на ${planLabel}\n\nЦель: ${fmt(totalAmount)} · ${deadline}\nВзнос — ${fmt(perPerson)} с участника\n\nНажми «Внести», чтобы участвовать.`,
            buttons: [
              { label: `Внести ${fmt(perPerson)}`, action: `collect:${feature}` },
              { label: "Подробнее", action: `collect-info:${feature}` },
            ],
            collectionId: collection.id,
          },
        ],
      },
    }));
    return collection;
  },

  contributeToCollection: (chatId, feature, name = "Вы") =>
    set((state) => {
      const key = collectionKey(chatId, feature);
      const col = state.collections[key];
      if (!col || col.status !== "active") return state;
      const already = col.contributors.some((c) => c.name === name);
      if (already) return state;
      const contributors = [...col.contributors, { name, at: now() }];
      const reached = contributors.length >= col.targetCount;
      const updated: Collection = {
        ...col,
        contributors,
        status: reached ? "completed" : "active",
      };
      const extraMsg: GroupMsg | null = reached
        ? {
            id: nextId(),
            from: "bot",
            time: now(),
            text: `✅ Сбор на ${col.planLabel} закрыт. Тариф подключён.`,
            collectionId: col.id,
          }
        : null;
      const baseMsgs = state.messagesByChat[chatId] ?? [];
      return {
        collections: { ...state.collections, [key]: updated },
        messagesByChat: {
          ...state.messagesByChat,
          [chatId]: extraMsg ? [...baseMsgs, extraMsg] : baseMsgs,
        },
      };
    }),

  cancelCollection: (chatId, feature) =>
    set((state) => {
      const key = collectionKey(chatId, feature);
      const col = state.collections[key];
      if (!col) return state;
      return {
        collections: {
          ...state.collections,
          [key]: { ...col, status: "cancelled" },
        },
        messagesByChat: {
          ...state.messagesByChat,
          [chatId]: [
            ...(state.messagesByChat[chatId] ?? []),
            {
              id: nextId(),
              from: "bot",
              time: now(),
              text: `❌ Сбор на ${col.planLabel} отменён администратором.`,
              collectionId: col.id,
            },
          ],
        },
      };
    }),
}));

export const useChat = (id: string) =>
  useChatsStore((s) => s.chats.find((c) => c.id === id));
