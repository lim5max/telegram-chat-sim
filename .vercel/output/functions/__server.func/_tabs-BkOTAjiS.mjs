import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { O as Outlet, L as Link } from "./_libs/tanstack__react-router.mjs";
import { h as hU, c as c$, u as ub, T as Tar, a as TZr } from "./_libs/hugeicons__core-free-icons.mjs";
import { T as TopBar } from "./_ssr/TopBar-C__rpgVq.mjs";
import { H as HugeiconsIcon } from "./_libs/hugeicons__react.mjs";
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
const tabs = [
  { to: "/home", label: "Главная", icon: hU },
  { to: "/chats", label: "Чаты", icon: c$ },
  { to: "/marketplace", label: "Каталог", icon: ub },
  { to: "/me", label: "Личное", icon: Tar },
  { to: "/profile", label: "Профиль", icon: TZr }
];
function BottomNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/85 border-t border-white/10 pb-[env(safe-area-inset-bottom)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[520px] mx-auto grid grid-cols-5", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: t.to,
      activeProps: { className: "text-white" },
      inactiveProps: { className: "text-muted-foreground" },
      className: "flex flex-col items-center gap-0.5 py-2.5 transition active:scale-95",
      children: ({ isActive }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-9 h-9 rounded-full flex items-center justify-center transition ${isActive ? "bg-white/15" : ""}`,
            style: isActive ? { background: "var(--gradient-primary)" } : void 0,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: t.icon, size: 18, strokeWidth: 2, className: isActive ? "text-white" : "" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: t.label })
      ] })
    },
    t.to
  )) }) });
}
function TabsLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-[88px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {})
  ] });
}
export {
  TabsLayout as component
};
