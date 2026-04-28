import { createFileRoute, notFound, Link, Outlet, useMatch } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { TopBar } from "@/components/TopBar";
import { useChatsStore } from "@/store/chats";
import { FEATURE_META, type FeatureKey, type Chat } from "@/data/chats";
import { ChevronRight, ArrowLeft, TrendingUp } from "lucide-react";
import { FeatureIcon, FeatureIconBadge, ICON_GRADIENTS } from "@/components/FeatureIcon";


export const Route = createFileRoute("/chat/$chatId")({
  component: ChatLayout,
  notFoundComponent: () => <div className="p-8 text-center pb-32">Чат не найден</div>,
  loader: ({ params }) => {
    const exists = useChatsStore.getState().chats.some((c) => c.id === params.chatId);
    if (!exists) throw notFound();
    return null;
  },
});

function ChatLayout() {
  // If a child route is active (e.g. /feature/$featureKey), render it via Outlet
  // Otherwise render the chat details page
  const childMatch = useMatch({ from: "/chat/$chatId/feature/$featureKey", shouldThrow: false });
  if (childMatch) return <Outlet />;
  return <ChatDetails />;
}

const ALL: FeatureKey[] = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];

function ChatDetails() {
  const { chatId } = Route.useParams();
  const chat = useChatsStore((s) => s.chats.find((c) => c.id === chatId));
  const adminAlerts = useChatsStore((s) => s.adminAlerts[chatId] ?? 0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = sectionRefs.current[hash];
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
        el.classList.add("ring-2", "ring-[oklch(0.65_0.16_235)]");
        setTimeout(() => el.classList.remove("ring-2", "ring-[oklch(0.65_0.16_235)]"), 1800);
      }
    }
  }, [chatId]);

  if (!chat) return <div className="p-8 text-center pb-32">Чат не найден</div>;

  const activeKeys = ALL.filter((k) => isActive(chat, k));
  const inactiveKeys = ALL.filter((k) => !isActive(chat, k));

  return (
    <div className="min-h-screen pb-24">
      <TopBar
        title={`${chat.name} ${chat.emoji ?? ""}`.trim()}
        subtitle={`${chat.members.toLocaleString("ru")} участников`}
        back={{ to: "/chats" }}
      />

      <div className="px-4 pt-4 space-y-4 max-w-[520px] mx-auto">
        <div className="glass-card rounded-[20px] p-4">
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-bold text-gradient">{chat.members.toLocaleString("ru")}</div>
            <div className="text-sm text-muted-foreground">участников</div>
            <div className="ml-auto text-[12px] px-2 py-0.5 rounded-full bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.85_0.15_155)] flex items-center gap-1">
              <TrendingUp size={11} /> {chat.activityDelta}
            </div>
          </div>
          <div className="mt-1.5 text-[11px] text-muted-foreground">
            {chat.used} сообщ./день · {activeKeys.length} активных функций
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <Mini value={chat.members.toLocaleString("ru")} label="участников" />
            <Mini value={String(chat.used)} label="сообщ./день" />
            <Mini value={String(activeKeys.length)} label="функций вкл." />
          </div>
        </div>

        {/* ACTIVE FEATURES */}
        <SectionTitle>Включённые функции</SectionTitle>
        {activeKeys.length === 0 && (
          <div className="text-[13px] text-muted-foreground italic px-1">
            Пока ни одной включённой функции. Выберите ниже ↓
          </div>
        )}
        <div className="space-y-2">
          {activeKeys.map((fk) => (
            <FeatureCard
              key={fk}
              fk={fk}
              chat={chat}
              setRef={(el) => (sectionRefs.current[`f-${fk}`] = el)}
            />
          ))}
        </div>

        {/* INACTIVE FEATURES */}
        {inactiveKeys.length > 0 && <SectionTitle>Доступные функции</SectionTitle>}
        <div className="space-y-2">
          {inactiveKeys.map((fk) => (
            <FeatureCard
              key={fk}
              fk={fk}
              chat={chat}
              setRef={(el) => (sectionRefs.current[`f-${fk}`] = el)}
            />
          ))}
        </div>

        <Link
          to="/marketplace"
          className="mt-2 block w-full text-center py-3 rounded-[18px] bg-white/6 hover:bg-white/10 text-[13px] font-medium text-muted-foreground"
        >
          Все функции в каталоге →
        </Link>

        <Link
          to="/chats"
          className="mt-2 flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/15 rounded-[18px] py-3.5 font-semibold transition"
        >
          <ArrowLeft size={18} /> Все чаты
        </Link>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-1 pt-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
      {children}
    </div>
  );
}

function Mini({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/5 rounded-xl py-2.5">
      <div className="text-[18px] font-bold">{value}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function FeatureCard({
  fk,
  chat,
  setRef,
}: {
  fk: FeatureKey;
  chat: Chat;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const f = FEATURE_META[fk];
  const active = isActive(chat, fk);
  const status = featureStatus(chat, fk);
  const badge = featureBadge(chat, fk);

  return (
    <div ref={setRef} id={`f-${fk}`} className="scroll-mt-20">
      <Link
        to="/chat/$chatId/feature/$featureKey"
        params={{ chatId: chat.id, featureKey: fk }}
        className="glass-card rounded-[18px] p-3.5 flex items-center gap-3 active:scale-[0.99] transition"
      >
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: active ? ICON_GRADIENTS[fk] : "rgba(255,255,255,0.08)" }}
        >
          <FeatureIcon feature={fk} size={20} color={active ? "white" : "currentColor"} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold flex items-center gap-2">
            {f.label}
            {badge && (
              <span
                className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase"
                style={{ background: badge.bg, color: badge.color }}
              >
                {badge.label}
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted-foreground truncate">{status}</div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {featurePlan(chat, fk) && (
            <span className="text-[10px] text-muted-foreground">{featurePlan(chat, fk)}</span>
          )}
          <ChevronRight size={16} className="text-muted-foreground" />
        </div>
      </Link>
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

function featureStatus(c: Chat, fk: FeatureKey): string {
  switch (fk) {
    case "summary":
      return c.summary?.active ? "Саммари ежедневно в 09:00" : "Отключено";
    case "voice":
      return c.voice?.active ? "Транскрипция работает" : "Отключено";
    case "podcast":
      return c.chatPodcast?.active ? c.chatPodcast.status : "Не подключён";
    case "kb":
      return c.knowledgeBase?.active
        ? `Использовано ${c.knowledgeBase.quotaUsed} из ${c.knowledgeBase.quotaTotal} запросов`
        : "Не подключена";
    case "antispam":
      return c.antispam?.active ? `Удалено за 24 ч: ${c.antispam.deleted24h}` : "Отключено";
    case "anonymous":
      return c.anonymous?.active ? `Отправлено ${c.anonymous.sentToday} из 3 сегодня` : "Не разрешены";
  }
}

function featurePlan(c: Chat, fk: FeatureKey): string | null {
  switch (fk) {
    case "summary":
      return c.plan;
    case "voice":
      return c.voice?.plan ?? null;
    case "podcast":
      return c.chatPodcast?.active ? "$5.99/мес" : null;
    case "antispam":
      return c.antispam?.paid ? "$2.49/мес" : c.antispam?.active ? "Триал" : null;
    default:
      return null;
  }
}

function featureBadge(
  c: Chat,
  fk: FeatureKey,
): { label: string; bg: string; color: string } | null {
  if (isActive(c, fk)) return { label: "ВКЛ", bg: "oklch(0.72 0.16 155 / 0.20)", color: "oklch(0.85 0.15 155)" };
  if (fk === "podcast") return { label: "ПРОБНЫЙ", bg: "oklch(0.60 0.16 235 / 0.20)", color: "oklch(0.78 0.12 235)" };
  if (fk === "kb") return { label: "НОВОЕ", bg: "oklch(0.60 0.16 235 / 0.20)", color: "oklch(0.78 0.12 235)" };
  return null;
}
