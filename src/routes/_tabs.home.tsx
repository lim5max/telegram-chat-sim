import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useChatsStore } from "@/store/chats";
import { FEATURE_META } from "@/data/chats";
import { ChevronRight } from "lucide-react";
import { ChatAvatar } from "@/components/ChatAvatar";
import { FeatureIcon, FeatureIconBadge, ICON_GRADIENTS } from "@/components/FeatureIcon";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SparklesIcon,
  HeadphonesIcon,
  Message01Icon,
  AddCircleIcon,
  Megaphone01Icon,
} from "@hugeicons/core-free-icons";

export const Route = createFileRoute("/_tabs/home")({
  head: () => ({
    meta: [
      { title: "Главная — ChatLogix" },
      { name: "description", content: "Дашборд ChatLogix: чаты, функции, новости." },
    ],
  }),
  component: HomeScreen,
});

function HomeScreen() {
  const chats = useChatsStore((s) => s.chats);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);

  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const topChats = chats.slice(0, 4);
  const anonChatsCount = chats.filter((c) => c.anonymous?.active).length;
  const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;

  return (
    <div className="px-4 pt-5 space-y-5 max-w-[520px] mx-auto">
      {/* Header: avatar + name + stats pills */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.62 0.20 15))" }}
        >
          O
        </div>
        <div className="text-[16px] font-semibold">Олег</div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="px-2.5 py-1.5 rounded-xl bg-white/10 text-[11px] font-medium text-foreground/80">
            всего чатов: <span className="text-white font-semibold">{chats.length}</span>
          </div>
          <div className="px-2.5 py-1.5 rounded-xl bg-white/10 text-[11px] font-medium text-foreground/80">
            админ: <span className="text-white font-semibold">{chats.filter((c) => c.isAdmin).length}</span>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex gap-2">
        <button
          onClick={() => toast("Откройте @ChatLogixBot в Telegram и нажмите «Добавить в группу»")}
          className="flex-1 glass-card rounded-2xl py-3 flex items-center justify-center gap-2 text-[13px] font-medium active:scale-[0.98] transition"
        >
          <HugeiconsIcon icon={AddCircleIcon} size={16} strokeWidth={2} /> Добавить бота
        </button>
        <button
          onClick={() => toast("Следите за обновлениями в @chatlogix_news")}
          className="flex-1 glass-card rounded-2xl py-3 flex items-center justify-center gap-2 text-[13px] font-medium active:scale-[0.98] transition"
        >
          <HugeiconsIcon icon={Megaphone01Icon} size={16} strokeWidth={2} /> Новости
        </button>
      </div>

      {/* Personal features preview */}
      <Link to="/me" className="block">
        <SectionHeader title="Личные функции" right={<span className="flex items-center gap-1">Открыть <ChevronRight size={12} /></span>} />
        <div className="glass-card rounded-[20px] divide-y divide-white/8">
          <PersonalRow
            icon={<HugeiconsIcon icon={SparklesIcon} size={16} strokeWidth={2} color="white" />}
            title="Super-Summary"
            status={superSummaryOn ? "Включён · ежедневно в 09:00" : "Отключён"}
            on={superSummaryOn}
            gradient={ICON_GRADIENTS.summary}
          />
          <PersonalRow
            icon={<HugeiconsIcon icon={HeadphonesIcon} size={16} strokeWidth={2} color="white" />}
            title="Super Podcast"
            status={superPodcastOn ? `Активен · ${freeMinutesLeft} бесплатных мин` : "Не активен"}
            on={superPodcastOn}
            gradient={ICON_GRADIENTS.podcast}
          />
          <PersonalRow
            icon={<HugeiconsIcon icon={Message01Icon} size={16} strokeWidth={2} color="white" />}
            title="Анонимные сообщения"
            status={anonChatsCount > 0 ? `Доступно в ${anonChatsCount} чатах` : "Нет доступных чатов"}
            on={anonChatsCount > 0}
            gradient={ICON_GRADIENTS.anonymous}
          />
        </div>
      </Link>

      {/* Chats */}
      <div>
        <SectionHeader title="Мои чаты" right={<Link to="/chats" className="flex items-center gap-1">Все <ChevronRight size={12} /></Link>} />
        <div className="space-y-2">
          {topChats.map((c) => (
            <Link
              key={c.id}
              to="/chat/$chatId"
              params={{ chatId: c.id }}
              className="glass-card rounded-[16px] p-3 flex items-center gap-3 active:scale-[0.99] transition"
            >
              <ChatAvatar chat={c} size={40} />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">
                  {c.name} {c.emoji}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {c.used} сообщ./день · {c.plan}
                </div>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      {/* Features catalog */}
      <div>
        <SectionHeader title="Новые функции" right={<Link to="/marketplace" className="flex items-center gap-1">Все <ChevronRight size={12} /></Link>} />
        <div className="grid grid-cols-2 gap-2">
          <FeatureCard fk="podcast" />
          <FeatureCard fk="kb" />
          <FeatureCard fk="antispam" />
          <FeatureCard fk="anonymous" />
        </div>
      </div>
    </div>
  );
}

function PersonalRow({
  icon,
  title,
  status,
  on,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
  on: boolean;
  gradient?: string;
}) {
  return (
    <div className="px-4 py-3 flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          on ? "" : "bg-white/8"
        }`}
        style={on ? { background: gradient ?? "var(--gradient-primary)" } : undefined}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold truncate">{title}</div>
        <div className="text-[11px] text-muted-foreground truncate">{status}</div>
      </div>
      <ChevronRight size={14} className="text-muted-foreground" />
    </div>
  );
}

function SectionHeader({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="px-1 pb-2 flex items-center justify-between">
      <span className="text-[13px] font-semibold text-foreground/70">{title}</span>
      {right && <span className="text-[11px] text-muted-foreground">{right}</span>}
    </div>
  );
}

function FeatureCard({ fk }: { fk: keyof typeof FEATURE_META }) {
  const f = FEATURE_META[fk];
  return (
    <Link
      to="/marketplace"
      className="glass-card rounded-2xl p-3 active:scale-[0.99] transition"
    >
      <FeatureIconBadge feature={fk} size={32} iconSize={16} />
      <div className="text-sm font-semibold mt-1.5">{f.label}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5 line-clamp-2">{f.desc}</div>
      <div className="mt-1.5 text-[10px] text-gradient font-semibold">{f.price}</div>
    </Link>
  );
}
