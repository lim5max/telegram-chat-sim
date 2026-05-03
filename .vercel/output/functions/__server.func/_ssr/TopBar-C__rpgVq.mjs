import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { r as mn, K as K1 } from "../_libs/hugeicons__core-free-icons.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
function TopBar({
  title,
  subtitle,
  back
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 backdrop-blur-xl bg-background/85 border-b border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[520px] mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-11 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition active:scale-95",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: mn, size: 16, strokeWidth: 2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Вернуться в чат" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-9 h-9 -mr-2 flex items-center justify-center rounded-full text-muted-foreground active:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: K1, size: 20, strokeWidth: 2 }) })
    ] }),
    title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-2 flex items-center gap-3", children: [
      back && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: back.to,
          params: back.params,
          className: "w-8 h-8 -ml-1 flex items-center justify-center rounded-full text-foreground active:bg-white/10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: mn, size: 20, strokeWidth: 2 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] font-semibold truncate", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: subtitle })
      ] })
    ] })
  ] }) });
}
export {
  TopBar as T
};
