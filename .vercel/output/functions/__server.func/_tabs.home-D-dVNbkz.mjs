import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { u as useChatsStore, F as FEATURE_META } from "./_ssr/router-CacNlKLI.mjs";
import { C as ChatAvatar } from "./_ssr/ChatAvatar-9l8M9lFu.mjs";
import { I as ICON_GRADIENTS, a as FeatureIconBadge } from "./_ssr/FeatureIcon-nBXRY4eQ.mjs";
import { o as U, q as jY, T as Tar, I as Iv, O as OY } from "./_libs/hugeicons__core-free-icons.mjs";
import { H as HugeiconsIcon } from "./_libs/hugeicons__react.mjs";
import { f as ChevronRight } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/zustand.mjs";
import "./_libs/zod.mjs";
function HomeScreen() {
  const chats = useChatsStore((s) => s.chats);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const adminChats = chats.filter((c) => c.isAdmin);
  chats.filter((c) => !c.isAdmin);
  const anonChatsCount = chats.filter((c) => c.anonymous?.active).length;
  const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 space-y-5 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0", style: {
        background: "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.62 0.20 15))"
      }, children: "O" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-semibold", children: "Олег" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 py-1.5 rounded-xl bg-white/10 text-[11px] font-medium text-foreground/80", children: [
          "всего чатов: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: chats.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 py-1.5 rounded-xl bg-white/10 text-[11px] font-medium text-foreground/80", children: [
          "админ: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: adminChats.length })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast("Откройте @ChatLogixBot в Telegram и нажмите «Добавить в группу»"), className: "flex-1 glass-card rounded-2xl py-3 flex items-center justify-center gap-2 text-[13px] font-medium active:scale-[0.98] transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: U, size: 16, strokeWidth: 2 }),
        " Добавить бота"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast("Следите за обновлениями в @chatlogix_news"), className: "flex-1 glass-card rounded-2xl py-3 flex items-center justify-center gap-2 text-[13px] font-medium active:scale-[0.98] transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: jY, size: 16, strokeWidth: 2 }),
        " Новости"
      ] })
    ] }),
    adminChats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Управляемые чаты", right: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chats", className: "flex items-center gap-1", children: [
        "Все ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: adminChats.slice(0, 3).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChatRow, { chat: c }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/me", className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Персональные навыки", right: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        "Открыть ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PersonalRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Tar, size: 16, strokeWidth: 2, color: "white" }), title: "Super-Summary", status: superSummaryOn ? "Включён · ежедневно в 09:00" : "Отключён", on: superSummaryOn, gradient: ICON_GRADIENTS.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PersonalRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Iv, size: 16, strokeWidth: 2, color: "white" }), title: "Super Podcast", status: superPodcastOn ? `Активен · ${freeMinutesLeft} бесплатных мин` : "Не активен", on: superPodcastOn, gradient: ICON_GRADIENTS.podcast }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PersonalRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: OY, size: 16, strokeWidth: 2, color: "white" }), title: "Анонимные сообщения", status: anonChatsCount > 0 ? `Доступно в ${anonChatsCount} чатах` : "Нет доступных чатов", on: anonChatsCount > 0, gradient: ICON_GRADIENTS.anonymous })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Новые навыки", right: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/marketplace", className: "flex items-center gap-1", children: [
        "Все ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk: "podcast" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk: "kb" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk: "antispam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { fk: "anonymous" })
      ] })
    ] })
  ] });
}
function PersonalRow({
  icon,
  title,
  status,
  on,
  gradient
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${on ? "" : "bg-white/8"}`, style: on ? {
      background: gradient ?? "var(--gradient-primary)"
    } : void 0, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold truncate", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" })
  ] });
}
function SectionHeader({
  title,
  right
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-1 pb-2 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground/70", children: title }),
    right && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: right })
  ] });
}
function ChatRow({
  chat: c
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$chatId", params: {
    chatId: c.id
  }, className: "glass-card rounded-[16px] p-3 flex items-center gap-3 active:scale-[0.99] transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatAvatar, { chat: c, size: 40 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-sm truncate", children: [
        c.name,
        " ",
        c.emoji
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
        c.used,
        " сообщ./день · ",
        c.plan
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-muted-foreground" })
  ] });
}
function FeatureCard({
  fk
}) {
  const f = FEATURE_META[fk];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/marketplace", search: {
    feature: fk
  }, className: "glass-card rounded-2xl p-3 active:scale-[0.99] transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIconBadge, { feature: fk, size: 32, iconSize: 16 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mt-1.5", children: f.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5 line-clamp-2", children: f.desc })
  ] });
}
export {
  HomeScreen as component
};
