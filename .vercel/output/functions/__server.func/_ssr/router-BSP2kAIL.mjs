import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { I as redirect, J as notFound } from "../_libs/tanstack__router-core.mjs";
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
const appCss = "/assets/styles-CAqMsk47.css";
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
const $$splitComponentImporter$9 = () => import("./subscriptions-C5cuDO6M.mjs");
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
const $$splitComponentImporter$8 = () => import("./profile-CYi7FaW1.mjs");
const Route$9 = createFileRoute("/profile")({
  head: () => ({
    meta: [{
      title: "Профиль — ChatLogix"
    }, {
      name: "description",
      content: "Профиль, подписка и настройки ChatLogix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Route$8 = createFileRoute("/app")({
  beforeLoad: () => {
    throw redirect({ to: "/home" });
  }
});
const $$splitComponentImporter$7 = () => import("../_tabs-CVf_xSVu.mjs");
const Route$7 = createFileRoute("/_tabs")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-BHR5v6ND.mjs");
const searchSchema = objectType({
  anon: stringType().optional(),
  startRoutineFor: stringType().optional()
});
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "ChatLogixBot — Telegram"
    }, {
      name: "description",
      content: "AI-саммари ваших Telegram чатов"
    }]
  }),
  validateSearch: searchSchema,
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
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
    anonymous: { active: true, allowMedia: true, sentToday: 0 },
    askBot: { active: true },
    routine: { active: true }
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
    anonymous: { active: false, allowMedia: false, sentToday: 0 },
    askBot: { active: false },
    routine: { active: false }
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
    anonymous: { active: true, allowMedia: false, sentToday: 0 },
    askBot: { active: true },
    routine: { active: true }
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
    anonymous: { active: true, allowMedia: true, sentToday: 0 },
    askBot: { active: true },
    routine: { active: true }
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
    askBot: { active: false },
    routine: { active: false }
  }
];
const FEATURE_META = {
  summary: {
    icon: "📝",
    label: "Chat Summary",
    short: "Саммари",
    desc: "Ежедневная выжимка обсуждений чата — приходит в 09:00.",
    price: "Бесплатно",
    audience: "admin",
    monetization: "free"
  },
  voice: {
    icon: "🎤",
    label: "Расшифровка голосовых",
    short: "Расшифровка",
    desc: "Автоматический перевод голосовых сообщений в текст.",
    price: "от $16.99/мес",
    audience: "admin",
    monetization: "freemium"
  },
  podcast: {
    icon: "🎙",
    label: "Chat Podcast",
    short: "Подкаст",
    desc: "Аудио-версия саммари — слушайте обсуждения на ходу.",
    price: "$5.99/мес",
    audience: "admin",
    monetization: "paid"
  },
  superPodcast: {
    icon: "🎧",
    label: "Super Podcast",
    short: "Super Podcast",
    desc: "Ежедневный личный подкаст — голосовая выжимка из всех чатов.",
    price: "$5.99/мес",
    audience: "user",
    monetization: "freemium"
  },
  kb: {
    icon: "📚",
    label: "База знаний",
    short: "Поиск",
    desc: "Поиск по истории чата командой /faq — бот даст краткий ответ.",
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
    audience: "both",
    monetization: "free"
  },
  askBot: {
    icon: "💬",
    label: "Поиск в сети",
    short: "Поиск в сети",
    desc: "Упомяните @ChatLogixBot в чате — бот ответит и подскажет, где искать (в сети или в базе знаний чата). Авто-включается при первом mention, можно отключить.",
    price: "Бесплатно",
    audience: "admin",
    monetization: "free"
  },
  routine: {
    icon: "🔁",
    label: "Рутина чата",
    short: "Рутина",
    desc: "Запланированные посты в чат из внешних источников: RSS, X, Reddit, сайты, крипто-курсы. Админ собирает в ЛС бота через пошаговый wizard.",
    price: "1 рутина бесплатно",
    audience: "admin",
    monetization: "freemium"
  }
};
const SEED_ROUTINES = {
  "kurery-msk": [
    {
      id: "r-kurery-1",
      name: "Курсы валют утром",
      template: "custom",
      sources: [
        { url: "cbr:usd-eur-cny", kind: "crypto", label: "Курсы ЦБ РФ" }
      ],
      schedule: { kind: "daily", time: "09:00" },
      topN: 3,
      active: true,
      lastRunAt: "сегодня 09:00"
    }
  ],
  "react-ru": [
    {
      id: "r-react-1",
      name: "Dev-новости",
      template: "dev",
      sources: [
        { url: "https://news.ycombinator.com/", kind: "hn", label: "Hacker News" },
        { url: "https://github.com/trending", kind: "github", label: "GitHub Trending" }
      ],
      schedule: { kind: "daily", time: "10:00" },
      topN: 5,
      active: true,
      lastRunAt: "сегодня 10:00"
    }
  ],
  "startup-club": [
    {
      id: "r-startup-1",
      name: "Стартап-дайджест",
      template: "news",
      sources: [
        { url: "https://techcrunch.com/feed/", kind: "rss", label: "TechCrunch" }
      ],
      schedule: { kind: "weekly", time: "10:00", weekDay: 1 },
      topN: 5,
      active: true,
      lastRunAt: "пн 10:00"
    }
  ]
};
const SUMMARY_STYLES = [
  {
    id: "standard",
    emoji: "📝",
    label: "Стандартный",
    blurb: "Чисто, по делу, нейтрально",
    vibe: "Нейтральный редакторский тон. Подходит везде.",
    accent: "oklch(0.65 0.16 235)",
    samples: {
      chat: {
        header: "Саммари за 28 апреля · #dailysummary",
        bullets: [
          "Интервальное голодание 16/8: большинство сошлись, что окно 12:00–20:00 переносится легче всего. Первые 3 дня тяжело, потом голод уходит — главное пить воду и не срываться на кофе с молоком.",
          "Питание вокруг тренировки: за 1,5 ч до — медленные углеводы (овсянка, гречка), сразу после — белок и быстрые углеводы; жирное до зала лучше убрать, оно тормозит усвоение.",
          "Разобрали составы протеиновых батончиков: в трёх популярных нашли сахарные спирты и пальмовое масло. Скинули два чистых варианта — белок 20 г+ и без подсластителей.",
          "Меню на неделю: участники поделились рецептами на 1500–1800 ккал, плюс ссылки на калькулятор КБЖУ и готовую подборку рецептов."
        ],
        footer: "Активных участников: 38 · Сообщений: 112"
      },
      super: {
        header: "Утренний дайджест · 14 мая",
        bullets: [
          "ЖК «Кленовая роща»: лифт в 3 подъезде сломан, собрание ТСЖ завтра в 19:00.",
          "Рабочий чат: дедлайн по проекту перенесли с пятницы на понедельник.",
          "Родители 4-Б: экскурсия в музей в субботу, сбор в 9:00 у школы."
        ],
        footer: "3 чата · 67 обсуждений · 4 важных"
      }
    }
  },
  {
    id: "uncensored",
    emoji: "🔥",
    label: "Нецензурный",
    blurb: "Без фильтров, с матом и грубостью",
    vibe: "Жёстко, прямо, с матом. 18+. Включайте только если в чате к этому готовы.",
    accent: "oklch(0.65 0.22 25)",
    samples: {
      chat: {
        header: "Саммари за день · без купюр",
        bullets: [
          "Интервалка 16/8: кто ноет первые три дня — потерпите бля, дальше реально норм. Окно 12–20 заходит лучше всего, только кофе с молоком не жрите, это читерство ёпта.",
          "Жратва вокруг трени: до — медленные углеводы, после — белок и быстрые. Жирное перед залом не пихай, потом блюёшь на беговой, никому не приятно.",
          "Вскрыли составы батончиков — в трёх «полезных» сплошь сахарозаменители и пальма, маркетологи совсем охуели. Два нормальных всё же нашли, без этой химоты.",
          "Скинулись меню на неделю, рецепты на 1500–1800 ккал. Калькулятор КБЖУ в ссылках — хорош жрать на глаз, считай уже по-человечески."
        ]
      },
      super: {
        header: "Утренний дайджест · без купюр",
        bullets: [
          "ЖК: лифт нахуй сломан, завтра сходка про шлагбаум — не проёбывай, иначе соседи решат за тебя.",
          "Работа: дедлайн сдвинули на понедельник. Можно выдохнуть. Но недолго бля.",
          "Родительский: в субботу экскурсия, вставать в 7 утра — ну охуенно просто."
        ]
      }
    }
  },
  {
    id: "ded",
    emoji: "🪵",
    label: "Дед на завалинке",
    blurb: "Седой, ворчливый, с прибаутками",
    vibe: "Как будто пересказывает сосед-пенсионер. Поговорки, «раньше было лучше», тяжёлые вздохи.",
    accent: "oklch(0.68 0.12 70)",
    samples: {
      chat: {
        header: "Сводочка по чату, родимые",
        bullets: [
          "Молодёжь нынче до полудня не ест — «голодание интервальное», вишь ты. В наше-то время с зарёй в поле на пустой желудок шли, и ничего, живы. Сказывают, окно с обеда до восьми вечера сподручнее — ну дай-то бог.",
          "Спорили, чего жевать до беготни в зале своём и опосля. До — кашки, значит, после — творожку да курятинки. А я мешок картохи в погреб перетаскал — вот те и тренировка, и белок, и углевод, окаянные.",
          "Батончики ихние протеиновые перебирали — а там, прости господи, и пальма, и сахар поддельный. Сколь раз говорил: ешь сало с чёрным хлебушком, оно честнее всякой химии. Тьфу ты.",
          "Меню на неделю сговорились составить, рецептами делятся — дело-то хорошее, голубчики, хоть не всухомятку. Калькулятор какой-то приплели: без него, вишь, и поесть теперь не умеют, ироды."
        ],
        footer: "Ешьте по-людски да не голодайте сильно — не война, чай. Спите спокойно, голубчики."
      },
      super: {
        header: "С утречком, голубчик. Сводочка по чатикам.",
        bullets: [
          "Дома лифт ужо который день не работает, а УК всё обещаниями кормит — знамо дело, не впервой. Завтра сход — не ленись, приходи, иначе без тебя решат.",
          "На работе сроки опять сдвинули, давеча сказывали. Бывало хужее, родимый — в наше время и не такое переживали, ничего, и сейчас управишься.",
          "У школьников намедни про субботнюю экскурсию сговорились. Дело хорошее, пущай мир-то посмотрят — акромя школы да телефонов своих ничего не видят, ироды."
        ],
        footer: "Чайку попей с баранкой — да за работу, голубчик. Не сиди сиднем."
      }
    }
  },
  {
    id: "zoomer",
    emoji: "💅",
    label: "Постирония зумера",
    blurb: "lowercase, кринж, душно, база",
    vibe: "lowercase, «чел», «душно», «база», «кринж», «реально», «ну такое». Мало англицизмов, много русского сленга.",
    accent: "oklch(0.70 0.22 330)",
    samples: {
      chat: {
        header: "саммари за день, го гляну чё там",
        bullets: [
          "интервалка 16/8 — народ топит за окно 12–20. первые дни кринж и бесишься на ровном месте, потом норм, база на самом деле",
          "питание до/после трени разбирали: до — медленные угли (овсянка), после — белок + быстрые. жирное перед залом не вариант, чел, душно потом",
          "вскрыли составы протеиновых батончиков — половина «полезных» это сахарозаменители + пальма, ну такое. два чистых скинули, реально норм",
          "собрали меню на неделю, рецепты на 1500-1800 ккал, калькулятор кбжу в ссылках. готовить лень канеш, но мы стараемся"
        ],
        footer: "в целом продуктивный день, не голодаем — база"
      },
      super: {
        header: "утренний апдейт по чатам, го",
        bullets: [
          "жк: лифт всё, чел, завтра сходка про шлагбаум, не пропусти",
          "работа: дедлайн перенесли, кайф, можно выдохнуть",
          "родительский: в субботу экскурсия, вставать в 7 утра — душно, но норм"
        ],
        footer: "погнали этот день, реально"
      }
    }
  },
  {
    id: "custom",
    emoji: "✨",
    label: "Свой стиль",
    blurb: "PRO · свой промпт · 3 попытки/день",
    vibe: "Свой текстовый промпт: опишите тон, лексику, форму подачи — модель подстроится.",
    accent: "oklch(0.72 0.18 285)",
    samples: {
      chat: {
        header: "Ваш стиль · пример",
        bullets: [
          "Опишите тон одной строкой — например: «коротко и саркастично, как зануда-нутрициолог».",
          "Модель возьмёт тот же день из «Здорового питания» (голодание 16/8, питание вокруг трени, разбор батончиков, меню на неделю) и перепишет его под ваш стиль.",
          "Лимит — 3 кастомных генерации в сутки на тарифе PRO."
        ]
      },
      super: {
        header: "Ваш стиль · пример",
        bullets: [
          "Опишите тон одной строкой — модель применит ко всем чатам в дайджесте.",
          "Лимит — 3 кастомных дайджеста в сутки. Доступно на PRO."
        ]
      }
    }
  }
];
const DEFAULT_SUMMARY_STYLE = "standard";
const CUSTOM_STYLE_DAILY_LIMIT = 3;
const collectionKey = (chatId, feature) => `${chatId}:${feature}`;
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
  tabMode: "private",
  messagesByChat: Object.fromEntries(chats.map((c) => [c.id, seedMessages(c.id)])),
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
        case "askBot":
          return {
            ...c,
            askBot: { active: !(c.askBot?.active ?? false) }
          };
        case "routine":
          return {
            ...c,
            routine: { active: !(c.routine?.active ?? false) }
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
  setSummaryStyle: (chatId, style) => set((state) => ({
    summaryStyleByChat: { ...state.summaryStyleByChat, [chatId]: style }
  })),
  setSuperSummaryStyle: (style) => set({ superSummaryStyle: style }),
  addSummaryChannel: (channel) => set(
    (state) => state.summaryChannels.some((c) => c.id === channel.id) ? state : { summaryChannels: [...state.summaryChannels, channel] }
  ),
  removeSummaryChannel: (id) => set((state) => ({
    summaryChannels: state.summaryChannels.filter((c) => c.id !== id)
  })),
  incUsage: (chatId, by = 1) => set((state) => ({
    chats: state.chats.map((c) => c.id === chatId ? { ...c, used: c.used + by } : c)
  })),
  addRoutine: (chatId, routine) => set((state) => ({
    routinesByChat: {
      ...state.routinesByChat,
      [chatId]: [...state.routinesByChat[chatId] ?? [], routine]
    },
    chats: state.chats.map(
      (c) => c.id === chatId ? { ...c, routine: { active: true } } : c
    )
  })),
  updateRoutine: (chatId, routineId, patch) => set((state) => ({
    routinesByChat: {
      ...state.routinesByChat,
      [chatId]: (state.routinesByChat[chatId] ?? []).map(
        (r) => r.id === routineId ? { ...r, ...patch } : r
      )
    }
  })),
  deleteRoutine: (chatId, routineId) => set((state) => ({
    routinesByChat: {
      ...state.routinesByChat,
      [chatId]: (state.routinesByChat[chatId] ?? []).filter((r) => r.id !== routineId)
    }
  })),
  startCollection: ({ chatId, feature, planLabel, totalAmount, perPerson, deadline }) => {
    const key = collectionKey(chatId, feature);
    const targetCount = Math.max(1, Math.ceil(totalAmount / perPerson));
    const fmt = (n) => `${n.toLocaleString("ru-RU")} ₽`;
    const collection = {
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
      status: "active"
    };
    set((state) => ({
      collections: { ...state.collections, [key]: collection },
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: [
          ...state.messagesByChat[chatId] ?? [],
          {
            id: nextId(),
            from: "bot",
            time: now(),
            text: `💰 Сбор на ${planLabel}

Цель: ${fmt(totalAmount)} · ${deadline}
Взнос — ${fmt(perPerson)} с участника

Нажми «Внести», чтобы участвовать.`,
            buttons: [
              { label: `Внести ${fmt(perPerson)}`, action: `collect:${feature}` },
              { label: "Подробнее", action: `collect-info:${feature}` }
            ],
            collectionId: collection.id
          }
        ]
      }
    }));
    return collection;
  },
  contributeToCollection: (chatId, feature, name = "Вы") => set((state) => {
    const key = collectionKey(chatId, feature);
    const col = state.collections[key];
    if (!col || col.status !== "active") return state;
    const already = col.contributors.some((c) => c.name === name);
    if (already) return state;
    const contributors = [...col.contributors, { name, at: now() }];
    const reached = contributors.length >= col.targetCount;
    const updated = {
      ...col,
      contributors,
      status: reached ? "completed" : "active"
    };
    const extraMsg = reached ? {
      id: nextId(),
      from: "bot",
      time: now(),
      text: `✅ Сбор на ${col.planLabel} закрыт. Тариф подключён.`,
      collectionId: col.id
    } : null;
    const baseMsgs = state.messagesByChat[chatId] ?? [];
    return {
      collections: { ...state.collections, [key]: updated },
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: extraMsg ? [...baseMsgs, extraMsg] : baseMsgs
      }
    };
  }),
  cancelCollection: (chatId, feature) => set((state) => {
    const key = collectionKey(chatId, feature);
    const col = state.collections[key];
    if (!col) return state;
    return {
      collections: {
        ...state.collections,
        [key]: { ...col, status: "cancelled" }
      },
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: [
          ...state.messagesByChat[chatId] ?? [],
          {
            id: nextId(),
            from: "bot",
            time: now(),
            text: `❌ Сбор на ${col.planLabel} отменён администратором.`,
            collectionId: col.id
          }
        ]
      }
    };
  })
}));
const $$splitNotFoundComponentImporter$1 = () => import("./chat._chatId-CkaJZw_Z.mjs");
const $$splitComponentImporter$5 = () => import("./chat._chatId-BTTwiGtD.mjs");
const Route$5 = createFileRoute("/chat/$chatId")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  loader: ({
    params
  }) => {
    const exists = useChatsStore.getState().chats.some((c) => c.id === params.chatId);
    if (!exists) throw notFound();
    return null;
  }
});
const $$splitComponentImporter$4 = () => import("../_tabs.me-0onq-7SQ.mjs");
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
const $$splitComponentImporter$3 = () => import("../_tabs.marketplace-zBgsBUZT.mjs");
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
const $$splitComponentImporter$2 = () => import("../_tabs.home-DspZXCLX.mjs");
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
const $$splitComponentImporter$1 = () => import("../_tabs.chats-BRRKK1ml.mjs");
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
const $$splitComponentImporter = () => import("./chat._chatId.feature._featureKey-Co7PZtvl.mjs");
const ALL = ["summary", "voice", "podcast", "kb", "antispam", "anonymous", "routine"];
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
const ProfileRoute = Route$9.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$b
});
const AppRoute = Route$8.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$b
});
const TabsRoute = Route$7.update({
  id: "/_tabs",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const ChatChatIdRoute = Route$5.update({
  id: "/chat/$chatId",
  path: "/chat/$chatId",
  getParentRoute: () => Route$b
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
  TabsMeRoute
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
  ProfileRoute,
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
  CUSTOM_STYLE_DAILY_LIMIT as C,
  DEFAULT_SUMMARY_STYLE as D,
  FEATURE_META as F,
  Route$6 as R,
  SUMMARY_STYLES as S,
  Route$5 as a,
  Route$3 as b,
  Route as c,
  collectionKey as d,
  router as r,
  useChatsStore as u
};
