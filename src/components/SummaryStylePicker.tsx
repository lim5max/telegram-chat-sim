import { useState } from "react";
import { Check, Eye } from "lucide-react";
import {
  SUMMARY_STYLES,
  type SummaryStyle,
  type SummaryStyleId,
  type SummaryContext,
} from "@/data/summaryStyles";

type Props = {
  value: SummaryStyleId;
  onChange: (id: SummaryStyleId) => void;
  context: SummaryContext;
};

export function SummaryStylePicker({ value, onChange, context }: Props) {
  const [previewing, setPreviewing] = useState<SummaryStyleId | null>(null);
  const selected = SUMMARY_STYLES.find((s) => s.id === value) ?? SUMMARY_STYLES[0];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold">
          Стиль саммари
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: `${selected.accent} / 0.15`,
            backgroundColor: `color-mix(in oklch, ${selected.accent} 18%, transparent)`,
            color: selected.accent,
          }}
        >
          {selected.emoji} {selected.label}
        </span>
      </div>

      <div className="space-y-2">
        {SUMMARY_STYLES.map((style) => (
          <StyleRow
            key={style.id}
            style={style}
            selected={style.id === value}
            previewing={previewing === style.id}
            onSelect={() => {
              onChange(style.id);
              if (previewing !== style.id) setPreviewing(style.id);
            }}
            onTogglePreview={() =>
              setPreviewing((p) => (p === style.id ? null : style.id))
            }
            context={context}
          />
        ))}
      </div>
    </div>
  );
}

function StyleRow({
  style,
  selected,
  previewing,
  onSelect,
  onTogglePreview,
  context,
}: {
  style: SummaryStyle;
  selected: boolean;
  previewing: boolean;
  onSelect: () => void;
  onTogglePreview: () => void;
  context: SummaryContext;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all relative"
      style={{
        background: selected
          ? `linear-gradient(135deg, color-mix(in oklch, ${style.accent} 14%, transparent), color-mix(in oklch, ${style.accent} 4%, transparent))`
          : "oklch(1 0 0 / 0.04)",
        border: selected
          ? `1px solid color-mix(in oklch, ${style.accent} 55%, transparent)`
          : "1px solid oklch(1 0 0 / 0.06)",
        boxShadow: selected
          ? `0 0 0 1px color-mix(in oklch, ${style.accent} 25%, transparent), 0 12px 28px -16px ${style.accent}`
          : "none",
      }}
    >
      <button
        onClick={onSelect}
        className="w-full text-left px-3 py-3 flex items-center gap-3 active:scale-[0.995] transition"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] shrink-0"
          style={{
            background: selected
              ? `linear-gradient(135deg, ${style.accent}, color-mix(in oklch, ${style.accent} 60%, black))`
              : "oklch(1 0 0 / 0.06)",
            boxShadow: selected
              ? `0 4px 14px -4px ${style.accent}`
              : "none",
          }}
        >
          <span style={{ filter: selected ? "none" : "grayscale(0.2)" }}>
            {style.emoji}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[13.5px] font-semibold leading-tight">
              {style.label}
            </span>
            {style.id === "uncensored" && (
              <span
                className="text-[8.5px] font-bold tracking-wider px-1.5 py-px rounded uppercase"
                style={{ background: "oklch(0.65 0.22 25 / 0.2)", color: "oklch(0.82 0.17 25)" }}
              >
                18+
              </span>
            )}
            {selected && (
              <span
                className="ml-auto text-[10px] font-semibold flex items-center gap-1 px-1.5 py-0.5 rounded-full"
                style={{
                  background: `color-mix(in oklch, ${style.accent} 20%, transparent)`,
                  color: style.accent,
                }}
              >
                <Check size={10} strokeWidth={3} /> Выбран
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground truncate mt-0.5">
            {style.blurb}
          </div>
        </div>
      </button>

      <div className="px-3 pb-3 -mt-1">
        <button
          onClick={onTogglePreview}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[12.5px] font-medium transition active:scale-[0.98]"
          style={{
            background: previewing
              ? `color-mix(in oklch, ${style.accent} 16%, transparent)`
              : "oklch(1 0 0 / 0.06)",
            border: previewing
              ? `1px solid color-mix(in oklch, ${style.accent} 40%, transparent)`
              : "1px solid oklch(1 0 0 / 0.08)",
            color: previewing ? style.accent : "var(--color-foreground)",
          }}
        >
          <Eye size={13} strokeWidth={2.2} />
          <span>{previewing ? "Скрыть пример" : "Посмотреть пример"}</span>
          <span
            className="text-[11px] transition-transform opacity-70"
            style={{ transform: previewing ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▾
          </span>
        </button>
      </div>

      {previewing && <StylePreview style={style} context={context} />}
    </div>
  );
}

function StylePreview({ style, context }: { style: SummaryStyle; context: SummaryContext }) {
  const sample = style.samples[context];
  return (
    <div className="px-3 pb-3 space-y-2">
      <div
        className="rounded-2xl p-3 space-y-2"
        style={{
          background:
            "linear-gradient(180deg, oklch(1 0 0 / 0.06), oklch(1 0 0 / 0.02))",
          border: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
            style={{
              background: `linear-gradient(135deg, ${style.accent}, color-mix(in oklch, ${style.accent} 50%, black))`,
            }}
          >
            CL
          </div>
          <div className="text-[11px] font-semibold leading-tight">
            ChatLogix bot
          </div>
          <div className="text-[10px] text-muted-foreground">сейчас</div>
        </div>

        <div className="text-[12.5px] leading-relaxed">
          <div className="font-semibold mb-1.5" style={{ color: style.accent }}>
            {sample.header}
          </div>
          <ul className="space-y-1 list-none">
            {sample.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span style={{ color: style.accent }}>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {sample.footer && (
            <div className="text-[11px] text-muted-foreground mt-2 pt-2 border-t border-white/5">
              {sample.footer}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
