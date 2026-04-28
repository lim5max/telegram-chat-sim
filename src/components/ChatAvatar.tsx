import type { Chat } from "@/data/chats";

export function ChatAvatar({ chat, size = 40 }: { chat: Chat; size?: number }) {
  if (chat.avatarUrl) {
    return (
      <img
        src={chat.avatarUrl}
        alt={chat.name}
        className="rounded-full object-cover shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="rounded-full flex items-center justify-center font-semibold shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.4, background: chat.avatarColor }}
    >
      {chat.initial}
    </div>
  );
}
