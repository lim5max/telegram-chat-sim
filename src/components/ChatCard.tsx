import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Chat } from "@/data/chats";

export function ChatCard({ chat }: { chat: Chat }) {
  const pct = Math.min(100, (chat.used / chat.limit) * 100);
  return (
    <Link
      to="/chat/$chatId"
      params={{ chatId: chat.id }}
      className="glass-card rounded-[20px] p-4 flex gap-3 items-center active:scale-[0.99] transition-transform"
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold shrink-0"
        style={{ background: chat.avatarColor }}
      >
        {chat.initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="font-semibold truncate">
            {chat.name} {chat.emoji}
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground shrink-0">
            {chat.used}/{chat.limit}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary rounded-full"
            style={{ width: `${Math.max(pct, 2)}%` }}
          />
        </div>
        <div className="mt-2 text-[12px] text-muted-foreground truncate">
          {chat.topics.join(" · ")}
        </div>
      </div>
      <ChevronRight className="text-muted-foreground shrink-0" size={18} />
    </Link>
  );
}
