export type Chat = {
  id: string;
  name: string;
  emoji?: string;
  avatarColor: string;
  avatarUrl?: string;
  initial: string;
  used: number;
  limit: number;
  plan: "Nano" | "Standard" | "Full-on" | "Contributor";
  planUntil?: string;
  topics: string[];
  newMembers: number;
  activityDelta: string;
  cancelled?: boolean;
  hashtag?: string;
  voices?: number;
  voiceDuration?: string;
  members: number;
  isAdmin?: boolean;
  // roadmap features
  summary?: { active: boolean };
  voice?: { active: boolean; plan?: "Free" | "Pro" | "Ultra" };
  knowledgeBase?: { active: boolean; quotaUsed: number; quotaTotal: number };
  chatPodcast?: { active: boolean; voice: "Onyx" | "Shimmer"; status: string };
  antispam?: { active: boolean; deleted24h: number; paid?: boolean };
  anonymous?: { active: boolean; allowMedia: boolean; sentToday: number };
};

export const chats: Chat[] = [
  {
    id: "kurery-msk",
    name: "Курьеры Москва",
    emoji: "🔥",
    avatarColor: "linear-gradient(135deg, oklch(0.70 0.20 35), oklch(0.60 0.22 15))",
    avatarUrl: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=80&h=80&fit=crop&crop=faces",
    initial: "К",
    used: 342,
    limit: 1000,
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
    anonymous: { active: true, allowMedia: true, sentToday: 0 },
  },
  {
    id: "product-chatlogix",
    name: "Product ChatLogix",
    avatarColor: "linear-gradient(135deg, oklch(0.60 0.16 225), oklch(0.50 0.16 240))",
    avatarUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop&crop=center",
    initial: "P",
    used: 28,
    limit: 1000,
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
    anonymous: { active: false, allowMedia: false, sentToday: 0 },
  },
  {
    id: "react-ru",
    name: "React.ru",
    emoji: "⚛️",
    avatarColor: "linear-gradient(135deg, oklch(0.62 0.18 220), oklch(0.55 0.20 200))",
    avatarUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=80&h=80&fit=crop&crop=center",
    initial: "R",
    used: 612,
    limit: 1000,
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
    anonymous: { active: true, allowMedia: false, sentToday: 0 },
  },
  {
    id: "startup-club",
    name: "Startup Club",
    emoji: "🚀",
    avatarColor: "linear-gradient(135deg, oklch(0.68 0.20 145), oklch(0.55 0.22 175))",
    avatarUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop&crop=center",
    initial: "S",
    used: 188,
    limit: 1000,
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
    anonymous: { active: true, allowMedia: true, sentToday: 0 },
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
    anonymous: { active: false, allowMedia: false, sentToday: 0 },
  },
];

export const tariffs = [
  { name: "Nano", price: "Бесплатно", desc: "До 200 сообщений/день, саммари и антиспам" },
  { name: "Full-on", price: "$4.99/мес", desc: "До 1 000 сообщений/день, все фичи" },
  { name: "Contributor", price: "$99.9/мес", desc: "Безлимит сообщений, приоритетная поддержка" },
];

export const voicePlans = [
  { id: "free", name: "Free Voice", price: "Бесплатно", minutes: "37.5 мин/мес", active: true },
  { id: "pro", name: "Pro Voice", price: "$16.99/мес", minutes: "375 мин/мес", active: false },
  { id: "extra", name: "Extra Voice", price: "$53.99/мес", minutes: "1500 мин/мес", active: false },
];

export const superPodcast = {
  active: false,
  freeMinutesTotal: 16,
  freeMinutesLeft: 16,
  price: "$5.99/мес",
};

export type FeatureKey = "summary" | "voice" | "podcast" | "kb" | "antispam" | "anonymous";

export type Monetization = "free" | "freemium" | "paid";

export const FEATURE_META: Record<
  FeatureKey,
  {
    icon: string;
    label: string;
    short: string;
    desc: string;
    price: string;
    audience: "user" | "admin" | "both";
    monetization: Monetization;
  }
> = {
  summary: {
    icon: "📝",
    label: "Саммари",
    short: "Саммари",
    desc: "Ежедневная выжимка обсуждений чата — приходит в 09:00.",
    price: "Бесплатно",
    audience: "both",
    monetization: "free",
  },
  voice: {
    icon: "🎤",
    label: "Транскрипция голосовых",
    short: "Транскрипция",
    desc: "Автоматический перевод голосовых сообщений в текст.",
    price: "от $16.99/мес",
    audience: "both",
    monetization: "freemium",
  },
  podcast: {
    icon: "🎙",
    label: "Подкаст чата",
    short: "Подкаст",
    desc: "Аудио-версия саммари — слушайте обсуждения на ходу.",
    price: "$5.99/мес",
    audience: "both",
    monetization: "paid",
  },
  kb: {
    icon: "📚",
    label: "База знаний",
    short: "Поиск",
    desc: "Поиск по истории чата командой /search — бот даст краткий ответ.",
    price: "100 запросов бесплатно",
    audience: "admin",
    monetization: "freemium",
  },
  antispam: {
    icon: "🛡",
    label: "Антиспам",
    short: "Антиспам",
    desc: "Удаляет спам, флуд и мат. Уведомляет админа в ЛС.",
    price: "Бесплатно",
    audience: "admin",
    monetization: "free",
  },
  anonymous: {
    icon: "🎭",
    label: "Анонимные сообщения",
    short: "Анонимные",
    desc: "Участники пишут через бота — автор скрыт от всех.",
    price: "Бесплатно",
    audience: "user",
    monetization: "free",
  },
};
