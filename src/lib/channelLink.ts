/**
 * Парсинг ссылок на открытые Telegram-каналы для Super-Summary.
 *
 * Пользователь может добавить канал любым из привычных способов:
 *   • https://t.me/durov
 *   • t.me/durov
 *   • @durov
 *   • durov
 *
 * Закрытые каналы по инвайт-ссылке (t.me/+abc…, t.me/joinchat/abc…) добавить нельзя —
 * это сознательное продуктовое ограничение: Super-Summary читает только ОТКРЫТЫЕ
 * сообщества, чтобы не трогать приватные данные (та же privacy-рамка, что и у «Поиска по чатам»).
 */

export type ParsedChannel = {
  /** Нормализованный handle в нижнем регистре без @ — стабильный ключ для дедупликации. */
  id: string;
  /** Отображаемый handle, напр. "@durov". */
  handle: string;
  /** Канонический URL, напр. "https://t.me/durov". */
  url: string;
  /** Человекочитаемое название для UI (выводим из handle — реального API в симуляторе нет). */
  title: string;
};

export type ParseChannelResult =
  | { ok: true; channel: ParsedChannel }
  | { ok: false; error: string };

/** Сегменты пути t.me, которые не являются публичными именами каналов. */
const NON_CHANNEL_SEGMENTS = new Set([
  "joinchat",
  "addstickers",
  "addemoji",
  "proxy",
  "socks",
  "share",
  "iv",
  "login",
]);

/**
 * Правило валидности публичного имени канала.
 *
 * Это место, где продуктовое решение реально влияет на поведение: насколько строго
 * мы принимаем ссылку. Базовое правило ниже — официальный формат Telegram-юзернейма
 * (буква/цифра/подчёркивание, 4–32 символа, начинается с буквы). При желании здесь
 * можно ослабить/ужесточить: разрешить 5+ символов, запретить ведущие цифры и т.п.
 */
function isPublicHandle(handle: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9_]{3,31}$/.test(handle);
}

/** Превращает handle в читаемое название: "chatlogix_news" → "Chatlogix News". */
function handleToTitle(handle: string): string {
  return handle
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

export function parseChannelLink(raw: string): ParseChannelResult {
  const input = raw.trim();
  if (!input) return { ok: false, error: "Пустая ссылка" };

  // Срезаем протокол, домен t.me/telegram.me/telegram.dog, ведущий @,
  // затем берём первый сегмент пути (до /, ?, #).
  const handle = input
    .replace(/^https?:\/\//i, "")
    .replace(/^(www\.)?(t\.me|telegram\.me|telegram\.dog)\//i, "")
    .replace(/^@/, "")
    .split(/[/?#]/)[0]
    .trim();

  // Приватный канал по инвайту — t.me/+hash или t.me/joinchat/hash.
  if (handle.startsWith("+") || NON_CHANNEL_SEGMENTS.has(handle.toLowerCase())) {
    return {
      ok: false,
      error: "Это закрытый канал по приглашению. В Super-Summary можно добавлять только открытые каналы.",
    };
  }

  if (!isPublicHandle(handle)) {
    return {
      ok: false,
      error: "Не похоже на ссылку открытого канала. Пример: https://t.me/durov или @durov",
    };
  }

  return {
    ok: true,
    channel: {
      id: handle.toLowerCase(),
      handle: `@${handle}`,
      url: `https://t.me/${handle}`,
      title: handleToTitle(handle),
    },
  };
}
