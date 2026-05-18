import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
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
  ArrowRight01Icon,
  AtIcon,
  GlobalSearchIcon,
  MessageQuestionIcon,
} from "@hugeicons/core-free-icons";

export const Route = createFileRoute("/_tabs/marketplace")({
  validateSearch: z.object({ feature: z.string().optional() }).parse,
  head: () => ({
    meta: [
      { title: "Каталог — ChatLogix" },
      { name: "description", content: "Все навыки ChatLogix: добавляй в чаты или подключай лично." },
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
      { icon: CheckListIcon, title: "Структурированная сводка", subtitle: "Темы с описанием, ключевые решения и ссылки на сообщения" },
      { icon: AlarmClockIcon, title: "Гибкое расписание", subtitle: "Ежедневно, еженедельно или ежемесячно в выбранное время" },
      { icon: PinIcon, title: "Авто-пин", subtitle: "Закрепляет саммари в чате, чтобы не потерялось" },
      { icon: Link01Icon, title: "Ссылки из обсуждений", subtitle: "Собирает внешние URL, которыми делились участники" },
      { icon: BlockedIcon, title: "Фильтрация спама", subtitle: "Игнорирует флуд и мусор при генерации сводки" },
    ],
  },
  voice: {
    items: [
      { icon: Mic01Icon, title: "Голосовые в текст", subtitle: "Расшифровка появляется под сообщением автоматически" },
      { icon: Video01Icon, title: "Видео-кружочки", subtitle: "Транскрибация кружочков наравне с голосовыми" },
      { icon: BrainIcon, title: "Подавление галлюцинаций", subtitle: "Фильтр шума — убирает артефакты Whisper API" },
      { icon: SecurityCheckIcon, title: "Модерация контента", subtitle: "AI-проверка расшифровок перед публикацией" },
    ],
    trialText: "30 бесплатных минут в месяц",
  },
  podcast: {
    items: [
      { icon: PodcastIcon, title: "Аудио-версия саммари", subtitle: "Расширенная голосовая выжимка обсуждений чата" },
      { icon: VoiceIdIcon, title: "Выбор голоса", subtitle: "Мужской или женский — переключается в настройках" },
      { icon: StopWatchIcon, title: "До 4 минут на выпуск", subtitle: "Компактный формат, удобно слушать на ходу" },
      { icon: ArrowReloadHorizontalIcon, title: "Приходит автоматически", subtitle: "Выпуск в чате каждое утро сразу после текстового саммари" },
    ],
    trialText: "Бесплатная неделя при активации",
  },
  superPodcast: {
    items: [
      { icon: PodcastIcon, title: "Личный подкаст", subtitle: "Голосовая выжимка из всех ваших чатов в ЛС бота" },
      { icon: VoiceIdIcon, title: "Выбор голоса", subtitle: "Onyx (мужской) или Shimmer (женский)" },
      { icon: StopWatchIcon, title: "До 4 минут на выпуск", subtitle: "Компактный формат, удобно слушать на ходу" },
      { icon: ArrowReloadHorizontalIcon, title: "Приходит автоматически", subtitle: "Каждое утро сразу после Super-Summary" },
    ],
    trialText: "16 бесплатных минут",
  },
  kb: {
    items: [
      { icon: Search01Icon, title: "Поиск по истории", subtitle: "Парсинг до 10 000 последних сообщений при активации" },
      { icon: BubbleChatIcon, title: "Команда /faq", subtitle: "Участники спрашивают прямо в чате, бот отвечает публично" },
      { icon: BarChartIcon, title: "Умное ранжирование", subtitle: "Приоритет у свежих и обсуждаемых тредов" },
      { icon: ArrowReloadHorizontalIcon, title: "Автопополнение", subtitle: "Новые сообщения индексируются автоматически" },
    ],
    trialText: "100 запросов в месяц бесплатно",
  },
  antispam: {
    items: [
      { icon: BlockedIcon, title: "Умный фильтр мата", subtitle: "AI-детект обходов, транслита и лит-спика" },
      { icon: BarChartIcon, title: "Слоу-мод по токсичности", subtitle: "Автоматическое ограничение при высокой токсичности" },
      { icon: FlashIcon, title: "Антифлуд", subtitle: "Блокировка при 5 одинаковых за 10 мин или 10 подряд за 30 сек" },
      { icon: HashtagIcon, title: "Кастомные стоп-слова", subtitle: "Свой список запрещённых фраз, до 20 бесплатно" },
      { icon: Image01Icon, title: "Фильтрация медиа", subtitle: "Удаление стикеров, гифок, кружочков, пересланных" },
      { icon: ChartIncreaseIcon, title: "Еженедельный отчёт", subtitle: "Статистика: удалено, ограничено, топ нарушителей" },
    ],
    trialText: "Free-тариф — базовая защита навсегда",
  },
  anonymous: {
    items: [
      { icon: IncognitoIcon, title: "Анонимная отправка", subtitle: "Бот публикует сообщение от своего имени, автор скрыт" },
      { icon: LimitationIcon, title: "Лимит 3 в день на человека", subtitle: "Защита от злоупотреблений" },
      { icon: SecurityCheckIcon, title: "Модерация", subtitle: "Контент проверяется перед публикацией" },
      { icon: Camera01Icon, title: "Медиа по решению админа", subtitle: "Админ решает, можно ли отправлять фото и видео" },
    ],
  },
  askBot: {
    items: [
      { icon: AtIcon, title: "Упоминание @ChatLogixBot", subtitle: "Работает в любом чате — даже если бот не добавлен" },
      { icon: BubbleChatIcon, title: "Выбор источника", subtitle: "Inline-кнопки: искать в сети или в базе знаний чата" },
      { icon: GlobalSearchIcon, title: "Поиск по интернету", subtitle: "Свежие статьи и данные через Brave Search" },
      { icon: MessageQuestionIcon, title: "Универсальный эксперт", subtitle: "Технические вопросы, разбор сообщений через reply" },
    ],
    trialText: "Бесплатно · 1/мин, 15/ч, 50/день на пользователя",
  },
};

/* ------------------------------------------------------------------ */
/*  Per-feature gradient colors                                       */
/* ------------------------------------------------------------------ */

const ACCENT_COLORS: Record<FeatureKey, string> = {
  summary: "oklch(0.65 0.15 230)",
  voice: "oklch(0.65 0.18 340)",
  podcast: "oklch(0.65 0.15 230)",
  superPodcast: "oklch(0.65 0.18 340)",
  kb: "oklch(0.65 0.15 230)",
  antispam: "oklch(0.60 0.15 230)",
  anonymous: "oklch(0.65 0.18 340)",
  askBot: "oklch(0.65 0.15 230)",
};

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Tariff plans per feature                                           */
/* ------------------------------------------------------------------ */

const FEATURE_TARIFFS: Partial<Record<FeatureKey, { name: string; price: string; limit: string }[]>> = {
  summary: [
    { name: "Nano", price: "Бесплатно", limit: "до 200 сообщений/день на чат" },
    { name: "Standard", price: "$2.49/мес", limit: "до 500 сообщений/день на чат" },
    { name: "Full-on", price: "$4.99/мес", limit: "до 1 000 сообщений/день на чат" },
    { name: "Contributor", price: "$99.9/мес", limit: "безлимит на все чаты + ранний доступ" },
  ],
  voice: [
    { name: "Free", price: "Бесплатно", limit: "до 30 мин/мес на чат" },
    { name: "Pro", price: "$16.99/мес", limit: "до 375 мин/мес на чат" },
    { name: "Extra", price: "$53.99/мес", limit: "до 1500 мин/мес на чат" },
  ],
  podcast: [
    { name: "Free", price: "Бесплатно", limit: "пробная неделя" },
    { name: "Pro", price: "$5.99/мес", limit: "ежедневные выпуски, выбор голоса" },
  ],
  superPodcast: [
    { name: "Free", price: "Бесплатно", limit: "16 минут суммарно (~4 выпуска)" },
    { name: "Pro", price: "$5.99/мес", limit: "ежедневные выпуски, выбор голоса" },
  ],
  antispam: [
    { name: "Free", price: "Бесплатно", limit: "базовая защита от спама и флуда" },
    { name: "Pro", price: "$2.49/мес", limit: "AI-фильтр, кастомная капча, отчёты" },
  ],
};

const FILTERS = [
  { id: "all", label: "Все", audience: null as null | "user" | "admin" },
  { id: "user", label: "Личные", audience: "user" as const },
  { id: "admin", label: "Для админов", audience: "admin" as const },
];

const FEATURES: FeatureKey[] = ["summary", "askBot", "voice", "podcast", "superPodcast", "kb", "antispam", "anonymous"];

const NEW_FEATURES: Set<FeatureKey> = new Set(["podcast", "kb", "askBot"]);

type Status = "free" | "freemium" | "paid" | "active" | "trial";

/* ------------------------------------------------------------------ */
/*  Main screen                                                       */
/* ------------------------------------------------------------------ */

function MarketplaceScreen() {
  const { feature: featureParam } = Route.useSearch();
  const [filter, setFilter] = useState<typeof FILTERS[number]>(FILTERS[0]);
  const [pickerFor, setPickerFor] = useState<FeatureKey | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(
    featureParam && FEATURES.includes(featureParam as FeatureKey) ? (featureParam as FeatureKey) : null
  );

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
      <p className="text-[13px] text-muted-foreground -mt-2">
        Все навыки ChatLogix. Нажмите на карточку для подробностей.
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
                      <AudienceTag audience={f.audience} />
                    </div>
                    <div className="text-[12px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {f.desc}
                    </div>
                  </div>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} className="text-muted-foreground shrink-0" />
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
    f.audience === "admin" ? "Навык чата" : f.audience === "user" ? "Личный навык" : "Личный + навык чата";

  const handleCtaClick = () => {
    if (status === "active") {
      const target = chats.find((c) => isActive(c, feature));
      if (target) {
        navigate({
          to: "/chat/$chatId/feature/$featureKey",
          params: { chatId: target.id, featureKey: feature },
        });
      } else {
        toast("Откройте чат, чтобы настроить навык");
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
        className="glass-card rounded-[24px] p-6 relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${ACCENT_COLORS[feature]}25 0%, transparent 50%), oklch(0.22 0.02 240 / 0.85)`,
          border: `1px solid oklch(1 0 0 / 0.08)`,
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
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{f.label}</h2>
              <AudienceTag audience={f.audience} />
            </div>
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
                ? "Навык подключён в одном или нескольких чатах"
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

      {/* Tariff comparison */}
      {FEATURE_TARIFFS[feature] && (
        <TariffComparison feature={feature} tariffs={FEATURE_TARIFFS[feature]!} />
      )}

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
/*  Tariff comparison                                                  */
/* ------------------------------------------------------------------ */

function TariffComparison({ feature, tariffs }: { feature: FeatureKey; tariffs: { name: string; price: string; limit: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="glass-card rounded-[20px] p-4 w-full flex items-center justify-between"
      >
        <span className="text-[13px] font-semibold">Сравнить тарифы</span>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="glass-card rounded-[20px] overflow-hidden divide-y divide-white/5">
          {tariffs.map((t) => (
            <div key={t.name} className="p-4 flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${ACCENT_COLORS[feature]}18` }}
              >
                <FeatureIcon feature={feature} size={18} color={ACCENT_COLORS[feature]} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="text-[11px] text-muted-foreground">{t.price} · {t.limit}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Audience tag                                                      */
/* ------------------------------------------------------------------ */

function AudienceTag({ audience }: { audience: "user" | "admin" | "both" }) {
  if (audience === "both") {
    return (
      <>
        <span
          className="text-[9px] px-1.5 py-0.5 rounded font-medium uppercase tracking-wider shrink-0"
          style={{ background: "oklch(0.65 0.18 340 / 0.15)", color: "oklch(0.78 0.14 340)" }}
        >
          личный
        </span>
        <span
          className="text-[9px] px-1.5 py-0.5 rounded font-medium uppercase tracking-wider shrink-0"
          style={{ background: "oklch(0.65 0.15 230 / 0.15)", color: "oklch(0.78 0.12 230)" }}
        >
          навык чата
        </span>
      </>
    );
  }
  const isPersonal = audience === "user";
  const label = isPersonal ? "личный" : "навык чата";
  return (
    <span
      className="text-[9px] px-1.5 py-0.5 rounded font-medium uppercase tracking-wider shrink-0"
      style={{
        background: isPersonal ? "oklch(0.65 0.18 340 / 0.15)" : "oklch(0.65 0.15 230 / 0.15)",
        color: isPersonal ? "oklch(0.78 0.14 340)" : "oklch(0.78 0.12 230)",
      }}
    >
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
  const navigate = useNavigate();
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
          {chats.filter((c) => c.isAdmin).map((c) => {
            const already = isActive(c, feature);
            return (
              <button
                key={c.id}
                disabled={already}
                onClick={() => {
                  if (!already) toggleFeature(c.id, feature);
                  onClose();
                  navigate({
                    to: "/chat/$chatId",
                    params: { chatId: c.id },
                    hash: `f-${feature}`,
                  });
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
    askBot?: { active: boolean };
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
    case "askBot":
      return c.askBot?.active ?? false;
    case "superPodcast":
      return false;
  }
}
