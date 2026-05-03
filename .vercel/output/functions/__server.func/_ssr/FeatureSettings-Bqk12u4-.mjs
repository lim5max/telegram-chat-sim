import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { T as Toggle } from "./Toggle-DZeKeTz7.mjs";
import { u as useChatsStore } from "./router-C-2Ndv-v.mjs";
import { h as TriangleAlert } from "../_libs/lucide-react.mjs";
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-foreground/50 font-semibold", children });
}
function Setting({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 py-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px]", children })
  ] });
}
function FeatureSettings({ fk, chat }) {
  const setPodcastVoice = useChatsStore((s) => s.setPodcastVoice);
  const setAllowMedia = useChatsStore((s) => s.setAllowMedia);
  useNavigate();
  const [generating, setGenerating] = reactExports.useState(false);
  switch (fk) {
    case "summary":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SummarySettings, { chat });
    case "voice": {
      const vPlan = chat.voice?.plan ?? "Free";
      const vLimitNum = vPlan === "Pro" ? 300 : vPlan === "Ultra" ? 0 : 30;
      const vLimit = vPlan === "Ultra" ? "Безлимит" : `${vLimitNum} мин/мес`;
      const vPrice = vPlan === "Pro" ? "$16.99/мес" : vPlan === "Ultra" ? "$49.99/мес" : "Бесплатно";
      const vUsed = Math.floor(Math.random() * (vLimitNum * 0.6));
      const vPct = vLimitNum > 0 ? Math.min(vUsed / vLimitNum * 100, 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Текущий тариф" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold", children: vPlan }),
            vPlan !== "Free" && chat.planUntil && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
              "до ",
              chat.planUntil
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-muted-foreground mt-1", children: [
            vPrice,
            " · ",
            vLimit
          ] })
        ] }),
        vPlan !== "Ultra" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Использовано" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: vPct > 90 ? "text-[oklch(0.82_0.17_25)] font-semibold" : "font-semibold", children: [
              vUsed,
              " из ",
              vLimitNum,
              " мин"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-white/8 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full transition-all",
              style: {
                width: `${Math.max(vPct, 2)}%`,
                background: vPct > 90 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)"
              }
            }
          ) })
        ] }),
        vPlan !== "Ultra" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => toast.success("Ссылка на оплату создана"),
            className: "w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white",
            children: vPlan === "Pro" ? "Перейти на Ultra · $49.99/мес" : "Перейти на Pro · $16.99/мес"
          }
        )
      ] }) });
    }
    case "podcast": {
      const cp = chat.chatPodcast;
      const currentVoice = cp?.voice ?? "Onyx";
      const VOICE_LABELS = { Onyx: "Мужской", Shimmer: "Женский" };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Текущий тариф" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold", children: cp?.status?.includes("Активна") ? "Pro" : "Free" }),
              cp?.status && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: cp.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-muted-foreground mt-1", children: [
              cp?.status?.includes("Активна") ? "$2.99/мес · безлимит" : "Бесплатно · 16 минут",
              " · аудио-версия саммари каждое утро"
            ] })
          ] }),
          !cp?.status?.includes("Активна") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toast.success("Ссылка на оплату создана"),
              className: "w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white",
              children: "Перейти на Pro · $2.99/мес"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Настройки" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Голос", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["Onyx", "Shimmer"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setPodcastVoice(chat.id, v);
                toast(`Голос изменён: ${VOICE_LABELS[v].toLowerCase()}`);
              },
              className: `px-3 py-1 rounded-lg text-[12px] font-medium transition ${currentVoice === v ? "gradient-primary text-white" : "bg-white/10 hover:bg-white/15 text-muted-foreground"}`,
              children: VOICE_LABELS[v]
            },
            v
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Авто-выпуск", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Toggle,
            {
              defaultOn: cp?.active,
              onChange: (v) => toast(v ? "Авто-выпуск включён" : "Авто-выпуск отключён")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: generating,
              onClick: () => {
                setGenerating(true);
                toast("Генерация подкаста запущена...");
                setTimeout(() => {
                  setGenerating(false);
                  toast.success("Подкаст сгенерирован! Выпуск появится в чате.");
                }, 2e3);
              },
              className: "w-full py-2.5 text-[13px] font-semibold rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-50",
              children: generating ? "Генерация..." : "Сгенерировать сейчас"
            }
          )
        ] })
      ] });
    }
    case "kb": {
      const kb = chat.knowledgeBase ?? { quotaUsed: 0, quotaTotal: 100 };
      const pct = kb.quotaUsed / kb.quotaTotal * 100;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Текущий тариф" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold", children: "Knowledge Base Free" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-muted-foreground mt-1", children: [
              "Бесплатно · ",
              kb.quotaTotal,
              " запросов/мес"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Использовано" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: pct > 90 ? "text-[oklch(0.82_0.17_25)] font-semibold" : "font-semibold", children: [
                kb.quotaUsed,
                " из ",
                kb.quotaTotal,
                " запросов"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-white/8 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full rounded-full transition-all",
                style: {
                  width: `${Math.max(pct, 2)}%`,
                  background: pct > 90 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)"
                }
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Настройки" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Команда", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[12px]", children: "/search запрос" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] text-muted-foreground leading-relaxed", children: [
            "Введите ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: "/search" }),
            " и тему в групповом чате. Бот найдёт релевантные обсуждения и выдаст краткий ответ."
          ] })
        ] })
      ] });
    }
    case "antispam":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(AntispamSettings, { chat });
    case "anonymous":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Текущий тариф" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold", children: "Анонимные сообщения" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground mt-1", children: "Бесплатно · 3 сообщения/день на участника" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Настройки" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Разрешить медиа", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Toggle,
            {
              defaultOn: chat.anonymous?.allowMedia,
              onChange: (v) => {
                setAllowMedia(chat.id, v);
                toast(v ? "Медиа разрешены" : "Медиа запрещены");
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground leading-relaxed", children: "Все анонимные сообщения проходят модерацию согласно правилам использования сервиса." })
        ] })
      ] });
  }
}
const TIME_PRESETS = ["08:00", "12:00", "16:00", "18:00", "20:00"];
function SummarySettings({ chat }) {
  const [frequency, setFrequency] = reactExports.useState(1);
  const [weekDay, setWeekDay] = reactExports.useState(0);
  const [monthDay, setMonthDay] = reactExports.useState(1);
  const [time, setTime] = reactExports.useState("09:00");
  const [timezone] = reactExports.useState("Europe/Moscow (UTC+3)");
  const [autopin, setAutopin] = reactExports.useState(true);
  const [includeVoice, setIncludeVoice] = reactExports.useState(true);
  const [showEmoji, setShowEmoji] = reactExports.useState(true);
  const [showLinks, setShowLinks] = reactExports.useState(true);
  const [spamFilter, setSpamFilter] = reactExports.useState(true);
  const [hideSupport, setHideSupport] = reactExports.useState(false);
  const [hashtag, setHashtag] = reactExports.useState(chat.hashtag ?? "dailysummary");
  const [title, setTitle] = reactExports.useState("");
  const [dirty, setDirty] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState("idle");
  const markDirty = () => setDirty(true);
  const handleSave = () => {
    setSaving("loading");
    setTimeout(() => {
      setSaving("success");
      setDirty(false);
      setTimeout(() => setSaving("idle"), 1200);
    }, 800);
  };
  const filterHashtag = (v) => v.replace(/[^a-zA-Zа-яА-ЯёЁ0-9_]/g, "").slice(0, 32);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    chat.cancelled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-warning rounded-[20px] p-4 flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 20, className: "text-[oklch(0.82_0.17_55)] shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", children: "Подписка отменена" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground/80", children: [
          "Тариф ",
          chat.plan,
          " действует до ",
          chat.planUntil,
          ", затем переключится на Nano."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryPlanBlock, { chat }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Расписание" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Периодичность", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: frequency,
          onChange: (e) => {
            setFrequency(Number(e.target.value));
            markDirty();
          },
          className: "bg-white/8 rounded-lg px-3 py-1.5 text-[13px] outline-none appearance-none cursor-pointer pr-7",
          style: { backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "Ежедневно" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 7, children: "Еженедельно" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 30, children: "Ежемесячно" })
          ]
        }
      ) }),
      frequency === 7 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setWeekDay(i);
            markDirty();
          },
          className: `flex-1 py-2 rounded-lg text-[11px] font-medium transition ${weekDay === i ? "gradient-primary text-white" : "bg-white/8 text-muted-foreground"}`,
          children: d
        },
        d
      )) }),
      frequency === 30 && /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "День месяца", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "number",
          min: 1,
          max: 31,
          value: monthDay,
          onChange: (e) => {
            setMonthDay(Math.min(31, Math.max(1, Number(e.target.value))));
            markDirty();
          },
          className: "w-16 bg-white/8 rounded-lg px-3 py-1.5 text-[13px] text-right outline-none"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Время отправки", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "time",
          value: time,
          onChange: (e) => {
            setTime(e.target.value);
            markDirty();
          },
          className: "bg-white/8 rounded-lg px-3 py-1.5 text-[13px] outline-none"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: TIME_PRESETS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setTime(t);
            markDirty();
          },
          className: `flex-1 py-1.5 rounded-lg text-[11px] font-medium transition ${time === t ? "gradient-primary text-white" : "bg-white/8 text-muted-foreground"}`,
          children: t
        },
        t
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Часовой пояс", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-muted-foreground", children: timezone }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Контент саммари" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mb-1.5", children: "Заголовок" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: title,
            onChange: (e) => {
              setTitle(e.target.value.slice(0, 150));
              markDirty();
            },
            placeholder: 'Например: "Саммари за {date}"',
            className: "w-full bg-white/8 rounded-xl px-3.5 py-2.5 text-[13px] outline-none placeholder:text-muted-foreground/50"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1 text-right", children: [
          title.length,
          "/150"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mb-1.5", children: "Хэштег" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-white/8 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pl-3.5 text-muted-foreground text-[14px]", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: hashtag,
              onChange: (e) => {
                setHashtag(filterHashtag(e.target.value));
                markDirty();
              },
              placeholder: "dailysummary",
              className: "flex-1 bg-transparent px-1.5 py-2.5 text-[13px] outline-none"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Автопин", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: autopin, onChange: (v) => {
        setAutopin(v);
        markDirty();
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Включать голосовые", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: includeVoice, onChange: (v) => {
        setIncludeVoice(v);
        markDirty();
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Эмодзи у тем", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: showEmoji, onChange: (v) => {
        setShowEmoji(v);
        markDirty();
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Ссылки из обсуждений", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: showLinks, onChange: (v) => {
        setShowLinks(v);
        markDirty();
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Фильтрация спама", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: spamFilter, onChange: (v) => {
        setSpamFilter(v);
        markDirty();
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Скрыть текст поддержки", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: hideSupport, onChange: (v) => {
        setHideSupport(v);
        markDirty();
      } }) })
    ] }),
    dirty && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: saving === "loading" || saving === "success",
        onClick: handleSave,
        className: `w-full py-3.5 rounded-2xl text-[14px] font-semibold transition ${saving === "success" ? "bg-[oklch(0.55_0.16_155)] text-white" : saving === "error" ? "bg-[oklch(0.55_0.20_25)] text-white" : "gradient-primary text-white"} disabled:opacity-70`,
        children: saving === "loading" ? "Сохранение..." : saving === "success" ? "Успешно сохранено" : saving === "error" ? "Попробуйте снова" : "Сохранить"
      }
    ) })
  ] });
}
const SUMMARY_PLANS = [
  { name: "Nano", price: "Бесплатно", limit: "до 200 сообщений/день на чат", icon: "🔹" },
  { name: "Standard", price: "$2.49/мес", limit: "до 500 сообщений/день на чат", icon: "🔷" },
  { name: "Full-on", price: "$4.99/мес", limit: "до 1 000 сообщений/день на чат", icon: "⚡" },
  { name: "Contributor", price: "$99.9/мес", limit: "безлимит на все чаты + ранний доступ", icon: "👑" }
];
function SummaryPlanBlock({ chat }) {
  const [showAll, setShowAll] = reactExports.useState(false);
  const currentPlan = SUMMARY_PLANS.find((p) => p.name === chat.plan) ?? SUMMARY_PLANS[0];
  const usageText = `${chat.used} из ${chat.limit} сообщений`;
  const usagePct = Math.min(chat.used / chat.limit * 100, 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Текущий тариф" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold", children: currentPlan.name }),
          chat.plan !== "Nano" && chat.planUntil && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
            "до ",
            chat.planUntil
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[13px] text-muted-foreground mt-1", children: [
          currentPlan.price === "Бесплатно" ? "Бесплатно" : currentPlan.price,
          " · ",
          currentPlan.limit
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Обработано" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: usagePct > 90 ? "text-[oklch(0.82_0.17_25)] font-semibold" : "font-semibold", children: usageText })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-white/8 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-all",
            style: {
              width: `${Math.max(usagePct, 2)}%`,
              background: usagePct > 90 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)"
            }
          }
        ) })
      ] }),
      chat.cancelled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[oklch(0.65_0.22_25)]/10 border border-[oklch(0.65_0.22_25)]/25 px-3 py-2.5 text-[12px] text-[oklch(0.82_0.17_55)] leading-relaxed", children: [
        "Подписка отменена. Тариф ",
        chat.plan,
        " будет действовать до ",
        chat.planUntil,
        ", после чего чат перейдёт на Nano."
      ] }),
      chat.plan !== "Contributor" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => toast.success("Ссылка на оплату создана"),
          className: "w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white",
          children: chat.plan === "Nano" ? "Перейти на Standard · $2.49/мес" : chat.plan === "Standard" ? "Перейти на Full-on · $4.99/мес" : "Перейти на Contributor · $99.9/мес"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setShowAll(!showAll),
        className: "glass-card rounded-[20px] p-4 w-full flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold", children: "Сравнить тарифы" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: `w-4 h-4 text-muted-foreground transition-transform ${showAll ? "rotate-180" : ""}`,
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    showAll && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] overflow-hidden divide-y divide-white/5", children: SUMMARY_PLANS.map((p) => {
      const isCurrent = p.name === chat.plan;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 flex items-center gap-3 ${isCurrent ? "bg-white/5" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg w-8 text-center", children: p.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            p.price,
            " · ",
            p.limit
          ] })
        ] }),
        isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[10px] px-2 py-0.5 rounded-full font-semibold",
            style: { background: "oklch(0.72 0.16 155 / 0.15)", color: "oklch(0.85 0.15 155)" },
            children: "Активен"
          }
        )
      ] }, p.name);
    }) })
  ] });
}
function AntispamSettings({ chat }) {
  const isPro = chat.antispam?.paid ?? false;
  const [stopWords, setStopWords] = reactExports.useState("спам, реклама, заработок");
  const [kickPeriod, setKickPeriod] = reactExports.useState("6");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Тариф" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold", children: isPro ? "Antispam Pro" : "Antispam Free" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground mt-1", children: isPro ? "$2.49/мес · все навыки" : "Бесплатно · базовая защита" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white/5 rounded-xl py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[18px] font-bold", children: chat.antispam?.deleted24h ?? 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "удалено за 24 ч" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white/5 rounded-xl py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[18px] font-bold", children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "ограничено" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white/5 rounded-xl py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[18px] font-bold", children: "28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: "токсичность" })
        ] })
      ] }),
      !isPro && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => toast.success("Ссылка на оплату создана"),
          className: "w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white",
          children: "Подключить Antispam Pro · $2.49/мес"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Базовая защита (Free)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Удаление системных сообщений", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: true, onChange: (v) => toast(v ? "Включено" : "Отключено") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Антифлуд", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: true, onChange: (v) => toast(v ? "Антифлуд включён" : "Антифлуд отключён") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground -mt-1 pl-1", children: "5 одинаковых за 10 мин или 10 подряд за 30 сек → ограничение 1 ч" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Запрет ссылок от новичков", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: true, onChange: (v) => toast(v ? "Включено" : "Отключено") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground -mt-1 pl-1", children: "Первые 7 дней после вступления" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Базовая капча при входе", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: true, onChange: (v) => toast(v ? "Капча включена" : "Капча отключена") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Удаление медиа-типов" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Стикеры", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { onChange: (v) => toast(v ? "Стикеры удаляются" : "Стикеры разрешены") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Гифки", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { onChange: (v) => toast(v ? "Гифки удаляются" : "Гифки разрешены") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Голосовые", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { onChange: (v) => toast(v ? "Голосовые удаляются" : "Голосовые разрешены") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Кружочки", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { onChange: (v) => toast(v ? "Кружочки удаляются" : "Кружочки разрешены") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Пересланные сообщения", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { onChange: (v) => toast(v ? "Пересланные удаляются" : "Пересланные разрешены") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionLabel, { children: [
        "Кастомные стоп-слова ",
        !isPro && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50 normal-case", children: "(до 20)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: stopWords,
          onChange: (e) => setStopWords(e.target.value),
          placeholder: "Через запятую: спам, реклама, ...",
          rows: 3,
          className: "w-full bg-white/8 rounded-xl px-3.5 py-2.5 text-[13px] outline-none resize-none placeholder:text-muted-foreground/50"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Защита от нашествия ботов" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground leading-relaxed", children: "Удаляет всех вступивших за указанный период. Сохраняет участников, активных в других чатах." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: kickPeriod,
            onChange: (e) => setKickPeriod(e.target.value),
            className: "flex-1 bg-white/8 rounded-lg px-3 py-2 text-[13px] outline-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "1 час" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6", children: "6 часов" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "24", children: "24 часа" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => toast.success("Удалено 47 ботов"),
            className: "px-4 py-2 rounded-lg bg-[oklch(0.55_0.20_25)] text-white text-[13px] font-semibold",
            children: "Удалить ботов"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
        "Или команда в чате: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: "/kicknew 6" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass-card rounded-[20px] p-4 space-y-3 ${!isPro ? "opacity-60" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Pro-фичи" }),
        !isPro && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded font-bold uppercase bg-white/10 text-muted-foreground", children: "$2.49/мес" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Умный фильтр мата (AI)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: isPro, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён") }) }),
      isPro && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 pl-1", children: ["Мягкий", "Средний", "Жёсткий"].map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/8 text-muted-foreground first:gradient-primary first:text-white",
          children: level
        },
        level
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Умный слоу-мод по токсичности", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: isPro, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Запрет пересылок из каналов", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: false, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Еженедельный отчёт", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: isPro, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Кастомная капча", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: false, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включена" : "Отключена") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Приветствие новичков", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: false, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включено" : "Отключено") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Белый список доменов", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: false, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Setting, { label: "Команда /top в чате", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: isPro, onChange: (v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включена" : "Отключена") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => toast("Антиспам выключен"),
        className: "w-full py-3 text-[13px] font-medium rounded-xl bg-white/6 hover:bg-white/10 text-[oklch(0.78_0.18_25)] transition",
        children: "Выключить антиспам"
      }
    )
  ] });
}
export {
  FeatureSettings as F
};
