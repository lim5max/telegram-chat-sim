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
      <TopBar title="Мои подписки" subtitle="По чатам и персональные навыки" back={{ to: "/profile" }} />

      <div className="px-4 pt-4 space-y-5 max-w-[520px] mx-auto">
        {/* Personal paid */}
        {(superPodcastOn && superPodcastSubscription) && (
          <div>
            <div className="px-1 pb-2 text-[11px] uppercase tracking-wider text-foreground/50 font-semibold">
              Личные подписки
            </div>
            <div className="glass-card rounded-[20px] divide-y divide-white/8">
              <SubRow
                icon={<HugeiconsIcon icon={HeadphonesIcon} size={18} strokeWidth={2} />}
                title="Super Podcast"
                status="Активна"
                renew={`$5.99/мес · до ${superPodcastSubscription.expiresAt}`}
              />
            </div>
          </div>
        )}

        {/* By chat — only paid features */}
        {chats.map((c) => {
          const paidActive = ALL.filter((fk) => isActive(c, fk) && isPaid(c, fk));
          if (paidActive.length === 0) return null;
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
                {c.cancelled && (
                  <span className="text-[10px] text-muted-foreground">отменена</span>
                )}
              </Link>
              <div className="glass-card rounded-[20px] divide-y divide-white/8">
                {paidActive.map((fk) => {
                  const f = FEATURE_META[fk];
                  return (
                    <SubRow
                      key={fk}
                      icon={<FeatureIcon feature={fk} size={18} />}
                      title={f.label}
                      tariff={featureTariff(c, fk)}
                      status="Активна"
                      renew={featurePrice(c, fk) + (c.planUntil ? ` · до ${c.planUntil}` : "")}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Empty state */}
        {!chats.some((c) => ALL.some((fk) => isActive(c, fk) && isPaid(c, fk))) && !(superPodcastOn && superPodcastSubscription) && (
          <div className="text-center text-[13px] text-muted-foreground py-8">
            У вас пока нет платных подписок
          </div>
        )}
      </div>
    </div>
  );
}

function SubRow({
  icon,
  title,
  tariff,
  status,
  renew,
}: {
  icon: React.ReactNode;
  title: string;
  tariff?: string;
  status: string;
  renew: string;
}) {
  const isActive = status.toLowerCase().startsWith("актив");
  return (
    <div className="px-4 py-3.5 flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-semibold truncate">{title}</div>
        <div className="text-[12px] text-muted-foreground truncate">{renew}</div>
      </div>
      {tariff && (
        <span className="text-[11px] text-muted-foreground shrink-0">{tariff}</span>
      )}
      <div
        className={`text-[12px] flex items-center gap-1 shrink-0 ${
          isActive ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground"
        }`}
      >
        {isActive && <CheckCircle2 size={13} />}
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
    case "superPodcast":
      return false;
  }
}

function isPaid(c: Chat, fk: FeatureKey): boolean {
  switch (fk) {
    case "summary":
      return c.plan !== "Nano";
    case "voice":
      return c.voice?.plan === "Pro" || c.voice?.plan === "Ultra";
    case "podcast":
      return true;
    case "antispam":
      return c.antispam?.paid ?? false;
    default:
      return false;
  }
}

function featurePrice(_c: Chat, fk: FeatureKey): string {
  switch (fk) {
    case "summary":
      return "$4.99/мес";
    case "voice":
      return "$16.99/мес";
    case "podcast":
      return "$2.99/мес";
    case "antispam":
      return "$2.49/мес";
    default:
      return "";
  }
}

function featureTariff(c: Chat, fk: FeatureKey): string {
  switch (fk) {
    case "summary":
      return c.plan;
    case "voice":
      return c.voice?.plan ?? "Free";
    case "podcast":
      return c.chatPodcast?.status?.includes("Бесплатная") ? "Free" : "Pro";
    case "antispam":
      return c.antispam?.paid ? "Pro" : "Free";
    default:
      return "";
  }
}
