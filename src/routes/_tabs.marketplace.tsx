import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { FEATURE_META, type FeatureKey, type Monetization } from "@/data/chats";
import { useChatsStore } from "@/store/chats";
import { ChatAvatar } from "@/components/ChatAvatar";
import { FeatureIcon, ICON_GRADIENTS } from "@/components/FeatureIcon";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckListIcon,
  AlarmClockIcon,
  PinIcon,
  Link01Icon,
  BlockedIcon,
  Mic01Icon,
  Video01Icon,
  BrainIcon,
  SecurityCheckIcon,
  PodcastIcon,
  VoiceIdIcon,
  StopWatchIcon,
  ArrowReloadHorizontalIcon,
  Search01Icon,
  BubbleChatIcon,
  BarChartIcon,
  FlashIcon,
  HashtagIcon,
  Image01Icon,
  ChartIncreaseIcon,
  IncognitoIcon,
  LimitationIcon,
  Camera01Icon,
} from "@hugeicons/core-free-icons";

export const Route = createFileRoute("/_tabs/marketplace")({
  head: () => ({
    meta: [
      { title: "Каталог — ChatLogix" },
      { name: "description", content: "Все функции ChatLogix: добавляй в чаты или подключай лично." },
    ],
  }),
  component: MarketplaceScreen,
});

/* ------------------------------------------------------------------ */
/*  Feature sub-items & detail data                                   */
/* ------------------------------------------------------------------ */

const FEATURE_DETAILS: Record<FeatureKey, { items: { icon: typeof CheckListIcon; title: string; subtitle: string }[]; trialText?: string }> = {
  summary: {
    items: [
      { icon: CheckListIcon, title: "Структурированная сводка", subtitle: "Темы, описания, ссылки" },
      { icon: AlarmClockIcon, title: "По расписанию", subtitle: "Ежедневно, еженедельно или ежемесячно" },
      { icon: PinIcon, title: "Авто-пин", subtitle: "Закрепляет последнее саммари" },
      { icon: Link01Icon, title: "Ссылки в саммари", subtitle: "Внешние URL из обсуждений" },
      { icon: BlockedIcon, title: "Спам-фильтр", subtitle: "Фильтрация флуда при генерации" },
    ],
  },
  voice: {
    items: [
      { icon: Mic01Icon, title: "Голосовые в текст", subtitle: "Автоматическая расшифровка" },
      { icon: Video01Icon, title: "Видео-кружочки", subtitle: "Транскрибация video_note" },
      { icon: BrainIcon, title: "Подавление галлюцинаций", subtitle: "Фильтр шума Whisper API" },
      { icon: SecurityCheckIcon, title: "Модерация контента", subtitle: "LLM-проверка расшифровок" },
    ],
    trialText: "37.5 бесплатных минут в месяц",
  },
  podcast: {
    items: [
      { icon: PodcastIcon, title: "Голосовое саммари", subtitle: "Расширенная версия в аудио" },
      { icon: VoiceIdIcon, title: "Выбор голоса", subtitle: "Onyx (муж.) или Shimmer (жен.)" },
      { icon: StopWatchIcon, title: "До 2 минут", subtitle: "Компактный выпуск каждый день" },
      { icon: ArrowReloadHorizontalIcon, title: "Автоматически", subtitle: "Приходит сразу после саммари" },
    ],
    trialText: "Бесплатная неделя при активации",
  },
  kb: {
    items: [
      { icon: Search01Icon, title: "Поиск по истории", subtitle: "До 10 000 сообщений бесплатно" },
      { icon: BubbleChatIcon, title: "Команда /search", subtitle: "Прямо в групповом чате" },
      { icon: BarChartIcon, title: "Ранжирование", subtitle: "По свежести и обсуждаемости" },
      { icon: ArrowReloadHorizontalIcon, title: "Автопополнение", subtitle: "Новые сообщения индексируются" },
    ],
    trialText: "100 запросов в месяц бесплатно",
  },
  antispam: {
    items: [
      { icon: BlockedIcon, title: "Умный фильтр мата", subtitle: "Детект обходов и лит-спика" },
      { icon: BarChartIcon, title: "Слоу-мод по токсичности", subtitle: "Realtime метрика 0–100" },
      { icon: FlashIcon, title: "Антифлуд", subtitle: "N сообщений за X минут" },
      { icon: HashtagIcon, title: "Кастомные стоп-слова", subtitle: "Свой список фраз" },
      { icon: Image01Icon, title: "Удаление медиа-типов", subtitle: "Стикеры, кружки, голос..." },
      { icon: ChartIncreaseIcon, title: "Еженедельный отчёт", subtitle: "Активность, топ, токсичность" },
    ],
    trialText: "30 дней бесплатно — все фичи",
  },
  anonymous: {
    items: [
      { icon: IncognitoIcon, title: "Анонимная отправка", subtitle: "Бот публикует от своего имени" },
      { icon: LimitationIcon, title: "Лимит 3/день на чат", subtitle: "Жёсткое ограничение" },
      { icon: SecurityCheckIcon, title: "Модерация", subtitle: "OpenAI проверяет контент" },
      { icon: Camera01Icon, title: "Медиа по решению админа", subtitle: "Фото, видео, документы" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Per-feature gradient colors                                       */
/* ------------------------------------------------------------------ */

const ACCENT_COLORS: Record<FeatureKey, string> = {
  summary: "oklch(0.68 0.14 225)",
  voice: "oklch(0.68 0.16 155)",
  podcast: "oklch(0.68 0.18 15)",
  kb: "oklch(0.72 0.16 65)",
  antispam: "oklch(0.60 0.14 250)",
  anonymous: "oklch(0.58 0.06 230)",
};

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */

const FILTERS = [
  { id: "all", label: "Все", audience: null as null | "user" | "admin" },
  { id: "user", label: "Личные", audience: "user" as const },
  { id: "admin", label: "Для админов", audience: "admin" as const },
];

const FEATURES: FeatureKey[] = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];

const NEW_FEATURES: Set<FeatureKey> = new Set(["podcast", "kb"]);

type Status = "free" | "freemium" | "paid" | "active" | "trial";

/* ------------------------------------------------------------------ */
/*  Main screen                                                       */
/* ------------------------------------------------------------------ */

function MarketplaceScreen() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>(FILTERS[0]);
  const [pickerFor, setPickerFor] = useState<FeatureKey | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);

  const chats = useChatsStore((s) => s.chats);

  const visible = FEATURES.filter((fk) => {
    if (!filter.audience) return true;
    const f = FEATURE_META[fk];
    return f.audience === filter.audience || f.audience === "both";
  });

  const computeStatus = (fk: FeatureKey): Status => {
    const m = FEATURE_META[fk].monetization;
    if (m === "free") return "free";
    const activeInAny = chats.some((c) => isActive(c, fk));
    if (activeInAny && m === "paid") return "active";
    if (activeInAny && m === "freemium") return "freemium";
    if (m === "paid") return "trial";
    return m;
  };

  /* ---- Detail view ---- */
  if (selectedFeature) {
    return (
      <FeatureDetailView
        feature={selectedFeature}
        status={computeStatus(selectedFeature)}
        onBack={() => setSelectedFeature(null)}
        onActivate={() => setPickerFor(selectedFeature)}
        pickerFor={pickerFor}
        onClosePicker={() => setPickerFor(null)}
      />
    );
  }

  /* ---- Catalog list view ---- */
  return (
    <div className="px-4 pt-5 pb-6 space-y-4 max-w-[520px] mx-auto">
      <h1 className="text-2xl font-bold">Каталог</h1>
      <p className="text-[12px] text-muted-foreground -mt-2">
        Все функции ChatLogix. Нажмите на карточку для подробностей.
      </p>

      {/* Filter tabs */}
      <div className="flex gap-1.5">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition ${
              filter.id === f.id ? "bg-white/18 text-white" : "bg-white/6 text-muted-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Feature cards */}
      <div className="space-y-3">
        {visible.map((fk) => {
          const f = FEATURE_META[fk];
          const isNew = NEW_FEATURES.has(fk);
          return (
            <button
              key={fk}
              onClick={() => setSelectedFeature(fk)}
              className="w-full text-left glass-card rounded-[20px] overflow-hidden active:scale-[0.98] transition-transform relative group"
            >

              <div className="relative p-4">
                {/* Header: icon + name + price */}
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: ICON_GRADIENTS[fk],
                      boxShadow: `0 4px 16px ${ACCENT_COLORS[fk]}40`,
                    }}
                  >
                    <FeatureIcon feature={fk} size={22} color="white" />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[15px] leading-tight">{f.label}</span>
                      {isNew && (
                        <span
                          className="text-[9px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider shrink-0"
                          style={{
                            background: `${ACCENT_COLORS[fk]}30`,
                            color: ACCENT_COLORS[fk],
                          }}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                    <AudienceTag audience={f.audience} />
                  </div>
                  {/* Price pill — top right */}
                  <div
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold shrink-0"
                    style={{
                      background: "oklch(1 0 0 / 0.08)",
                      color: "oklch(0.78 0.02 230)",
                    }}
                  >
                    {f.price}
                  </div>
                </div>

                {/* Description */}
                <div className="text-[12px] text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed pl-[3.375rem]">
                  {f.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {pickerFor && <ChatPickerModal feature={pickerFor} onClose={() => setPickerFor(null)} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature detail view                                               */
/* ------------------------------------------------------------------ */

function FeatureDetailView({
  feature,
  status,
  onBack,
  onActivate,
  pickerFor,
  onClosePicker,
}: {
  feature: FeatureKey;
  status: Status;
  onBack: () => void;
  onActivate: () => void;
  pickerFor: FeatureKey | null;
  onClosePicker: () => void;
}) {
  const f = FEATURE_META[feature];
  const details = FEATURE_DETAILS[feature];
  const navigate = useNavigate();
  const chats = useChatsStore((s) => s.chats);

  const audienceLabel =
    f.audience === "admin" ? "Для администраторов" : f.audience === "user" ? "Для участников" : "Для всех";

  const handleCtaClick = () => {
    if (status === "active") {
      const target = chats.find((c) => isActive(c, feature));
      if (target) {
        navigate({
          to: "/chat/$chatId/feature/$featureKey",
          params: { chatId: target.id, featureKey: feature },
        });
      } else {
        toast("Откройте чат, чтобы настроить функцию");
      }
    } else {
      onActivate();
    }
  };

  return (
    <div className="px-4 pt-5 pb-6 space-y-4 max-w-[520px] mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-[13px] text-muted-foreground hover:text-white transition-colors -ml-0.5"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Каталог
      </button>

      {/* Hero card */}
      <div
        className="rounded-[24px] p-6 relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${ACCENT_COLORS[feature]}33 0%, transparent 60%), var(--gradient-card)`,
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: ACCENT_COLORS[feature] }}
        />

        <div className="relative z-10">
          <div
            className="w-[72px] h-[72px] rounded-3xl flex items-center justify-center"
            style={{
              background: ICON_GRADIENTS[feature],
              boxShadow: `0 6px 24px ${ACCENT_COLORS[feature]}50`,
            }}
          >
            <FeatureIcon feature={feature} size={32} color="white" />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">{f.label}</h2>
            <div className="text-[12px] text-muted-foreground mt-1">{audienceLabel}</div>
          </div>
          <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
        </div>
      </div>

      {/* Trial / pricing banner */}
      <div className="glass-card rounded-[20px] p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[13px] font-semibold">
              {status === "active"
                ? "Активно"
                : details.trialText
                  ? details.trialText
                  : f.monetization === "free"
                    ? "Бесплатно"
                    : f.price}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              {status === "active"
                ? "Функция подключена в одном или нескольких чатах"
                : f.monetization === "free"
                  ? "Включить в чате без ограничений"
                  : "Все фичи без ограничений"}
            </div>
          </div>
          <button
            onClick={handleCtaClick}
            className="gradient-primary text-white text-[12px] font-semibold px-5 py-2.5 rounded-xl shrink-0 active:scale-95 transition-transform"
          >
            {status === "active" ? "Открыть" : "Включить"}
          </button>
        </div>
      </div>

      {/* What's inside */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-1">
          Что внутри
        </div>
        <div className="glass-card rounded-[20px] overflow-hidden divide-y divide-white/5">
          {details.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${ACCENT_COLORS[feature]}18` }}
              >
                <HugeiconsIcon icon={item.icon} size={18} strokeWidth={2} color={ACCENT_COLORS[feature]} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium leading-tight">{item.title}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{item.subtitle}</div>
              </div>
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ color: ACCENT_COLORS[feature] }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {pickerFor && <ChatPickerModal feature={pickerFor} onClose={onClosePicker} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Audience tag                                                      */
/* ------------------------------------------------------------------ */

function AudienceTag({ audience }: { audience: "user" | "admin" | "both" }) {
  const label = audience === "admin" ? "для админов" : audience === "user" ? "для меня" : "для всех";
  return (
    <span className="text-[10px] text-muted-foreground mt-0.5 block">
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Chat picker modal (rewritten with ChatAvatar)                     */
/* ------------------------------------------------------------------ */

function ChatPickerModal({ feature, onClose }: { feature: FeatureKey; onClose: () => void }) {
  const chats = useChatsStore((s) => s.chats);
  const toggleFeature = useChatsStore((s) => s.toggleFeature);
  const f = FEATURE_META[feature];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-3" onClick={onClose}>
      <div
        className="w-full max-w-[460px] glass-card rounded-[24px] p-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-3">
          <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center" style={{ background: ICON_GRADIENTS[feature] }}>
            <FeatureIcon feature={feature} size={22} color="white" />
          </div>
          <div className="font-semibold mt-2">Добавить «{f.label}» в чат</div>
          <div className="text-[12px] text-muted-foreground">Выберите чат для подключения</div>
        </div>
        <div className="space-y-2">
          {chats.map((c) => {
            const already = isActive(c, feature);
            return (
              <button
                key={c.id}
                disabled={already}
                onClick={() => {
                  toggleFeature(c.id, feature);
                  toast.success(`«${f.label}» включён в «${c.name}»`);
                  onClose();
                }}
                className="w-full glass-card rounded-2xl p-3 flex items-center gap-3 active:scale-[0.99] disabled:opacity-50"
              >
                <ChatAvatar chat={c} size={40} />
                <div className="flex-1 text-left">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-[11px] text-muted-foreground">{c.plan}</div>
                </div>
                {already && (
                  <span className="text-[10px] text-[oklch(0.85_0.15_155)]">уже включено</span>
                )}
              </button>
            );
          })}
        </div>
        <button
          onClick={onClose}
          className="w-full mt-3 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium"
        >
          Отмена
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function isActive(
  c: {
    summary?: { active: boolean };
    voice?: { active: boolean };
    chatPodcast?: { active: boolean };
    knowledgeBase?: { active: boolean };
    antispam?: { active: boolean };
    anonymous?: { active: boolean };
  },
  fk: FeatureKey,
): boolean {
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
