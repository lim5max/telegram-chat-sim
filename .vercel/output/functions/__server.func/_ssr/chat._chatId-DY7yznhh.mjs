import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useMatch, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as TopBar } from "./TopBar-C__rpgVq.mjs";
import { T as Toggle } from "./Toggle-DZeKeTz7.mjs";
import { a as Route$6, u as useChatsStore, F as FEATURE_META } from "./router-CDFNt7Vw.mjs";
import { I as ICON_GRADIENTS, F as FeatureIcon } from "./FeatureIcon-nBXRY4eQ.mjs";
import { F as FeatureSettings } from "./FeatureSettings-CGZhDRan.mjs";
import { T as TrendingUp, e as ChevronDown } from "../_libs/lucide-react.mjs";
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
  const toggleFeature = useChatsStore((s) => s.toggleFeature);
  const sectionRefs = reactExports.useRef({});
  const [expanded, setExpanded] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const fk = hash.replace("f-", "");
      if (ALL.includes(fk)) setExpanded(fk);
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
  const toggleExpand = (fk) => setExpanded((prev) => prev === fk ? null : fk);
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: String(chat.used), label: "сообщ./день" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: String(activeKeys.length), label: "навыков вкл." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: `+${chat.newMembers}`, label: "новых участн." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Включённые навыки" }),
      activeKeys.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground italic px-1", children: "Пока ни одного включённого навыка. Выберите ниже ↓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: activeKeys.map((fk) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk, chat, chatId, isExpanded: expanded === fk, onToggleExpand: () => toggleExpand(fk), onToggleFeature: () => toggleFeature(chatId, fk), setRef: (el) => sectionRefs.current[`f-${fk}`] = el }, fk)) }),
      inactiveKeys.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { children: "Доступные навыки" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: inactiveKeys.map((fk) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk, chat, chatId, isExpanded: expanded === fk, onToggleExpand: () => toggleExpand(fk), onToggleFeature: () => toggleFeature(chatId, fk), setRef: (el) => sectionRefs.current[`f-${fk}`] = el }, fk)) })
    ] })
  ] });
}
function SectionTitle({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 pt-2 text-[13px] font-semibold text-foreground/70", children });
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
  chatId,
  isExpanded,
  onToggleExpand,
  onToggleFeature,
  setRef
}) {
  const f = FEATURE_META[fk];
  const active = isActive(chat, fk);
  const status = featureStatus(chat, fk);
  const badge = featureBadge(chat, fk);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setRef, id: `f-${fk}`, className: "scroll-mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[18px] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onToggleExpand, className: "w-full p-3.5 flex items-center gap-3 active:scale-[0.99] transition text-left", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}` })
      ] })
    ] }),
    isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3.5 pb-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium", children: active ? "Включено" : "Отключено" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: active, onChange: (v) => {
          onToggleFeature();
          toast(v ? `${f.label} включён` : `${f.label} отключён`);
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureSettings, { fk, chat })
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
      return c.voice?.active ? "Расшифровка работает" : "Отключено";
    case "podcast":
      return c.chatPodcast?.active ? c.chatPodcast.status : "Отключено";
    case "kb":
      return c.knowledgeBase?.active ? `Использовано ${c.knowledgeBase.quotaUsed} из ${c.knowledgeBase.quotaTotal} запросов` : "Отключено";
    case "antispam":
      return c.antispam?.active ? `Удалено за 24 ч: ${c.antispam.deleted24h}` : "Отключено";
    case "anonymous":
      return c.anonymous?.active ? `Доступно · 3 в день` : "Отключено";
  }
}
function featurePlan(c, fk) {
  switch (fk) {
    case "summary":
      return c.plan;
    case "voice":
      return c.voice?.plan ?? null;
    case "podcast":
      return c.chatPodcast?.active ? "Pro" : null;
    case "antispam":
      return c.antispam?.paid ? "Pro" : c.antispam?.active ? "Free" : null;
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
  return null;
}
export {
  ChatLayout as component
};
