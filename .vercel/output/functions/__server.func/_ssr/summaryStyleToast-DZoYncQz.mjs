import { t as toast } from "../_libs/sonner.mjs";
import { C as CUSTOM_STYLE_DAILY_LIMIT, S as SUMMARY_STYLES } from "./router-Ka44_1ec.mjs";
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
const CHAT_PREVIEW_INTRO = "Давай покажу, как этот стиль будет выглядеть на примере — вот один день из чата «Здоровое питание»:\n\n🗓 Что обсуждалось вчера 28.04.2026\nВсего было написано **112 сообщений**";
const CHAT_PREVIEW_LINKS = "Интересные ссылки:\n[Калькулятор КБЖУ онлайн]\n[Подборка рецептов на неделю]";
function buildStyledSummaryText(id, context) {
  const style = styleById(id);
  const sample = style.samples[context];
  let body;
  if (id === "custom") {
    const header = `${style.emoji} Саммари в вашем стиле`;
    body = `${header}

${sample.bullets.join("\n\n")}`;
  } else {
    body = [
      `${style.emoji} ${sample.header}`,
      "",
      ...sample.bullets.map((b) => `• ${b}`)
    ].join("\n");
  }
  if (id !== "custom") {
    return [CHAT_PREVIEW_INTRO, "", body, "", CHAT_PREVIEW_LINKS].join("\n");
  }
  return body;
}
function buildStyledSummaryButtons(chatId, styleId) {
  if (styleId === "custom") {
    return [
      { label: "🎨 Посмотреть другие стили", action: `summary-style-pick:${chatId}` }
    ];
  }
  return [
    { label: "✅ Сохранить стиль", action: `summary-save:${chatId}:${styleId}` },
    { label: "🎨 Посмотреть другие стили", action: `summary-style-pick:${chatId}` },
    { label: "✏️ Изменить в настройках", action: `summary-edit:${chatId}:${styleId}` }
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
  consumeCustomStyleAttempt as c,
  customStylePrompt as d,
  customStyleRemaining as e,
  showPaywallToast as f,
  showPreviewInChatToast as s
};
