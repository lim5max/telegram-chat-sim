import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { TopBar } from "@/components/TopBar";
import { useChatsStore } from "@/store/chats";
import { FeatureIcon, ICON_GRADIENTS } from "@/components/FeatureIcon";
import { type FeatureKey } from "@/data/chats";
import { getChatReport, type ChatReport, type DayFlow, TOXICITY_META } from "@/data/analytics";

export const Route = createFileRoute("/chat/$chatId/analytics")({
  component: AnalyticsPage,
  notFoundComponent: () => <div className="p-8 text-center pb-32">Чат не найден</div>,
  loader: ({ params }) => {
    const exists = useChatsStore.getState().chats.some((c) => c.id === params.chatId);
    if (!exists) throw notFound();
    return null;
  },
});

const GREEN = "oklch(0.72 0.16 155)";
const RED = "oklch(0.62 0.20 25)";

function AnalyticsPage() {
  const { chatId } = Route.useParams();
  const chat = useChatsStore((s) => s.chats.find((c) => c.id === chatId));

  if (!chat) return <div className="p-8 text-center pb-32">Чат не найден</div>;

  const r = getChatReport(chat);
  const [periodStart, periodEnd] = r.periodLabel.split("—").map((s) => s.trim());
  const perMember = Math.max(1, Math.round(r.totalMessages / chat.members));

  return (
    <div className="min-h-screen pb-24">
      <TopBar
        title="Отчёт за 2 недели"
        subtitle={`${chat.name}${chat.emoji ? " " + chat.emoji : ""}`}
        back={{ to: "/chat/$chatId", params: { chatId } }}
      />

      <div className="px-4 pt-4 space-y-4 max-w-[520px] mx-auto">
        {/* Header — отчёт + вовлечённость (кол-во сообщений живёт ниже, в своей карточке) */}
        <div className="glass-card rounded-[20px] p-5">
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <span className="text-base">📊</span>
            <span>Отчёт ChatLogix · {r.periodLabel}</span>
          </div>
          <div className="mt-4">
            <Caption>Вовлечённость</Caption>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <Mini value={`${r.engagement.activeShare}%`} label="писали за период" />
              <Mini value={String(perMember)} label="сообщ./участник" />
              <Mini value={`${r.engagement.avgResponseMin} мин`} label="ср. ответ" />
            </div>
          </div>
        </div>

        {/* AI-анализы для админа — наверху, по запросу */}
        <OnDemandCard
          emoji="🧪"
          title="Анализ токсичности"
          subtitle="Запускается по запросу · AI оценивает тон чата"
          cta="Запустить анализ"
          loadingText="Анализирую сообщения за период…"
          doneToast="Анализ токсичности готов"
          result={<ToxicityResult report={r} />}
        />
        <OnDemandCard
          emoji="📌"
          title="Нерешённые вопросы"
          subtitle="Находит вопросы участников, оставшиеся без ответа"
          cta="Найти вопросы без ответа"
          loadingText="Ищу зависшие вопросы…"
          doneToast="Готово — нашёл нерешённые вопросы"
          result={<UnansweredResult report={r} />}
        />

        {/* Сообщения — единственный дом для счётчика: число + распределение по дням */}
        <div className="glass-card rounded-[18px] p-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <Caption>Сообщения за период</Caption>
              <div className="mt-1 flex items-baseline gap-2">
                <div className="text-3xl font-bold text-gradient leading-none">
                  {r.totalMessages.toLocaleString("ru")}
                </div>
                <span className="text-[12px] px-2 py-0.5 rounded-full bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.85_0.15_155)] font-semibold">
                  {chat.activityDelta}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-muted-foreground mb-1 text-right">
              пик · {r.summary.topDay}
              <br />
              {r.summary.topDayCount} сообщ.
            </span>
          </div>
          <div className="mt-3">
            <ActivityChart data={r.activity} peakDay={r.summary.topDay} />
            <AxisLabels start={periodStart} end={periodEnd} />
          </div>
        </div>

        {/* Приток / отток участников */}
        <div className="glass-card rounded-[18px] p-4">
          <div className="flex items-center justify-between">
            <Caption>Приток / отток участников</Caption>
            <NetBadge flow={r.memberFlow} />
          </div>
          <div className="mt-4">
            <MemberFlowChart flow={r.memberFlow} />
            <AxisLabels start={periodStart} end={periodEnd} />
          </div>
          <div className="mt-3 flex items-center gap-4 text-[11px]">
            <Legend color={GREEN} label={`Пришло · ${sum(r.memberFlow, "joined")}`} />
            <Legend color={RED} label={`Ушло · ${sum(r.memberFlow, "left")}`} />
          </div>
        </div>

        {/* 📰 Саммари */}
        <ReportCard chatId={chatId} feature="summary" title="Саммари" empty={r.summary.published === 0}>
          <Row label="Опубликовано" value={String(r.summary.published)} />
          <Row label="Самый активный день" value={`${r.summary.topDay} · ${r.summary.topDayCount} сообщ.`} />
          {r.summary.topParticipants.length > 0 && (
            <Row label="Самые активные" value={r.summary.topParticipants.join(", ")} />
          )}
          {r.summary.topTopics.length > 0 && (
            <div className="pt-2">
              <Caption>Топ-темы</Caption>
              <div className="mt-2 space-y-2.5">
                {r.summary.topTopics.map((t, i) => (
                  <TopicBar key={i} rank={i + 1} title={t.title} count={t.count} max={r.summary.topTopics[0].count} />
                ))}
              </div>
            </div>
          )}
        </ReportCard>

        {/* 🛡 Антиспам */}
        <ReportCard
          chatId={chatId}
          feature="antispam"
          title="Антиспам"
          empty={r.antispam.deleted === 0 && r.antispam.botsBlocked === 0 && r.antispam.restricted === 0}
          emptyText="За период ничего не было — чат чистый ✅"
          emptyPositive
        >
          <Row label="Удалено сообщений" value={String(r.antispam.deleted)} />
          {r.antispam.deleted > 0 && (
            <div className="flex flex-wrap gap-1.5 py-1.5">
              <TypeChip label="реклама" value={r.antispam.ads} />
              <TypeChip label="флуд" value={r.antispam.flood} />
              <TypeChip label="мат" value={r.antispam.profanity} />
            </div>
          )}
          {r.antispam.restricted > 0 && <Row label="Ограничено участников" value={String(r.antispam.restricted)} />}
          {r.antispam.botsBlocked > 0 && <Row label="Заблокировано ботов" value={String(r.antispam.botsBlocked)} />}
          {r.antispam.peak && <Row label="Пик спама" value={r.antispam.peak} />}
        </ReportCard>

        {/* 🎙 Голосовые */}
        <ReportCard
          chatId={chatId}
          feature="voice"
          title="Голосовые сообщения"
          empty={r.voice.transcribed === 0}
          emptyText="За период голосовых не было"
        >
          <Row label="Расшифровано" value={`${r.voice.transcribed} · ≈${r.voice.minutes} мин речи`} />
          <Row label="Самое длинное" value={`${r.voice.longestAuthor} — ${r.voice.longestDuration}`} />
          <Row label="Топ-отправитель" value={`${r.voice.topSender} · ${r.voice.topSenderCount} голосовых`} />
        </ReportCard>

        {/* 🎧 Подкаст */}
        <ReportCard
          chatId={chatId}
          feature="podcast"
          title="Подкаст чата"
          empty={r.podcast.episodes === 0}
          emptyText="За период подкастов не было"
        >
          <Row label="Выпущено" value={String(r.podcast.episodes)} />
          {r.podcast.longest && <Row label="Самый длинный" value={r.podcast.longest} />}
          {r.podcast.avgDuration && <Row label="Средняя длительность" value={r.podcast.avgDuration} />}
        </ReportCard>

        {/* 🔍 База знаний */}
        <ReportCard
          chatId={chatId}
          feature="kb"
          title="База знаний"
          empty={r.knowledgeBase.searches === 0}
          emptyText="За период поисков не было"
        >
          <Row label="Поисков" value={`${r.knowledgeBase.searches} · от ${r.knowledgeBase.uniqueUsers} польз.`} />
          <Row label="Среднее результатов" value={String(r.knowledgeBase.avgResults)} />
          {r.knowledgeBase.topQueries.length > 0 && (
            <div className="pt-2">
              <Caption>Топ-запросы</Caption>
              <div className="mt-2 space-y-1.5">
                {r.knowledgeBase.topQueries.map((q, i) => (
                  <div key={i} className="text-[13px] text-foreground/85 bg-white/5 rounded-lg px-3 py-2">
                    «{q}»
                  </div>
                ))}
              </div>
            </div>
          )}
        </ReportCard>

        {/* 🎭 Анонимные */}
        <ReportCard
          chatId={chatId}
          feature="anonymous"
          title="Анонимные сообщения"
          empty={r.anonymous.sent === 0}
          emptyText="За период анонимных сообщений не было"
        >
          <Row label="Отправлено" value={String(r.anonymous.sent)} />
        </ReportCard>

        <div className="text-[11px] text-muted-foreground text-center pt-1 pb-2">
          Отчёт обновляется раз в 2 недели · {chat.name}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  On-demand admin analyses (toxicity, unanswered questions, …)        */
/* ------------------------------------------------------------------ */

/** Generic "run on demand" card: idle → loading → result. */
function OnDemandCard({
  emoji,
  title,
  subtitle,
  cta,
  loadingText,
  doneToast,
  result,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  cta: string;
  loadingText: string;
  doneToast: string;
  result: React.ReactNode;
}) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const run = () => {
    setState("loading");
    setTimeout(() => {
      setState("done");
      toast.success(doneToast);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-[18px] p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-[18px] bg-white/8">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[15px]">{title}</div>
          <div className="text-[11px] text-muted-foreground">{subtitle}</div>
        </div>
      </div>

      {state === "idle" && (
        <button
          onClick={run}
          className="mt-3 w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white active:scale-[0.99] transition"
        >
          {cta}
        </button>
      )}

      {state === "loading" && (
        <div className="mt-3 w-full py-2.5 text-[13px] font-medium rounded-xl bg-white/8 text-muted-foreground text-center animate-pulse">
          {loadingText}
        </div>
      )}

      {state === "done" && (
        <div className="mt-3 space-y-3">
          {result}
          <button
            onClick={run}
            className="w-full py-2 text-[12px] font-medium rounded-xl bg-white/6 hover:bg-white/10 transition"
          >
            Повторить анализ
          </button>
        </div>
      )}
    </div>
  );
}

function ToxicityResult({ report }: { report: ChatReport }) {
  const t = report.toxicity;
  const meta = TOXICITY_META[t.level];
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="text-4xl font-bold leading-none" style={{ color: meta.color }}>
          {t.score}
        </div>
        <div className="text-[12px] text-muted-foreground mb-0.5">/ 100 индекс токсичности</div>
        <span
          className="ml-auto text-[11px] px-2 py-0.5 rounded-full font-semibold"
          style={{ background: meta.bg, color: meta.color }}
        >
          {meta.label}
        </span>
      </div>

      <div className="h-2 w-full bg-white/8 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${Math.max(t.score, 3)}%`, background: meta.color }} />
      </div>

      <Row label="Помечено сообщений" value={String(t.flagged)} />
      <Row label="Динамика" value={t.trend} />

      {t.topOffenders.length > 0 && (
        <div className="pt-1">
          <Caption>Чаще всего триггерили</Caption>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {t.topOffenders.map((o, i) => (
              <span key={i} className="text-[12px] px-2.5 py-1 rounded-lg bg-white/6">
                {o.name} · {o.count}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="text-[12px] text-muted-foreground leading-relaxed bg-white/4 rounded-xl px-3 py-2.5">
        {t.note}
      </div>
    </>
  );
}

function UnansweredResult({ report }: { report: ChatReport }) {
  const u = report.unanswered;
  if (u.count === 0) {
    return (
      <div className="text-[13px] text-[oklch(0.85_0.15_155)]">
        Все вопросы за период получили ответ ✅
      </div>
    );
  }
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="text-4xl font-bold leading-none text-gradient">{u.count}</div>
        <div className="text-[12px] text-muted-foreground mb-0.5">вопросов без ответа</div>
      </div>
      <div className="space-y-1.5">
        {u.items.map((it, i) => (
          <div key={i} className="bg-white/5 rounded-xl px-3 py-2.5">
            <div className="text-[13px] text-foreground/90">«{it.q}»</div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{it.author}</span>
              <span className="px-1.5 py-0.5 rounded-md bg-[oklch(0.75_0.17_55)]/15 text-[oklch(0.85_0.16_65)] font-medium">
                ждёт {it.waited}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[12px] text-muted-foreground leading-relaxed bg-white/4 rounded-xl px-3 py-2.5">
        Ответьте на зависшие вопросы — это удерживает участников и снижает отток.
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Charts                                                             */
/* ------------------------------------------------------------------ */

function MemberFlowChart({ flow }: { flow: DayFlow[] }) {
  // Net change per day as a single bar: green up (gained), red down (lost). Every
  // column is filled — no empty days. Recharts auto-scales the domain, so even a
  // ±1 day reads clearly on mobile.
  const data = flow.map((d, i) => {
    const net = d.joined - d.left;
    return { i, net, positive: net >= 0 };
  });
  return (
    <ResponsiveContainer width="100%" height={132}>
      <BarChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }} barCategoryGap="16%">
        <ReferenceLine y={0} stroke="oklch(1 0 0 / 0.2)" />
        <XAxis dataKey="i" hide />
        <Tooltip cursor={{ fill: "oklch(1 0 0 / 0.05)" }} content={<FlowTip />} />
        <Bar dataKey="net" radius={2} maxBarSize={18} isAnimationActive={false}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.positive ? GREEN : RED} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function FlowTip({ active, payload }: { active?: boolean; payload?: { value: number }[] }) {
  if (!active || !payload?.length) return null;
  const net = payload[0].value;
  const positive = net >= 0;
  return (
    <div className="rounded-lg bg-background border border-white/10 px-2.5 py-1.5 text-[11px] shadow-xl">
      <span style={{ color: positive ? GREEN : RED }}>
        {positive ? "+" : "−"}
        {Math.abs(net)} {positive ? "пришло" : "ушло"} за день
      </span>
    </div>
  );
}

function ActivityChart({ data, peakDay }: { data: number[]; peakDay: string }) {
  const max = Math.max(1, ...data);
  const peak = data.indexOf(max);
  const series = data.map((v, i) => ({ i, v }));
  return (
    <ResponsiveContainer width="100%" height={128}>
      <AreaChart data={series} margin={{ top: 22, right: 4, left: 4, bottom: 0 }}>
        <defs>
          <linearGradient id="actFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.66 0.16 235)" stopOpacity={0.55} />
            <stop offset="100%" stopColor="oklch(0.66 0.16 235)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <XAxis dataKey="i" hide />
        <Tooltip cursor={{ stroke: "oklch(1 0 0 / 0.2)", strokeWidth: 1 }} content={<ActivityTip peakDay={peakDay} peak={peak} />} />
        <Area
          type="linear"
          dataKey="v"
          stroke="oklch(0.74 0.15 235)"
          strokeWidth={2}
          fill="url(#actFill)"
          dot={false}
          activeDot={{ r: 3, fill: "oklch(0.78 0.15 235)", stroke: "white", strokeWidth: 1 }}
          isAnimationActive={false}
        />
        {/* "Палка" на пике: всегда видно главное число без тапа (важно на мобилке) */}
        <ReferenceLine x={peak} stroke="oklch(0.74 0.15 235 / 0.45)" strokeDasharray="3 3" />
        <ReferenceDot
          x={peak}
          y={max}
          r={3.5}
          fill="oklch(0.82 0.15 235)"
          stroke="white"
          strokeWidth={1.5}
          isFront
          label={{
            value: max.toLocaleString("ru"),
            position: "top",
            fill: "oklch(0.88 0.06 235)",
            fontSize: 11,
            fontWeight: 700,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function ActivityTip({
  active,
  payload,
  peakDay,
  peak,
}: {
  active?: boolean;
  payload?: { value: number; payload: { i: number } }[];
  peakDay: string;
  peak: number;
}) {
  if (!active || !payload?.length) return null;
  const isPeak = payload[0].payload.i === peak;
  return (
    <div className="rounded-lg bg-background border border-white/10 px-2.5 py-1.5 text-[11px] shadow-xl">
      <span className="font-semibold text-foreground">{payload[0].value}</span> сообщений
      {isPeak && <span className="text-muted-foreground"> · пик {peakDay}</span>}
    </div>
  );
}

function AxisLabels({ start, end }: { start: string; end: string }) {
  return (
    <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
      <span>{start}</span>
      <span>{end}</span>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-muted-foreground">
      <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
      {label}
    </div>
  );
}

function NetBadge({ flow }: { flow: DayFlow[] }) {
  const net = sum(flow, "joined") - sum(flow, "left");
  const positive = net >= 0;
  return (
    <span
      className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
      style={{
        background: positive ? "oklch(0.72 0.16 155 / 0.15)" : "oklch(0.65 0.22 25 / 0.15)",
        color: positive ? "oklch(0.85 0.15 155)" : "oklch(0.82 0.18 25)",
      }}
    >
      {positive ? "+" : "−"}
      {Math.abs(net)} нетто
    </span>
  );
}

function sum(flow: DayFlow[], key: "joined" | "left") {
  return flow.reduce((acc, d) => acc + d[key], 0);
}

/* ------------------------------------------------------------------ */
/*  Presentational helpers                                             */
/* ------------------------------------------------------------------ */

function Mini({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/5 rounded-xl py-2.5">
      <div className="text-[18px] font-bold">{value}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold">{children}</div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1">
      <div className="text-[13px] text-muted-foreground shrink-0">{label}</div>
      <div className="text-[13px] font-medium text-right">{value}</div>
    </div>
  );
}

function TypeChip({ label, value }: { label: string; value: number }) {
  return (
    <span className="text-[11px] px-2 py-1 rounded-lg bg-white/6 text-muted-foreground">
      {label} <span className="text-foreground font-semibold">{value}</span>
    </span>
  );
}

function TopicBar({ rank, title, count, max }: { rank: number; title: string; count: number; max: number }) {
  const pct = max > 0 ? Math.max((count / max) * 100, 8) : 8;
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold text-muted-foreground w-3.5 text-center shrink-0">{rank}</span>
        <span className="text-[13px] text-foreground/90 flex-1 min-w-0 truncate">{title}</span>
        <span className="text-[12px] font-semibold tabular-nums shrink-0">{count}</span>
      </div>
      <div className="ml-[22px] mt-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--gradient-primary)" }} />
      </div>
    </div>
  );
}

function ReportCard({
  chatId,
  feature,
  title,
  empty,
  emptyText,
  emptyPositive,
  children,
}: {
  chatId: string;
  feature: FeatureKey;
  title: string;
  empty: boolean;
  emptyText?: string;
  emptyPositive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-card rounded-[18px] p-4">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: empty ? "rgba(255,255,255,0.08)" : ICON_GRADIENTS[feature] }}
        >
          <FeatureIcon feature={feature} size={18} color={empty ? "currentColor" : "white"} />
        </div>
        <div className="font-semibold text-[15px] flex-1 min-w-0">{title}</div>
        <Link
          to="/chat/$chatId/feature/$featureKey"
          params={{ chatId, featureKey: feature }}
          className="text-[11px] text-muted-foreground flex items-center gap-0.5 active:scale-95 transition shrink-0"
        >
          Настроить <ChevronRight size={13} />
        </Link>
      </div>
      {empty ? (
        <div
          className={`text-[13px] ${
            emptyPositive ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground italic"
          }`}
        >
          {emptyText ?? "За период ничего не было"}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
