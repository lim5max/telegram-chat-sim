import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SUMMARY_STYLES, C as CUSTOM_STYLE_DAILY_LIMIT } from "./router-DtUwy9Rh.mjs";
import { d as consumeCustomStyleAttempt, e as customStylePrompt, c as customStyleRemaining, f as showPaywallToast } from "./summaryStyleToast-BCWtiTny.mjs";
import { k as Check, l as Eye, S as Sparkles, L as Lock } from "../_libs/lucide-react.mjs";
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
const UI_ACCENT = "oklch(0.65 0.16 235)";
function SummaryStylePicker({
  value,
  onChange,
  context,
  isPro = true,
  onUpgrade,
  onApplyCustom
}) {
  const builtIn = SUMMARY_STYLES.filter((s) => s.id !== "custom");
  const customStyle = SUMMARY_STYLES.find((s) => s.id === "custom");
  const selected = SUMMARY_STYLES.find((s) => s.id === value) ?? SUMMARY_STYLES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-foreground/50 font-semibold", children: "Стиль саммари" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "text-[10px] font-semibold px-2 py-0.5 rounded-full",
          style: {
            backgroundColor: `color-mix(in oklch, ${UI_ACCENT} 18%, transparent)`,
            color: UI_ACCENT
          },
          children: [
            selected.emoji,
            " ",
            selected.label
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: builtIn.map((style) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      StyleRow,
      {
        style,
        selected: style.id === value,
        onSelect: () => onChange(style.id),
        context
      },
      style.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomStylePanel,
      {
        style: customStyle,
        selected: value === "custom",
        isPro,
        onUpgrade,
        onApply: (prompt) => {
          const res = consumeCustomStyleAttempt(prompt);
          if (!res.ok) return res;
          onChange("custom");
          onApplyCustom?.();
          return res;
        }
      }
    )
  ] });
}
function StyleRow({
  style,
  selected,
  onSelect,
  context
}) {
  const [previewing, setPreviewing] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden transition-all relative",
      style: {
        background: selected ? `linear-gradient(135deg, color-mix(in oklch, ${UI_ACCENT} 14%, transparent), color-mix(in oklch, ${UI_ACCENT} 4%, transparent))` : "oklch(1 0 0 / 0.04)",
        border: selected ? `1px solid color-mix(in oklch, ${UI_ACCENT} 55%, transparent)` : "1px solid oklch(1 0 0 / 0.06)",
        boxShadow: selected ? `0 0 0 1px color-mix(in oklch, ${UI_ACCENT} 25%, transparent), 0 12px 28px -16px ${UI_ACCENT}` : "none"
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
                    background: selected ? `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 60%, black))` : "oklch(1 0 0 / 0.06)",
                    boxShadow: selected ? `0 4px 14px -4px ${UI_ACCENT}` : "none"
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
                      style: {
                        background: "oklch(0.65 0.22 25 / 0.2)",
                        color: "oklch(0.82 0.17 25)"
                      },
                      children: "18+"
                    }
                  ),
                  selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "aria-label": "Выбран",
                      className: "ml-auto w-5 h-5 rounded-full flex items-center justify-center",
                      style: { background: UI_ACCENT, color: "white" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, strokeWidth: 3 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate mt-0.5", children: style.blurb })
              ] })
            ]
          }
        ),
        !selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3 -mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setPreviewing((p) => !p),
            className: "w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[12.5px] font-medium transition active:scale-[0.98]",
            style: {
              background: previewing ? `color-mix(in oklch, ${UI_ACCENT} 16%, transparent)` : "oklch(1 0 0 / 0.06)",
              border: previewing ? `1px solid color-mix(in oklch, ${UI_ACCENT} 40%, transparent)` : "1px solid oklch(1 0 0 / 0.08)",
              color: previewing ? UI_ACCENT : "var(--color-foreground)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13, strokeWidth: 2.2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: previewing ? "Скрыть пример" : "Посмотреть пример" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[11px] transition-transform opacity-70",
                  style: {
                    transform: previewing ? "rotate(180deg)" : "rotate(0deg)"
                  },
                  children: "▾"
                }
              )
            ]
          }
        ) }),
        (selected || previewing) && /* @__PURE__ */ jsxRuntimeExports.jsx(StylePreview, { style, context })
      ]
    }
  );
}
function StylePreview({
  style,
  context
}) {
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
                background: `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 50%, black))`
              },
              children: "CL"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold leading-tight", children: "ChatLogix bot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "сейчас" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12.5px] leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1.5", style: { color: UI_ACCENT }, children: sample.header }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 list-none", children: sample.bullets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: UI_ACCENT }, children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, i)) })
        ] })
      ]
    }
  ) });
}
function CustomStylePanel({
  style,
  selected,
  isPro,
  onUpgrade,
  onApply
}) {
  const [text, setText] = reactExports.useState(customStylePrompt() ?? "");
  const [remaining, setRemaining] = reactExports.useState(customStyleRemaining());
  const [error, setError] = reactExports.useState(null);
  const locked = !isPro;
  const noQuota = isPro && remaining <= 0;
  const disabled = locked || noQuota || !text.trim();
  const handleApply = () => {
    if (locked) {
      showPaywallToast(onUpgrade);
      return;
    }
    if (!text.trim()) {
      setError("Опишите тон одной строкой");
      return;
    }
    const res = onApply(text);
    if (!res.ok) {
      setError(res.reason === "quota" ? "Лимит на сегодня исчерпан" : "Не получилось");
      return;
    }
    setError(null);
    setRemaining(res.remaining);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl overflow-hidden transition-all relative",
      style: {
        background: selected ? `linear-gradient(135deg, color-mix(in oklch, ${UI_ACCENT} 14%, transparent), color-mix(in oklch, ${UI_ACCENT} 4%, transparent))` : "oklch(1 0 0 / 0.04)",
        border: selected ? `1px solid color-mix(in oklch, ${UI_ACCENT} 55%, transparent)` : "1px solid oklch(1 0 0 / 0.06)",
        boxShadow: selected ? `0 0 0 1px color-mix(in oklch, ${UI_ACCENT} 25%, transparent), 0 12px 28px -16px ${UI_ACCENT}` : "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-2 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-xl flex items-center justify-center text-[20px] shrink-0",
              style: {
                background: `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 60%, black))`,
                boxShadow: `0 4px 14px -4px ${UI_ACCENT}`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18, strokeWidth: 2.2, color: "white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13.5px] font-semibold leading-tight", children: style.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[8.5px] font-bold tracking-wider px-1.5 py-px rounded uppercase",
                  style: {
                    background: `color-mix(in oklch, ${UI_ACCENT} 22%, transparent)`,
                    color: UI_ACCENT
                  },
                  children: "PRO"
                }
              ),
              selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-label": "Выбран",
                  className: "ml-auto w-5 h-5 rounded-full flex items-center justify-center",
                  style: { background: UI_ACCENT, color: "white" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, strokeWidth: 3 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: isPro ? `Свой промпт · осталось ${remaining}/${CUSTOM_STYLE_DAILY_LIMIT} на сегодня` : "Свой промпт — доступно на PRO" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: text,
              onChange: (e) => {
                setText(e.target.value.slice(0, 240));
                setError(null);
              },
              disabled: locked,
              rows: 3,
              placeholder: "Опишите тон одной строкой. Например: пересказывай как Лебедев в студии — кратко, саркастично.",
              className: "w-full bg-white/8 rounded-xl px-3.5 py-2.5 text-[13px] outline-none placeholder:text-muted-foreground/50 resize-none disabled:opacity-50",
              style: {
                border: error ? "1px solid oklch(0.65 0.22 25 / 0.5)" : "1px solid oklch(1 0 0 / 0.08)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: error ? "text-[oklch(0.82_0.17_25)]" : "text-muted-foreground", children: error ?? `${text.length}/240` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: isPro ? noQuota ? "Лимит на сегодня исчерпан" : `${remaining}/${CUSTOM_STYLE_DAILY_LIMIT} попыток` : "Только PRO" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleApply,
              disabled,
              className: "w-full py-2.5 rounded-xl text-[13px] font-semibold transition active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2",
              style: {
                background: locked ? "oklch(1 0 0 / 0.06)" : `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 65%, black))`,
                color: locked ? "var(--color-foreground)" : "white",
                border: locked ? "1px solid oklch(1 0 0 / 0.08)" : "none"
              },
              children: [
                locked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 14, strokeWidth: 2.2 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, strokeWidth: 2.2 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: locked ? "Купить PRO" : selected ? "Обновить промпт" : "Применить" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  SummaryStylePicker as S,
  Toggle as T
};
