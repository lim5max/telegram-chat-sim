import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useChatsStore } from "@/store/chats";
import { FEATURE_META, type FeatureKey } from "@/data/chats";
import { ChevronRight } from "lucide-react";
import { ChatAvatar } from "@/components/ChatAvatar";
import { FeatureIconBadge } from "@/components/FeatureIcon";
import { HugeiconsIcon } from "@hugeicons/react";
import { AddCircleIcon } from "@hugeicons/core-free-icons";

export const Route = createFileRoute("/_tabs/chats")({
  head: () => ({
    meta: [
      { title: "Чаты — ChatLogix" },
      { name: "description", content: "Все ваши чаты с активными функциями ChatLogix." },
    ],
  }),
  component: ChatsScreen,
});

const FEATURE_ORDER: FeatureKey[] = ["summary", "voice", "podcast", "antispam", "kb", "anonymous"];

function ChatsScreen() {
  const chats = useChatsStore((s) => s.chats);

  return (
    <div className="px-4 pt-5 space-y-3 max-w-[520px] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Чаты</h1>
        <button
          onClick={() => toast("Откройте @ChatLogixBot в Telegram и нажмите «Добавить в группу»")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-[12px] font-medium transition active:scale-95"
        >
          <HugeiconsIcon icon={AddCircleIcon} size={14} strokeWidth={2} /> Добавить бота
        </button>
      </div>
      <div className="space-y-2.5">
        {chats.map((c) => {
          const activeFeatures = FEATURE_ORDER.filter((fk) => isActive(c, fk));
          return (
            <div key={c.id} className="glass-card rounded-[20px] p-4">
              <Link
                to="/chat/$chatId"
                params={{ chatId: c.id }}
                className="flex items-center gap-3 active:scale-[0.99] transition"
              >
                <ChatAvatar chat={c} size={48} />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">
                    {c.name} {c.emoji}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">
                    {c.members.toLocaleString("ru")} участников
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground shrink-0" />
              </Link>

              {activeFeatures.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/8 flex items-center gap-1.5">
                  {activeFeatures.slice(0, 4).map((fk) => {
                    const f = FEATURE_META[fk];
                    return (
                      <Link
                        key={fk}
                        to="/chat/$chatId"
                        params={{ chatId: c.id }}
                        hash={`f-${fk}`}
                        className="active:scale-95 transition"
                        title={`${f.label} — ${f.desc}`}
                      >
                        <FeatureIconBadge feature={fk} size={36} iconSize={16} />
                      </Link>
                    );
                  })}
                  {activeFeatures.length > 4 && (
                    <Link
                      to="/chat/$chatId"
                      params={{ chatId: c.id }}
                      className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 transition flex items-center justify-center text-[11px] font-semibold text-muted-foreground"
                    >
                      +{activeFeatures.length - 4}
                    </Link>
                  )}
                  <Link
                    to="/chat/$chatId"
                    params={{ chatId: c.id }}
                    className="ml-auto text-[11px] text-muted-foreground hover:text-foreground"
                  >
                    Все функции →
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import type { Chat } from "@/data/chats";
function isActive(c: Chat, fk: FeatureKey): boolean {
  switch (fk) {
    case "summary":
      return c.summary?.active ?? false;
    case "voice":
      return c.voice?.active ?? false;
    case "podcast":
      return c.chatPodcast?.active ?? false;
    case "kb":
      return c.knowledgeBase?.active ?? false;
    case "antispam":
      return c.antispam?.active ?? false;
    case "anonymous":
      return c.anonymous?.active ?? false;
  }
}
