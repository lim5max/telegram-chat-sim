import { toast } from "sonner";
import {
  SUMMARY_STYLES,
  CUSTOM_STYLE_DAILY_LIMIT,
  type SummaryStyleId,
  type SummaryContext,
} from "@/data/summaryStyles";

const STORAGE_KEY = "chatlogix:customStyleUsage";

type Usage = { date: string; used: number; prompt?: string };

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readUsage(): Usage {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: todayKey(), used: 0 };
    const parsed = JSON.parse(raw) as Usage;
    if (parsed.date !== todayKey()) return { date: todayKey(), used: 0 };
    return parsed;
  } catch {
    return { date: todayKey(), used: 0 };
  }
}

function writeUsage(u: Usage) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
  } catch {
    /* ignore */
  }
}

export function customStyleRemaining(): number {
  return Math.max(0, CUSTOM_STYLE_DAILY_LIMIT - readUsage().used);
}

export function customStylePrompt(): string | undefined {
  return readUsage().prompt;
}

export function consumeCustomStyleAttempt(prompt: string): {
  ok: boolean;
  remaining: number;
  reason?: "quota";
} {
  const usage = readUsage();
  if (usage.used >= CUSTOM_STYLE_DAILY_LIMIT) {
    return { ok: false, remaining: 0, reason: "quota" };
  }
  const next: Usage = {
    date: todayKey(),
    used: usage.used + 1,
    prompt: prompt.trim(),
  };
  writeUsage(next);
  return { ok: true, remaining: CUSTOM_STYLE_DAILY_LIMIT - next.used };
}

function styleById(id: SummaryStyleId) {
  return SUMMARY_STYLES.find((s) => s.id === id) ?? SUMMARY_STYLES[0];
}

export function buildStyledSummaryText(
  id: SummaryStyleId,
  context: SummaryContext,
): string {
  const style = styleById(id);
  const sample = style.samples[context];

  if (id === "custom") {
    const userPrompt = customStylePrompt();
    const header = `${style.emoji} Саммари в вашем стиле`;
    const lines = [header];
    if (userPrompt) {
      lines.push(`Промпт: «${userPrompt}»`);
    }
    lines.push("");
    lines.push(...sample.bullets.map((b) => `• ${b}`));
    return lines.join("\n");
  }

  const lines = [
    `${style.emoji} ${sample.header}`,
    "",
    ...sample.bullets.map((b) => `• ${b}`),
  ];
  return lines.join("\n");
}

export function buildStyledSummaryButtons(
  chatId: string,
  styleId: SummaryStyleId,
): { label: string; action: string }[] {
  return [
    { label: "✅ Сохранить стиль", action: `summary-save:${chatId}:${styleId}` },
    {
      label: styleId === "custom" ? "✏️ Изменить промпт" : "✏️ Изменить в настройках",
      action: `summary-edit:${chatId}:${styleId}`,
    },
  ];
}

export function showPreviewInChatToast(opts: {
  styleId: SummaryStyleId;
  styleLabel: string;
  onShow: () => void;
}) {
  toast(`Стиль выбран: ${opts.styleLabel}`, {
    description: "Показать пример саммари за вчера в чате?",
    action: { label: "Показать в чате", onClick: opts.onShow },
  });
}

export function showPaywallToast(onUpgrade?: () => void) {
  toast("Свой стиль — на тарифе PRO", {
    description: "3 кастомных генерации в сутки. Опишите тон одной строкой.",
    action: onUpgrade ? { label: "Купить PRO", onClick: onUpgrade } : undefined,
  });
}
