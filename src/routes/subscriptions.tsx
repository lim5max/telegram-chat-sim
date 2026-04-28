import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { useChatsStore } from "@/store/chats";
import { FEATURE_META, type FeatureKey, type Chat } from "@/data/chats";
import { CheckCircle2 } from "lucide-react";
import { FeatureIcon } from "@/components/FeatureIcon";
import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon, HeadphonesIcon } from "@hugeicons/core-free-icons";

export const Route = createFileRoute("/subscriptions")({
  head: () => ({
    meta: [
      { title: "Мои подписки — ChatLogix" },
      { name: "description", content: "Подписки ChatLogix, сгруппированные по чатам." },
    ],
  }),
  component: SubscriptionsScreen,
});

const ALL: FeatureKey[] = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];

function SubscriptionsScreen() {
  const chats = useChatsStore((s) => s.chats);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;

  return (
    <div className="min-h-screen pb-24">
      <TopBar title="Мои подписки" subtitle="По чатам и личные функции" back={{ to: "/profile" }} />

      <div className="px-4 pt-4 space-y-5 max-w-[520px] mx-auto">
        {/* Personal */}
        <div>
          <div className="px-1 pb-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
            Личные функции
          </div>
          <div className="glass-card rounded-[20px] divide-y divide-white/8">
            <SubRow icon={<HugeiconsIcon icon={SparklesIcon} size={18} strokeWidth={2} />} title="Super-Summary" status={superSummaryOn ? "Активна" : "Отключена"} renew="Бесплатно" />
            <SubRow
              icon={<HugeiconsIcon icon={HeadphonesIcon} size={18} strokeWidth={2} />}
              title="Super Podcast"
              status={superPodcastOn
                ? (superPodcastSubscription
                  ? "Активна · подписка"
                  : `Активна · ${freeMinutesLeft} беспл. мин`)
                : "Отключена"}
              renew={superPodcastOn
                ? (superPodcastSubscription
                  ? `$5.99/мес · до ${superPodcastSubscription.expiresAt}`
                  : "Бесплатные минуты")
                : "—"}
            />
          </div>
        </div>

        {/* By chat */}
        {chats.map((c) => {
          const active = ALL.filter((fk) => isActive(c, fk));
          if (active.length === 0) return null;
          return (
            <div key={c.id}>
              <Link
                to="/chat/$chatId"
                params={{ chatId: c.id }}
                className="px-1 pb-2 flex items-center gap-2"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold"
                  style={{ background: c.avatarColor }}
                >
                  {c.initial}
                </div>
                <div className="font-semibold text-sm flex-1">
                  {c.name} {c.emoji}
                </div>
                <span className="text-[10px] text-muted-foreground">
                  {c.plan}{c.cancelled ? " · отменена" : ""}
                </span>
              </Link>
              <div className="glass-card rounded-[20px] divide-y divide-white/8">
                {active.map((fk) => {
                  const f = FEATURE_META[fk];
                  return (
                    <SubRow
                      key={fk}
                      icon={<FeatureIcon feature={fk} size={18} />}
                      title={f.label}
                      status={c.cancelled ? `Активна до ${c.planUntil ?? "—"}` : "Активна"}
                      renew={f.monetization === "paid" ? `${f.price} · ${c.planUntil ?? "—"}` : "Бесплатно"}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SubRow({
  icon,
  title,
  status,
  renew,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
  renew: string;
}) {
  const isActive = status.toLowerCase().startsWith("актив");
  return (
    <div className="px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold truncate">{title}</div>
        <div className="text-[11px] text-muted-foreground truncate">{renew}</div>
      </div>
      <div
        className={`text-[11px] flex items-center gap-1 ${
          isActive ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground"
        }`}
      >
        {isActive && <CheckCircle2 size={12} />}
        {status}
      </div>
    </div>
  );
}

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
