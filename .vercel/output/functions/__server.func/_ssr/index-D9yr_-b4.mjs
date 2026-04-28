import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { R as Route$7, u as useChatsStore } from "./router-BUFDE6mC.mjs";
import "../_libs/sonner.mjs";
import { A as AppWindow, a as ChevronLeft, B as Bot, S as Search, P as Phone, E as EllipsisVertical, b as Paperclip, c as Smile, d as Send, M as Mic, U as Users } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
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
  text: "👋 Привет! Я — ChatLogix.\n\nСобираю главное из групповых чатов и каждый день присылаю короткое саммари. Больше никакого скролла на 500 сообщений.\n\nЧто умею:\n📝 Ежедневное саммари — короткая выжимка из обсуждений в добавленном чате\n🚀 Super-Summary — одна сводка по всем чатам, лично тебе в ЛС\n\nДобавь меня в чат — и начнем.\nИли просто включи свой Super-Summary",
  buttons: [{
    label: "📱 Открыть Mini App",
    action: "open-app"
  }]
}];
function TelegramScreen() {
  const [mode, setMode] = reactExports.useState("private");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 backdrop-blur-xl bg-background/70 border-b border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-3 py-2 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("private"), className: `flex-1 text-[12px] font-medium py-2 rounded-full transition ${mode === "private" ? "bg-white/15 text-white" : "bg-white/5 text-muted-foreground"}`, children: "💬 ЛС с ботом" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("group"), className: `flex-1 text-[12px] font-medium py-2 rounded-full transition ${mode === "group" ? "bg-white/15 text-white" : "bg-white/5 text-muted-foreground"}`, children: "🔥 Группа" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "text-[12px] font-medium py-2 px-3 rounded-full bg-gradient-to-r from-[oklch(0.55_0.16_225)] to-[oklch(0.58_0.14_245)] text-white flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppWindow, { size: 13 }),
        " Mini App"
      ] })
    ] }) }),
    mode === "private" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateChat, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(GroupChat, {})
  ] });
}
function PrivateChat() {
  const navigate = useNavigate();
  const search = Route$7.useSearch();
  const sendAnonymous = useChatsStore((s) => s.sendAnonymous);
  const chats = useChatsStore((s) => s.chats);
  const totalAnon = useChatsStore((s) => s.totalAnonSentToday);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const setSuperSummary = useChatsStore((s) => s.setSuperSummary);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const setSuperPodcast = useChatsStore((s) => s.setSuperPodcast);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const [msgs, setMsgs] = reactExports.useState(initialPrivate);
  const [typing, setTyping] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [anonStep, setAnonStep] = reactExports.useState("idle");
  const [anonChatId, setAnonChatId] = reactExports.useState(null);
  const [pendingText, setPendingText] = reactExports.useState("");
  const [ignoringMe, setIgnoringMe] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
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
  }, []);
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
  const handleAction = (action, label) => {
    if (label) pushUser(label);
    switch (action) {
      case "open-app":
        setTimeout(() => navigate({
          to: "/home"
        }), 200);
        break;
      // ── Личные функции ──
      case "user-settings": {
        const summaryStatus = superSummaryOn ? "включён" : "выключен";
        const podcastStatus = superPodcastOn ? superPodcastSubscription ? `подписка до ${superPodcastSubscription.expiresAt}` : `${16 - superPodcastFreeMinutesUsed} из 16 бесп. мин` : "выключен";
        const visibilityStatus = ignoringMe ? "игнорируются" : "учитываются";
        const anonChatsCount = chats.filter((c) => c.anonymous?.active).length;
        pushBot({
          text: `⚙️ Настройки бота

🚀 Super-Summary: ${summaryStatus}
🎙 Super Podcast: ${podcastStatus}
🎭 Анонимные сообщения: доступно в ${anonChatsCount} чатах
🙈 Видимость: сообщения ${visibilityStatus}`,
          buttons: [{
            label: "🚀 Super-Summary",
            action: "summary-info"
          }, {
            label: "🎙 Super Podcast",
            action: "podcast-info"
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
      // ── Super-Summary info ──
      case "summary-info": {
        if (!superSummaryOn) {
          pushBot({
            text: "🚀 Super-Summary\n\nКогда чатов много, легко что-то пропустить. Super-Summary собирает саммари из всех чатов, где есть ты и ChatLogix в одно сообщение каждое утро\n\nВместо отдельных саммари внутри каждого чата, вы получаете одно сообщение с итогами по всем группам.\n\nЕсли какой-то чат не попал в ваше Super-Summary, бот не знает, что вы в нем — проявитесь, написав в нем любое сообщение, и на следующий день саммари из этого чата будет включено в Super-Summary\n\nВключи, чтобы получать такую сводку каждое утро.",
            buttons: [{
              label: "✅ Включить Super-Summary",
              action: "enable-super-summary"
            }]
          });
        } else {
          pushBot({
            text: "🚀 Super-Summary работает\n\nСводка приходит каждое утро. Последний раз присылал сегодня",
            buttons: [{
              label: "📋 Показать последний Super-Summary",
              action: "show-last-summary"
            }, {
              label: "🔕 Отключить Super-Summary",
              action: "disable-super-summary"
            }]
          });
        }
        break;
      }
      // ── Enable Super-Summary ──
      case "enable-super-summary":
        setSuperSummary(true);
        pushBot({
          text: "🚀 Super-Summary включен!\n\nЗавтра утром скину первую сводку. Чаты, где вчера было тихо, в отчет не попадают — только то, где что-то обсуждали",
          buttons: [{
            label: "🔕 Отключить Super-Summary",
            action: "disable-super-summary"
          }]
        });
        break;
      // ── Disable Super-Summary ──
      case "disable-super-summary":
        setSuperSummary(false);
        pushBot({
          text: "🔕 Super-Summary отключен\n\nЕжедневные сводки больше приходить не будут. Если ты передумаешь, можно включить заново",
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
          text: `Твой super-summary за последние 24 часа:

${summaryText}`
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
        break;
    }
  };
  const sendInput = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    pushUser(text);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "backdrop-blur-xl bg-background/80 border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-2.5 py-2 grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "✨ Личные функции", onClick: () => handleAction("user-settings") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "❔ Помощь", onClick: () => handleAction("help") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "➕ Добавить бота в чат", onClick: () => handleAction("addbot") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMenuBtn, { label: "🛠 Настройки чатов", onClick: () => navigate({
          to: "/chats"
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 backdrop-blur-xl bg-background/70 border-t border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto px-2.5 py-2.5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 flex items-center justify-center text-foreground/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && sendInput(), placeholder: anonStep === "compose" && anonChatId ? `🎭 Анонимно в «${chats.find((c) => c.id === anonChatId)?.name}»…` : "Сообщение", className: "flex-1 bg-transparent outline-none text-[14px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-foreground/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { size: 20 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendInput, className: "w-10 h-10 rounded-full flex items-center justify-center text-white", style: {
        background: "var(--gradient-primary)"
      }, children: input.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 18 }) })
    ] }) })
  ] });
}
function GroupChat() {
  const navigate = useNavigate();
  const chats = useChatsStore((s) => s.chats);
  const activeChatId = useChatsStore((s) => s.activeChatId);
  const setActiveChat = useChatsStore((s) => s.setActiveChat);
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
  };
  const sendInput = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    if (text.toLowerCase().startsWith("/search")) {
      const q = text.replace(/^\/search\s*/i, "").trim() || "запрос";
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
        text: "Попробуй: `/search тема` для базы знаний, или спам-фразу для проверки антиспама."
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && sendInput(), placeholder: "/search тема, или текст…", className: "flex-1 bg-transparent outline-none text-[14px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendInput, className: "w-10 h-10 rounded-full flex items-center justify-center text-white", style: {
        background: "var(--gradient-primary)"
      }, children: input.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 18 }) })
    ] }) })
  ] });
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
      msg.text,
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
  msg.from === "bot";
  if (isSystem) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]", children: msg.text }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isSelf ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[82%] flex flex-col ${isSelf ? "items-end" : "items-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${isSelf ? "rounded-tr-md text-white" : "bg-white/10 rounded-tl-md"} ${msg.deleted ? "opacity-60 italic" : ""}`, style: isSelf ? {
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
    ] }) : msg.text,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] mt-1 ${isSelf ? "text-white/70" : "text-muted-foreground"} text-right`, children: msg.time })
  ] }) }) });
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
