import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useChatsStore, R as Route$6, C as CUSTOM_STYLE_DAILY_LIMIT } from "./router-BuYLw6H-.mjs";
import { R as Root2, T as Trigger, P as Portal, C as Content2 } from "../_libs/radix-ui__react-popover.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./index.mjs";
import { p as parseChannelLink } from "./channelLink-CssYHcFh.mjs";
import { b as buildStyledSummaryButtons, a as buildStyledSummaryText, c as customStyleRemaining, d as consumeCustomStyleAttempt } from "./summaryStyleToast-BBHSmqA3.mjs";
import "../_libs/seroval.mjs";
import { A as AppWindow, S as Sparkles, c as ChevronLeft, B as Bot, d as Search, P as Phone, E as EllipsisVertical, e as Paperclip, f as Smile, g as Send, M as Mic, U as Users, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2.displayName;
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchRoutineDigest = createServerFn({
  method: "POST"
}).inputValidator((userPrompt) => {
  if (typeof userPrompt !== "string" || !userPrompt.trim()) {
    throw new Error("Пустой запрос рутины");
  }
  return userPrompt.trim().slice(0, 500);
}).handler(createSsrRpc("61e62139df78d204e6c89473e839e6da2f40cd3a4b0ed08efcc0454d575e944f"));
const now = () => {
  const d = /* @__PURE__ */ new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};
let idSeq = 1e3;
const nextId = () => ++idSeq;
const initialPrivate = [{
  id: 1,
  from: "bot",
  time: "09:42",
  text: "👋 Привет! Я — ChatLogix.\n\nПомогаю управлять потоком информации и улучшаю взаимодействие между участниками чатов. Работаю как внутри добавленных чатов, так и лично для вас.\n\nС чего начнём?",
  buttons: [{
    label: "📊 Расскажи о пользе для чата",
    action: "onboard-admin"
  }, {
    label: "✨ Расскажи о пользе для меня",
    action: "onboard-user"
  }]
}];
const ADMIN_PREVIEW_TOUR = [{
  key: "voice",
  tell: "🎤 Расскажи про расшифровку голосовых",
  show: "onboard-admin-preview-voice"
}, {
  key: "antispam",
  tell: "🛡 Расскажи про антиспам",
  show: "onboard-admin-preview-antispam"
}, {
  key: "podcast",
  tell: "🎙 Расскажи про подкаст чата",
  show: "onboard-admin-preview-podcast"
}, {
  key: "kb",
  tell: "📚 Расскажи про базу знаний",
  show: "onboard-admin-preview-kb"
}, {
  key: "askBot",
  tell: "💬 Расскажи про поиск в сети",
  show: "onboard-admin-preview-askBot"
}, {
  key: "routine",
  tell: "🔁 Расскажи про рутины чата",
  show: "onboard-admin-preview-routine"
}, {
  key: "anon",
  tell: "🎭 Расскажи про анонимные сообщения",
  show: "onboard-admin-preview-anon"
}];
const USER_TOUR = [{
  key: "superPodcast",
  tell: "🎧 Расскажи про Super Podcast",
  show: "onboard-user-show-podcast"
}, {
  key: "myRoutine",
  tell: "🔁 Расскажи про Мою Рутину",
  show: "onboard-user-show-routine"
}, {
  key: "anon",
  tell: "🕵️ Расскажи про анонимные сообщения",
  show: "onboard-user-show-anon"
}];
const GROUP_TOUR = [{
  key: "antispam",
  tell: "🛡 Расскажи про антиспам",
  show: "onboard-admin-show-antispam"
}, {
  key: "voice",
  tell: "🎤 Расскажи про расшифровку",
  show: "onboard-admin-show-voice"
}, {
  key: "podcast",
  tell: "🎙 Расскажи про подкаст чата",
  show: "onboard-admin-show-podcast"
}, {
  key: "kb",
  tell: "📚 Расскажи про базу знаний",
  show: "onboard-admin-show-kb"
}, {
  key: "askBot",
  tell: "💬 Расскажи про поиск в сети",
  show: "onboard-admin-show-askBot"
}, {
  key: "routine",
  tell: "🔁 Расскажи про рутины чата",
  show: "onboard-admin-show-routine"
}, {
  key: "anon",
  tell: "🎭 Расскажи про анонимные сообщения",
  show: "onboard-admin-show-anon"
}];
const WHATS_NEW_POSTS = [{
  id: "anon",
  action: "broadcast-anon",
  emoji: "🎭",
  title: "Анонимные сообщения — подшути над коллегой",
  date: "сегодня"
}, {
  id: "kb-drop",
  action: "broadcast-kb-drop",
  emoji: "📚",
  title: "База знаний — чат теперь сам отвечает",
  date: "вчера"
}, {
  id: "kb-pain",
  action: "broadcast-kb-pain",
  emoji: "😩",
  title: "Новичок задаёт вопрос в 51-й раз",
  date: "2 дня назад"
}, {
  id: "kb-howto",
  action: "broadcast-kb-howto",
  emoji: "📚",
  title: "Как пользоваться Базой знаний",
  date: "3 дня назад"
}, {
  id: "kb-courses",
  action: "broadcast-kb-courses",
  emoji: "🎓",
  title: "База знаний для авторов курсов",
  date: "4 дня назад"
}, {
  id: "kb-case",
  action: "broadcast-kb-case",
  emoji: "💬",
  title: "Кейс: бот нашёл пост от 14 апреля",
  date: "5 дней назад",
  needsImage: true
}, {
  id: "antispam-drop",
  action: "broadcast-antispam-drop",
  emoji: "🛡",
  title: "Антиспам — спам сам вылетает из чата",
  date: "неделю назад"
}, {
  id: "antispam-pain",
  action: "broadcast-antispam-pain",
  emoji: "🤖",
  title: "Бот залетел в 3 ночи — что делать",
  date: "неделю назад"
}, {
  id: "antispam-stats",
  action: "broadcast-antispam-stats",
  emoji: "🛡",
  title: "Антиспам удалил 12 сообщений за вчера",
  date: "8 дней назад",
  needsImage: true
}, {
  id: "antispam-pro",
  action: "broadcast-antispam-pro",
  emoji: "💎",
  title: "Antispam Free vs Pro — что выбрать",
  date: "9 дней назад"
}, {
  id: "antispam-meme",
  action: "broadcast-antispam-meme",
  emoji: "🤡",
  title: "«Заработок без вложений» 🗑",
  date: "10 дней назад"
}, {
  id: "update",
  action: "broadcast-update",
  emoji: "🚀",
  title: "Logix: самое большое обновление",
  date: "на прошлой неделе"
}];
function TelegramScreen() {
  const mode = useChatsStore((s) => s.tabMode);
  const setMode = useChatsStore((s) => s.setTabMode);
  const setPendingBroadcast = useChatsStore((s) => s.setPendingBroadcast);
  const [whatsNewOpen, setWhatsNewOpen] = reactExports.useState(false);
  const triggerBroadcast = (action) => {
    setMode("private");
    setPendingBroadcast(action);
    setWhatsNewOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 backdrop-blur-xl bg-background/70 border-b border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-3 py-2 flex gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("private"), className: `flex-1 text-[12px] font-medium py-2 rounded-full transition ${mode === "private" ? "bg-white/15 text-white" : "bg-white/5 text-muted-foreground"}`, children: "💬 ЛС с ботом" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("group"), className: `flex-1 text-[12px] font-medium py-2 rounded-full transition ${mode === "group" ? "bg-white/15 text-white" : "bg-white/5 text-muted-foreground"}`, children: "🔥 Группа" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "text-[12px] font-medium py-2 px-3 rounded-full bg-gradient-to-r from-[oklch(0.55_0.16_225)] to-[oklch(0.58_0.14_245)] text-white flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppWindow, { size: 13 }),
        " Mini App"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: whatsNewOpen, onOpenChange: setWhatsNewOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[12px] font-medium py-2 px-2.5 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition flex items-center gap-1", "aria-label": "Что нового", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13 }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "end", sideOffset: 8, className: "w-80 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-1.5 text-[11px] uppercase tracking-wide text-muted-foreground sticky top-0 bg-popover", children: "Что нового" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col max-h-[60vh] overflow-y-auto", children: WHATS_NEW_POSTS.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => triggerBroadcast(post.action), className: "text-left px-2 py-2 rounded-md hover:bg-white/5 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] font-medium flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: post.title }),
              post.needsImage && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20 whitespace-nowrap", title: "Нужна картинка/скрин при публикации", children: "📷" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground pl-6", children: post.date })
          ] }, post.id)) })
        ] })
      ] })
    ] }) }),
    mode === "private" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateChat, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(GroupChat, {})
  ] });
}
function PrivateChat() {
  const navigate = useNavigate();
  const search = Route$6.useSearch();
  const sendAnonymous = useChatsStore((s) => s.sendAnonymous);
  const chats = useChatsStore((s) => s.chats);
  const pendingBroadcast = useChatsStore((s) => s.pendingBroadcast);
  const setPendingBroadcast = useChatsStore((s) => s.setPendingBroadcast);
  const totalAnon = useChatsStore((s) => s.totalAnonSentToday);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const setSuperSummary = useChatsStore((s) => s.setSuperSummary);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const setSuperPodcast = useChatsStore((s) => s.setSuperPodcast);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const summaryChannels = useChatsStore((s) => s.summaryChannels);
  const addSummaryChannel = useChatsStore((s) => s.addSummaryChannel);
  const [msgs, setMsgs] = reactExports.useState(initialPrivate);
  const [typing, setTyping] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [anonStep, setAnonStep] = reactExports.useState("idle");
  const [skillStep, setSkillStep] = reactExports.useState("idle");
  const [channelStep, setChannelStep] = reactExports.useState("idle");
  const [anonChatId, setAnonChatId] = reactExports.useState(null);
  const [pendingText, setPendingText] = reactExports.useState("");
  const [ignoringMe, setIgnoringMe] = reactExports.useState(false);
  const [showChatPicker, setShowChatPicker] = reactExports.useState(false);
  const [chatPickerMode, setChatPickerMode] = reactExports.useState("addbot");
  const [onboardChatId, setOnboardChatId] = reactExports.useState(null);
  const [customPromptEditChatId, setCustomPromptEditChatId] = reactExports.useState(null);
  const [routineStep, setRoutineStep] = reactExports.useState("idle");
  const [routineDraft, setRoutineDraft] = reactExports.useState({});
  const scrollRef = reactExports.useRef(null);
  const seenTourStops = reactExports.useRef({});
  const resetTour = (tourId) => {
    seenTourStops.current[tourId] = /* @__PURE__ */ new Set();
  };
  const tellButtons = (tour, tourId, currentKey, actionSuffix = "") => {
    const seen = seenTourStops.current[tourId] ??= /* @__PURE__ */ new Set();
    if (currentKey) seen.add(currentKey);
    return tour.filter((s) => !seen.has(s.key)).slice(0, 2).map((s) => ({
      label: s.tell,
      action: s.show + actionSuffix
    }));
  };
  const toggleFeature = useChatsStore((s) => s.toggleFeature);
  const pushGroupMessage = useChatsStore((s) => s.pushMessage);
  const setActiveChat = useChatsStore((s) => s.setActiveChat);
  const setTabMode = useChatsStore((s) => s.setTabMode);
  const addRoutine = useChatsStore((s) => s.addRoutine);
  const routinesByChat = useChatsStore((s) => s.routinesByChat);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [msgs, typing]);
  reactExports.useEffect(() => {
    if (search.anon) {
      const target = chats.find((c) => c.id === search.anon && c.anonymous?.active);
      if (target) {
        setAnonChatId(target.id);
        setAnonStep("compose");
        pushBot({
          text: `📣 Чат «${target.name}»
Напиши анонимное сообщение. Никто не узнает автора 🤫`
        });
      }
      navigate({
        to: "/",
        replace: true
      });
    }
    if (search.startRoutineFor) {
      const target = chats.find((c) => c.id === search.startRoutineFor);
      if (target) {
        startRoutineWizard(target.id);
      }
      navigate({
        to: "/",
        replace: true
      });
    }
  }, []);
  reactExports.useEffect(() => {
    if (!pendingBroadcast) return;
    const action = pendingBroadcast;
    setPendingBroadcast(null);
    handleAction(action);
  }, [pendingBroadcast]);
  const everyLabel = (days, time, tz) => {
    const base = days === 1 ? "раз в день" : days === 7 ? "раз в неделю" : `раз в ${days} дн.`;
    if (!time) return base;
    return `${base} в ${time}${tz ? ` ${tz}` : ""}`;
  };
  const previewRoutine = async (promptOverride) => {
    const prompt = promptOverride ?? routineDraft.prompt;
    if (!prompt) return;
    setRoutineStep("idle");
    pushBot({
      text: "🔎 Собираю данные на текущую дату и время…"
    });
    let digest;
    try {
      const res = await fetchRoutineDigest({
        data: prompt
      });
      digest = res.text;
    } catch (e) {
      pushBot({
        text: `⚠️ Не удалось получить данные: ${e instanceof Error ? e.message : "ошибка"}.

Попробуй ещё раз позже.`
      });
      return;
    }
    setRoutineDraft((d) => ({
      ...d,
      digest
    }));
    const left = 3 - (routineDraft.edits ?? 0);
    const name = prompt.slice(0, 40);
    const isPersonal = routineDraft.chatId === "__me__";
    pushBot({
      text: `👀 Сейчас покажу, как это будет выглядеть ${isPersonal ? "в ЛС" : "в чате"}:

━━━━━━━━━
📰 ${name}

${digest}
━━━━━━━━━

Сохранить рутину?${left > 0 ? `

✏️ Правок осталось: ${left}` : ""}`,
      buttons: [{
        label: "💾 Сохранить",
        action: "routine-save"
      }, ...left > 0 ? [{
        label: "✏️ Изменить запрос",
        action: "routine-edit-prompt"
      }] : [], {
        label: "🗑 Удалить",
        action: "routine-discard"
      }]
    });
  };
  const saveRoutine = (chatId) => {
    const isPersonal = chatId === "__me__";
    const target = isPersonal ? null : chats.find((c) => c.id === chatId);
    const {
      prompt,
      digest,
      intervalDays = 1,
      time,
      tz
    } = routineDraft;
    if (!isPersonal && !target || !prompt || !digest) return;
    const existing = routinesByChat[chatId] ?? [];
    if (existing.length >= 2) {
      pushBot({
        text: `⚠️ Лимит — 2 рутины ${isPersonal ? "в личке" : `на чат «${target.name}»`}.

Удали одну, чтобы создать новую.`,
        buttons: [{
          label: "⚙️ Открыть настройки",
          action: isPersonal ? "open-app" : `routine-settings:${chatId}`
        }]
      });
      setRoutineDraft({});
      return;
    }
    const name = prompt.slice(0, 40);
    const label = everyLabel(intervalDays, time, tz);
    const routine = {
      id: `r-${Date.now()}`,
      name,
      template: "custom",
      sources: [],
      schedule: {
        kind: "daily",
        time: time ?? "09:00"
      },
      topN: 5,
      active: true,
      lastRunAt: "только что",
      prompt,
      intervalDays
    };
    addRoutine(chatId, routine);
    if (isPersonal) {
      pushBot({
        text: `✅ Моя Рутина создана!

Будет приходить ${label} прямо сюда, в ЛС. Данные собираются в сети на момент каждого выпуска.`,
        buttons: [{
          label: "📤 Прислать выпуск сейчас",
          action: `routine-send:__me__`
        }, {
          label: "⚙️ Настроить мои рутины",
          action: "open-app"
        }]
      });
    } else {
      pushBot({
        text: `✅ Рутина создана для «${target.name}»!

Будет выходить ${label}, данные собираются в сети на момент каждого выпуска.`,
        buttons: [{
          label: "📤 Отправить в чат сейчас",
          action: `routine-send:${chatId}`
        }, {
          label: "⚙️ Открыть настройки",
          action: `routine-settings:${chatId}`
        }]
      });
    }
  };
  const sendRoutineToChat = (chatId) => {
    const isPersonal = chatId === "__me__";
    const target = isPersonal ? null : chats.find((c) => c.id === chatId);
    const {
      prompt,
      digest,
      intervalDays = 1,
      time,
      tz
    } = routineDraft;
    if (!isPersonal && !target || !prompt || !digest) return;
    const name = prompt.slice(0, 40);
    const label = everyLabel(intervalDays, time, tz);
    const post = `📰 ${name}

${digest}

⚙️ Моя Рутина · ${label} · /routines`;
    if (isPersonal) {
      setRoutineDraft({});
      pushBot({
        text: post
      });
      return;
    }
    pushGroupMessage(chatId, {
      from: "bot",
      text: `📰 ${name}

${digest}

⚙️ Рутина · ${label} · /routines`
    });
    setRoutineDraft({});
    pushBot({
      text: `📤 Опубликовано в «${target.name}»!`,
      buttons: [{
        label: "👀 Посмотреть пост в чате",
        action: `view-group-welcome:${chatId}`
      }]
    });
  };
  const beginRoutinePrompt = (chatId) => {
    const isPersonal = chatId === "__me__";
    setRoutineDraft({
      chatId
    });
    setRoutineStep("prompt");
    pushBot({
      text: isPersonal ? `🔁 Моя Рутина

Опиши своими словами, что присылать тебе в ЛС. Бот находит это в сети и регулярно публикует со ссылками на источники.

Например:
• «свежие новости про ИИ и LLM»
• «главные события крипторынка: BTC, ETH»
• «интересные события в Москве»
• «новые статьи на тему психологии»` : `🔁 Новая рутина

Опиши своими словами, что присылать в чат. Бот находит это в сети и регулярно публикует в чат со ссылками на источники.

Например:
• «свежие новости про ИИ и LLM»
• «главные события крипторынка: BTC, ETH»
• «интересные события в Москве»
• «новые статьи на тему психологии»`
    });
  };
  const startRoutineWizard = (_chatId) => {
    setChatPickerMode("routine-pick");
    setShowChatPicker(true);
  };
  const beginChannelPrompt = () => {
    setChannelStep("await-link");
    const hasChannels = summaryChannels.length > 0;
    pushBot({
      text: hasChannels ? `📡 Каналы в Super-Summary (${summaryChannels.length})

${summaryChannels.map((c) => `• ${c.handle}`).join("\n")}

Пришли ссылку на ещё один открытый канал — например https://t.me/durov или @durov. Каждое утро буду выносить из него главное в твою сводку.` : `📡 Каналы в Super-Summary

Кроме чатов, можно добавить открытые Telegram-каналы. Прочитаю их за тебя и вынесу главное в ту же сводку.

Пришли ссылку на открытый канал — например https://t.me/durov или @durov.

🔒 Только открытые каналы. Закрытые по инвайту добавить нельзя.`
    });
  };
  const channelsSummaryBlock = () => {
    if (summaryChannels.length === 0) return "";
    const lines = summaryChannels.map((c) => {
      const n = Math.floor(Math.random() * 8 + 2);
      return `📡 **${c.title}** (${c.handle})
— ${n} новых постов, вынес главное в одну строку`;
    }).join("\n");
    return `

📡 **Твои каналы**
${lines}`;
  };
  const pushBot = (m) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((prev) => [...prev, {
        id: nextId(),
        from: "bot",
        time: now(),
        ...m
      }]);
    }, 500);
  };
  const pushUser = (text) => setMsgs((prev) => [...prev, {
    id: nextId(),
    from: "user",
    time: now(),
    text
  }]);
  const handleChatPicked = (chatId) => {
    setShowChatPicker(false);
    if (chatPickerMode === "routine-pick") {
      setChatPickerMode("addbot");
      beginRoutinePrompt(chatId);
      return;
    }
    if (chatPickerMode === "routine") {
      setChatPickerMode("addbot");
      saveRoutine(chatId);
      return;
    }
    setOnboardChatId(chatId);
    const target = chats.find((c) => c.id === chatId);
    if (!target) return;
    const topicEmojis = ["💬", "💡", "📊", "🗂", "📍"];
    const topicCounts = target.topics.map(() => Math.floor(Math.random() * 40 + 8));
    topicCounts.sort((a, b) => b - a);
    const topicLines = target.topics.map((t, i) => `${topicEmojis[i % topicEmojis.length]} ${t} (**${topicCounts[i]} сообщений**)`).join("\n");
    const freeLimit = 200;
    const processed = Math.min(target.used, freeLimit);
    const limitNote = target.used > freeLimit ? `Обработано **${processed} из ${target.used}** сообщений (бесплатный лимит — ${freeLimit}/день). Увеличить можно в настройках.` : `Саммари обрабатывает бесплатно до **${freeLimit} сообщений/день**.`;
    pushGroupMessage(target.id, {
      from: "bot",
      text: `В любом активном чате одна и та же история: однотипные вопросы, флуд, тяжело читать все сообщения если пропустил пару дней в чате, потухающая активность через время.

Меня зовут **ChatLogix**, я AI-ассистент этого чата. У меня есть навыки для чата чтобы:

🎯 Держать участников чата в курсе происходящего сводками и подкастом
🔎 Отвечать на вопросы исходя из истории чата
🛡 Чистить чат от флуда, спама и наплыва ботов
🎙️ Расшифровывать голосовые сообщения
🎉 Поддерживать активность чата за счёт развлекательных навыков

Если нужного навыка нет — расскажите свою идею в ЛС, мы посмотрим и попробуем сделать.

А ещё у меня есть персональные навыки, которые работают в ЛС бота. И помогают настроить поток информации под себя.

[✨ Узнать про личную пользу в боте](open-bot-personal)`
    });
    pushBot({
      text: `📨 Я отправил приветствие в «**${target.name}**» — посмотреть можно во вкладке «🔥 Группа» сверху.`,
      buttons: [{
        label: "👀 Открыть чат и посмотреть",
        action: `view-group-welcome:${target.id}`
      }]
    });
    pushBot({
      text: `⚠️ Я не вижу историю сообщений в «**${target.name}**»

Для корректной работы бота зайдите в настройки чата → «История сообщений» → включите хотя бы один раз. После этого можете выключить обратно, если хотите.`
    });
    setTimeout(() => {
      resetTour(`group:${chatId}`);
      pushBot({
        text: `Готово 👌 ChatLogix добавлен в «**${target.name}**»!

🗓 Что обсуждалось вчера
Всего было написано **${target.used} сообщений**

${topicLines}

${limitNote} Завтра тоже автоматически пришлю такое в чат.

Настроить эмодзи, время и периодичность отправки можно в настройках.`,
        buttons: [{
          label: "⚙️ Настроить саммари",
          action: "onboard-admin-settings"
        }, ...tellButtons(GROUP_TOUR, `group:${chatId}`, null, `:${chatId}`)]
      });
    }, 800);
  };
  const handleAction = (action, label) => {
    if (label) pushUser(label);
    switch (action) {
      case "open-app":
        setTimeout(() => navigate({
          to: "/home"
        }), 200);
        break;
      case "broadcast-update":
        pushBot({
          text: "🚀 **Logix: самое большое обновление**\n\nЗа последние месяцы сильно прокачали бота. Теперь Logix помогает не только участникам быть в курсе происходящего, но и админам — организовывать накопленную информацию, справляться со спамом и растить вовлечённость. А каждому пользователю Telegram — управлять потоком из всех чатов в одном месте, лично для себя.\n\n**Новые навыки чата:**\n\n🎙 **Chat Podcast** — расширенное саммари в виде аудио-подкаста\n🎤 **Расшифровка голосовых** — аудио-сообщения превращаются в текст и попадают в саммари\n📚 **База знаний** — задайте вопрос в чате и AI-агент ответит на основе истории сообщений\n🛡 **Антиспам** — полноценная защита от спама, ботов, рекламы и мата\n🎭 **Анонимные сообщения** — участники могут отправлять анонимки прямо в чат\n\n**Персональные навыки:**\n\n✨ **Super-Summary** — одна сводка из всех твоих чатов в ЛС\n🎧 **Super Podcast** — личный аудио-дайджест по супер-саммари\n🎭 **Анонимные сообщения** — отправляй анонимки в любой подключённый чат прямо из ЛС бота\n\nМы также сделали крутой Mini App, в котором вы можете управлять своими навыками. Открывай и пробуй 👇",
          buttons: [{
            label: "➕ Добавить в чат",
            action: "addbot"
          }, {
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-anon":
        pushBot({
          text: "🎭 Хочется подшутить над коллегой в общем чате, без палева? Теперь можно с новым навыком.\n\n1. Зайдите в ChatLogix\n2. Выберите раздел «Logix для тебя»\n3. Нажмите на навык «Анонимные сообщения»\n4. Отправьте в нужный чат и поднимите настроение всем кто в чате\n\nПишите в комментариях ваши идеи для приколов 😈",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-kb-drop":
        pushBot({
          text: "📚 В чат снова пришёл человек с вопросом «где было про оплату?» — теперь можно не искать старые сообщения вручную.\n\nПишешь:\n\n/faq оплата\n\nБот находит нужный ответ в истории и кидает ссылку.\n\nЧтобы включить:\n1. Открой ChatLogix\n2. Раздел «Logix для чата»\n3. Навык «База знаний»\n\nЗакрепы можно расчищать 📌",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-kb-pain":
        pushBot({
          text: "😩 Чат на 400 человек.\n\nНовый участник снова спрашивает:\n\n— «а где была инструкция?»\n\nКто-то ищет старый пост.\nКто-то кидает скрин.\nАдмин делает вид, что не видел сообщение.\n\nС «Базой знаний» человек просто пишет:\n\n/faq инструкция\n\nИ бот сам находит нужное сообщение.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-kb-howto":
        pushBot({
          text: "📚 Как разгрузить себя в чате курса или платного комьюнити.\n\nКаждый день три-четыре одинаковых вопроса: где запись, когда дедлайн, как оплатить.\n\nЗаводишь «Базу знаний» один раз — дальше ученики пишут прямо в чат:\n\n/faq запись\n/faq дедлайн\n/faq оплата\n\nБот сам находит ответ в истории и кидает ссылку.\n\n100 запросов в месяц бесплатно — большинству чатов хватает.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-kb-courses":
        pushBot({
          text: "🎓 Авторам курсов посвящается.\n\nЧат на 700 учеников.\n\nКаждый день одни и те же вопросы:\n\n— где дедлайн\n— как оплатить\n— где запись урока\n\n«База знаний» забирает это на себя.\n\nУченик пишет:\n\n/faq дедлайн\n\nИ бот кидает нужное сообщение со ссылкой.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-kb-case":
        pushBot({
          text: "📸 Подписчик скинул, как «База знаний» работает у него в чате на 600 человек.\n\nКто-то пишет:\n\n«а где было про возврат денег?»\n\nОтвечает уже бот 👇\n\n[скрин ответа]\n\nВ ответе — цитата админа от 14 апреля и три ссылки на оригиналы сообщений в истории чата.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-antispam-drop":
        pushBot({
          text: "🛡 В чат снова залетает бот с «🔥 РАБОТА НА ДОМУ 50К/ДЕНЬ»? Теперь не нужно сидеть и удалять руками.\n\n«Антиспам» сам режет рекламу, ботов и мат. Включая обходы через «р@боту» и «р0б0ту».\n\nЧтобы включить:\n1. Открой ChatLogix\n2. Раздел «Logix для чата»\n3. Навык «Антиспам»\n\nДальше работает фоном.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-antispam-pain":
        pushBot({
          text: "😩 В три ночи в чат залетает:\n\n🔥 ЗАРАБОТОК ИЗ ДОМА 500$ В ДЕНЬ 🔥\n\nПока админ спит, сообщение уже успевают прочитать человек двадцать.\n\nС «Антиспамом» такие сообщения живут примерно секунду.\n\nПодключается в разделе «Logix для чата».",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-antispam-stats":
        pushBot({
          text: "🛡 За ночь «Антиспам» удалил в чате «Здоровое питание»:\n\n— 4 рекламных бота\n— 5 матных эпизодов\n— 3 ссылки на казино\n\nАдмин Анна спала.\n\n[скрин deleted24h]",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-antispam-pro":
        pushBot({
          text: "🛡 Разница между Free и Pro в «Антиспаме» — короткая.\n\nFree (бесплатно) ловит: спам, рекламу, мат, обходы через транслит.\n\nPro ($2.49/мес) сверху: умные фильтры по контексту, кастомные правила и недельный отчёт «кого забанили и за что».\n\nЕсли в чате 30+ человек и кто-то регулярно прорывается — есть смысл смотреть Pro.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      case "broadcast-antispam-meme":
        pushBot({
          text: "🤡 Спамер:\n\n«Заработок без вложений»\n\n«Антиспам»:\n\n🗑\n\nУдалено за 1.4 секунды.",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      // ── Onboarding: Admin flow ──
      case "onboard-admin":
        resetTour("adminPreview");
        pushBot({
          text: "Давай покажу, как работает саммари чата. Вот пример — одно саммари за день в чате **«Здоровое питание»**:\n\n🗓 Что обсуждалось вчера 28.04.2026\nВсего было написано **112 сообщений**\n\n🥗 Интервальное голодание 16/8 — опыт участников (**31 сообщение**)\n🏋️ Питание до и после тренировки (**24 сообщения**)\n🧴 Разбор составов протеиновых батончиков (**18 сообщений**)\n📋 Меню на неделю — делимся рецептами (**15 сообщений**)\n\nИнтересные ссылки:\n[Калькулятор КБЖУ онлайн]\n[Подборка рецептов на неделю]\n\nТакое саммари приходит в чат **каждое утро**. Участникам не нужно листать сотни сообщений — всё ключевое в одном посте.\n\nХочешь так же в своём чате?",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", null)]
        });
        break;
      case "onboard-admin-preview-voice":
        pushBot({
          text: "🎤 Расшифровка голосовых\n\nКогда кто-то отправляет голосовое или кружочек — бот автоматически добавляет текстовую версию под сообщением.\n\nУчастникам не нужно слушать — просто читают. Бесплатно **30 мин/мес** на чат.\n\nЧтобы включить — сначала добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "voice")]
        });
        break;
      case "onboard-admin-preview-antispam":
        pushBot({
          text: "🛡 Антиспам\n\nБот автоматически удаляет спам, рекламу и флуд. Фильтрует мат с помощью AI — даже обходы через транслит и лит-спик.\n\nFree-тариф — базовая защита навсегда, Pro — умные фильтры и еженедельный отчёт.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "antispam")]
        });
        break;
      case "onboard-admin-preview-podcast":
        pushBot({
          text: "🎙 Chat Podcast\n\nТеперь можно слушать что обсуждалось вчера — за рулём, на прогулке или по дороге на работу. Выпуск приходит в чат каждое утро сразу после текстового саммари.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "podcast")]
        });
        break;
      case "onboard-admin-preview-kb":
        pushBot({
          text: "📚 База знаний\n\nЗнаете это чувство, когда точно помнишь что обсуждали, но найти не можешь? База знаний это решает.\n\nУчастники пишут /faq прямо в чате — бот ищет по истории и отвечает с ссылками на нужные сообщения.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "kb")]
        });
        break;
      case "onboard-admin-preview-askBot":
        pushBot({
          text: "💬 Поиск в сети\n\nУчастники упоминают **@ChatLogixBot** в чате с вопросом — и бот находит ответ в интернете: свежие новости, факты, разбор по теме. Отвечает со ссылками на источники.\n\nМожно спросить и про сообщение в чате — просто ответь на него с упоминанием бота.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "askBot")]
        });
        break;
      case "onboard-admin-preview-routine":
        pushBot({
          text: "🔁 Рутина чата\n\nУстали каждый день руками искать и кидать в чат свежие новости, релизы и курсы? Рутина чата делает это за вас.\n\nБот сам собирает инфу с открытых источников в сети — и публикует её в чат по расписанию.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "routine")]
        });
        break;
      case "onboard-admin-preview-anon":
        pushBot({
          text: "🎭 Анонимные сообщения\n\nУчастники пишут через бота — автор скрыт от всех. Полезно для честной обратной связи. Лимит — 3 сообщения в день на человека.\n\nЧтобы включить — добавьте бота в чат 👇",
          buttons: [{
            label: "➕ Добавить бота и включить",
            action: "onboard-admin-addbot"
          }, ...tellButtons(ADMIN_PREVIEW_TOUR, "adminPreview", "anon")]
        });
        break;
      case "onboard-admin-addbot":
        setShowChatPicker(true);
        break;
      case "onboard-admin-settings":
        setTimeout(() => {
          if (onboardChatId) {
            navigate({
              to: "/chat/$chatId",
              params: {
                chatId: onboardChatId
              }
            });
          } else {
            navigate({
              to: "/home"
            });
          }
        }, 200);
        break;
      // ── Onboarding: User flow ──
      case "onboard-user": {
        const summaryChats = chats.filter((c) => c.summary?.active);
        if (summaryChats.length === 0) {
          pushBot({
            text: "ChatLogix пока нет ни в одном из ваших чатов.\n\nЧтобы получать Super-Summary, бот должен быть добавлен хотя бы в один чат. Попросите админа добавить @ChatLogixBot с правами администратора — или добавьте сами, если вы админ.",
            buttons: [{
              label: "➕ Добавить бота и включить",
              action: "onboard-admin-addbot"
            }]
          });
          break;
        }
        resetTour("user");
        pushBot({
          text: `Покажу, как не читать все чаты и быть в курсе.

Каждое утро буду присылать тебе одну сводку по всем чатам и каналам, прямо в личку:

🚀 **Твоя сводка за сегодня:**

🏢 **Рабочий чат**
— Дедлайн по проекту перенесли на пятницу (47 сообщ.)
— Новый дизайн главной одобрили (23 сообщ.)
🔗 [Figma-макет], [Таск в Jira]

🏠 **ЖК Новый Город**
— Отключение воды 30.04 с 10:00 до 18:00 (31 сообщ.)
— Собрание жильцов в субботу (12 сообщ.)
🔗 [Объявление УК]

📡 **Твои каналы**
— [Нутрициолог Оля]: 5 ошибок в «правильном» завтраке — разбор (8 постов)
— [Андрей про ЗОЖ]: как не сорваться на выходных, чек-лист (6 постов)
— [Катя готовит ПП]: 7 ужинов за 15 минут — подборка (5 постов)
— [Спорт и БЖУ]: сколько белка реально нужно — без мифов (4 поста)

Чаты — где есть ты и я. Каналы добавляются по ссылке: прочитаю их за тебя и вынесу главное в ту же сводку.

Вместо десятков чатов и каналов — одно сообщение с главным. Хочешь получать такой каждый день?`,
          buttons: [{
            label: "✨ Включить Super-Summary",
            action: "onboard-user-enable"
          }, ...tellButtons(USER_TOUR, "user", null)]
        });
        break;
      }
      case "onboard-user-enable":
        setSuperSummary(true);
        pushBot({
          text: "Готово 👌 Буду присылать тебе Super-Summary каждый день в 09:00.\n\nЧаты, где вчера было тихо, в отчёт не включаю — только то, где что-то обсуждали.\n\n📡 А ещё можно добавить открытые Telegram-каналы — прочитаю их за тебя и вынесу главное в ту же сводку.",
          buttons: [{
            label: "📡 Добавить каналы в сводку",
            action: "add-channels"
          }, {
            label: "⚙️ Настроить Super-Summary",
            action: "open-app"
          }, ...tellButtons(USER_TOUR, "user", null)]
        });
        break;
      case "onboard-user-show-podcast":
        pushBot({
          text: "🎧 Super Podcast\n\nЭто расширенная аудио-версия Super-Summary. Можно слушать за рулём, на прогулке или по дороге на работу — не нужно читать. Приходит одним голосовым сообщением каждое утро.",
          buttons: [{
            label: "🎧 Включить Super Podcast",
            action: "onboard-user-podcast"
          }, ...tellButtons(USER_TOUR, "user", "superPodcast")]
        });
        break;
      case "onboard-user-podcast":
        setSuperPodcast(true);
        pushBot({
          text: "🎧 Super Podcast включён!\n\nПервый выпуск придёт завтра вместе с Super-Summary. Выбрать голос и управлять подпиской можно в настройках.",
          buttons: [{
            label: "⚙️ Настроить Super Podcast",
            action: "open-app"
          }, ...tellButtons(USER_TOUR, "user", "superPodcast")]
        });
        break;
      case "onboard-user-show-routine":
        pushBot({
          text: "🔁 Моя Рутина\n\nПо расписанию присылаю тебе в ЛС свежую подборку из сети по твоей теме — новости, события, курсы, статьи. Пишешь запрос своими словами, бот сам ищет источники и публикует с ссылками.\n\nПример:\n\n📰 новости про ИИ\n\n• OpenAI выпустила GPT-5.2 с контекстом до 5M токенов. [Источник]\n• Anthropic анонсировала Opus 5 на 2026 Q3. [Источник]\n• Google DeepMind показал Gemini 3 Ultra. [Источник]\n\n⚙️ Моя Рутина · раз в день в 09:00 МСК\n\nДанные собираются на момент каждого выпуска — всегда свежие.",
          buttons: [{
            label: "🔁 Создать Мою Рутину",
            action: "onboard-user-routine-start"
          }, ...tellButtons(USER_TOUR, "user", "myRoutine")]
        });
        break;
      case "onboard-user-routine-start":
        beginRoutinePrompt("__me__");
        break;
      case "onboard-user-show-anon": {
        const anonAvailable = chats.filter((c) => c.anonymous?.active);
        pushBot({
          text: `🕵️ Анонимные сообщения

Пиши в чат через бота — никто не узнает, кто автор. Полезно для честной обратной связи или когда хочется сказать правду.${anonAvailable.length > 0 ? `

Доступно в ${anonAvailable.length} чатах: ${anonAvailable.map((c) => c.name).join(", ")}` : "\n\nПока нет чатов с включённой функцией. Попросите админа активировать."}`,
          buttons: [...anonAvailable.length > 0 ? [{
            label: "🎭 Написать анонимно",
            action: "anon-start"
          }] : [], {
            label: "⚙️ Настроить анонимные сообщения",
            action: "open-app"
          }, ...tellButtons(USER_TOUR, "user", "anon")]
        });
        break;
      }
      // ── Персональные навыки ──
      case "user-settings": {
        const summaryStatus = superSummaryOn ? summaryChannels.length > 0 ? `включён · +${summaryChannels.length} ${summaryChannels.length === 1 ? "канал" : summaryChannels.length < 5 ? "канала" : "каналов"}` : "включён" : "выключен";
        const podcastStatus = superPodcastOn ? superPodcastSubscription ? `подписка до ${superPodcastSubscription.expiresAt}` : `${16 - superPodcastFreeMinutesUsed} из 16 бесп. мин` : "выключен";
        const visibilityStatus = ignoringMe ? "игнорируются" : "учитываются";
        const anonChatsCount = chats.filter((c) => c.anonymous?.active).length;
        const personalRoutines = routinesByChat["__me__"] ?? [];
        const routineStatus = personalRoutines.length === 0 ? "не создано" : `${personalRoutines.length} ${personalRoutines.length === 1 ? "рутина" : personalRoutines.length < 5 ? "рутины" : "рутин"}`;
        pushBot({
          text: `✨ Персональные навыки

Это навыки, которые работают лично для вас прямо внутри бота — не привязаны к конкретному чату.

🚀 Super-Summary: ${summaryStatus}
🎙 Super Podcast: ${podcastStatus}
🔁 Мои Рутины: ${routineStatus}
🎭 Анонимные сообщения: доступно в ${anonChatsCount} чатах
🙈 Видимость: сообщения ${visibilityStatus}`,
          buttons: [{
            label: "🚀 Super-Summary",
            action: "summary-info"
          }, {
            label: "🎙 Super Podcast",
            action: "podcast-info"
          }, {
            label: "🔁 Мои Рутины",
            action: "personal-routine-info"
          }, {
            label: "🎭 Анонимное сообщение",
            action: "anon-start"
          }, {
            label: ignoringMe ? "🔄 Учитывать мои сообщения" : "🚫 Игнорировать мои сообщения",
            action: "toggle-ignore-me"
          }]
        });
        break;
      }
      // ── Моя Рутина info ──
      case "personal-routine-info": {
        const personalRoutines = routinesByChat["__me__"] ?? [];
        if (personalRoutines.length === 0) {
          pushBot({
            text: "🔁 Моя Рутина\n\nПо расписанию присылаю в ЛС свежую подборку из сети по твоей теме — новости, события, курсы, статьи. Пишешь запрос своими словами, бот сам ищет источники и публикует с ссылками.\n\nДанные собираются на момент каждого выпуска — всегда свежие.",
            buttons: [{
              label: "🔁 Создать Мою Рутину",
              action: "onboard-user-routine-start"
            }]
          });
        } else {
          const list = personalRoutines.map((r) => `• ${r.name} — ${r.active ? "активна" : "на паузе"} · ${everyLabel(r.intervalDays ?? 1, r.schedule.time)}`).join("\n");
          pushBot({
            text: `🔁 Мои Рутины (${personalRoutines.length})

${list}

Управлять и редактировать — в Mini App.`,
            buttons: [{
              label: "🔁 Создать ещё одну",
              action: "onboard-user-routine-start"
            }, {
              label: "⚙️ Открыть Mini App",
              action: "open-app"
            }]
          });
        }
        break;
      }
      // ── Super-Summary info ──
      case "summary-info": {
        if (!superSummaryOn) {
          pushBot({
            text: "🚀 Super-Summary\n\nКогда чатов и каналов много, легко что-то пропустить. Каждое утро присылаю тебе одну сводку: по всем чатам, где есть ты и я, плюс по открытым каналам, которые ты добавишь.\n\nВместо отдельных саммари внутри каждого чата и пролистывания лент каналов — одно сообщение с главным.\n\nЕсли какого-то чата нет в сводке, значит я не вижу, что ты в нём — напиши там любое сообщение, и со следующего дня добавлю его в Super-Summary.\n\nВключи — и буду присылать такую сводку каждое утро.",
            buttons: [{
              label: "✅ Включить Super-Summary",
              action: "enable-super-summary"
            }]
          });
        } else {
          const channelLine = summaryChannels.length > 0 ? `

📡 Каналов в сводке: ${summaryChannels.length}
${summaryChannels.map((c) => `• ${c.handle}`).join("\n")}` : "\n\n📡 Каналы пока не добавлены — добавь открытые каналы, и я буду выносить из них главное в ту же сводку.";
          pushBot({
            text: `🚀 Super-Summary работает

Присылаю тебе сводку каждое утро. Последний раз — сегодня.${channelLine}`,
            buttons: [{
              label: "📋 Показать последний Super-Summary",
              action: "show-last-summary"
            }, {
              label: summaryChannels.length > 0 ? "📡 Управлять каналами" : "📡 Добавить каналы",
              action: "add-channels"
            }, {
              label: "🔕 Отключить Super-Summary",
              action: "disable-super-summary"
            }]
          });
        }
        break;
      }
      // ── Готово с каналами ──
      case "channels-done":
        setChannelStep("idle");
        pushBot({
          text: `📡 Готово. В Super-Summary сейчас ${summaryChannels.length} ${summaryChannels.length === 1 ? "канал" : summaryChannels.length < 5 ? "канала" : "каналов"}. Стиль и время сводки можно настроить в Mini App.`,
          buttons: [{
            label: "⚙️ Настроить Super-Summary",
            action: "open-app"
          }, ...tellButtons(USER_TOUR, "user", null)]
        });
        break;
      // ── Добавить каналы в Super-Summary ──
      case "add-channels":
        beginChannelPrompt();
        if (summaryChannels.length > 0) {
          pushBot({
            text: "Убрать канал из сводки можно в настройках Mini App.",
            buttons: [{
              label: "⚙️ Открыть настройки",
              action: "open-app"
            }]
          });
        }
        break;
      // ── Enable Super-Summary ──
      case "enable-super-summary":
        setSuperSummary(true);
        pushBot({
          text: "🚀 Super-Summary включён!\n\nЗавтра утром скину первую сводку. Чаты, где вчера было тихо, в отчёт не включаю — только то, где что-то обсуждали.\n\n📡 Хочешь следить ещё и за открытыми каналами? Добавь их — и я вынесу из них главное в ту же сводку.",
          buttons: [{
            label: "📡 Добавить каналы в сводку",
            action: "add-channels"
          }, {
            label: "🔕 Отключить Super-Summary",
            action: "disable-super-summary"
          }]
        });
        break;
      // ── Disable Super-Summary ──
      case "disable-super-summary":
        setSuperSummary(false);
        pushBot({
          text: "🔕 Super-Summary отключён\n\nБольше не буду присылать тебе ежедневные сводки. Если передумаешь — включи заново.",
          buttons: [{
            label: "✅ Включить Super-Summary",
            action: "enable-super-summary"
          }]
        });
        break;
      // ── Show last Super-Summary ──
      case "show-last-summary": {
        const summaryChats = chats.filter((c) => c.summary?.active);
        let summaryText;
        if (summaryChats.length > 0) {
          summaryText = summaryChats.map((c) => {
            const topicLines = c.topics.slice(0, 2).map((t) => `${t} (${Math.floor(Math.random() * 200 + 50)} сообщений)`).join("\n");
            return `📌 ${c.name}
${topicLines}`;
          }).join("\n\n");
        } else {
          summaryText = "Нет активных чатов для саммари";
        }
        pushBot({
          text: `Вот твой super-summary за последние 24 часа:

${summaryText}${channelsSummaryBlock()}`,
          buttons: summaryChannels.length === 0 ? [{
            label: "📡 Добавить каналы в сводку",
            action: "add-channels"
          }] : void 0
        });
        break;
      }
      // ── Super Podcast info ──
      case "podcast-info": {
        if (!superPodcastOn) {
          pushBot({
            text: "🎙 Super Podcast\n\nРасширенная версия Super-Summary в формате подкаста. Приходит ежедневно вместе с Super-Summary. Первые 16 минут — бесплатно.\n\nОдин выпуск в день, приходит в ЛС сразу после Super-Summary",
            buttons: [{
              label: "🎙 Включить подкаст",
              action: "enable-super-podcast"
            }, {
              label: "📋 Показать последний Super-Summary",
              action: "show-last-summary"
            }]
          });
        } else {
          const statusLine = superPodcastSubscription ? `Подписка активна до ${superPodcastSubscription.expiresAt}` : `Осталось ${16 - superPodcastFreeMinutesUsed} из 16 бесплатных минут`;
          pushBot({
            text: `🎙 Super Podcast включён

${statusLine}

Один выпуск в день, приходит в ЛС сразу после Super-Summary`,
            buttons: [{
              label: "⚙️ Настроить Super Podcast",
              action: "configure-podcast"
            }, {
              label: "🚫 Отключить Super Podcast",
              action: "disable-super-podcast"
            }]
          });
        }
        break;
      }
      // ── Enable Super Podcast ──
      case "enable-super-podcast":
        setSuperPodcast(true);
        pushBot({
          text: "🎙 Super Podcast включён.\n\nУ тебя есть 16 бесплатных минут. Первый выпуск придёт завтра утром.",
          buttons: [{
            label: "⚙️ Настроить Super Podcast",
            action: "configure-podcast"
          }]
        });
        break;
      // ── Disable Super Podcast ──
      case "disable-super-podcast":
        setSuperPodcast(false);
        pushBot({
          text: "🎙 Super Podcast выключен. Super-Summary продолжит приходить текстом. Включить обратно можно в настройках.",
          buttons: [{
            label: "🎙 Включить подкаст",
            action: "enable-super-podcast"
          }]
        });
        break;
      // ── Configure Super Podcast (open mini app) ──
      case "configure-podcast":
        setTimeout(() => navigate({
          to: "/me"
        }), 200);
        break;
      // ── Toggle visibility ──
      case "toggle-ignore-me": {
        const newIgnoring = !ignoringMe;
        setIgnoringMe(newIgnoring);
        if (newIgnoring) {
          pushBot({
            text: "✅ Готово, твои сообщения не попадут в общее саммари тех чатов, где я есть. Если передумаешь — жми ниже.",
            buttons: [{
              label: "🔄 Учитывать мои сообщения",
              action: "toggle-ignore-me"
            }]
          });
        } else {
          pushBot({
            text: "✅ Готово, твои сообщения снова в саммари",
            buttons: [{
              label: "🚫 Игнорировать мои сообщения",
              action: "toggle-ignore-me"
            }]
          });
        }
        break;
      }
      // ── Создание рутины ──
      case "routine-start":
        startRoutineWizard();
        break;
      // ── Создание навыка ──
      case "create-skill-start":
        setSkillStep("compose");
        pushBot({
          text: "🪄 Создание навыка\n\nРасскажи об идее по такому плану — так нам быстрее понять и оценить:\n\n1️⃣ **Тип** — навык для чата или личный (работает в ЛС бота)?\n2️⃣ **Что делает** — какую задачу или боль закрывает?\n3️⃣ **Как работает** — пример или сценарий: что происходит и когда?\n\nЕсли на какой-то пункт ответа нет — пропусти. Пиши свободно, без шаблонов."
        });
        break;
      // ── Помощь ──
      case "help":
        pushBot({
          text: "💬 Есть вопрос или предложение? Напиши нам в @chatlogix_support",
          buttons: [{
            label: "📱 Открыть Mini App",
            action: "open-app"
          }]
        });
        break;
      // ── Добавить бота в чат ──
      case "addbot":
        pushBot({
          text: "Для добавления бота в чат нажми на кнопку ниже",
          buttons: [{
            label: "🤖 Добавить бота в чат",
            action: "addbot-go"
          }]
        });
        break;
      case "addbot-go":
        pushBot({
          text: "В реальном Telegram здесь откроется диалог добавления бота в чат."
        });
        break;
      // ── Anonymous message flow ──
      case "anon-start":
        if (totalAnon >= 3) {
          pushBot({
            text: "Лимит анонимных сообщений (3/3) на сегодня исчерпан."
          });
          break;
        }
        setAnonStep("pick");
        pushBot({
          text: "Выбери чат для анонимного сообщения:",
          buttons: chats.filter((c) => c.anonymous?.active).map((c) => ({
            label: `${c.emoji ?? ""} ${c.name}`.trim(),
            action: `anon-pick:${c.id}`
          }))
        });
        break;
      case "anon-confirm-send": {
        if (anonChatId && pendingText) {
          sendAnonymous(anonChatId, pendingText);
          const target = chats.find((c) => c.id === anonChatId);
          pushBot({
            text: `✅ Анонимно отправлено в «${target?.name}»`,
            buttons: [{
              label: "Открыть чат",
              action: `open-group:${anonChatId}`
            }]
          });
        }
        setAnonStep("idle");
        setAnonChatId(null);
        setPendingText("");
        break;
      }
      case "anon-edit":
        setAnonStep("compose");
        pushBot({
          text: "Окей, отредактируй и отправь снова."
        });
        break;
      default:
        if (action.startsWith("summary-preview:")) {
          const parts = action.split(":");
          const cid = parts[1];
          const styleId = parts[2];
          pushBot({
            text: buildStyledSummaryText(styleId, "chat"),
            buttons: buildStyledSummaryButtons(cid, styleId)
          });
          break;
        }
        if (action.startsWith("summary-save:")) {
          const parts = action.split(":");
          const styleId = parts[2];
          toast.success("Стиль саммари сохранён", {
            description: styleId ? `Применён стиль «${styleId}». Будет использоваться в ежедневных саммари.` : void 0
          });
          break;
        }
        if (action.startsWith("summary-edit:")) {
          const parts = action.split(":");
          const cid = parts[1];
          const styleId = parts[2];
          if (styleId === "custom") {
            setCustomPromptEditChatId(cid);
            const remaining = customStyleRemaining();
            pushBot({
              text: `✏️ Введите новый промпт одной строкой.

Осталось ${remaining}/${CUSTOM_STYLE_DAILY_LIMIT} попыток на сегодня.`
            });
          } else {
            setTimeout(() => navigate({
              to: "/chat/$chatId/feature/$featureKey",
              params: {
                chatId: cid,
                featureKey: "summary"
              }
            }), 200);
          }
          break;
        }
        if (action.startsWith("onboard-admin-show-antispam:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🛡 Антиспам

В чатах часто бывает флуд, спам, наплыв ботов и токсичность. Антиспам помогает избавить чат от всего этого мусора.

При включении сразу доступно: удаление спама и рекламы, антифлуд, запрет ссылок от новичков и капча при входе.

Есть Pro-режим с расширенным функционалом: AI-фильтр мата, умный слоу-мод, кастомная капча, приветствие новичков и еженедельный отчёт.`,
            buttons: [{
              label: "🛡 Включить антиспам",
              action: `onboard-admin-antispam:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "antispam", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-voice:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🎤 Расшифровка голосовых

Когда кто-то отправляет голосовое или кружочек — бот добавляет текстовую версию прямо под сообщением. Участникам не нужно слушать — просто читают.

А ещё расшифровки попадают в саммари, делая сводку полнее и полезнее.`,
            buttons: [{
              label: "🎤 Включить расшифровку",
              action: `onboard-admin-voice:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "voice", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-podcast:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🎙 Подкаст чата

Теперь можно слушать что обсуждалось вчера — за рулём, на прогулке или по дороге на работу. Выпуск приходит в чат каждое утро сразу после текстового саммари.`,
            buttons: [{
              label: "🎙 Включить подкаст",
              action: `onboard-admin-podcast:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "podcast", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-kb:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `📚 База знаний

Знаете это чувство, когда точно помнишь что обсуждали, но найти не можешь? База знаний это решает.

Участники пишут /faq прямо в чате — бот ищет по истории и отвечает с ссылками на нужные сообщения.`,
            buttons: [{
              label: "📚 Включить базу знаний",
              action: `onboard-admin-kb:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "kb", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-askBot:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `💬 Поиск в сети

Участники упоминают **@ChatLogixBot** в чате с вопросом — и бот находит ответ в интернете: свежие новости, факты, разбор по теме. Отвечает со ссылками на источники.

Можно спросить и про сообщение в чате — просто ответь на него с упоминанием бота.`,
            buttons: [{
              label: "💬 Включить поиск в сети",
              action: `onboard-admin-askBot:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "askBot", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-show-routine:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🔁 Рутина чата

Устали каждый день руками искать и кидать в чат свежие новости, релизы и курсы? Рутина чата делает это за вас.

Бот сам собирает инфу с открытых источников в сети — и публикует её в чат по расписанию.`,
            buttons: [{
              label: "🔁 Создать первую рутину",
              action: `onboard-admin-routine:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "routine", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-routine:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "routine");
          startRoutineWizard();
          break;
        }
        if (action.startsWith("onboard-admin-show-anon:")) {
          const cid = action.split(":")[1];
          pushBot({
            text: `🎭 Анонимные сообщения

Участники пишут через бота — автор скрыт от всех. Полезно для честной обратной связи. Лимит — 3 сообщения в день на человека.`,
            buttons: [{
              label: "🎭 Включить анонимные сообщения",
              action: `onboard-admin-anon:${cid}`
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "anon", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-antispam:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "antispam");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🛡 Антиспам включён в «${target?.name}»!

Сейчас работает: удаление спама и рекламы, антифлуд, запрет ссылок от новичков, капча при входе.

Добавить свои стоп-слова, настроить фильтры медиа или перейти на Pro-тариф можно в настройках.`,
            buttons: [{
              label: "⚙️ Настроить антиспам",
              action: "onboard-admin-settings"
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "antispam", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-voice:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "voice");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🎤 Расшифровка включена в «${target?.name}»!

Вам доступно 30 минут в месяц на бесплатном тарифе. Расширить количество минут и выбрать голос озвучки можно в настройках.`,
            buttons: [{
              label: "⚙️ Настроить расшифровку",
              action: "onboard-admin-settings"
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "voice", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-podcast:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "podcast");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🎙 Подкаст включён в «${target?.name}»!

Теперь каждое утро вместе с саммари будет приходить аудио-выпуск — можно слушать по дороге на работу. По умолчанию озвучка приходит с мужским голосом длительностью до 4 минут. Первая неделя бесплатно.

Сменить голос или оформить подписку можно в настройках.`,
            buttons: [{
              label: "⚙️ Настроить подкаст",
              action: "onboard-admin-settings"
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "podcast", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-kb:")) {
          const cid = action.split(":")[1];
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `📚 База знаний активирована в «${target?.name}»!

Сейчас начнётся индексация последних 10 000 сообщений — это займёт несколько минут. Когда всё будет готово, пришлём уведомление в чат.

После этого участники смогут искать через /faq, а новые сообщения будут автоматически попадать в базу.`,
            buttons: [{
              label: "⚙️ Настроить базу знаний",
              action: "onboard-admin-settings"
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "kb", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-askBot:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "askBot");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `💬 Поиск в сети включён в «${target?.name}»!

Теперь любой участник может упомянуть @ChatLogixBot в чате с вопросом — бот ответит и подскажет, где искать (в сети или в базе знаний чата, если включена).

Бесплатно. Антиспам: 1 запрос в минуту, 15 в час, 50 в день на пользователя. Отключить можно в настройках.`,
            buttons: [{
              label: "⚙️ Настроить поиск в сети",
              action: "onboard-admin-settings"
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "askBot", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("onboard-admin-anon:")) {
          const cid = action.split(":")[1];
          toggleFeature(cid, "anonymous");
          const target = chats.find((c) => c.id === cid);
          pushBot({
            text: `🎭 Анонимные сообщения включены в «${target?.name}»!

Теперь участники могут писать через бота так, чтобы никто не узнал автора. Удобно для честной обратной связи. Каждый может отправить до 3 сообщений в день.

Разрешить или запретить отправку медиа можно в настройках.`,
            buttons: [{
              label: "⚙️ Настроить анонимные сообщения",
              action: "onboard-admin-settings"
            }, ...tellButtons(GROUP_TOUR, `group:${cid}`, "anon", `:${cid}`)]
          });
          break;
        }
        if (action.startsWith("routine-settings:")) {
          const cid = action.split(":")[1];
          setTimeout(() => navigate({
            to: "/chat/$chatId/feature/$featureKey",
            params: {
              chatId: cid,
              featureKey: "routine"
            }
          }), 200);
          break;
        }
        if (action.startsWith("routine-freq:")) {
          const days = parseInt(action.split(":")[1], 10) || 1;
          setRoutineDraft((d) => ({
            ...d,
            intervalDays: days
          }));
          setRoutineStep("time");
          pushBot({
            text: `⏰ Когда публиковать? Напиши время и часовой пояс (например 09:00 МСК или 18:30 GMT+3).

⚠️ Данные собираются в сети на момент выпуска — каждый раз свежие.`
          });
          break;
        }
        if (action === "routine-save") {
          if (routineDraft.chatId) {
            saveRoutine(routineDraft.chatId);
          } else {
            setChatPickerMode("routine");
            setShowChatPicker(true);
          }
          break;
        }
        if (action.startsWith("routine-send:")) {
          sendRoutineToChat(action.split(":")[1]);
          break;
        }
        if (action === "routine-discard") {
          setRoutineDraft({});
          setRoutineStep("idle");
          pushBot({
            text: "🗑 Рутина удалена. Создать новую можно в любой момент."
          });
          break;
        }
        if (action === "routine-edit-prompt") {
          setRoutineDraft((d) => ({
            ...d,
            edits: (d.edits ?? 0) + 1,
            digest: void 0
          }));
          setRoutineStep("prompt");
          pushBot({
            text: "✏️ Ок, напиши новый запрос — что присылать в чат."
          });
          break;
        }
        if (action.startsWith("anon-pick:")) {
          const id = action.split(":")[1];
          setAnonChatId(id);
          setAnonStep("compose");
          const target = chats.find((c) => c.id === id);
          pushBot({
            text: `📣 Чат «${target?.name}»
Напиши сообщение.`
          });
        }
        if (action.startsWith("open-group:")) {
          pushBot({
            text: "Переключи режим вверху на «🔥 Группа», чтобы увидеть сообщение."
          });
        }
        if (action.startsWith("view-group-welcome:")) {
          const cid = action.split(":")[1];
          setActiveChat(cid);
          setTabMode("group");
        }
        break;
    }
  };
  const sendInput = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    pushUser(text);
    if (customPromptEditChatId) {
      const cid = customPromptEditChatId;
      setCustomPromptEditChatId(null);
      const res = consumeCustomStyleAttempt(text);
      if (!res.ok) {
        pushBot({
          text: `Лимит исчерпан — ${CUSTOM_STYLE_DAILY_LIMIT}/${CUSTOM_STYLE_DAILY_LIMIT} на сегодня. Завтра обнулится.`
        });
        return;
      }
      pushBot({
        text: buildStyledSummaryText("custom", "chat"),
        buttons: buildStyledSummaryButtons(cid, "custom")
      });
      return;
    }
    if (channelStep === "await-link") {
      const res = parseChannelLink(text);
      if (!res.ok) {
        pushBot({
          text: `⚠️ ${res.error}`
        });
        return;
      }
      if (summaryChannels.some((c) => c.id === res.channel.id)) {
        pushBot({
          text: `📡 ${res.channel.handle} уже в твоей сводке. Пришли ссылку на другой канал — или нажми «Готово».`,
          buttons: [{
            label: "✅ Готово",
            action: "channels-done"
          }]
        });
        return;
      }
      addSummaryChannel(res.channel);
      setChannelStep("idle");
      pushBot({
        text: `✅ Канал ${res.channel.handle} добавлен в Super-Summary.

Завтра утром вынесу из него главное прямо в твою сводку, вместе с чатами. Можно добавить ещё или настроить стиль и время в Mini App.`,
        buttons: [{
          label: "📡 Добавить ещё канал",
          action: "add-channels"
        }, {
          label: "⚙️ Настроить Super-Summary",
          action: "open-app"
        }, ...tellButtons(USER_TOUR, "user", null)]
      });
      return;
    }
    if (anonStep === "compose" && anonChatId) {
      setPendingText(text);
      setAnonStep("confirm");
      pushBot({
        text: `Подтверди отправку:

«${text}»`,
        buttons: [{
          label: "✅ Отправить анонимно",
          action: "anon-confirm-send"
        }, {
          label: "✏️ Редактировать",
          action: "anon-edit"
        }]
      });
      return;
    }
    if (skillStep === "compose") {
      setSkillStep("idle");
      pushBot({
        text: "✅ Спасибо, идея у команды!\n\nЕсли что-то будет непонятно — напишем уточнить. Как только реализуем — придёт уведомление сюда же."
      });
      return;
    }
    if (routineStep === "prompt") {
      const prompt = text.slice(0, 500);
      setRoutineDraft((d) => ({
        ...d,
        prompt
      }));
      if (routineDraft.intervalDays) {
        previewRoutine(prompt);
        return;
      }
      setRoutineStep("idle");
      pushBot({
        text: `✏️ Запрос принят:
«${prompt}»

Как часто публиковать?`,
        buttons: [{
          label: "🔁 Раз в день",
          action: "routine-freq:1"
        }, {
          label: "🔁 Раз в 3 дня",
          action: "routine-freq:3"
        }, {
          label: "🔁 Раз в неделю",
          action: "routine-freq:7"
        }]
      });
      return;
    }
    if (routineStep === "time") {
      const m = text.match(/^(\d{1,2})(?::(\d{2}))?\s*(.*)$/);
      if (!m) {
        pushBot({
          text: "Нужно время в формате ЧЧ:ММ и пояс — например 09:00 МСК."
        });
        return;
      }
      const hh = Math.min(23, parseInt(m[1], 10));
      const mm = m[2] ? Math.min(59, parseInt(m[2], 10)) : 0;
      const time = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
      const tz = m[3]?.trim() || "МСК";
      setRoutineDraft((d) => ({
        ...d,
        time,
        tz
      }));
      previewRoutine();
      return;
    }
    pushBot({
      text: "Используй кнопки ниже или открой Mini App 👇",
      buttons: [{
        label: "📱 Открыть Mini App",
        action: "open-app"
      }]
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-[44px] z-10 backdrop-blur-xl bg-background/60 border-b border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 h-14 flex items-center gap-3 max-w-[640px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-8 h-8 -ml-1 flex items-center justify-center text-foreground/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full flex items-center justify-center", style: {
        background: "var(--gradient-primary)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 18 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] font-semibold truncate", children: "ChatLogixBot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[oklch(0.85_0.15_155)]", children: "bot · online" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 -mr-1 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { size: 18 }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto px-3 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground", children: "сегодня" }) }),
      msgs.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { msg: m, onAction: handleAction }, m.id)),
      typing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/8 rounded-2xl px-3 py-2.5 flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, {}),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { delay: 120 }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { delay: 240 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "backdrop-blur-xl bg-background/80 border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-2.5 py-2 flex flex-col gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "🛠 Logix для твоего чата", onClick: () => navigate({
            to: "/chats"
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "➕ Добавить бота в чат", onClick: () => handleAction("addbot") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "✨ Logix для тебя", onClick: () => handleAction("user-settings") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "❔ Помощь", onClick: () => handleAction("help") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "💡 Создать свой навык", onClick: () => handleAction("create-skill-start") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 backdrop-blur-xl bg-background/70 border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-2.5 py-2.5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && sendInput(), placeholder: anonStep === "compose" && anonChatId ? `🎭 Анонимно в «${chats.find((c) => c.id === anonChatId)?.name}»…` : skillStep === "compose" ? "🪄 Опиши идею навыка своими словами…" : channelStep === "await-link" ? "📡 Ссылка на канал, напр. https://t.me/durov…" : routineStep === "prompt" ? "✏️ Что присылать в чат…" : routineStep === "time" ? "⏰ Время, напр. 09:00…" : "Сообщение", className: "flex-1 bg-transparent outline-none text-[14px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { size: 20 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendInput, className: "w-10 h-10 rounded-full flex items-center justify-center text-white", style: {
        background: "var(--gradient-primary)"
      }, children: input.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 18 }) })
    ] }) }),
    showChatPicker && /* @__PURE__ */ jsxRuntimeExports.jsx(ChatPickerModal, { chats, onPick: handleChatPicked, onClose: () => setShowChatPicker(false), title: chatPickerMode === "routine-pick" ? "Выбери чат для рутины" : "Добавить бота в чат" })
  ] });
}
function GroupChat() {
  const navigate = useNavigate();
  const chats = useChatsStore((s) => s.chats);
  const activeChatId = useChatsStore((s) => s.activeChatId);
  const setActiveChat = useChatsStore((s) => s.setActiveChat);
  const setTabMode = useChatsStore((s) => s.setTabMode);
  const messagesByChat = useChatsStore((s) => s.messagesByChat);
  const pushMessage = useChatsStore((s) => s.pushMessage);
  const markSpamDeleted = useChatsStore((s) => s.markSpamDeleted);
  const adminAlerts = useChatsStore((s) => s.adminAlerts[activeChatId] ?? 0);
  const chat = chats.find((c) => c.id === activeChatId);
  const msgs = messagesByChat[activeChatId] ?? [];
  const [input, setInput] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [msgs.length, activeChatId]);
  reactExports.useEffect(() => {
    const SCRIPTS = {
      "kurery-msk": [{
        author: "Дима",
        text: "Сегодня дождь, заказы летят 🚴"
      }, {
        author: "Аня",
        text: "Кто-нибудь видел, лимит на бонус подняли?"
      }, {
        author: "Олег",
        text: "+1 к смене ночью, платят ×2"
      }],
      "product-chatlogix": [{
        author: "Лена",
        text: "Новый CSAT 4.7 — пушка 🔥"
      }, {
        author: "Игорь",
        text: "Завтра демо в 17:00, не пропустите"
      }],
      "react-ru": [{
        author: "Polina",
        text: "use(Promise) внутри Suspense — кайф"
      }, {
        author: "Dan",
        text: "RSC + TanStack — норм комбо?"
      }],
      "startup-club": [{
        author: "Артём",
        text: "Кто знает фонды на seed в EU?"
      }, {
        author: "Marina",
        text: "Могу заинтродьюсить 👇"
      }],
      "chatlogix-night": [{
        author: "Tim",
        text: "Ночной билд прошёл ✅"
      }]
    };
    const t = setInterval(() => {
      const pool = SCRIPTS[activeChatId];
      if (!pool || pool.length === 0) return;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      pushMessage(activeChatId, {
        from: "member",
        author: pick.author,
        text: pick.text
      });
    }, 12e3);
    return () => clearInterval(t);
  }, [activeChatId, pushMessage]);
  const contributeToCollection = useChatsStore((s) => s.contributeToCollection);
  const handleAction = (action) => {
    if (action.startsWith("kb-open")) {
      navigate({
        to: "/chat/$chatId",
        params: {
          chatId: activeChatId
        },
        hash: "f-kb"
      });
    }
    if (action === "open-bot-dm" || action === "open-bot-personal") {
      setTabMode("private");
    }
    if (action.startsWith("collect:")) {
      const feature = action.slice("collect:".length);
      contributeToCollection(activeChatId, feature);
      toast.success("Взнос зачтён");
    }
    if (action.startsWith("collect-info:")) {
      const feature = action.slice("collect-info:".length);
      navigate({
        to: "/chat/$chatId/feature/$featureKey",
        params: {
          chatId: activeChatId,
          featureKey: feature
        }
      });
    }
  };
  const sendInput = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    if (text.toLowerCase().startsWith("/faq")) {
      const q = text.replace(/^\/faq\s*/i, "").trim() || "запрос";
      pushMessage(activeChatId, {
        from: "user",
        text
      });
      setTimeout(() => {
        pushMessage(activeChatId, {
          from: "bot",
          text: `📚 По теме «${q}»:

1. Главное обсуждение (23 сообщ.)
2. Похожая тема (17 сообщ.)
3. Старый тред (11 сообщ.)`
        });
      }, 500);
      return;
    }
    const spammy = /заработ|💰💰|быстро.*деньг|earn.*\$|http/i.test(text);
    if (spammy && chat.antispam?.active) {
      pushMessage(activeChatId, {
        from: "user",
        text
      });
      setTimeout(() => {
        const last = (useChatsStore.getState().messagesByChat[activeChatId] ?? []).slice(-1)[0];
        if (last) markSpamDeleted(activeChatId, last.id);
        pushMessage(activeChatId, {
          from: "bot",
          text: "❌ Сообщение удалено антиспамом"
        });
      }, 600);
      return;
    }
    pushMessage(activeChatId, {
      from: "user",
      text
    });
    setTimeout(() => {
      pushMessage(activeChatId, {
        from: "bot",
        text: "Попробуй: `/faq тема` для базы знаний, или спам-фразу для проверки антиспама."
      });
    }, 500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-2 max-w-[640px] mx-auto w-full flex gap-1.5 overflow-x-auto", children: chats.map((c) => {
      const active = c.id === activeChatId;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveChat(c.id), className: `text-[11px] whitespace-nowrap px-2.5 py-1.5 rounded-full transition ${active ? "bg-white/18 text-white" : "bg-white/6 text-muted-foreground"}`, children: [
        c.emoji,
        " ",
        c.name
      ] }, c.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-[44px] z-10 backdrop-blur-xl bg-background/60 border-b border-white/8 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 h-14 flex items-center gap-3 max-w-[640px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-8 h-8 -ml-1 flex items-center justify-center text-foreground/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 22 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full flex items-center justify-center", style: {
        background: chat.avatarColor
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: chat.emoji || chat.initial }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] font-semibold truncate", children: chat.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
          " ",
          chat.members.toLocaleString("ru"),
          " · ChatLogix"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
        to: "/chat/$chatId",
        params: {
          chatId: activeChatId
        }
      }), className: "w-9 h-9 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 -mr-1 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { size: 18 }) })
    ] }) }),
    adminAlerts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-2 max-w-[640px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[oklch(0.65_0.22_25)]/15 border border-[oklch(0.65_0.22_25)]/30 px-3 py-2 text-[12px] flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠️ Антиспам" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "Удалено ",
        adminAlerts,
        " сообщений"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
        to: "/chat/$chatId",
        params: {
          chatId: activeChatId
        },
        hash: "f-antispam"
      }), className: "ml-auto text-[oklch(0.82_0.13_240)] font-medium", children: "Настроить" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto px-3 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground", children: "сегодня" }) }),
      msgs.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(GroupBubble, { msg: m, onAction: handleAction }, m.id))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 backdrop-blur-xl bg-background/80 border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-2.5 pb-2.5 pt-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && sendInput(), placeholder: "/faq тема, или текст…", className: "flex-1 bg-transparent outline-none text-[14px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendInput, className: "w-10 h-10 rounded-full flex items-center justify-center text-white", style: {
        background: "var(--gradient-primary)"
      }, children: input.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 18 }) })
    ] }) })
  ] });
}
function formatText(text, onAction) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\[([^\]]+?)\]\(([^)]+?)\)|\[([^\]]+?)\])/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: match[2] }, key++));
    } else if (match[3] && match[4]) {
      const action = match[4];
      const label = match[3];
      parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onAction?.(action), className: "font-semibold text-[oklch(0.75_0.14_230)] hover:underline cursor-pointer", children: label }, key++));
    } else if (match[5]) {
      parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.75_0.14_230)]", children: match[5] }, key++));
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}
function Dot({
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse", style: {
    animationDelay: `${delay}ms`
  } });
}
function Bubble({
  msg,
  onAction
}) {
  const isSelf = msg.from === "user";
  const isSystem = msg.from === "system";
  if (isSystem) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]", children: msg.text }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isSelf ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[82%] flex flex-col ${isSelf ? "items-end" : "items-start"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${isSelf ? "rounded-tr-md text-white" : "bg-white/10 rounded-tl-md"}`, style: isSelf ? {
      background: "linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.52 0.14 240))"
    } : void 0, children: [
      isSelf ? msg.text : formatText(msg.text, onAction),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] mt-1 ${isSelf ? "text-white/70" : "text-muted-foreground"} text-right`, children: msg.time })
    ] }),
    msg.buttons && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex flex-col gap-1", children: msg.buttons.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onAction(b.action, b.label), className: "w-full text-[12px] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-center font-medium", children: b.label }, i)) })
  ] }) });
}
function GroupBubble({
  msg,
  onAction
}) {
  const isSelf = msg.from === "user";
  const isSystem = msg.from === "system";
  const isMember = msg.from === "member";
  if (isSystem) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]", children: msg.text }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isSelf ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[82%] flex flex-col ${isSelf ? "items-end" : "items-start"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${isSelf ? "rounded-tr-md text-white" : "bg-white/10 rounded-tl-md"} ${msg.deleted ? "opacity-60 italic" : ""}`, style: isSelf ? {
      background: "linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.52 0.14 240))"
    } : void 0, children: [
      isMember && msg.author && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold mb-0.5", style: {
        color: "oklch(0.78 0.15 200)"
      }, children: msg.author }),
      msg.voice ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-[180px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 rounded-full flex items-center justify-center text-white", style: {
          background: "var(--gradient-primary)"
        }, onClick: () => onAction("voice-play"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-[10px] text-muted-foreground", children: msg.voice.duration })
      ] }) : formatText(msg.text, onAction),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] mt-1 ${isSelf ? "text-white/70" : "text-muted-foreground"} text-right`, children: msg.time })
    ] }),
    msg.buttons && msg.buttons.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex flex-col gap-1 w-full max-w-[320px]", children: msg.buttons.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onAction(b.action), className: "w-full text-[12px] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-center font-medium", children: b.label }, i)) })
  ] }) });
}
function ChatPickerModal({
  chats,
  onPick,
  onClose,
  title = "Добавить бота в чат"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", onClick: onClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[340px] rounded-2xl bg-[oklch(0.18_0.01_260)] border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 flex items-center justify-between border-b border-white/8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2 max-h-[320px] overflow-y-auto", children: chats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onPick(c.id), className: "w-full px-4 py-3 flex items-center gap-3 hover:bg-white/8 active:bg-white/12 transition text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center text-[14px] shrink-0", style: {
          background: c.avatarColor
        }, children: c.emoji || c.initial }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[14px] font-medium truncate", children: [
            c.name,
            " ",
            c.emoji ?? ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            c.members.toLocaleString("ru"),
            " участников"
          ] })
        ] })
      ] }, c.id)) })
    ] })
  ] });
}
function ChatMenuBtn({
  label,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "text-[13px] font-medium py-2.5 px-3 rounded-xl bg-white/8 hover:bg-white/14 text-white text-center transition active:scale-[0.98]", children: label });
}
export {
  TelegramScreen as component
};
