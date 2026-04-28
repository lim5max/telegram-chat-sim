import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { u as useChatsStore, F as FEATURE_META } from "./_ssr/router-BUFDE6mC.mjs";
import { C as ChatAvatar } from "./_ssr/ChatAvatar-9l8M9lFu.mjs";
import { I as ICON_GRADIENTS, F as FeatureIcon } from "./_ssr/FeatureIcon-CJCYaFzD.mjs";
import { M as ME, b as Oz, e as Tkr, v as vh, S as Sd, C as Cs, p as px, f as uv, g as Dq, s as sl, i as pkr, V as Vc, j as En, U as U6, k as vFr, l as Chr, m as U$, L as LFr, n as fa, W as Wy, o as Oo, q as O3, z as zz } from "./_libs/hugeicons__core-free-icons.mjs";
import { H as HugeiconsIcon } from "./_libs/hugeicons__react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/zustand.mjs";
import "./_libs/zod.mjs";
const FEATURE_DETAILS = {
  summary: {
    items: [{
      icon: Wy,
      title: "Структурированная сводка",
      subtitle: "Темы, описания, ссылки"
    }, {
      icon: Oo,
      title: "По расписанию",
      subtitle: "Ежедневно, еженедельно или ежемесячно"
    }, {
      icon: O3,
      title: "Авто-пин",
      subtitle: "Закрепляет последнее саммари"
    }, {
      icon: zz,
      title: "Ссылки в саммари",
      subtitle: "Внешние URL из обсуждений"
    }, {
      icon: Sd,
      title: "Спам-фильтр",
      subtitle: "Фильтрация флуда при генерации"
    }]
  },
  voice: {
    items: [{
      icon: U$,
      title: "Голосовые в текст",
      subtitle: "Автоматическая расшифровка"
    }, {
      icon: LFr,
      title: "Видео-кружочки",
      subtitle: "Транскрибация video_note"
    }, {
      icon: fa,
      title: "Подавление галлюцинаций",
      subtitle: "Фильтр шума Whisper API"
    }, {
      icon: Tkr,
      title: "Модерация контента",
      subtitle: "LLM-проверка расшифровок"
    }],
    trialText: "37.5 бесплатных минут в месяц"
  },
  podcast: {
    items: [{
      icon: U6,
      title: "Голосовое саммари",
      subtitle: "Расширенная версия в аудио"
    }, {
      icon: vFr,
      title: "Выбор голоса",
      subtitle: "Onyx (муж.) или Shimmer (жен.)"
    }, {
      icon: Chr,
      title: "До 2 минут",
      subtitle: "Компактный выпуск каждый день"
    }, {
      icon: En,
      title: "Автоматически",
      subtitle: "Приходит сразу после саммари"
    }],
    trialText: "Бесплатная неделя при активации"
  },
  kb: {
    items: [{
      icon: pkr,
      title: "Поиск по истории",
      subtitle: "До 10 000 сообщений бесплатно"
    }, {
      icon: Vc,
      title: "Команда /search",
      subtitle: "Прямо в групповом чате"
    }, {
      icon: Cs,
      title: "Ранжирование",
      subtitle: "По свежести и обсуждаемости"
    }, {
      icon: En,
      title: "Автопополнение",
      subtitle: "Новые сообщения индексируются"
    }],
    trialText: "100 запросов в месяц бесплатно"
  },
  antispam: {
    items: [{
      icon: Sd,
      title: "Умный фильтр мата",
      subtitle: "Детект обходов и лит-спика"
    }, {
      icon: Cs,
      title: "Слоу-мод по токсичности",
      subtitle: "Realtime метрика 0–100"
    }, {
      icon: px,
      title: "Антифлуд",
      subtitle: "N сообщений за X минут"
    }, {
      icon: uv,
      title: "Кастомные стоп-слова",
      subtitle: "Свой список фраз"
    }, {
      icon: Dq,
      title: "Удаление медиа-типов",
      subtitle: "Стикеры, кружки, голос..."
    }, {
      icon: sl,
      title: "Еженедельный отчёт",
      subtitle: "Активность, топ, токсичность"
    }],
    trialText: "30 дней бесплатно — все фичи"
  },
  anonymous: {
    items: [{
      icon: ME,
      title: "Анонимная отправка",
      subtitle: "Бот публикует от своего имени"
    }, {
      icon: Oz,
      title: "Лимит 3/день на чат",
      subtitle: "Жёсткое ограничение"
    }, {
      icon: Tkr,
      title: "Модерация",
      subtitle: "OpenAI проверяет контент"
    }, {
      icon: vh,
      title: "Медиа по решению админа",
      subtitle: "Фото, видео, документы"
    }]
  }
};
const ACCENT_COLORS = {
  summary: "oklch(0.68 0.14 225)",
  voice: "oklch(0.68 0.16 155)",
  podcast: "oklch(0.68 0.18 15)",
  kb: "oklch(0.72 0.16 65)",
  antispam: "oklch(0.60 0.14 250)",
  anonymous: "oklch(0.58 0.06 230)"
};
const FILTERS = [{
  id: "all",
  label: "Все",
  audience: null
}, {
  id: "user",
  label: "Личные",
  audience: "user"
}, {
  id: "admin",
  label: "Для админов",
  audience: "admin"
}];
const FEATURES = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];
const NEW_FEATURES = /* @__PURE__ */ new Set(["podcast", "kb"]);
function MarketplaceScreen() {
  const [filter, setFilter] = reactExports.useState(FILTERS[0]);
  const [pickerFor, setPickerFor] = reactExports.useState(null);
  const [selectedFeature, setSelectedFeature] = reactExports.useState(null);
  const chats = useChatsStore((s) => s.chats);
  const visible = FEATURES.filter((fk) => {
    if (!filter.audience) return true;
    const f = FEATURE_META[fk];
    return f.audience === filter.audience || f.audience === "both";
  });
  const computeStatus = (fk) => {
    const m = FEATURE_META[fk].monetization;
    if (m === "free") return "free";
    const activeInAny = chats.some((c) => isActive(c, fk));
    if (activeInAny && m === "paid") return "active";
    if (activeInAny && m === "freemium") return "freemium";
    if (m === "paid") return "trial";
    return m;
  };
  if (selectedFeature) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureDetailView, { feature: selectedFeature, status: computeStatus(selectedFeature), onBack: () => setSelectedFeature(null), onActivate: () => setPickerFor(selectedFeature), pickerFor, onClosePicker: () => setPickerFor(null) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-6 space-y-4 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Каталог" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground -mt-2", children: "Все функции ChatLogix. Нажмите на карточку для подробностей." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-3 py-1.5 rounded-full text-[12px] font-medium transition ${filter.id === f.id ? "bg-white/18 text-white" : "bg-white/6 text-muted-foreground"}`, children: f.label }, f.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: visible.map((fk) => {
      const f = FEATURE_META[fk];
      const isNew = NEW_FEATURES.has(fk);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedFeature(fk), className: "w-full text-left glass-card rounded-[20px] overflow-hidden active:scale-[0.98] transition-transform relative group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", style: {
            background: ICON_GRADIENTS[fk],
            boxShadow: `0 4px 16px ${ACCENT_COLORS[fk]}40`
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature: fk, size: 22, color: "white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[15px] leading-tight", children: f.label }),
              isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider shrink-0", style: {
                background: `${ACCENT_COLORS[fk]}30`,
                color: ACCENT_COLORS[fk]
              }, children: "NEW" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceTag, { audience: f.audience })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold shrink-0", style: {
            background: "oklch(1 0 0 / 0.08)",
            color: "oklch(0.78 0.02 230)"
          }, children: f.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed pl-[3.375rem]", children: f.desc })
      ] }) }, fk);
    }) }),
    pickerFor && /* @__PURE__ */ jsxRuntimeExports.jsx(ChatPickerModal, { feature: pickerFor, onClose: () => setPickerFor(null) })
  ] });
}
function FeatureDetailView({
  feature,
  status,
  onBack,
  onActivate,
  pickerFor,
  onClosePicker
}) {
  const f = FEATURE_META[feature];
  const details = FEATURE_DETAILS[feature];
  const navigate = useNavigate();
  const chats = useChatsStore((s) => s.chats);
  const audienceLabel = f.audience === "admin" ? "Для администраторов" : f.audience === "user" ? "Для участников" : "Для всех";
  const handleCtaClick = () => {
    if (status === "active") {
      const target = chats.find((c) => isActive(c, feature));
      if (target) {
        navigate({
          to: "/chat/$chatId/feature/$featureKey",
          params: {
            chatId: target.id,
            featureKey: feature
          }
        });
      } else {
        toast("Откройте чат, чтобы настроить функцию");
      }
    } else {
      onActivate();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 pb-6 space-y-4 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onBack, className: "flex items-center gap-1 text-[13px] text-muted-foreground hover:text-white transition-colors -ml-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }) }),
      "Каталог"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[24px] p-6 relative overflow-hidden", style: {
      background: `linear-gradient(160deg, ${ACCENT_COLORS[feature]}33 0%, transparent 60%), var(--gradient-card)`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none", style: {
        background: ACCENT_COLORS[feature]
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[72px] h-[72px] rounded-3xl flex items-center justify-center", style: {
          background: ICON_GRADIENTS[feature],
          boxShadow: `0 6px 24px ${ACCENT_COLORS[feature]}50`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature, size: 32, color: "white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-1", children: audienceLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground mt-3 leading-relaxed", children: f.desc })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: status === "active" ? "Активно" : details.trialText ? details.trialText : f.monetization === "free" ? "Бесплатно" : f.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: status === "active" ? "Функция подключена в одном или нескольких чатах" : f.monetization === "free" ? "Включить в чате без ограничений" : "Все фичи без ограничений" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCtaClick, className: "gradient-primary text-white text-[12px] font-semibold px-5 py-2.5 rounded-xl shrink-0 active:scale-95 transition-transform", children: status === "active" ? "Открыть" : "Включить" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-1", children: "Что внутри" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] overflow-hidden divide-y divide-white/5", children: details.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0", style: {
          background: `${ACCENT_COLORS[feature]}18`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: item.icon, size: 18, strokeWidth: 2, color: ACCENT_COLORS[feature] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium leading-tight", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: item.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, style: {
          color: ACCENT_COLORS[feature]
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) })
      ] }, i)) })
    ] }),
    pickerFor && /* @__PURE__ */ jsxRuntimeExports.jsx(ChatPickerModal, { feature: pickerFor, onClose: onClosePicker })
  ] });
}
function AudienceTag({
  audience
}) {
  const label = audience === "admin" ? "для админов" : audience === "user" ? "для меня" : "для всех";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-0.5 block", children: label });
}
function ChatPickerModal({
  feature,
  onClose
}) {
  const chats = useChatsStore((s) => s.chats);
  const toggleFeature = useChatsStore((s) => s.toggleFeature);
  const f = FEATURE_META[feature];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-3", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[460px] glass-card rounded-[24px] p-4 max-h-[80vh] overflow-y-auto", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl mx-auto flex items-center justify-center", style: {
        background: ICON_GRADIENTS[feature]
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature, size: 22, color: "white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold mt-2", children: [
        "Добавить «",
        f.label,
        "» в чат"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground", children: "Выберите чат для подключения" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: chats.map((c) => {
      const already = isActive(c, feature);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: already, onClick: () => {
        toggleFeature(c.id, feature);
        toast.success(`«${f.label}» включён в «${c.name}»`);
        onClose();
      }, className: "w-full glass-card rounded-2xl p-3 flex items-center gap-3 active:scale-[0.99] disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChatAvatar, { chat: c, size: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: c.plan })
        ] }),
        already && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[oklch(0.85_0.15_155)]", children: "уже включено" })
      ] }, c.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "w-full mt-3 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium", children: "Отмена" })
  ] }) });
}
function isActive(c, fk) {
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
export {
  MarketplaceScreen as component
};
