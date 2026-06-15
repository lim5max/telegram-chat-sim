import { type Chat } from "./chats";

/* ------------------------------------------------------------------ */
/*  Chat analytics report — "Отчёт за 2 недели"                        */
/*                                                                     */
/*  A historical snapshot of the period. Intentionally decoupled from  */
/*  the current feature toggles: a feature can be off now but still     */
/*  have activity during the reporting window (e.g. voice transcripts). */
/*                                                                     */
/*  All values are deterministic — the app is SSR-rendered, so a        */
/*  Math.random() here would desync server vs client (hydration warn).  */
/* ------------------------------------------------------------------ */

export type ReportTopic = { title: string; count: number };

/** One day of member flow — joined vs left. */
export type DayFlow = { joined: number; left: number };

export type ToxicityLevel = "low" | "medium" | "high";

export type ChatReport = {
  periodLabel: string;
  periodDays: number;
  totalMessages: number;
  /** Engagement health — quick read at the top. */
  engagement: { activeShare: number; replyRate: number; avgResponseMin: number };
  /** Messages per day across the period (length === periodDays). */
  activity: number[];
  /** Member inflow / churn per day (length === periodDays). */
  memberFlow: DayFlow[];
  summary: {
    published: number;
    topDay: string;
    topDayCount: number;
    topParticipants: string[];
    topTopics: ReportTopic[];
  };
  antispam: {
    deleted: number;
    ads: number;
    flood: number;
    profanity: number;
    botsBlocked: number;
    restricted: number;
    peak: string;
  };
  voice: {
    transcribed: number;
    minutes: number;
    longestAuthor: string;
    longestDuration: string;
    topSender: string;
    topSenderCount: number;
  };
  podcast: { episodes: number; longest: string; avgDuration: string };
  knowledgeBase: {
    searches: number;
    uniqueUsers: number;
    topQueries: string[];
    avgResults: number;
  };
  anonymous: { sent: number };
  /** On-demand admin analysis: questions that never got an answer. */
  unanswered: {
    count: number;
    items: { q: string; author: string; waited: string }[];
  };
  /** On-demand: only computed/revealed when the user requests it. */
  toxicity: {
    score: number; // 0-100, lower = healthier
    level: ToxicityLevel;
    flagged: number;
    topOffenders: { name: string; count: number }[];
    trend: string;
    note: string;
  };
};

/* Canonical demo report #1 — the "clean, small" chat. */
const PRODUCT_CHATLOGIX_REPORT: ChatReport = {
  periodLabel: "29 мая — 12 июн",
  periodDays: 14,
  totalMessages: 624,
  engagement: { activeShare: 71, replyRate: 64, avgResponseMin: 11 },
  activity: [28, 34, 41, 100, 52, 38, 45, 60, 33, 40, 47, 30, 26, 50],
  memberFlow: [
    { joined: 1, left: 0 }, { joined: 1, left: 0 }, { joined: 0, left: 1 }, { joined: 1, left: 0 },
    { joined: 0, left: 1 }, { joined: 1, left: 0 }, { joined: 1, left: 0 }, { joined: 0, left: 1 },
    { joined: 1, left: 0 }, { joined: 0, left: 1 }, { joined: 1, left: 0 }, { joined: 0, left: 1 },
    { joined: 1, left: 0 }, { joined: 1, left: 0 },
  ],
  summary: {
    published: 14,
    topDay: "1 июн",
    topDayCount: 100,
    topParticipants: ["Максим", "ОК"],
    topTopics: [
      { title: "Идея ребрендинга ChatLogix в Logix", count: 30 },
      { title: "Анализ оттока пользователей и его причины", count: 20 },
      { title: "Обсуждение функционала и особенностей бота", count: 16 },
    ],
  },
  antispam: { deleted: 0, ads: 0, flood: 0, profanity: 0, botsBlocked: 0, restricted: 0, peak: "" },
  voice: {
    transcribed: 9,
    minutes: 8,
    longestAuthor: "ОК",
    longestDuration: "2:32",
    topSender: "ОК",
    topSenderCount: 9,
  },
  podcast: { episodes: 0, longest: "", avgDuration: "" },
  knowledgeBase: {
    searches: 2,
    uniqueUsers: 2,
    topQueries: ["что могу тебя спросить?", "какой у олега адресс?"],
    avgResults: 5,
  },
  anonymous: { sent: 0 },
  unanswered: {
    count: 2,
    items: [
      { q: "какой у олега адрес?", author: "ОК", waited: "3 дня" },
      { q: "что могу тебя спросить?", author: "Максим", waited: "1 день" },
    ],
  },
  toxicity: {
    score: 6,
    level: "low",
    flagged: 1,
    topOffenders: [],
    trend: "стабильно",
    note: "Чат здоровый — токсичности почти нет.",
  },
};

/* Canonical demo report #2 — the "everything on, rich" showcase chat. */
const DESIGN_TEAM_REPORT: ChatReport = {
  periodLabel: "29 апр — 12 мая",
  periodDays: 14,
  totalMessages: 1842,
  engagement: { activeShare: 68, replyRate: 74, avgResponseMin: 7 },
  activity: [98, 112, 87, 140, 121, 156, 231, 178, 134, 95, 110, 142, 128, 110],
  memberFlow: [
    { joined: 3, left: 0 }, { joined: 2, left: 0 }, { joined: 2, left: 0 }, { joined: 0, left: 2 },
    { joined: 4, left: 1 }, { joined: 1, left: 0 }, { joined: 2, left: 0 }, { joined: 5, left: 0 },
    { joined: 0, left: 3 }, { joined: 0, left: 1 }, { joined: 3, left: 0 }, { joined: 0, left: 2 },
    { joined: 1, left: 0 }, { joined: 2, left: 0 },
  ],
  summary: {
    published: 14,
    topDay: "5 мая",
    topDayCount: 231,
    topParticipants: ["Аня", "Максим", "Дима"],
    topTopics: [
      { title: "Брендбук v2", count: 87 },
      { title: "Найм миддл-дизайнера", count: 54 },
      { title: "Дедлайн по лендингу", count: 32 },
    ],
  },
  antispam: { deleted: 47, ads: 31, flood: 12, profanity: 4, botsBlocked: 6, restricted: 3, peak: "вторник, 14:00" },
  voice: {
    transcribed: 41,
    minutes: 112,
    longestAuthor: "Максим",
    longestDuration: "4:23",
    topSender: "Дима",
    topSenderCount: 12,
  },
  podcast: { episodes: 14, longest: "выпуск за 5 мая (3:48)", avgDuration: "3:12" },
  knowledgeBase: {
    searches: 23,
    uniqueUsers: 8,
    topQueries: ["брендбук", "график отпусков", "бюджет Q2"],
    avgResults: 4,
  },
  anonymous: { sent: 0 },
  unanswered: {
    count: 5,
    items: [
      { q: "Кто финалит брендбук к пятнице?", author: "Аня", waited: "2 дня" },
      { q: "Бюджет на Q2 уже утвердили?", author: "Дима", waited: "1 день" },
      { q: "Где лежат исходники лендинга?", author: "гость", waited: "5 ч" },
    ],
  },
  toxicity: {
    score: 24,
    level: "low",
    flagged: 14,
    topOffenders: [
      { name: "Дима", count: 5 },
      { name: "гость", count: 4 },
    ],
    trend: "−12% к прошлому периоду",
    note: "Пара горячих веток вокруг дедлайна, но в целом чат здоровый.",
  },
};

/* Authors per chat — the only signal not already on the Chat model. */
const CHAT_PARTICIPANTS: Record<string, string[]> = {
  "kurery-msk": ["Максим", "Аня", "Дмитрий"],
  "react-ru": ["Dan", "Polina", "Артём"],
  "startup-club": ["Артём", "Marina", "Илья"],
  "chatlogix-night": ["Tim"],
};

const KB_QUERY_BANK = [
  "как подключить тариф?",
  "что умеет бот?",
  "где посмотреть лимиты?",
  "как настроить саммари?",
  "можно ли отключить рекламу?",
];

const UNANSWERED_BANK = [
  "как подключить тариф?",
  "где посмотреть лимиты?",
  "кто отвечает за оплату?",
];

/* Fixed daily weights so activity/flow are deterministic (no Math.random). */
const DIST = [0.06, 0.07, 0.05, 0.09, 0.07, 0.08, 0.11, 0.09, 0.07, 0.06, 0.07, 0.06, 0.05, 0.07];

/* Per-day NET member change — never zero, so every chart column is filled. */
const FLOW_NET = [2, 1, -1, 3, 1, -2, 2, 3, -1, 1, 2, -1, 2, 1];

/* Derive a plausible report for any other chat from its existing fields. */
function buildReport(chat: Chat): ChatReport {
  const periodDays = 14;
  const totalMessages = Math.max(chat.used * 13, 48);
  const participants = CHAT_PARTICIPANTS[chat.id] ?? ["Аня", "Максим", "Дмитрий"];

  const activity = DIST.map((w) => Math.round(totalMessages * w));
  const flowScale = Math.max(1, Math.round(chat.newMembers / 12));
  const memberFlow: DayFlow[] = FLOW_NET.map((n) => ({
    joined: n > 0 ? n * flowScale : 0,
    left: n < 0 ? -n * flowScale : 0,
  }));

  const topicShare = [0.12, 0.08, 0.05];
  const topTopics: ReportTopic[] = (chat.topics.length ? chat.topics : ["Общие обсуждения"])
    .slice(0, 3)
    .map((title, i) => ({ title, count: Math.max(4, Math.round(totalMessages * topicShare[i])) }));

  const voices = chat.voices ?? 0;
  const deleted = Math.round((chat.antispam?.deleted24h ?? 0) * 9);
  const ads = Math.round(deleted * 0.66);
  const flood = Math.round(deleted * 0.25);
  const profanity = Math.max(0, deleted - ads - flood);
  const searches = Math.round((chat.knowledgeBase?.quotaUsed ?? 0) * 0.5);

  const toxScore = Math.min(80, profanity * 5 + flood);
  const toxLevel: ToxicityLevel = toxScore < 25 ? "low" : toxScore < 55 ? "medium" : "high";

  return {
    periodLabel: "29 мая — 12 июн",
    periodDays,
    totalMessages,
    engagement: {
      activeShare: Math.min(88, 42 + Math.round(chat.used / 8)),
      replyRate: Math.min(92, 48 + Math.round(chat.used / 12)),
      avgResponseMin: Math.max(2, 18 - Math.round(chat.used / 40)),
    },
    activity,
    memberFlow,
    summary: {
      published: (chat.summary?.active ?? false) ? periodDays : 0,
      topDay: "1 июн",
      topDayCount: Math.max(...activity),
      topParticipants: participants.slice(0, 3),
      topTopics,
    },
    antispam: {
      deleted,
      ads,
      flood,
      profanity,
      botsBlocked: Math.round(deleted * 0.12),
      restricted: deleted > 0 ? Math.max(1, Math.round(deleted / 9)) : 0,
      peak: deleted > 0 ? "вторник, 14:00" : "",
    },
    voice:
      voices > 0
        ? {
            transcribed: voices * 3,
            minutes: Math.max(1, Math.round(voices * 1.8)),
            longestAuthor: participants[0],
            longestDuration: "2:12",
            topSender: participants[0],
            topSenderCount: voices * 3,
          }
        : { transcribed: 0, minutes: 0, longestAuthor: "", longestDuration: "", topSender: "", topSenderCount: 0 },
    podcast: (chat.chatPodcast?.active ?? false)
      ? { episodes: periodDays, longest: "последний выпуск (3:30)", avgDuration: "3:05" }
      : { episodes: 0, longest: "", avgDuration: "" },
    knowledgeBase: {
      searches,
      uniqueUsers: searches > 0 ? Math.max(1, Math.round(searches * 0.6)) : 0,
      topQueries: searches > 0 ? KB_QUERY_BANK.slice(0, Math.min(3, searches)) : [],
      avgResults: searches > 0 ? 5 : 0,
    },
    anonymous: { sent: chat.anonymous?.sentToday ?? 0 },
    unanswered: (() => {
      const count = Math.min(6, Math.round(totalMessages / 220));
      return {
        count,
        items: UNANSWERED_BANK.slice(0, Math.min(3, count)).map((q, i) => ({
          q,
          author: participants[i % participants.length],
          waited: ["3 ч", "1 день", "2 дня"][i] ?? "1 день",
        })),
      };
    })(),
    toxicity: {
      score: toxScore,
      level: toxLevel,
      flagged: profanity + Math.round(flood / 2),
      topOffenders: profanity > 0 ? [{ name: participants[participants.length - 1], count: profanity }] : [],
      trend: "стабильно",
      note:
        toxLevel === "low"
          ? "Чат здоровый — токсичности почти нет."
          : "Есть всплески — стоит присмотреть за тоном общения.",
    },
  };
}

const REPORTS: Record<string, ChatReport> = {
  "product-chatlogix": PRODUCT_CHATLOGIX_REPORT,
  "design-team": DESIGN_TEAM_REPORT,
};

export function getChatReport(chat: Chat): ChatReport {
  return REPORTS[chat.id] ?? buildReport(chat);
}

export const TOXICITY_META: Record<ToxicityLevel, { label: string; color: string; bg: string }> = {
  low: { label: "Низкий", color: "oklch(0.85 0.15 155)", bg: "oklch(0.72 0.16 155 / 0.15)" },
  medium: { label: "Умеренный", color: "oklch(0.85 0.16 75)", bg: "oklch(0.75 0.17 75 / 0.15)" },
  high: { label: "Высокий", color: "oklch(0.82 0.18 25)", bg: "oklch(0.65 0.22 25 / 0.18)" },
};
