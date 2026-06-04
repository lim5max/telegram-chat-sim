import { t as toast } from "../_libs/sonner.mjs";
import { C as CUSTOM_STYLE_DAILY_LIMIT, S as SUMMARY_STYLES } from "./router-PagneTqV.mjs";
const STORAGE_KEY = "chatlogix:customStyleUsage";
function todayKey() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function readUsage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: todayKey(), used: 0 };
    const parsed = JSON.parse(raw);
    if (parsed.date !== todayKey()) return { date: todayKey(), used: 0 };
    return parsed;
  } catch {
    return { date: todayKey(), used: 0 };
  }
}
function writeUsage(u) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
  } catch {
  }
}
function customStyleRemaining() {
  return Math.max(0, CUSTOM_STYLE_DAILY_LIMIT - readUsage().used);
}
function customStylePrompt() {
  return readUsage().prompt;
}
function consumeCustomStyleAttempt(prompt) {
  const usage = readUsage();
  if (usage.used >= CUSTOM_STYLE_DAILY_LIMIT) {
    return { ok: false, remaining: 0, reason: "quota" };
  }
  const next = {
    date: todayKey(),
    used: usage.used + 1,
    prompt: prompt.trim()
  };
  writeUsage(next);
  return { ok: true, remaining: CUSTOM_STYLE_DAILY_LIMIT - next.used };
}
function styleById(id) {
  return SUMMARY_STYLES.find((s) => s.id === id) ?? SUMMARY_STYLES[0];
}
function buildStyledSummaryText(id, context) {
  const style = styleById(id);
  const sample = style.samples[context];
  if (id === "custom") {
    const userPrompt = customStylePrompt();
    const header = `${style.emoji} Саммари в вашем стиле`;
    const lines2 = [header];
    if (userPrompt) {
      lines2.push(`Промпт: «${userPrompt}»`);
    }
    lines2.push("");
    lines2.push(...sample.bullets.map((b) => `• ${b}`));
    return lines2.join("\n");
  }
  const lines = [
    `${style.emoji} ${sample.header}`,
    "",
    ...sample.bullets.map((b) => `• ${b}`)
  ];
  return lines.join("\n");
}
function buildStyledSummaryButtons(chatId, styleId) {
  return [
    { label: "✅ Сохранить стиль", action: `summary-save:${chatId}:${styleId}` },
    {
      label: styleId === "custom" ? "✏️ Изменить промпт" : "✏️ Изменить в настройках",
      action: `summary-edit:${chatId}:${styleId}`
    }
  ];
}
function showPreviewInChatToast(opts) {
  toast(`Стиль выбран: ${opts.styleLabel}`, {
    description: "Показать пример саммари за вчера в чате?",
    action: { label: "Показать в чате", onClick: opts.onShow }
  });
}
function showPaywallToast(onUpgrade) {
  toast("Свой стиль — на тарифе PRO", {
    description: "3 кастомных генерации в сутки. Опишите тон одной строкой.",
    action: onUpgrade ? { label: "Купить PRO", onClick: onUpgrade } : void 0
  });
}
export {
  buildStyledSummaryText as a,
  buildStyledSummaryButtons as b,
  customStyleRemaining as c,
  consumeCustomStyleAttempt as d,
  customStylePrompt as e,
  showPaywallToast as f,
  showPreviewInChatToast as s
};
