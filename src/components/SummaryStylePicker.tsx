import { useState } from "react";
import { Check, Eye, Lock, Sparkles } from "lucide-react";
import {
  SUMMARY_STYLES,
  CUSTOM_STYLE_DAILY_LIMIT,
  type SummaryStyle,
  type SummaryStyleId,
  type SummaryContext,
} from "@/data/summaryStyles";
import {
  consumeCustomStyleAttempt,
  customStylePrompt,
  customStyleRemaining,
  showPaywallToast,
} from "@/lib/summaryStyleToast";

type Props = {
  value: SummaryStyleId;
  onChange: (id: SummaryStyleId) => void;
  context: SummaryContext;
  isPro?: boolean;
  onUpgrade?: () => void;
  onApplyCustom?: () => void;
};

const UI_ACCENT = "oklch(0.65 0.16 235)";

export function SummaryStylePicker({
  value,
  onChange,
  context,
  isPro = true,
  onUpgrade,
  onApplyCustom,
}: Props) {
  const builtIn = SUMMARY_STYLES.filter((s) => s.id !== "custom");
  const customStyle = SUMMARY_STYLES.find((s) => s.id === "custom")!;
  const selected =
    SUMMARY_STYLES.find((s) => s.id === value) ?? SUMMARY_STYLES[0];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold">
          Стиль саммари
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `color-mix(in oklch, ${UI_ACCENT} 18%, transparent)`,
            color: UI_ACCENT,
          }}
        >
          {selected.emoji} {selected.label}
        </span>
      </div>

      <div className="space-y-2">
        {builtIn.map((style) => (
          <StyleRow
            key={style.id}
            style={style}
            selected={style.id === value}
            onSelect={() => onChange(style.id)}
            context={context}
          />
        ))}
      </div>

      <CustomStylePanel
        style={customStyle}
        selected={value === "custom"}
        isPro={isPro}
        onUpgrade={onUpgrade}
        onApply={(prompt) => {
          const res = consumeCustomStyleAttempt(prompt);
          if (!res.ok) return res;
          onChange("custom");
          onApplyCustom?.();
          return res;
        }}
      />
    </div>
  );
}

function StyleRow({
  style,
  selected,
  onSelect,
  context,
}: {
  style: SummaryStyle;
  selected: boolean;
  onSelect: () => void;
  context: SummaryContext;
}) {
  const [previewing, setPreviewing] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all relative"
      style={{
        background: selected
          ? `linear-gradient(135deg, color-mix(in oklch, ${UI_ACCENT} 14%, transparent), color-mix(in oklch, ${UI_ACCENT} 4%, transparent))`
          : "oklch(1 0 0 / 0.04)",
        border: selected
          ? `1px solid color-mix(in oklch, ${UI_ACCENT} 55%, transparent)`
          : "1px solid oklch(1 0 0 / 0.06)",
        boxShadow: selected
          ? `0 0 0 1px color-mix(in oklch, ${UI_ACCENT} 25%, transparent), 0 12px 28px -16px ${UI_ACCENT}`
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
              ? `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 60%, black))`
              : "oklch(1 0 0 / 0.06)",
            boxShadow: selected ? `0 4px 14px -4px ${UI_ACCENT}` : "none",
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
                style={{
                  background: "oklch(0.65 0.22 25 / 0.2)",
                  color: "oklch(0.82 0.17 25)",
                }}
              >
                18+
              </span>
            )}
            {selected && (
              <span
                aria-label="Выбран"
                className="ml-auto w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: UI_ACCENT, color: "white" }}
              >
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground truncate mt-0.5">
            {style.blurb}
          </div>
        </div>
      </button>

      {!selected && (
        <div className="px-3 pb-3 -mt-1">
          <button
            onClick={() => setPreviewing((p) => !p)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[12.5px] font-medium transition active:scale-[0.98]"
            style={{
              background: previewing
                ? `color-mix(in oklch, ${UI_ACCENT} 16%, transparent)`
                : "oklch(1 0 0 / 0.06)",
              border: previewing
                ? `1px solid color-mix(in oklch, ${UI_ACCENT} 40%, transparent)`
                : "1px solid oklch(1 0 0 / 0.08)",
              color: previewing ? UI_ACCENT : "var(--color-foreground)",
            }}
          >
            <Eye size={13} strokeWidth={2.2} />
            <span>{previewing ? "Скрыть пример" : "Посмотреть пример"}</span>
            <span
              className="text-[11px] transition-transform opacity-70"
              style={{
                transform: previewing ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▾
            </span>
          </button>
        </div>
      )}

      {(selected || previewing) && (
        <StylePreview style={style} context={context} />
      )}
    </div>
  );
}

function StylePreview({
  style,
  context,
}: {
  style: SummaryStyle;
  context: SummaryContext;
}) {
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
              background: `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 50%, black))`,
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
          <div className="font-semibold mb-1.5" style={{ color: UI_ACCENT }}>
            {sample.header}
          </div>
          <ul className="space-y-1 list-none">
            {sample.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span style={{ color: UI_ACCENT }}>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CustomStylePanel({
  style,
  selected,
  isPro,
  onUpgrade,
  onApply,
}: {
  style: SummaryStyle;
  selected: boolean;
  isPro: boolean;
  onUpgrade?: () => void;
  onApply: (prompt: string) => { ok: boolean; remaining: number; reason?: "quota" };
}) {
  const [text, setText] = useState(customStylePrompt() ?? "");
  const [remaining, setRemaining] = useState(customStyleRemaining());
  const [error, setError] = useState<string | null>(null);
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

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all relative"
      style={{
        background: selected
          ? `linear-gradient(135deg, color-mix(in oklch, ${UI_ACCENT} 14%, transparent), color-mix(in oklch, ${UI_ACCENT} 4%, transparent))`
          : "oklch(1 0 0 / 0.04)",
        border: selected
          ? `1px solid color-mix(in oklch, ${UI_ACCENT} 55%, transparent)`
          : "1px solid oklch(1 0 0 / 0.06)",
        boxShadow: selected
          ? `0 0 0 1px color-mix(in oklch, ${UI_ACCENT} 25%, transparent), 0 12px 28px -16px ${UI_ACCENT}`
          : "none",
      }}
    >
      <div className="px-3 pt-3 pb-2 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] shrink-0"
          style={{
            background: `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 60%, black))`,
            boxShadow: `0 4px 14px -4px ${UI_ACCENT}`,
          }}
        >
          <Sparkles size={18} strokeWidth={2.2} color="white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[13.5px] font-semibold leading-tight">
              {style.label}
            </span>
            <span
              className="text-[8.5px] font-bold tracking-wider px-1.5 py-px rounded uppercase"
              style={{
                background: `color-mix(in oklch, ${UI_ACCENT} 22%, transparent)`,
                color: UI_ACCENT,
              }}
            >
              PRO
            </span>
            {selected && (
              <span
                aria-label="Выбран"
                className="ml-auto w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: UI_ACCENT, color: "white" }}
              >
                <Check size={12} strokeWidth={3} />
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground mt-0.5">
            {isPro
              ? `Свой промпт · осталось ${remaining}/${CUSTOM_STYLE_DAILY_LIMIT} на сегодня`
              : "Свой промпт — доступно на PRO"}
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 space-y-2">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value.slice(0, 240));
            setError(null);
          }}
          disabled={locked}
          rows={3}
          placeholder="Опишите тон одной строкой. Например: пересказывай как Лебедев в студии — кратко, саркастично."
          className="w-full bg-white/8 rounded-xl px-3.5 py-2.5 text-[13px] outline-none placeholder:text-muted-foreground/50 resize-none disabled:opacity-50"
          style={{
            border: error
              ? "1px solid oklch(0.65 0.22 25 / 0.5)"
              : "1px solid oklch(1 0 0 / 0.08)",
          }}
        />
        <div className="flex items-center justify-between text-[10px]">
          <span className={error ? "text-[oklch(0.82_0.17_25)]" : "text-muted-foreground"}>
            {error ?? `${text.length}/240`}
          </span>
          <span className="text-muted-foreground">
            {isPro
              ? noQuota
                ? "Лимит на сегодня исчерпан"
                : `${remaining}/${CUSTOM_STYLE_DAILY_LIMIT} попыток`
              : "Только PRO"}
          </span>
        </div>

        <button
          onClick={handleApply}
          disabled={disabled}
          className="w-full py-2.5 rounded-xl text-[13px] font-semibold transition active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          style={{
            background: locked
              ? "oklch(1 0 0 / 0.06)"
              : `linear-gradient(135deg, ${UI_ACCENT}, color-mix(in oklch, ${UI_ACCENT} 65%, black))`,
            color: locked ? "var(--color-foreground)" : "white",
            border: locked ? "1px solid oklch(1 0 0 / 0.08)" : "none",
          }}
        >
          {locked ? <Lock size={14} strokeWidth={2.2} /> : <Sparkles size={14} strokeWidth={2.2} />}
          <span>{locked ? "Купить PRO" : selected ? "Обновить промпт" : "Применить"}</span>
        </button>
      </div>
    </div>
  );
}
