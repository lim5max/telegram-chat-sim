import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function ChatAvatar({ chat, size = 40 }) {
  if (chat.avatarUrl) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: chat.avatarUrl,
        alt: chat.name,
        className: "rounded-full object-cover shrink-0",
        style: { width: size, height: size }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-full flex items-center justify-center font-semibold shrink-0",
      style: { width: size, height: size, fontSize: size * 0.4, background: chat.avatarColor },
      children: chat.initial
    }
  );
}
export {
  ChatAvatar as C
};
