import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { Toggle } from "@/components/Toggle";
import { useChatsStore } from "@/store/chats";
import { type FeatureKey, type Chat } from "@/data/chats";
import { AlertTriangle } from "lucide-react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold">
      {children}
    </div>
  );
}

export function Setting({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1">
      <div className="text-[13px] text-muted-foreground">{label}</div>
      <div className="text-[13px]">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main dispatcher                                                    */
/* ------------------------------------------------------------------ */

export function FeatureSettings({ fk, chat }: { fk: FeatureKey; chat: Chat }) {
  const setPodcastVoice = useChatsStore((s) => s.setPodcastVoice);
  const setAllowMedia = useChatsStore((s) => s.setAllowMedia);
  const navigate = useNavigate();
  const [generating, setGenerating] = useState(false);

  switch (fk) {
    case "summary":
      return <SummarySettings chat={chat} />;
    case "voice": {
      const vPlan = chat.voice?.plan ?? "Free";
      const vLimitNum = vPlan === "Pro" ? 300 : vPlan === "Ultra" ? 0 : 30;
      const vLimit = vPlan === "Ultra" ? "Безлимит" : `${vLimitNum} мин/мес`;
      const vPrice = vPlan === "Pro" ? "$16.99/мес" : vPlan === "Ultra" ? "$49.99/мес" : "Бесплатно";
      const vUsed = Math.floor(Math.random() * (vLimitNum * 0.6));
      const vPct = vLimitNum > 0 ? Math.min((vUsed / vLimitNum) * 100, 100) : 0;
      return (
        <>
          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Текущий тариф</SectionLabel>
            <div>
              <div className="flex items-center justify-between">
                <div className="text-[16px] font-bold">{vPlan}</div>
                {vPlan !== "Free" && chat.planUntil && (
                  <span className="text-[11px] text-muted-foreground">до {chat.planUntil}</span>
                )}
              </div>
              <div className="text-[13px] text-muted-foreground mt-1">
                {vPrice} · {vLimit}
              </div>
            </div>
            {vPlan !== "Ultra" && (
              <div>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-muted-foreground">Использовано</span>
                  <span className={vPct > 90 ? "text-[oklch(0.82_0.17_25)] font-semibold" : "font-semibold"}>
                    {vUsed} из {vLimitNum} мин
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.max(vPct, 2)}%`,
                      background: vPct > 90 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)",
                    }}
                  />
                </div>
              </div>
            )}
            {vPlan !== "Ultra" && (
              <button
                onClick={() => toast.success("Ссылка на оплату создана")}
                className="w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white"
              >
                {vPlan === "Pro" ? "Перейти на Ultra · $49.99/мес" : "Перейти на Pro · $16.99/мес"}
              </button>
            )}
          </div>
        </>
      );
    }
    case "podcast": {
      const cp = chat.chatPodcast;
      const currentVoice = cp?.voice ?? "Onyx";
      const VOICE_LABELS = { Onyx: "Мужской", Shimmer: "Женский" } as const;
      return (
        <>
          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Текущий тариф</SectionLabel>
            <div>
              <div className="flex items-center justify-between">
                <div className="text-[16px] font-bold">{cp?.status?.includes("Активна") ? "Pro" : "Free"}</div>
                {cp?.status && (
                  <span className="text-[11px] text-muted-foreground">
                    {cp.status}
                  </span>
                )}
              </div>
              <div className="text-[13px] text-muted-foreground mt-1">
                {cp?.status?.includes("Активна") ? "$2.99/мес · безлимит" : "Бесплатно · 16 минут"} · аудио-версия саммари каждое утро
              </div>
            </div>
            {!cp?.status?.includes("Активна") && (
              <button
                onClick={() => toast.success("Ссылка на оплату создана")}
                className="w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white"
              >
                Перейти на Pro · $2.99/мес
              </button>
            )}
          </div>

          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Настройки</SectionLabel>
            <Setting label="Голос">
              <div className="flex gap-1.5">
                {(["Onyx", "Shimmer"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setPodcastVoice(chat.id, v);
                      toast(`Голос изменён: ${VOICE_LABELS[v].toLowerCase()}`);
                    }}
                    className={`px-3 py-1 rounded-lg text-[12px] font-medium transition ${
                      currentVoice === v
                        ? "gradient-primary text-white"
                        : "bg-white/10 hover:bg-white/15 text-muted-foreground"
                    }`}
                  >
                    {VOICE_LABELS[v]}
                  </button>
                ))}
              </div>
            </Setting>
            <Setting label="Авто-выпуск">
              <Toggle
                defaultOn={cp?.active}
                onChange={(v) => toast(v ? "Авто-выпуск включён" : "Авто-выпуск отключён")}
              />
            </Setting>
            <button
              disabled={generating}
              onClick={() => {
                setGenerating(true);
                toast("Генерация подкаста запущена...");
                setTimeout(() => {
                  setGenerating(false);
                  toast.success("Подкаст сгенерирован! Выпуск появится в чате.");
                }, 2000);
              }}
              className="w-full py-2.5 text-[13px] font-semibold rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-50"
            >
              {generating ? "Генерация..." : "Сгенерировать сейчас"}
            </button>
          </div>
        </>
      );
    }
    case "kb": {
      const kb = chat.knowledgeBase ?? { quotaUsed: 0, quotaTotal: 100 };
      const pct = (kb.quotaUsed / kb.quotaTotal) * 100;
      return (
        <>
          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Текущий тариф</SectionLabel>
            <div>
              <div className="flex items-center justify-between">
                <div className="text-[16px] font-bold">Knowledge Base Free</div>
              </div>
              <div className="text-[13px] text-muted-foreground mt-1">
                Бесплатно · {kb.quotaTotal} запросов/мес
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-muted-foreground">Использовано</span>
                <span className={pct > 90 ? "text-[oklch(0.82_0.17_25)] font-semibold" : "font-semibold"}>
                  {kb.quotaUsed} из {kb.quotaTotal} запросов
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${Math.max(pct, 2)}%`,
                    background: pct > 90 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Настройки</SectionLabel>
            <Setting label="Команда">
              <span className="font-mono text-[12px]">/search запрос</span>
            </Setting>
            <div className="text-[12px] text-muted-foreground leading-relaxed">
              Введите <span className="font-mono text-foreground">/search</span> и тему в групповом чате.
              Бот найдёт релевантные обсуждения и выдаст краткий ответ.
            </div>
          </div>
        </>
      );
    }
    case "antispam":
      return <AntispamSettings chat={chat} />;
    case "anonymous":
      return (
        <>
          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Текущий тариф</SectionLabel>
            <div>
              <div className="flex items-center justify-between">
                <div className="text-[16px] font-bold">Анонимные сообщения</div>
              </div>
              <div className="text-[13px] text-muted-foreground mt-1">
                Бесплатно · 3 сообщения/день на участника
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[20px] p-4 space-y-3">
            <SectionLabel>Настройки</SectionLabel>
            <Setting label="Разрешить медиа">
              <Toggle
                defaultOn={chat.anonymous?.allowMedia}
                onChange={(v) => {
                  setAllowMedia(chat.id, v);
                  toast(v ? "Медиа разрешены" : "Медиа запрещены");
                }}
              />
            </Setting>
            <div className="text-[12px] text-muted-foreground leading-relaxed">
              Все анонимные сообщения проходят модерацию согласно правилам использования сервиса.
            </div>
          </div>
        </>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Summary settings                                                   */
/* ------------------------------------------------------------------ */

const TIME_PRESETS = ["08:00", "12:00", "16:00", "18:00", "20:00"];

function SummarySettings({ chat }: { chat: Chat }) {
  const [frequency, setFrequency] = useState<1 | 7 | 30>(1);
  const [weekDay, setWeekDay] = useState(0);
  const [monthDay, setMonthDay] = useState(1);
  const [time, setTime] = useState("09:00");
  const [timezone] = useState("Europe/Moscow (UTC+3)");
  const [autopin, setAutopin] = useState(true);
  const [includeVoice, setIncludeVoice] = useState(true);
  const [showEmoji, setShowEmoji] = useState(true);
  const [showLinks, setShowLinks] = useState(true);
  const [spamFilter, setSpamFilter] = useState(true);
  const [hideSupport, setHideSupport] = useState(false);
  const [hashtag, setHashtag] = useState(chat.hashtag ?? "dailysummary");
  const [title, setTitle] = useState("");
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState<"idle" | "loading" | "success" | "error">("idle");

  const markDirty = () => setDirty(true);

  const handleSave = () => {
    setSaving("loading");
    setTimeout(() => {
      setSaving("success");
      setDirty(false);
      setTimeout(() => setSaving("idle"), 1200);
    }, 800);
  };

  const filterHashtag = (v: string) =>
    v.replace(/[^a-zA-Zа-яА-ЯёЁ0-9_]/g, "").slice(0, 32);

  return (
    <>
      {/* Subscription warning */}
      {chat.cancelled && (
        <div className="gradient-warning rounded-[20px] p-4 flex gap-3">
          <AlertTriangle size={20} className="text-[oklch(0.82_0.17_55)] shrink-0 mt-0.5" />
          <div className="text-[13px] leading-relaxed">
            <div className="font-semibold mb-1">Подписка отменена</div>
            <div className="text-foreground/80">
              Тариф {chat.plan} действует до {chat.planUntil}, затем переключится на Nano.
            </div>
          </div>
        </div>
      )}

      {/* Subscription / Plan */}
      <SummaryPlanBlock chat={chat} />

      {/* Периодичность */}
      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Расписание</SectionLabel>

        <Setting label="Периодичность">
          <select
            value={frequency}
            onChange={(e) => { setFrequency(Number(e.target.value) as 1 | 7 | 30); markDirty(); }}
            className="bg-white/8 rounded-lg px-3 py-1.5 text-[13px] outline-none appearance-none cursor-pointer pr-7"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" }}
          >
            <option value={1}>Ежедневно</option>
            <option value={7}>Еженедельно</option>
            <option value={30}>Ежемесячно</option>
          </select>
        </Setting>

        {frequency === 7 && (
          <div className="flex gap-1.5">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d, i) => (
              <button
                key={d}
                onClick={() => { setWeekDay(i); markDirty(); }}
                className={`flex-1 py-2 rounded-lg text-[11px] font-medium transition ${
                  weekDay === i
                    ? "gradient-primary text-white"
                    : "bg-white/8 text-muted-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        )}

        {frequency === 30 && (
          <Setting label="День месяца">
            <input
              type="number"
              min={1}
              max={31}
              value={monthDay}
              onChange={(e) => {
                setMonthDay(Math.min(31, Math.max(1, Number(e.target.value))));
                markDirty();
              }}
              className="w-16 bg-white/8 rounded-lg px-3 py-1.5 text-[13px] text-right outline-none"
            />
          </Setting>
        )}

        <Setting label="Время отправки">
          <input
            type="time"
            value={time}
            onChange={(e) => { setTime(e.target.value); markDirty(); }}
            className="bg-white/8 rounded-lg px-3 py-1.5 text-[13px] outline-none"
          />
        </Setting>

        <div className="flex gap-1.5">
          {TIME_PRESETS.map((t) => (
            <button
              key={t}
              onClick={() => { setTime(t); markDirty(); }}
              className={`flex-1 py-1.5 rounded-lg text-[11px] font-medium transition ${
                time === t ? "gradient-primary text-white" : "bg-white/8 text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <Setting label="Часовой пояс">
          <span className="text-[12px] text-muted-foreground">{timezone}</span>
        </Setting>
      </div>

      {/* Контент */}
      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Контент саммари</SectionLabel>

        <div>
          <div className="text-[12px] text-muted-foreground mb-1.5">Заголовок</div>
          <input
            value={title}
            onChange={(e) => { setTitle(e.target.value.slice(0, 150)); markDirty(); }}
            placeholder='Например: "Саммари за {date}"'
            className="w-full bg-white/8 rounded-xl px-3.5 py-2.5 text-[13px] outline-none placeholder:text-muted-foreground/50"
          />
          <div className="text-[10px] text-muted-foreground mt-1 text-right">{title.length}/150</div>
        </div>

        <div>
          <div className="text-[12px] text-muted-foreground mb-1.5">Хэштег</div>
          <div className="flex items-center bg-white/8 rounded-xl overflow-hidden">
            <span className="pl-3.5 text-muted-foreground text-[14px]">#</span>
            <input
              value={hashtag}
              onChange={(e) => { setHashtag(filterHashtag(e.target.value)); markDirty(); }}
              placeholder="dailysummary"
              className="flex-1 bg-transparent px-1.5 py-2.5 text-[13px] outline-none"
            />
          </div>
        </div>

        <Setting label="Автопин">
          <Toggle defaultOn={autopin} onChange={(v) => { setAutopin(v); markDirty(); }} />
        </Setting>
        <Setting label="Включать голосовые">
          <Toggle defaultOn={includeVoice} onChange={(v) => { setIncludeVoice(v); markDirty(); }} />
        </Setting>
        <Setting label="Эмодзи у тем">
          <Toggle defaultOn={showEmoji} onChange={(v) => { setShowEmoji(v); markDirty(); }} />
        </Setting>
        <Setting label="Ссылки из обсуждений">
          <Toggle defaultOn={showLinks} onChange={(v) => { setShowLinks(v); markDirty(); }} />
        </Setting>
        <Setting label="Фильтрация спама">
          <Toggle defaultOn={spamFilter} onChange={(v) => { setSpamFilter(v); markDirty(); }} />
        </Setting>
        <Setting label="Скрыть текст поддержки">
          <Toggle defaultOn={hideSupport} onChange={(v) => { setHideSupport(v); markDirty(); }} />
        </Setting>
      </div>

      {/* Sticky save */}
      {dirty && (
        <div className="sticky bottom-6">
          <button
            disabled={saving === "loading" || saving === "success"}
            onClick={handleSave}
            className={`w-full py-3.5 rounded-2xl text-[14px] font-semibold transition ${
              saving === "success"
                ? "bg-[oklch(0.55_0.16_155)] text-white"
                : saving === "error"
                  ? "bg-[oklch(0.55_0.20_25)] text-white"
                  : "gradient-primary text-white"
            } disabled:opacity-70`}
          >
            {saving === "loading"
              ? "Сохранение..."
              : saving === "success"
                ? "Успешно сохранено"
                : saving === "error"
                  ? "Попробуйте снова"
                  : "Сохранить"}
          </button>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Summary plan block                                                 */
/* ------------------------------------------------------------------ */

const SUMMARY_PLANS = [
  { name: "Nano", price: "Бесплатно", limit: "до 200 сообщений/день на чат", icon: "🔹" },
  { name: "Standard", price: "$2.49/мес", limit: "до 500 сообщений/день на чат", icon: "🔷" },
  { name: "Full-on", price: "$4.99/мес", limit: "до 1 000 сообщений/день на чат", icon: "⚡" },
  { name: "Contributor", price: "$99.9/мес", limit: "безлимит на все чаты + ранний доступ", icon: "👑" },
];

function SummaryPlanBlock({ chat }: { chat: Chat }) {
  const [showAll, setShowAll] = useState(false);
  const currentPlan = SUMMARY_PLANS.find((p) => p.name === chat.plan) ?? SUMMARY_PLANS[0];
  const usageText = `${chat.used} из ${chat.limit} сообщений`;
  const usagePct = Math.min((chat.used / chat.limit) * 100, 100);

  return (
    <>
      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Текущий тариф</SectionLabel>
        <div>
          <div className="flex items-center justify-between">
            <div className="text-[16px] font-bold">{currentPlan.name}</div>
            {chat.plan !== "Nano" && chat.planUntil && (
              <span className="text-[11px] text-muted-foreground">до {chat.planUntil}</span>
            )}
          </div>
          <div className="text-[13px] text-muted-foreground mt-1">
            {currentPlan.price === "Бесплатно" ? "Бесплатно" : currentPlan.price} · {currentPlan.limit}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-muted-foreground">Обработано</span>
            <span className={usagePct > 90 ? "text-[oklch(0.82_0.17_25)] font-semibold" : "font-semibold"}>
              {usageText}
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${Math.max(usagePct, 2)}%`,
                background: usagePct > 90 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)",
              }}
            />
          </div>
        </div>

        {chat.cancelled && (
          <div className="rounded-xl bg-[oklch(0.65_0.22_25)]/10 border border-[oklch(0.65_0.22_25)]/25 px-3 py-2.5 text-[12px] text-[oklch(0.82_0.17_55)] leading-relaxed">
            Подписка отменена. Тариф {chat.plan} будет действовать до {chat.planUntil}, после чего чат перейдёт на Nano.
          </div>
        )}

        {chat.plan !== "Contributor" && (
          <button
            onClick={() => toast.success("Ссылка на оплату создана")}
            className="w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white"
          >
            {chat.plan === "Nano"
              ? "Перейти на Standard · $2.49/мес"
              : chat.plan === "Standard"
                ? "Перейти на Full-on · $4.99/мес"
                : "Перейти на Contributor · $99.9/мес"}
          </button>
        )}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="glass-card rounded-[20px] p-4 w-full flex items-center justify-between"
      >
        <span className="text-[13px] font-semibold">Сравнить тарифы</span>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform ${showAll ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showAll && (
        <div className="glass-card rounded-[20px] overflow-hidden divide-y divide-white/5">
          {SUMMARY_PLANS.map((p) => {
            const isCurrent = p.name === chat.plan;
            return (
              <div key={p.name} className={`p-4 flex items-center gap-3 ${isCurrent ? "bg-white/5" : ""}`}>
                <div className="text-lg w-8 text-center">{p.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold">{p.name}</div>
                  <div className="text-[11px] text-muted-foreground">{p.price} · {p.limit}</div>
                </div>
                {isCurrent && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: "oklch(0.72 0.16 155 / 0.15)", color: "oklch(0.85 0.15 155)" }}
                  >
                    Активен
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Antispam settings                                                  */
/* ------------------------------------------------------------------ */

function AntispamSettings({ chat }: { chat: Chat }) {
  const isPro = chat.antispam?.paid ?? false;
  const [stopWords, setStopWords] = useState("спам, реклама, заработок");
  const [kickPeriod, setKickPeriod] = useState("6");

  return (
    <>
      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Тариф</SectionLabel>
        <div>
          <div className="text-[16px] font-bold">{isPro ? "Antispam Pro" : "Antispam Free"}</div>
          <div className="text-[13px] text-muted-foreground mt-1">
            {isPro ? "$2.49/мес · все навыки" : "Бесплатно · базовая защита"}
          </div>
        </div>
        <div className="flex gap-3 text-center">
          <div className="flex-1 bg-white/5 rounded-xl py-2.5">
            <div className="text-[18px] font-bold">{chat.antispam?.deleted24h ?? 0}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">удалено за 24 ч</div>
          </div>
          <div className="flex-1 bg-white/5 rounded-xl py-2.5">
            <div className="text-[18px] font-bold">3</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">ограничено</div>
          </div>
          <div className="flex-1 bg-white/5 rounded-xl py-2.5">
            <div className="text-[18px] font-bold">28</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">токсичность</div>
          </div>
        </div>
        {!isPro && (
          <button
            onClick={() => toast.success("Ссылка на оплату создана")}
            className="w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white"
          >
            Подключить Antispam Pro · $2.49/мес
          </button>
        )}
      </div>

      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Базовая защита (Free)</SectionLabel>
        <Setting label="Удаление системных сообщений">
          <Toggle defaultOn onChange={(v) => toast(v ? "Включено" : "Отключено")} />
        </Setting>
        <Setting label="Антифлуд">
          <Toggle defaultOn onChange={(v) => toast(v ? "Антифлуд включён" : "Антифлуд отключён")} />
        </Setting>
        <div className="text-[10px] text-muted-foreground -mt-1 pl-1">
          5 одинаковых за 10 мин или 10 подряд за 30 сек → ограничение 1 ч
        </div>
        <Setting label="Запрет ссылок от новичков">
          <Toggle defaultOn onChange={(v) => toast(v ? "Включено" : "Отключено")} />
        </Setting>
        <div className="text-[10px] text-muted-foreground -mt-1 pl-1">
          Первые 7 дней после вступления
        </div>
        <Setting label="Базовая капча при входе">
          <Toggle defaultOn onChange={(v) => toast(v ? "Капча включена" : "Капча отключена")} />
        </Setting>
      </div>

      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Удаление медиа-типов</SectionLabel>
        <Setting label="Стикеры">
          <Toggle onChange={(v) => toast(v ? "Стикеры удаляются" : "Стикеры разрешены")} />
        </Setting>
        <Setting label="Гифки">
          <Toggle onChange={(v) => toast(v ? "Гифки удаляются" : "Гифки разрешены")} />
        </Setting>
        <Setting label="Голосовые">
          <Toggle onChange={(v) => toast(v ? "Голосовые удаляются" : "Голосовые разрешены")} />
        </Setting>
        <Setting label="Кружочки">
          <Toggle onChange={(v) => toast(v ? "Кружочки удаляются" : "Кружочки разрешены")} />
        </Setting>
        <Setting label="Пересланные сообщения">
          <Toggle onChange={(v) => toast(v ? "Пересланные удаляются" : "Пересланные разрешены")} />
        </Setting>
      </div>

      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Кастомные стоп-слова {!isPro && <span className="text-muted-foreground/50 normal-case">(до 20)</span>}</SectionLabel>
        <textarea
          value={stopWords}
          onChange={(e) => setStopWords(e.target.value)}
          placeholder="Через запятую: спам, реклама, ..."
          rows={3}
          className="w-full bg-white/8 rounded-xl px-3.5 py-2.5 text-[13px] outline-none resize-none placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="glass-card rounded-[20px] p-4 space-y-3">
        <SectionLabel>Защита от нашествия ботов</SectionLabel>
        <div className="text-[12px] text-muted-foreground leading-relaxed">
          Удаляет всех вступивших за указанный период. Сохраняет участников, активных в других чатах.
        </div>
        <div className="flex gap-2">
          <select
            value={kickPeriod}
            onChange={(e) => setKickPeriod(e.target.value)}
            className="flex-1 bg-white/8 rounded-lg px-3 py-2 text-[13px] outline-none"
          >
            <option value="1">1 час</option>
            <option value="6">6 часов</option>
            <option value="24">24 часа</option>
          </select>
          <button
            onClick={() => toast.success("Удалено 47 ботов")}
            className="px-4 py-2 rounded-lg bg-[oklch(0.55_0.20_25)] text-white text-[13px] font-semibold"
          >
            Удалить ботов
          </button>
        </div>
        <div className="text-[10px] text-muted-foreground">
          Или команда в чате: <span className="font-mono text-foreground">/kicknew 6</span>
        </div>
      </div>

      <div className={`glass-card rounded-[20px] p-4 space-y-3 ${!isPro ? "opacity-60" : ""}`}>
        <div className="flex items-center gap-2">
          <SectionLabel>Pro-фичи</SectionLabel>
          {!isPro && (
            <span className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase bg-white/10 text-muted-foreground">
              $2.49/мес
            </span>
          )}
        </div>

        <Setting label="Умный фильтр мата (AI)">
          <Toggle defaultOn={isPro} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён")} />
        </Setting>
        {isPro && (
          <div className="flex gap-1.5 pl-1">
            {(["Мягкий", "Средний", "Жёсткий"] as const).map((level) => (
              <button
                key={level}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/8 text-muted-foreground first:gradient-primary first:text-white"
              >
                {level}
              </button>
            ))}
          </div>
        )}

        <Setting label="Умный слоу-мод по токсичности">
          <Toggle defaultOn={isPro} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён")} />
        </Setting>

        <Setting label="Запрет пересылок из каналов">
          <Toggle defaultOn={false} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён")} />
        </Setting>

        <Setting label="Еженедельный отчёт">
          <Toggle defaultOn={isPro} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён")} />
        </Setting>

        <Setting label="Кастомная капча">
          <Toggle defaultOn={false} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включена" : "Отключена")} />
        </Setting>

        <Setting label="Приветствие новичков">
          <Toggle defaultOn={false} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включено" : "Отключено")} />
        </Setting>

        <Setting label="Белый список доменов">
          <Toggle defaultOn={false} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включён" : "Отключён")} />
        </Setting>

        <Setting label="Команда /top в чате">
          <Toggle defaultOn={isPro} onChange={(v) => !isPro ? toast("Доступно в Pro") : toast(v ? "Включена" : "Отключена")} />
        </Setting>
      </div>

      <button
        onClick={() => toast("Антиспам выключен")}
        className="w-full py-3 text-[13px] font-medium rounded-xl bg-white/6 hover:bg-white/10 text-[oklch(0.78_0.18_25)] transition"
      >
        Выключить антиспам
      </button>
    </>
  );
}
