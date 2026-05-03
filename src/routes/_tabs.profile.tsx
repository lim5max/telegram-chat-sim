import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CreditCardIcon,
  Notification01Icon,
  Message01Icon,
  File02Icon,
  HelpCircleIcon,
  Logout01Icon,
  HeadphonesIcon,
} from "@hugeicons/core-free-icons";

import { useChatsStore } from "@/store/chats";
import { FEATURE_META, type FeatureKey, type Chat } from "@/data/chats";
import { FeatureIcon } from "@/components/FeatureIcon";

export const Route = createFileRoute("/_tabs/profile")({
  head: () => ({
    meta: [
      { title: "Профиль — ChatLogix" },
      { name: "description", content: "Профиль, подписка и настройки ChatLogix." },
    ],
  }),
  component: ProfileScreen,
});

const CHAT_FEATURES: FeatureKey[] = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];

function ProfileScreen() {
  const chats = useChatsStore((s) => s.chats);
  const adminCount = chats.filter((c) => c.isAdmin).length;
  const [subsOpen, setSubsOpen] = useState(false);
  const [subsFilter, setSubsFilter] = useState<"all" | "personal" | "chat">("all");
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);

  const hasPersonalSub = superPodcastOn && superPodcastSubscription;
  const chatSubs = chats.filter((c) => CHAT_FEATURES.some((fk) => isActiveFeature(c, fk) && isPaidFeature(c, fk)));
  const hasSubs = hasPersonalSub || chatSubs.length > 0;
  const showPersonal = subsFilter === "all" || subsFilter === "personal";
  const showChat = subsFilter === "all" || subsFilter === "chat";

  return (
    <div className="px-4 pt-5 space-y-4 max-w-[520px] mx-auto">
      <h1 className="text-2xl font-bold">Профиль</h1>

      <div className="glass-card rounded-[20px] p-4 flex items-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.62 0.20 15))" }}
        >
          O
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg">Олег</div>
          <div className="text-[12px] text-muted-foreground">@oleg · id 1234567</div>
          <div className="flex gap-1.5 mt-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground">
              {chats.length} общих с ботом
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground">
              админ в {adminCount} чатах
            </span>
          </div>
        </div>
      </div>

      {/* Subscriptions — accordion */}
      <div className="glass-card rounded-[20px] overflow-hidden">
        <button
          onClick={() => setSubsOpen(!subsOpen)}
          className="w-full p-4 flex items-center gap-3 active:bg-white/5 transition"
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            <HugeiconsIcon icon={CreditCardIcon} size={20} strokeWidth={2} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold">Мои подписки</div>
            <div className="text-[12px] text-muted-foreground mt-0.5">
              {hasSubs ? "Подписки по чатам и личные" : "Нет активных подписок"}
            </div>
          </div>
          <ChevronDown size={16} className={`text-muted-foreground transition-transform ${subsOpen ? "rotate-180" : ""}`} />
        </button>

        {subsOpen && (
          <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/5">
            {/* Filter chips */}
            <div className="flex gap-1.5">
              {([
                { id: "all", label: "Все" },
                { id: "personal", label: "Личные" },
                { id: "chat", label: "Навыки чатов" },
              ] as const).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSubsFilter(f.id)}
                  className={`text-[11px] px-3 py-1.5 rounded-lg transition font-medium ${
                    subsFilter === f.id
                      ? "bg-white/15 text-white"
                      : "bg-white/6 text-muted-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Personal */}
            {showPersonal && hasPersonalSub && (
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Личные</div>
                <SubRow
                  icon={<HugeiconsIcon icon={HeadphonesIcon} size={16} strokeWidth={2} />}
                  title="Super Podcast"
                  status="Активна"
                  renew={`$5.99/мес · до ${superPodcastSubscription.expiresAt}`}
                />
              </div>
            )}

            {/* By chat */}
            {showChat && chatSubs.map((c) => {
              const paid = CHAT_FEATURES.filter((fk) => isActiveFeature(c, fk) && isPaidFeature(c, fk));
              return (
                <div key={c.id}>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-semibold"
                      style={{ background: c.avatarColor }}
                    >
                      {c.initial}
                    </div>
                    {c.name} {c.emoji}
                  </div>
                  <div className="space-y-1">
                    {paid.map((fk) => (
                      <SubRow
                        key={fk}
                        icon={<FeatureIcon feature={fk} size={14} />}
                        title={FEATURE_META[fk].label}
                        status="Активна"
                        renew={featurePrice(fk) + (c.planUntil ? ` · до ${c.planUntil}` : "")}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {!(showPersonal && hasPersonalSub) && !(showChat && chatSubs.length > 0) && (
              <div className="text-[13px] text-muted-foreground text-center py-3">
                У вас пока нет платных подписок
              </div>
            )}
          </div>
        )}
      </div>

      <div className="glass-card rounded-[20px] divide-y divide-white/8">
        <Row icon={<HugeiconsIcon icon={Message01Icon} size={16} strokeWidth={2} />} label="Поддержка" onClick={() => toast("Напишите нам: @ChatLogixSupport")} />
      </div>

    </div>
  );
}

function Row({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-3.5 flex items-center gap-3 hover:bg-white/5 active:bg-white/8 transition"
    >
      <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">{icon}</div>
      <div className="flex-1 text-left text-sm">{label}</div>
      <ChevronRight size={16} className="text-muted-foreground" />
    </button>
  );
}

function SubRow({ icon, title, status, renew }: { icon: React.ReactNode; title: string; status: string; renew: string }) {
  const active = status.toLowerCase().startsWith("актив");
  return (
    <div className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-white/5">
      <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold truncate">{title}</div>
        <div className="text-[11px] text-muted-foreground truncate">{renew}</div>
      </div>
      <div className={`text-[11px] flex items-center gap-1 shrink-0 ${active ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground"}`}>
        {active && <CheckCircle2 size={12} />}
        {status}
      </div>
    </div>
  );
}

function isActiveFeature(c: Chat, fk: FeatureKey): boolean {
  switch (fk) {
    case "summary": return c.summary?.active ?? false;
    case "voice": return c.voice?.active ?? false;
    case "podcast": return c.chatPodcast?.active ?? false;
    case "kb": return c.knowledgeBase?.active ?? false;
    case "antispam": return c.antispam?.active ?? false;
    case "anonymous": return c.anonymous?.active ?? false;
    default: return false;
  }
}

function isPaidFeature(c: Chat, fk: FeatureKey): boolean {
  switch (fk) {
    case "summary": return c.plan !== "Nano";
    case "voice": return c.voice?.plan === "Pro" || c.voice?.plan === "Ultra";
    case "podcast": return true;
    case "antispam": return c.antispam?.paid ?? false;
    default: return false;
  }
}

function featurePrice(fk: FeatureKey): string {
  switch (fk) {
    case "summary": return "$4.99/мес";
    case "voice": return "$16.99/мес";
    case "podcast": return "$2.99/мес";
    case "antispam": return "$2.49/мес";
    default: return "";
  }
}
