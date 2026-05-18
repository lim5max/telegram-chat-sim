import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { u as useChatsStore, F as FEATURE_META } from "./_ssr/router-CSOYlsPT.mjs";
import { C as ChatAvatar } from "./_ssr/ChatAvatar-9l8M9lFu.mjs";
import { a as FeatureIconBadge } from "./_ssr/FeatureIcon-DwuoPByi.mjs";
import { r as U } from "./_libs/hugeicons__core-free-icons.mjs";
import { H as HugeiconsIcon } from "./_libs/hugeicons__react.mjs";
import { b as ChevronRight } from "./_libs/lucide-react.mjs";
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
const FEATURE_ORDER = ["summary", "voice", "podcast", "antispam", "kb", "anonymous"];
function ChatsScreen() {
  const chats = useChatsStore((s) => s.chats);
  const adminChats = chats.filter((c) => c.isAdmin);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 space-y-4 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Чаты" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast("Откройте @ChatLogixBot в Telegram и нажмите «Добавить в группу»"), className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-[12px] font-medium transition active:scale-95", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: U, size: 14, strokeWidth: 2 }),
        " Добавить бота"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: adminChats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChatCard, { chat: c }, c.id)) })
  ] });
}
function ChatCard({
  chat: c
}) {
  const activeFeatures = FEATURE_ORDER.filter((fk) => isActive(c, fk));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$chatId", params: {
      chatId: c.id
    }, className: "flex items-center gap-3 active:scale-[0.99] transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatAvatar, { chat: c, size: 48 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold truncate", children: [
          c.name,
          " ",
          c.emoji
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-[11px] text-muted-foreground", children: [
          c.members.toLocaleString("ru"),
          " участников"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-muted-foreground shrink-0" })
    ] }),
    activeFeatures.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-white/8 flex items-center gap-1.5", children: [
      activeFeatures.slice(0, 4).map((fk) => {
        const f = FEATURE_META[fk];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/chat/$chatId", params: {
          chatId: c.id
        }, hash: `f-${fk}`, className: "active:scale-95 transition", title: `${f.label} — ${f.desc}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIconBadge, { feature: fk, size: 36, iconSize: 16 }) }, fk);
      }),
      activeFeatures.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$chatId", params: {
        chatId: c.id
      }, className: "w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 transition flex items-center justify-center text-[11px] font-semibold text-muted-foreground", children: [
        "+",
        activeFeatures.length - 4
      ] })
    ] })
  ] });
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
export {
  ChatsScreen as component
};
