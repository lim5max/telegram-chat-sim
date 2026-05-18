import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SUMMARY_STYLES } from "./router-BL3E8elt.mjs";
import { i as Check, j as Eye } from "../_libs/lucide-react.mjs";
function Toggle({
  defaultOn = false,
  onChange
}) {
  const [on, setOn] = reactExports.useState(defaultOn);
  reactExports.useEffect(() => {
    setOn(defaultOn);
  }, [defaultOn]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => {
        const v = !on;
        setOn(v);
        onChange?.(v);
      },
      className: `relative w-[51px] h-[31px] rounded-full transition-colors shrink-0 ${on ? "bg-[oklch(0.72_0.18_155)]" : "bg-white/15"}`,
      "aria-pressed": on,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `absolute top-0.5 left-0.5 w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform ${on ? "translate-x-5" : ""}`
        }
      )
    }
  );
}
function SummaryStylePicker({ value, onChange, context }) {
  const [previewing, setPreviewing] = reactExports.useState(null);
  const selected = SUMMARY_STYLES.find((s) => s.id === value) ?? SUMMARY_STYLES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-foreground/50 font-semibold", children: "Стиль саммари" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "text-[10px] font-semibold px-2 py-0.5 rounded-full",
          style: {
            background: `${selected.accent} / 0.15`,
            backgroundColor: `color-mix(in oklch, ${selected.accent} 18%, transparent)`,
            color: selected.accent
          },
          children: [
            selected.emoji,
            " ",
            selected.label
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: SUMMARY_STYLES.map((style) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      StyleRow,
      {
        style,
        selected: style.id === value,
        previewing: previewing === style.id,
        onSelect: () => {
          onChange(style.id);
          if (previewing !== style.id) setPreviewing(style.id);
        },
        onTogglePreview: () => setPreviewing((p) => p === style.id ? null : style.id),
        context
      },
      style.id
    )) })
  ] });
}
function StyleRow({
  style,
  selected,
  previewing,
  onSelect,
  onTogglePreview,
  context
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden transition-all relative",
      style: {
        background: selected ? `linear-gradient(135deg, color-mix(in oklch, ${style.accent} 14%, transparent), color-mix(in oklch, ${style.accent} 4%, transparent))` : "oklch(1 0 0 / 0.04)",
        border: selected ? `1px solid color-mix(in oklch, ${style.accent} 55%, transparent)` : "1px solid oklch(1 0 0 / 0.06)",
        boxShadow: selected ? `0 0 0 1px color-mix(in oklch, ${style.accent} 25%, transparent), 0 12px 28px -16px ${style.accent}` : "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onSelect,
            className: "w-full text-left px-3 py-3 flex items-center gap-3 active:scale-[0.995] transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center text-[20px] shrink-0",
                  style: {
                    background: selected ? `linear-gradient(135deg, ${style.accent}, color-mix(in oklch, ${style.accent} 60%, black))` : "oklch(1 0 0 / 0.06)",
                    boxShadow: selected ? `0 4px 14px -4px ${style.accent}` : "none"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { filter: selected ? "none" : "grayscale(0.2)" }, children: style.emoji })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13.5px] font-semibold leading-tight", children: style.label }),
                  style.id === "uncensored" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[8.5px] font-bold tracking-wider px-1.5 py-px rounded uppercase",
                      style: { background: "oklch(0.65 0.22 25 / 0.2)", color: "oklch(0.82 0.17 25)" },
                      children: "18+"
                    }
                  ),
                  selected && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "ml-auto text-[10px] font-semibold flex items-center gap-1 px-1.5 py-0.5 rounded-full",
                      style: {
                        background: `color-mix(in oklch, ${style.accent} 20%, transparent)`,
                        color: style.accent
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 10, strokeWidth: 3 }),
                        " Выбран"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate mt-0.5", children: style.blurb })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3 -mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onTogglePreview,
            className: "w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[12.5px] font-medium transition active:scale-[0.98]",
            style: {
              background: previewing ? `color-mix(in oklch, ${style.accent} 16%, transparent)` : "oklch(1 0 0 / 0.06)",
              border: previewing ? `1px solid color-mix(in oklch, ${style.accent} 40%, transparent)` : "1px solid oklch(1 0 0 / 0.08)",
              color: previewing ? style.accent : "var(--color-foreground)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13, strokeWidth: 2.2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: previewing ? "Скрыть пример" : "Посмотреть пример" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[11px] transition-transform opacity-70",
                  style: { transform: previewing ? "rotate(180deg)" : "rotate(0deg)" },
                  children: "▾"
                }
              )
            ]
          }
        ) }),
        previewing && /* @__PURE__ */ jsxRuntimeExports.jsx(StylePreview, { style, context })
      ]
    }
  );
}
function StylePreview({ style, context }) {
  const sample = style.samples[context];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3 space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-3 space-y-2",
      style: {
        background: "linear-gradient(180deg, oklch(1 0 0 / 0.06), oklch(1 0 0 / 0.02))",
        border: "1px solid oklch(1 0 0 / 0.06)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0",
              style: {
                background: `linear-gradient(135deg, ${style.accent}, color-mix(in oklch, ${style.accent} 50%, black))`
              },
              children: "CL"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold leading-tight", children: "ChatLogix bot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "сейчас" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12.5px] leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1.5", style: { color: style.accent }, children: sample.header }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 list-none", children: sample.bullets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: style.accent }, children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, i)) }),
          sample.footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-2 pt-2 border-t border-white/5", children: sample.footer })
        ] })
      ]
    }
  ) });
}
export {
  SummaryStylePicker as S,
  Toggle as T
};
