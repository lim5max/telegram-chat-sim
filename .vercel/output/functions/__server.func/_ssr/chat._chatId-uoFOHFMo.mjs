import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useMatch, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as TopBar } from "./TopBar-C__rpgVq.mjs";
import { a as Route$6, u as useChatsStore, F as FEATURE_META } from "./router-DwIrenfy.mjs";
import { I as ICON_GRADIENTS, F as FeatureIcon } from "./FeatureIcon-CJCYaFzD.mjs";
import "../_libs/sonner.mjs";
import { T as TrendingUp, e as ArrowLeft, f as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/hugeicons__core-free-icons.mjs";
import "../_libs/hugeicons__react.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
function ChatLayout() {
  const childMatch = useMatch({
    from: "/chat/$chatId/feature/$featureKey",
    shouldThrow: false
  });
  if (childMatch) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatDetails, {});
}
const ALL = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];
function ChatDetails() {
  const {
    chatId
  } = Route$6.useParams();
  const chat = useChatsStore((s) => s.chats.find((c) => c.id === chatId));
  useChatsStore((s) => s.adminAlerts[chatId] ?? 0);
  const sectionRefs = reactExports.useRef({});
  reactExports.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = sectionRefs.current[hash];
      if (el) {
        setTimeout(() => el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        }), 200);
        el.classList.add("ring-2", "ring-[oklch(0.65_0.16_235)]");
        setTimeout(() => el.classList.remove("ring-2", "ring-[oklch(0.65_0.16_235)]"), 1800);
      }
    }
  }, [chatId]);
  if (!chat) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center pb-32", children: "Чат не найден" });
  const activeKeys = ALL.filter((k) => isActive(chat, k));
  const inactiveKeys = ALL.filter((k) => !isActive(chat, k));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: `${chat.name} ${chat.emoji ?? ""}`.trim(), subtitle: `${chat.members.toLocaleString("ru")} участников`, back: {
      to: "/chats"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-4 max-w-[520px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient", children: chat.members.toLocaleString("ru") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "участников" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-[12px] px-2 py-0.5 rounded-full bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.85_0.15_155)] flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 11 }),
            " ",
            chat.activityDelta
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 text-[11px] text-muted-foreground", children: [
          chat.used,
          " сообщ./день · ",
          activeKeys.length,
          " активных функций"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: chat.members.toLocaleString("ru"), label: "участников" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: String(chat.used), label: "сообщ./день" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: String(activeKeys.length), label: "функций вкл." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Включённые функции" }),
      activeKeys.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground italic px-1", children: "Пока ни одной включённой функции. Выберите ниже ↓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: activeKeys.map((fk) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk, chat, setRef: (el) => sectionRefs.current[`f-${fk}`] = el }, fk)) }),
      inactiveKeys.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Доступные функции" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: inactiveKeys.map((fk) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk, chat, setRef: (el) => sectionRefs.current[`f-${fk}`] = el }, fk)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", className: "mt-2 block w-full text-center py-3 rounded-[18px] bg-white/6 hover:bg-white/10 text-[13px] font-medium text-muted-foreground", children: "Все функции в каталоге →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chats", className: "mt-2 flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 rounded-[18px] py-3.5 font-semibold transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
        " Все чаты"
      ] })
    ] })
  ] });
}
function SectionTitle({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 pt-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold", children });
}
function Mini({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-xl py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[18px] font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: label })
  ] });
}
function FeatureCard({
  fk,
  chat,
  setRef
}) {
  const f = FEATURE_META[fk];
  const active = isActive(chat, fk);
  const status = featureStatus(chat, fk);
  const badge = featureBadge(chat, fk);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setRef, id: `f-${fk}`, className: "scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$chatId/feature/$featureKey", params: {
    chatId: chat.id,
    featureKey: fk
  }, className: "glass-card rounded-[18px] p-3.5 flex items-center gap-3 active:scale-[0.99] transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0", style: {
      background: active ? ICON_GRADIENTS[fk] : "rgba(255,255,255,0.08)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature: fk, size: 20, color: active ? "white" : "currentColor" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold flex items-center gap-2", children: [
        f.label,
        badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded font-bold uppercase", style: {
          background: badge.bg,
          color: badge.color
        }, children: badge.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
      featurePlan(chat, fk) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: featurePlan(chat, fk) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-muted-foreground" })
    ] })
  ] }) });
}
function isActive(c, fk) {
  switch (fk) {
    case "summary":
      return c.summary?.active ?? false;
    case "voice":
      return c.voice?.active ?? false;
    case "podcast":
      return c.chatPodcast?.active ?? false;
    case "kb":
      return c.knowledgeBase?.active ?? false;
    case "antispam":
      return c.antispam?.active ?? false;
    case "anonymous":
      return c.anonymous?.active ?? false;
  }
}
function featureStatus(c, fk) {
  switch (fk) {
    case "summary":
      return c.summary?.active ? "Саммари ежедневно в 09:00" : "Отключено";
    case "voice":
      return c.voice?.active ? "Транскрипция работает" : "Отключено";
    case "podcast":
      return c.chatPodcast?.active ? c.chatPodcast.status : "Не подключён";
    case "kb":
      return c.knowledgeBase?.active ? `Использовано ${c.knowledgeBase.quotaUsed} из ${c.knowledgeBase.quotaTotal} запросов` : "Не подключена";
    case "antispam":
      return c.antispam?.active ? `Удалено за 24 ч: ${c.antispam.deleted24h}` : "Отключено";
    case "anonymous":
      return c.anonymous?.active ? `Отправлено ${c.anonymous.sentToday} из 3 сегодня` : "Не разрешены";
  }
}
function featurePlan(c, fk) {
  switch (fk) {
    case "summary":
      return c.plan;
    case "voice":
      return c.voice?.plan ?? null;
    case "podcast":
      return c.chatPodcast?.active ? "$5.99/мес" : null;
    case "antispam":
      return c.antispam?.paid ? "$2.49/мес" : c.antispam?.active ? "Триал" : null;
    default:
      return null;
  }
}
function featureBadge(c, fk) {
  if (isActive(c, fk)) return {
    label: "ВКЛ",
    bg: "oklch(0.72 0.16 155 / 0.20)",
    color: "oklch(0.85 0.15 155)"
  };
  if (fk === "podcast") return {
    label: "ПРОБНЫЙ",
    bg: "oklch(0.60 0.16 235 / 0.20)",
    color: "oklch(0.78 0.12 235)"
  };
  if (fk === "kb") return {
    label: "НОВОЕ",
    bg: "oklch(0.60 0.16 235 / 0.20)",
    color: "oklch(0.78 0.12 235)"
  };
  return null;
}
export {
  ChatLayout as component
};
