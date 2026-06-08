const NON_CHANNEL_SEGMENTS = /* @__PURE__ */ new Set([
  "joinchat",
  "addstickers",
  "addemoji",
  "proxy",
  "socks",
  "share",
  "iv",
  "login"
]);
function isPublicHandle(handle) {
  return /^[a-zA-Z][a-zA-Z0-9_]{3,31}$/.test(handle);
}
function handleToTitle(handle) {
  return handle.replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).trim();
}
function parseChannelLink(raw) {
  const input = raw.trim();
  if (!input) return { ok: false, error: "Пустая ссылка" };
  const handle = input.replace(/^https?:\/\//i, "").replace(/^(www\.)?(t\.me|telegram\.me|telegram\.dog)\//i, "").replace(/^@/, "").split(/[/?#]/)[0].trim();
  if (handle.startsWith("+") || NON_CHANNEL_SEGMENTS.has(handle.toLowerCase())) {
    return {
      ok: false,
      error: "Это закрытый канал по приглашению. В Super-Summary можно добавлять только открытые каналы."
    };
  }
  if (!isPublicHandle(handle)) {
    return {
      ok: false,
      error: "Не похоже на ссылку открытого канала. Пример: https://t.me/durov или @durov"
    };
  }
  return {
    ok: true,
    channel: {
      id: handle.toLowerCase(),
      handle: `@${handle}`,
      url: `https://t.me/${handle}`,
      title: handleToTitle(handle)
    }
  };
}
export {
  parseChannelLink as p
};
