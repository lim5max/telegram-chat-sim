import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as TopBar } from "./TopBar-C__rpgVq.mjs";
import { c as Route$1, u as useChatsStore } from "./router-Ka44_1ec.mjs";
import { I as ICON_GRADIENTS, F as FeatureIcon } from "./FeatureIcon-BB_4l6zT.mjs";
import { g as getChatReport, T as TOXICITY_META } from "./analytics-dibEPvj9.mjs";
import { R as ResponsiveContainer, A as AreaChart, X as XAxis, T as Tooltip, a as Area, b as ReferenceLine, c as ReferenceDot, B as BarChart, d as Bar, C as Cell } from "../_libs/recharts.mjs";
import { b as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/hugeicons__core-free-icons.mjs";
import "../_libs/hugeicons__react.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const GREEN = "oklch(0.72 0.16 155)";
const RED = "oklch(0.62 0.20 25)";
function AnalyticsPage() {
  const {
    chatId
  } = Route$1.useParams();
  const chat = useChatsStore((s) => s.chats.find((c) => c.id === chatId));
  if (!chat) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center pb-32", children: "Чат не найден" });
  const r = getChatReport(chat);
  const [periodStart, periodEnd] = r.periodLabel.split("—").map((s) => s.trim());
  const perMember = Math.max(1, Math.round(r.totalMessages / chat.members));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Отчёт за 2 недели", subtitle: `${chat.name}${chat.emoji ? " " + chat.emoji : ""}`, back: {
      to: "/chat/$chatId",
      params: {
        chatId
      }
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-4 max-w-[520px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[13px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "📊" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Отчёт ChatLogix · ",
            r.periodLabel
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Caption, { children: "Вовлечённость" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-3 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: `${r.engagement.activeShare}%`, label: "писали за период" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: String(perMember), label: "сообщ./участник" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: `${r.engagement.avgResponseMin} мин`, label: "ср. ответ" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OnDemandCard, { emoji: "🧪", title: "Анализ токсичности", subtitle: "Запускается по запросу · AI оценивает тон чата", cta: "Запустить анализ", loadingText: "Анализирую сообщения за период…", doneToast: "Анализ токсичности готов", result: /* @__PURE__ */ jsxRuntimeExports.jsx(ToxicityResult, { report: r }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OnDemandCard, { emoji: "📌", title: "Нерешённые вопросы", subtitle: "Находит вопросы участников, оставшиеся без ответа", cta: "Найти вопросы без ответа", loadingText: "Ищу зависшие вопросы…", doneToast: "Готово — нашёл нерешённые вопросы", result: /* @__PURE__ */ jsxRuntimeExports.jsx(UnansweredResult, { report: r }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[18px] p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Caption, { children: "Сообщения за период" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient leading-none", children: r.totalMessages.toLocaleString("ru") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] px-2 py-0.5 rounded-full bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.85_0.15_155)] font-semibold", children: chat.activityDelta })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground mb-1 text-right", children: [
            "пик · ",
            r.summary.topDay,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            r.summary.topDayCount,
            " сообщ."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityChart, { data: r.activity, peakDay: r.summary.topDay }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AxisLabels, { start: periodStart, end: periodEnd })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[18px] p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Caption, { children: "Приток / отток участников" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NetBadge, { flow: r.memberFlow })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MemberFlowChart, { flow: r.memberFlow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AxisLabels, { start: periodStart, end: periodEnd })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4 text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: GREEN, label: `Пришло · ${sum(r.memberFlow, "joined")}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: RED, label: `Ушло · ${sum(r.memberFlow, "left")}` })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ReportCard, { chatId, feature: "summary", title: "Саммари", empty: r.summary.published === 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Опубликовано", value: String(r.summary.published) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Самый активный день", value: `${r.summary.topDay} · ${r.summary.topDayCount} сообщ.` }),
        r.summary.topParticipants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Самые активные", value: r.summary.topParticipants.join(", ") }),
        r.summary.topTopics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Caption, { children: "Топ-темы" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-2.5", children: r.summary.topTopics.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TopicBar, { rank: i + 1, title: t.title, count: t.count, max: r.summary.topTopics[0].count }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ReportCard, { chatId, feature: "antispam", title: "Антиспам", empty: r.antispam.deleted === 0 && r.antispam.botsBlocked === 0 && r.antispam.restricted === 0, emptyText: "За период ничего не было — чат чистый ✅", emptyPositive: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Удалено сообщений", value: String(r.antispam.deleted) }),
        r.antispam.deleted > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { label: "реклама", value: r.antispam.ads }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { label: "флуд", value: r.antispam.flood }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TypeChip, { label: "мат", value: r.antispam.profanity })
        ] }),
        r.antispam.restricted > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Ограничено участников", value: String(r.antispam.restricted) }),
        r.antispam.botsBlocked > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Заблокировано ботов", value: String(r.antispam.botsBlocked) }),
        r.antispam.peak && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Пик спама", value: r.antispam.peak })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ReportCard, { chatId, feature: "voice", title: "Голосовые сообщения", empty: r.voice.transcribed === 0, emptyText: "За период голосовых не было", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Расшифровано", value: `${r.voice.transcribed} · ≈${r.voice.minutes} мин речи` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Самое длинное", value: `${r.voice.longestAuthor} — ${r.voice.longestDuration}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Топ-отправитель", value: `${r.voice.topSender} · ${r.voice.topSenderCount} голосовых` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ReportCard, { chatId, feature: "podcast", title: "Подкаст чата", empty: r.podcast.episodes === 0, emptyText: "За период подкастов не было", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Выпущено", value: String(r.podcast.episodes) }),
        r.podcast.longest && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Самый длинный", value: r.podcast.longest }),
        r.podcast.avgDuration && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Средняя длительность", value: r.podcast.avgDuration })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ReportCard, { chatId, feature: "kb", title: "База знаний", empty: r.knowledgeBase.searches === 0, emptyText: "За период поисков не было", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Поисков", value: `${r.knowledgeBase.searches} · от ${r.knowledgeBase.uniqueUsers} польз.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Среднее результатов", value: String(r.knowledgeBase.avgResults) }),
        r.knowledgeBase.topQueries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Caption, { children: "Топ-запросы" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1.5", children: r.knowledgeBase.topQueries.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-foreground/85 bg-white/5 rounded-lg px-3 py-2", children: [
            "«",
            q,
            "»"
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportCard, { chatId, feature: "anonymous", title: "Анонимные сообщения", empty: r.anonymous.sent === 0, emptyText: "За период анонимных сообщений не было", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Отправлено", value: String(r.anonymous.sent) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground text-center pt-1 pb-2", children: [
        "Отчёт обновляется раз в 2 недели · ",
        chat.name
      ] })
    ] })
  ] });
}
function OnDemandCard({
  emoji,
  title,
  subtitle,
  cta,
  loadingText,
  doneToast,
  result
}) {
  const [state, setState] = reactExports.useState("idle");
  const run = () => {
    setState("loading");
    setTimeout(() => {
      setState("done");
      toast.success(doneToast);
    }, 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[18px] p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-[18px] bg-white/8", children: emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[15px]", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: subtitle })
      ] })
    ] }),
    state === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: run, className: "mt-3 w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white active:scale-[0.99] transition", children: cta }),
    state === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 w-full py-2.5 text-[13px] font-medium rounded-xl bg-white/8 text-muted-foreground text-center animate-pulse", children: loadingText }),
    state === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-3", children: [
      result,
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: run, className: "w-full py-2 text-[12px] font-medium rounded-xl bg-white/6 hover:bg-white/10 transition", children: "Повторить анализ" })
    ] })
  ] });
}
function ToxicityResult({
  report
}) {
  const t = report.toxicity;
  const meta = TOXICITY_META[t.level];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold leading-none", style: {
        color: meta.color
      }, children: t.score }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mb-0.5", children: "/ 100 индекс токсичности" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[11px] px-2 py-0.5 rounded-full font-semibold", style: {
        background: meta.bg,
        color: meta.color
      }, children: meta.label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-white/8 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
      width: `${Math.max(t.score, 3)}%`,
      background: meta.color
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Помечено сообщений", value: String(t.flagged) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Динамика", value: t.trend }),
    t.topOffenders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Caption, { children: "Чаще всего триггерили" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: t.topOffenders.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] px-2.5 py-1 rounded-lg bg-white/6", children: [
        o.name,
        " · ",
        o.count
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground leading-relaxed bg-white/4 rounded-xl px-3 py-2.5", children: t.note })
  ] });
}
function UnansweredResult({
  report
}) {
  const u = report.unanswered;
  if (u.count === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-[oklch(0.85_0.15_155)]", children: "Все вопросы за период получили ответ ✅" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold leading-none text-gradient", children: u.count }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mb-0.5", children: "вопросов без ответа" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: u.items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-xl px-3 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-foreground/90", children: [
        "«",
        it.q,
        "»"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.author }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded-md bg-[oklch(0.75_0.17_55)]/15 text-[oklch(0.85_0.16_65)] font-medium", children: [
          "ждёт ",
          it.waited
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground leading-relaxed bg-white/4 rounded-xl px-3 py-2.5", children: "Ответьте на зависшие вопросы — это удерживает участников и снижает отток." })
  ] });
}
function MemberFlowChart({
  flow
}) {
  const data = flow.map((d, i) => {
    const net = d.joined - d.left;
    return {
      i,
      net,
      positive: net >= 0
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 132, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, margin: {
    top: 4,
    right: 0,
    left: 0,
    bottom: 0
  }, barCategoryGap: "16%", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: 0, stroke: "oklch(1 0 0 / 0.2)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "i", hide: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: {
      fill: "oklch(1 0 0 / 0.05)"
    }, content: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowTip, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "net", radius: 2, maxBarSize: 18, isAnimationActive: false, children: data.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.positive ? GREEN : RED }, i)) })
  ] }) });
}
function FlowTip({
  active,
  payload
}) {
  if (!active || !payload?.length) return null;
  const net = payload[0].value;
  const positive = net >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-background border border-white/10 px-2.5 py-1.5 text-[11px] shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
    color: positive ? GREEN : RED
  }, children: [
    positive ? "+" : "−",
    Math.abs(net),
    " ",
    positive ? "пришло" : "ушло",
    " за день"
  ] }) });
}
function ActivityChart({
  data,
  peakDay
}) {
  const max = Math.max(1, ...data);
  const peak = data.indexOf(max);
  const series = data.map((v, i) => ({
    i,
    v
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 128, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: series, margin: {
    top: 22,
    right: 4,
    left: 4,
    bottom: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "actFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.66 0.16 235)", stopOpacity: 0.55 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.66 0.16 235)", stopOpacity: 0.02 })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "i", hide: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: {
      stroke: "oklch(1 0 0 / 0.2)",
      strokeWidth: 1
    }, content: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityTip, { peakDay, peak }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "linear", dataKey: "v", stroke: "oklch(0.74 0.15 235)", strokeWidth: 2, fill: "url(#actFill)", dot: false, activeDot: {
      r: 3,
      fill: "oklch(0.78 0.15 235)",
      stroke: "white",
      strokeWidth: 1
    }, isAnimationActive: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { x: peak, stroke: "oklch(0.74 0.15 235 / 0.45)", strokeDasharray: "3 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceDot, { x: peak, y: max, r: 3.5, fill: "oklch(0.82 0.15 235)", stroke: "white", strokeWidth: 1.5, isFront: true, label: {
      value: max.toLocaleString("ru"),
      position: "top",
      fill: "oklch(0.88 0.06 235)",
      fontSize: 11,
      fontWeight: 700
    } })
  ] }) });
}
function ActivityTip({
  active,
  payload,
  peakDay,
  peak
}) {
  if (!active || !payload?.length) return null;
  const isPeak = payload[0].payload.i === peak;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-background border border-white/10 px-2.5 py-1.5 text-[11px] shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: payload[0].value }),
    " сообщений",
    isPeak && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
      " · пик ",
      peakDay
    ] })
  ] });
}
function AxisLabels({
  start,
  end
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex justify-between text-[10px] text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: start }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: end })
  ] });
}
function Legend({
  color,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-sm", style: {
      background: color
    } }),
    label
  ] });
}
function NetBadge({
  flow
}) {
  const net = sum(flow, "joined") - sum(flow, "left");
  const positive = net >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded-full font-semibold", style: {
    background: positive ? "oklch(0.72 0.16 155 / 0.15)" : "oklch(0.65 0.22 25 / 0.15)",
    color: positive ? "oklch(0.85 0.15 155)" : "oklch(0.82 0.18 25)"
  }, children: [
    positive ? "+" : "−",
    Math.abs(net),
    " нетто"
  ] });
}
function sum(flow, key) {
  return flow.reduce((acc, d) => acc + d[key], 0);
}
function Mini({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-xl py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[18px] font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: label })
  ] });
}
function Caption({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-foreground/50 font-semibold", children });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-3 py-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground shrink-0", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-right", children: value })
  ] });
}
function TypeChip({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] px-2 py-1 rounded-lg bg-white/6 text-muted-foreground", children: [
    label,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: value })
  ] });
}
function TopicBar({
  rank,
  title,
  count,
  max
}) {
  const pct = max > 0 ? Math.max(count / max * 100, 8) : 8;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-muted-foreground w-3.5 text-center shrink-0", children: rank }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground/90 flex-1 min-w-0 truncate", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold tabular-nums shrink-0", children: count })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-[22px] mt-1 h-1.5 bg-white/8 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
      width: `${pct}%`,
      background: "var(--gradient-primary)"
    } }) })
  ] });
}
function ReportCard({
  chatId,
  feature,
  title,
  empty,
  emptyText,
  emptyPositive,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[18px] p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0", style: {
        background: empty ? "rgba(255,255,255,0.08)" : ICON_GRADIENTS[feature]
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature, size: 18, color: empty ? "currentColor" : "white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[15px] flex-1 min-w-0", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$chatId/feature/$featureKey", params: {
        chatId,
        featureKey: feature
      }, className: "text-[11px] text-muted-foreground flex items-center gap-0.5 active:scale-95 transition shrink-0", children: [
        "Настроить ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13 })
      ] })
    ] }),
    empty ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[13px] ${emptyPositive ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground italic"}`, children: emptyText ?? "За период ничего не было" }) : children
  ] });
}
export {
  AnalyticsPage as component
};
