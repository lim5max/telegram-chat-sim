import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as redirect, I as notFound } from "../_libs/tanstack__router-core.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { c as create } from "../_libs/zustand.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-D21Tou98.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$b = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "ChatLogixBot simulates a Telegram Mini App for chat management and analytics." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "ChatLogixBot simulates a Telegram Mini App for chat management and analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "ChatLogixBot simulates a Telegram Mini App for chat management and analytics." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a573b68d-d6ee-4ef0-b335-052251ea038f/id-preview-64a3fc80--b660a55d-3e5a-468d-9c63-46d0c67f5ff9.lovable.app-1777274953176.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a573b68d-d6ee-4ef0-b335-052251ea038f/id-preview-64a3fc80--b660a55d-3e5a-468d-9c63-46d0c67f5ff9.lovable.app-1777274953176.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", theme: "dark" })
  ] });
}
const $$splitComponentImporter$9 = () => import("./subscriptions-C1lm7GM6.mjs");
const Route$a = createFileRoute("/subscriptions")({
  head: () => ({
    meta: [{
      title: "Мои подписки — ChatLogix"
    }, {
      name: "description",
      content: "Подписки ChatLogix, сгруппированные по чатам."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const Route$9 = createFileRoute("/app")({
  beforeLoad: () => {
    throw redirect({ to: "/home" });
  }
});
const $$splitComponentImporter$8 = () => import("../_tabs-B4sGVGiB.mjs");
const Route$8 = createFileRoute("/_tabs")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-Dd3932WT.mjs");
const searchSchema = objectType({
  anon: stringType().optional()
});
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "ChatLogixBot — Telegram"
    }, {
      name: "description",
      content: "AI-саммари ваших Telegram чатов"
    }]
  }),
  validateSearch: searchSchema,
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const chats = [
  {
    id: "kurery-msk",
    name: "Курьеры Москва",
    emoji: "🔥",
    avatarColor: "linear-gradient(135deg, oklch(0.70 0.20 35), oklch(0.60 0.22 15))",
    avatarUrl: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=80&h=80&fit=crop&crop=faces",
    initial: "К",
    used: 342,
    limit: 1e3,
    plan: "Full-on",
    planUntil: "12.05.2026",
    topics: ["Работа курьером", "Яндекс приложение", "Точки доставки"],
    newMembers: 7,
    activityDelta: "+22%",
    hashtag: "#kurery_msk",
    voices: 4,
    voiceDuration: "7 мин 12 сек",
    members: 1248,
    isAdmin: true,
    summary: { active: true },
    voice: { active: true, plan: "Pro" },
    knowledgeBase: { active: true, quotaUsed: 47, quotaTotal: 100 },
    chatPodcast: { active: true, voice: "Onyx", status: "Активна до 12.05.2026" },
    antispam: { active: true, deleted24h: 12, paid: true },
    anonymous: { active: true, allowMedia: true, sentToday: 0 }
  },
  {
    id: "product-chatlogix",
    name: "Product ChatLogix",
    avatarColor: "linear-gradient(135deg, oklch(0.60 0.16 225), oklch(0.50 0.16 240))",
    avatarUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop&crop=center",
    initial: "P",
    used: 28,
    limit: 1e3,
    plan: "Full-on",
    planUntil: "06.05.2026",
    cancelled: true,
    topics: ["Тарифы и лимиты", "Voice-транскрибация", "Настройки саммари"],
    newMembers: 3,
    activityDelta: "+18%",
    members: 24,
    isAdmin: true,
    summary: { active: true },
    voice: { active: false },
    knowledgeBase: { active: false, quotaUsed: 0, quotaTotal: 100 },
    chatPodcast: { active: false, voice: "Shimmer", status: "Бесплатная неделя" },
    antispam: { active: true, deleted24h: 3 },
    anonymous: { active: false, allowMedia: false, sentToday: 0 }
  },
  {
    id: "react-ru",
    name: "React.ru",
    emoji: "⚛️",
    avatarColor: "linear-gradient(135deg, oklch(0.62 0.18 220), oklch(0.55 0.20 200))",
    avatarUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=80&h=80&fit=crop&crop=center",
    initial: "R",
    used: 612,
    limit: 1e3,
    plan: "Full-on",
    planUntil: "30.05.2026",
    topics: ["React 19", "Hooks vs Signals", "TanStack"],
    newMembers: 12,
    activityDelta: "+34%",
    hashtag: "#react_ru",
    members: 4310,
    isAdmin: false,
    summary: { active: true },
    voice: { active: false },
    knowledgeBase: { active: true, quotaUsed: 71, quotaTotal: 100 },
    chatPodcast: { active: false, voice: "Shimmer", status: "Бесплатная неделя" },
    antispam: { active: true, deleted24h: 5 },
    anonymous: { active: true, allowMedia: false, sentToday: 0 }
  },
  {
    id: "startup-club",
    name: "Startup Club",
    emoji: "🚀",
    avatarColor: "linear-gradient(135deg, oklch(0.68 0.20 145), oklch(0.55 0.22 175))",
    avatarUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop&crop=center",
    initial: "S",
    used: 188,
    limit: 1e3,
    plan: "Full-on",
    planUntil: "18.05.2026",
    topics: ["Pre-seed", "Pitch deck", "MVP за 2 недели"],
    newMembers: 5,
    activityDelta: "+9%",
    members: 312,
    isAdmin: true,
    summary: { active: true },
    voice: { active: true, plan: "Free" },
    knowledgeBase: { active: false, quotaUsed: 0, quotaTotal: 100 },
    chatPodcast: { active: true, voice: "Onyx", status: "Активна до 18.05.2026" },
    antispam: { active: false, deleted24h: 0 },
    anonymous: { active: true, allowMedia: true, sentToday: 0 }
  },
  {
    id: "chatlogix-night",
    name: "ChatLogix",
    emoji: "🌙",
    avatarColor: "linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.42 0.14 240))",
    avatarUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=80&h=80&fit=crop&crop=center",
    initial: "C",
    used: 14,
    limit: 200,
    plan: "Nano",
    topics: [],
    newMembers: 0,
    activityDelta: "−4%",
    members: 8,
    isAdmin: false,
    summary: { active: true },
    voice: { active: false },
    knowledgeBase: { active: false, quotaUsed: 0, quotaTotal: 100 },
    chatPodcast: { active: false, voice: "Onyx", status: "Бесплатная неделя" },
    antispam: { active: false, deleted24h: 0 },
    anonymous: { active: false, allowMedia: false, sentToday: 0 }
  }
];
const FEATURE_META = {
  summary: {
    icon: "📝",
    label: "Саммари",
    short: "Саммари",
    desc: "Ежедневная выжимка обсуждений чата — приходит в 09:00.",
    price: "Бесплатно",
    audience: "both",
    monetization: "free"
  },
  voice: {
    icon: "🎤",
    label: "Расшифровка голосовых",
    short: "Расшифровка",
    desc: "Автоматический перевод голосовых сообщений в текст.",
    price: "от $16.99/мес",
    audience: "both",
    monetization: "freemium"
  },
  podcast: {
    icon: "🎙",
    label: "Подкаст чата",
    short: "Подкаст",
    desc: "Аудио-версия саммари — слушайте обсуждения на ходу.",
    price: "$5.99/мес",
    audience: "both",
    monetization: "paid"
  },
  kb: {
    icon: "📚",
    label: "База знаний",
    short: "Поиск",
    desc: "Поиск по истории чата командой /search — бот даст краткий ответ.",
    price: "100 запросов бесплатно",
    audience: "admin",
    monetization: "freemium"
  },
  antispam: {
    icon: "🛡",
    label: "Антиспам",
    short: "Антиспам",
    desc: "Удаляет спам, флуд и мат. Уведомляет админа в ЛС.",
    price: "Бесплатно",
    audience: "admin",
    monetization: "free"
  },
  anonymous: {
    icon: "🎭",
    label: "Анонимные сообщения",
    short: "Анонимные",
    desc: "Участники пишут через бота — автор скрыт от всех.",
    price: "Бесплатно",
    audience: "user",
    monetization: "free"
  }
};
let seq = 5e3;
const nextId = () => ++seq;
const now = () => {
  const d = /* @__PURE__ */ new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};
const seedMessages = (chatId) => {
  switch (chatId) {
    case "kurery-msk":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Аня", time: "09:02", text: "Кто знает оплату за смену в центре?" },
        { id: nextId(), from: "member", author: "Максим", time: "09:05", text: "Подняли. Пик — 380₽/час." }
      ];
    case "product-chatlogix":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Лена", time: "10:12", text: "Обсудим лимиты voice на Pro?" },
        { id: nextId(), from: "member", author: "Игорь", time: "10:14", text: "375 минут мало. Можно 750 за $25." }
      ];
    case "react-ru":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Dan", time: "11:01", text: "В React 19 use() finally стабильно ✅" },
        { id: nextId(), from: "member", author: "Polina", time: "11:08", text: "TanStack Router > всё остальное." }
      ];
    case "startup-club":
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Артём", time: "14:20", text: "Закрыли pre-seed на $250k 🎉" },
        { id: nextId(), from: "member", author: "Marina", time: "14:22", text: "Поздравляю! Какая оценка?" }
      ];
    default:
      return [
        { id: nextId(), from: "system", time: "", text: "сегодня" },
        { id: nextId(), from: "member", author: "Tim", time: "23:47", text: "Тестим ночной режим." }
      ];
  }
};
const useChatsStore = create((set) => ({
  chats,
  activeChatId: chats[0].id,
  messagesByChat: Object.fromEntries(chats.map((c) => [c.id, seedMessages(c.id)])),
  adminAlerts: {},
  totalAnonSentToday: 0,
  superSummaryOn: true,
  superPodcastOn: false,
  superPodcastSubscription: null,
  superPodcastFreeMinutesUsed: 8,
  ignoreMeByChat: {},
  setActiveChat: (id) => set({ activeChatId: id }),
  setIgnoreMe: (chatId, on) => set((state) => ({ ignoreMeByChat: { ...state.ignoreMeByChat, [chatId]: on } })),
  setPodcastVoice: (chatId, voice) => set((state) => ({
    chats: state.chats.map(
      (c) => c.id === chatId && c.chatPodcast ? { ...c, chatPodcast: { ...c.chatPodcast, voice } } : c
    )
  })),
  setAllowMedia: (chatId, allow) => set((state) => ({
    chats: state.chats.map(
      (c) => c.id === chatId && c.anonymous ? { ...c, anonymous: { ...c.anonymous, allowMedia: allow } } : c
    )
  })),
  toggleFeature: (chatId, feature) => set((state) => ({
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
              ...c.chatPodcast ?? { voice: "Onyx", status: "Бесплатная неделя" },
              active: !(c.chatPodcast?.active ?? false)
            }
          };
        case "kb":
          return {
            ...c,
            knowledgeBase: {
              ...c.knowledgeBase ?? { quotaUsed: 0, quotaTotal: 100 },
              active: !(c.knowledgeBase?.active ?? false)
            }
          };
        case "antispam":
          return {
            ...c,
            antispam: {
              ...c.antispam ?? { deleted24h: 0 },
              active: !(c.antispam?.active ?? false)
            }
          };
        case "anonymous":
          return {
            ...c,
            anonymous: {
              ...c.anonymous ?? { allowMedia: false, sentToday: 0 },
              active: !(c.anonymous?.active ?? false)
            }
          };
      }
    })
  })),
  pushMessage: (chatId, m) => set((state) => ({
    messagesByChat: {
      ...state.messagesByChat,
      [chatId]: [
        ...state.messagesByChat[chatId] ?? [],
        { id: nextId(), time: m.time ?? now(), ...m }
      ]
    },
    chats: state.chats.map(
      (c) => c.id === chatId && (m.from === "user" || m.from === "member") ? { ...c, used: c.used + 1 } : c
    )
  })),
  sendAnonymous: (chatId, text) => set((state) => {
    const newMsg = {
      id: nextId(),
      from: "bot",
      time: now(),
      anonymous: true,
      text: `📣 Анонимное сообщение:

${text}`
    };
    return {
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: [...state.messagesByChat[chatId] ?? [], newMsg]
      },
      totalAnonSentToday: state.totalAnonSentToday + 1,
      chats: state.chats.map(
        (c) => c.id === chatId ? {
          ...c,
          used: c.used + 1,
          anonymous: {
            ...c.anonymous ?? { active: true, allowMedia: false, sentToday: 0 },
            sentToday: (c.anonymous?.sentToday ?? 0) + 1
          }
        } : c
      )
    };
  }),
  markSpamDeleted: (chatId, msgId) => set((state) => ({
    messagesByChat: {
      ...state.messagesByChat,
      [chatId]: (state.messagesByChat[chatId] ?? []).map(
        (m) => m.id === msgId ? { ...m, deleted: true, text: "[сообщение удалено]" } : m
      )
    },
    adminAlerts: {
      ...state.adminAlerts,
      [chatId]: (state.adminAlerts[chatId] ?? 0) + 1
    },
    chats: state.chats.map(
      (c) => c.id === chatId ? {
        ...c,
        antispam: {
          ...c.antispam ?? { active: true, deleted24h: 0 },
          deleted24h: (c.antispam?.deleted24h ?? 0) + 1
        }
      } : c
    )
  })),
  setSuperSummary: (on) => set((state) => ({
    superSummaryOn: on,
    // If turning off super-summary, also turn off super podcast
    ...on ? {} : { superPodcastOn: false }
  })),
  setSuperPodcast: (on) => set((state) => ({
    superPodcastOn: on,
    // If turning on podcast, auto-enable super-summary
    ...on && !state.superSummaryOn ? { superSummaryOn: true } : {}
  })),
  incUsage: (chatId, by = 1) => set((state) => ({
    chats: state.chats.map((c) => c.id === chatId ? { ...c, used: c.used + by } : c)
  }))
}));
const $$splitNotFoundComponentImporter$1 = () => import("./chat._chatId-CkaJZw_Z.mjs");
const $$splitComponentImporter$6 = () => import("./chat._chatId-BN18zIMB.mjs");
const Route$6 = createFileRoute("/chat/$chatId")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  loader: ({
    params
  }) => {
    const exists = useChatsStore.getState().chats.some((c) => c.id === params.chatId);
    if (!exists) throw notFound();
    return null;
  }
});
const $$splitComponentImporter$5 = () => import("../_tabs.profile-CJj1bUNo.mjs");
const Route$5 = createFileRoute("/_tabs/profile")({
  head: () => ({
    meta: [{
      title: "Профиль — ChatLogix"
    }, {
      name: "description",
      content: "Профиль, подписка и настройки ChatLogix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_tabs.me-Ji-88QIW.mjs");
const Route$4 = createFileRoute("/_tabs/me")({
  head: () => ({
    meta: [{
      title: "Личное — ChatLogix"
    }, {
      name: "description",
      content: "Персональные навыки ChatLogix: Super-Summary, Super Podcast, анонимные сообщения."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_tabs.marketplace-Bmd9ZFwc.mjs");
const Route$3 = createFileRoute("/_tabs/marketplace")({
  validateSearch: objectType({
    feature: stringType().optional()
  }).parse,
  head: () => ({
    meta: [{
      title: "Каталог — ChatLogix"
    }, {
      name: "description",
      content: "Все навыки ChatLogix: добавляй в чаты или подключай лично."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_tabs.home-BPfdGxXc.mjs");
const Route$2 = createFileRoute("/_tabs/home")({
  head: () => ({
    meta: [{
      title: "Главная — ChatLogix"
    }, {
      name: "description",
      content: "Дашборд ChatLogix: чаты, навыки, новости."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_tabs.chats-Cwfaseqi.mjs");
const Route$1 = createFileRoute("/_tabs/chats")({
  head: () => ({
    meta: [{
      title: "Чаты — ChatLogix"
    }, {
      name: "description",
      content: "Все ваши чаты с активными навыками ChatLogix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./chat._chatId.feature._featureKey-CcTQhSKx.mjs");
const $$splitComponentImporter = () => import("./chat._chatId.feature._featureKey-DmidgkRP.mjs");
const ALL = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];
const Route = createFileRoute("/chat/$chatId/feature/$featureKey")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  loader: ({
    params
  }) => {
    const exists = useChatsStore.getState().chats.some((c) => c.id === params.chatId);
    if (!exists) throw notFound();
    if (!ALL.includes(params.featureKey)) throw notFound();
    return null;
  }
});
const SubscriptionsRoute = Route$a.update({
  id: "/subscriptions",
  path: "/subscriptions",
  getParentRoute: () => Route$b
});
const AppRoute = Route$9.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$b
});
const TabsRoute = Route$8.update({
  id: "/_tabs",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const ChatChatIdRoute = Route$6.update({
  id: "/chat/$chatId",
  path: "/chat/$chatId",
  getParentRoute: () => Route$b
});
const TabsProfileRoute = Route$5.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => TabsRoute
});
const TabsMeRoute = Route$4.update({
  id: "/me",
  path: "/me",
  getParentRoute: () => TabsRoute
});
const TabsMarketplaceRoute = Route$3.update({
  id: "/marketplace",
  path: "/marketplace",
  getParentRoute: () => TabsRoute
});
const TabsHomeRoute = Route$2.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => TabsRoute
});
const TabsChatsRoute = Route$1.update({
  id: "/chats",
  path: "/chats",
  getParentRoute: () => TabsRoute
});
const ChatChatIdFeatureFeatureKeyRoute = Route.update({
  id: "/feature/$featureKey",
  path: "/feature/$featureKey",
  getParentRoute: () => ChatChatIdRoute
});
const TabsRouteChildren = {
  TabsChatsRoute,
  TabsHomeRoute,
  TabsMarketplaceRoute,
  TabsMeRoute,
  TabsProfileRoute
};
const TabsRouteWithChildren = TabsRoute._addFileChildren(TabsRouteChildren);
const ChatChatIdRouteChildren = {
  ChatChatIdFeatureFeatureKeyRoute
};
const ChatChatIdRouteWithChildren = ChatChatIdRoute._addFileChildren(
  ChatChatIdRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  TabsRoute: TabsRouteWithChildren,
  AppRoute,
  SubscriptionsRoute,
  ChatChatIdRoute: ChatChatIdRouteWithChildren
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FEATURE_META as F,
  Route$7 as R,
  Route$6 as a,
  Route$3 as b,
  Route as c,
  router as r,
  useChatsStore as u
};
