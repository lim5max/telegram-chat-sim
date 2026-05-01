import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { b as Route$3, u as useChatsStore, F as FEATURE_META } from "./_ssr/router-BfskArbM.mjs";
import { C as ChatAvatar } from "./_ssr/ChatAvatar-9l8M9lFu.mjs";
import { I as ICON_GRADIENTS, F as FeatureIcon } from "./_ssr/FeatureIcon-CJCYaFzD.mjs";
import { N as Nn, M as ME, b as Oz, e as Tkr, v as vh, S as Sd, C as Cs, p as px, f as uv, D as Dq, s as sl, g as pkr, V as Vc, E as En, U as U6, i as vFr, j as Chr, k as U$, L as LFr, l as fa, W as Wy, m as Oo, n as O3, z as zz } from "./_libs/hugeicons__core-free-icons.mjs";
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
      subtitle: "Темы с описанием, ключевые решения и ссылки на сообщения"
    }, {
      icon: Oo,
      title: "Гибкое расписание",
      subtitle: "Ежедневно, еженедельно или ежемесячно в выбранное время"
    }, {
      icon: O3,
      title: "Авто-пин",
      subtitle: "Закрепляет саммари в чате, чтобы не потерялось"
    }, {
      icon: zz,
      title: "Ссылки из обсуждений",
      subtitle: "Собирает внешние URL, которыми делились участники"
    }, {
      icon: Sd,
      title: "Фильтрация спама",
      subtitle: "Игнорирует флуд и мусор при генерации сводки"
    }]
  },
  voice: {
    items: [{
      icon: U$,
      title: "Голосовые в текст",
      subtitle: "Расшифровка появляется под сообщением автоматически"
    }, {
      icon: LFr,
      title: "Видео-кружочки",
      subtitle: "Транскрибация кружочков наравне с голосовыми"
    }, {
      icon: fa,
      title: "Подавление галлюцинаций",
      subtitle: "Фильтр шума — убирает артефакты Whisper API"
    }, {
      icon: Tkr,
      title: "Модерация контента",
      subtitle: "AI-проверка расшифровок перед публикацией"
    }],
    trialText: "30 бесплатных минут в месяц"
  },
  podcast: {
    items: [{
      icon: U6,
      title: "Аудио-версия саммари",
      subtitle: "Расширенная голосовая выжимка обсуждений чата"
    }, {
      icon: vFr,
      title: "Выбор голоса",
      subtitle: "Мужской или женский — переключается в настройках"
    }, {
      icon: Chr,
      title: "До 4 минут на выпуск",
      subtitle: "Компактный формат, удобно слушать на ходу"
    }, {
      icon: En,
      title: "Приходит автоматически",
      subtitle: "Выпуск в чате каждое утро сразу после текстового саммари"
    }],
    trialText: "Бесплатная неделя при активации"
  },
  kb: {
    items: [{
      icon: pkr,
      title: "Поиск по истории",
      subtitle: "Парсинг до 10 000 последних сообщений при активации"
    }, {
      icon: Vc,
      title: "Команда /search",
      subtitle: "Участники спрашивают прямо в чате, бот отвечает публично"
    }, {
      icon: Cs,
      title: "Умное ранжирование",
      subtitle: "Приоритет у свежих и обсуждаемых тредов"
    }, {
      icon: En,
      title: "Автопополнение",
      subtitle: "Новые сообщения индексируются автоматически"
    }],
    trialText: "100 запросов в месяц бесплатно"
  },
  antispam: {
    items: [{
      icon: Sd,
      title: "Умный фильтр мата",
      subtitle: "AI-детект обходов, транслита и лит-спика"
    }, {
      icon: Cs,
      title: "Слоу-мод по токсичности",
      subtitle: "Автоматическое ограничение при высокой токсичности"
    }, {
      icon: px,
      title: "Антифлуд",
      subtitle: "Блокировка при 5 одинаковых за 10 мин или 10 подряд за 30 сек"
    }, {
      icon: uv,
      title: "Кастомные стоп-слова",
      subtitle: "Свой список запрещённых фраз, до 20 бесплатно"
    }, {
      icon: Dq,
      title: "Фильтрация медиа",
      subtitle: "Удаление стикеров, гифок, кружочков, пересланных"
    }, {
      icon: sl,
      title: "Еженедельный отчёт",
      subtitle: "Статистика: удалено, ограничено, топ нарушителей"
    }],
    trialText: "Free-тариф — базовая защита навсегда"
  },
  anonymous: {
    items: [{
      icon: ME,
      title: "Анонимная отправка",
      subtitle: "Бот публикует сообщение от своего имени, автор скрыт"
    }, {
      icon: Oz,
      title: "Лимит 3 в день",
      subtitle: "На каждый чат — защита от злоупотреблений"
    }, {
      icon: Tkr,
      title: "Модерация",
      subtitle: "Контент проверяется перед публикацией"
    }, {
      icon: vh,
      title: "Медиа по решению админа",
      subtitle: "Админ решает, можно ли отправлять фото и видео"
    }]
  }
};
const ACCENT_COLORS = {
  summary: "oklch(0.65 0.15 230)",
  voice: "oklch(0.65 0.18 340)",
  podcast: "oklch(0.65 0.15 230)",
  kb: "oklch(0.65 0.15 230)",
  antispam: "oklch(0.60 0.15 230)",
  anonymous: "oklch(0.65 0.18 340)"
};
const FEATURE_TARIFFS = {
  summary: [{
    name: "Nano",
    price: "Бесплатно",
    limit: "до 200 сообщений/день на чат"
  }, {
    name: "Standard",
    price: "$2.49/мес",
    limit: "до 500 сообщений/день на чат"
  }, {
    name: "Full-on",
    price: "$4.99/мес",
    limit: "до 1 000 сообщений/день на чат"
  }, {
    name: "Contributor",
    price: "$99.9/мес",
    limit: "безлимит на все чаты + ранний доступ"
  }],
  voice: [{
    name: "Free",
    price: "Бесплатно",
    limit: "до 30 мин/мес на чат"
  }, {
    name: "Pro",
    price: "$16.99/мес",
    limit: "до 375 мин/мес на чат"
  }, {
    name: "Extra",
    price: "$53.99/мес",
    limit: "до 1500 мин/мес на чат"
  }],
  podcast: [{
    name: "Free",
    price: "Бесплатно",
    limit: "пробная неделя"
  }, {
    name: "Pro",
    price: "$5.99/мес",
    limit: "ежедневные выпуски, выбор голоса"
  }],
  antispam: [{
    name: "Free",
    price: "Бесплатно",
    limit: "базовая защита от спама и флуда"
  }, {
    name: "Pro",
    price: "$2.49/мес",
    limit: "AI-фильтр, кастомная капча, отчёты"
  }]
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
  const {
    feature: featureParam
  } = Route$3.useSearch();
  const [filter, setFilter] = reactExports.useState(FILTERS[0]);
  const [pickerFor, setPickerFor] = reactExports.useState(null);
  const [selectedFeature, setSelectedFeature] = reactExports.useState(featureParam && FEATURES.includes(featureParam) ? featureParam : null);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground -mt-2", children: "Все навыки ChatLogix. Нажмите на карточку для подробностей." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-3 py-1.5 rounded-full text-[12px] font-medium transition ${filter.id === f.id ? "bg-white/18 text-white" : "bg-white/6 text-muted-foreground"}`, children: f.label }, f.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: visible.map((fk) => {
      const f = FEATURE_META[fk];
      const isNew = NEW_FEATURES.has(fk);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedFeature(fk), className: "w-full text-left glass-card rounded-[20px] overflow-hidden active:scale-[0.98] transition-transform relative group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5", children: [
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
            }, children: "NEW" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceTag, { audience: f.audience })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed", children: f.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Nn, size: 16, strokeWidth: 2, className: "text-muted-foreground shrink-0" })
      ] }) }) }, fk);
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
  f.audience === "admin" ? "Навык чата" : f.audience === "user" ? "Персональный навык" : "Навык чата";
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
        toast("Откройте чат, чтобы настроить навык");
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[24px] p-6 relative overflow-hidden", style: {
      background: `linear-gradient(160deg, ${ACCENT_COLORS[feature]}25 0%, transparent 50%), oklch(0.22 0.02 240 / 0.85)`,
      border: `1px solid oklch(1 0 0 / 0.08)`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none", style: {
        background: ACCENT_COLORS[feature]
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[72px] h-[72px] rounded-3xl flex items-center justify-center", style: {
          background: ICON_GRADIENTS[feature],
          boxShadow: `0 6px 24px ${ACCENT_COLORS[feature]}50`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature, size: 32, color: "white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceTag, { audience: f.audience })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground mt-3 leading-relaxed", children: f.desc })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: status === "active" ? "Активно" : details.trialText ? details.trialText : f.monetization === "free" ? "Бесплатно" : f.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: status === "active" ? "Навык подключён в одном или нескольких чатах" : f.monetization === "free" ? "Включить в чате без ограничений" : "Все фичи без ограничений" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCtaClick, className: "gradient-primary text-white text-[12px] font-semibold px-5 py-2.5 rounded-xl shrink-0 active:scale-95 transition-transform", children: status === "active" ? "Открыть" : "Включить" })
    ] }) }),
    FEATURE_TARIFFS[feature] && /* @__PURE__ */ jsxRuntimeExports.jsx(TariffComparison, { feature, tariffs: FEATURE_TARIFFS[feature] }),
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
function TariffComparison({
  feature,
  tariffs
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "glass-card rounded-[20px] p-4 w-full flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold", children: "Сравнить тарифы" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] overflow-hidden divide-y divide-white/5", children: tariffs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0", style: {
        background: `${ACCENT_COLORS[feature]}18`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature, size: 18, color: ACCENT_COLORS[feature] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
          t.price,
          " · ",
          t.limit
        ] })
      ] })
    ] }, t.name)) })
  ] });
}
function AudienceTag({
  audience
}) {
  const isPersonal = audience === "user";
  const label = isPersonal ? "персональный" : "навык чата";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded font-medium uppercase tracking-wider shrink-0", style: {
    background: isPersonal ? "oklch(0.65 0.18 340 / 0.15)" : "oklch(0.65 0.15 230 / 0.15)",
    color: isPersonal ? "oklch(0.78 0.14 340)" : "oklch(0.78 0.12 230)"
  }, children: label });
}
function ChatPickerModal({
  feature,
  onClose
}) {
  const chats = useChatsStore((s) => s.chats);
  const toggleFeature = useChatsStore((s) => s.toggleFeature);
  const navigate = useNavigate();
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: chats.filter((c) => c.isAdmin).map((c) => {
      const already = isActive(c, feature);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: already, onClick: () => {
        if (!already) toggleFeature(c.id, feature);
        onClose();
        navigate({
          to: "/chat/$chatId",
          params: {
            chatId: c.id
          },
          hash: `f-${feature}`
        });
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
