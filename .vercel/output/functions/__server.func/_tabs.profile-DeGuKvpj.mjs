import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { d as dZ, O as OY, K as KB } from "./_libs/hugeicons__core-free-icons.mjs";
import { u as useChatsStore } from "./_ssr/router-Cx3ciUei.mjs";
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
function ProfileScreen() {
  const chats = useChatsStore((s) => s.chats);
  const adminCount = chats.filter((c) => c.isAdmin).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 space-y-4 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Профиль" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold", style: {
        background: "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.62 0.20 15))"
      }, children: "O" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-lg", children: "Олег" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground", children: "@oleg · id 1234567" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 mt-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground", children: [
            chats.length,
            " общих с ботом"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground", children: [
            "админ в ",
            adminCount,
            " чатах"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/subscriptions", className: "w-full text-left glass-card rounded-[20px] p-4 flex items-center gap-3 active:scale-[0.99] transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center", style: {
        background: "var(--gradient-primary)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: dZ, size: 20, strokeWidth: 2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Мои подписки" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-0.5", children: "Подписки по чатам и личные, даты продления" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18, className: "text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: OY, size: 16, strokeWidth: 2 }), label: "Поддержка", onClick: () => toast("Напишите нам: @ChatLogixSupport") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: KB, size: 16, strokeWidth: 2 }), label: "Условия использования", onClick: () => toast("Документ откроется в браузере.") })
    ] })
  ] });
}
function Row({
  icon,
  label,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: "w-full px-4 py-3.5 flex items-center gap-3 hover:bg-white/5 active:bg-white/8 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-left text-sm", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-muted-foreground" })
  ] });
}
export {
  ProfileScreen as component
};
