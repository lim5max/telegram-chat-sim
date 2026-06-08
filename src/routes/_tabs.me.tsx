import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toggle } from "@/components/Toggle";
import { useChatsStore } from "@/store/chats";
import { superPodcast } from "@/data/chats";
import { parseChannelLink } from "@/lib/channelLink";
import { Play, ChevronRight, ChevronDown, Plus, X } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon, HeadphonesIcon, IncognitoIcon } from "@hugeicons/core-free-icons";
import { ICON_GRADIENTS } from "@/components/FeatureIcon";
import { SummaryStylePicker } from "@/components/SummaryStylePicker";

export const Route = createFileRoute("/_tabs/me")({
  head: () => ({
    meta: [
      { title: "Личное — ChatLogix" },
      { name: "description", content: "Персональные навыки ChatLogix: Super-Summary, Super Podcast, анонимные сообщения." },
    ],
  }),
  component: ForMeScreen,
});

function ForMeScreen() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | null>(null);

  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const setSuperSummary = useChatsStore((s) => s.setSuperSummary);
  const superSummaryStyle = useChatsStore((s) => s.superSummaryStyle);
  const setSuperSummaryStyle = useChatsStore((s) => s.setSuperSummaryStyle);
  const summaryChannels = useChatsStore((s) => s.summaryChannels);
  const addSummaryChannel = useChatsStore((s) => s.addSummaryChannel);
  const removeSummaryChannel = useChatsStore((s) => s.removeSummaryChannel);
  const [channelInput, setChannelInput] = useState("");
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const setSuperPodcast = useChatsStore((s) => s.setSuperPodcast);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const totalAnon = useChatsStore((s) => s.totalAnonSentToday);
  const chats = useChatsStore((s) => s.chats);
  const [playing, setPlaying] = useState(false);

  const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;
  const isPaidSubscription = superPodcastSubscription !== null;
  const anonChats = chats.filter((c) => c.anonymous?.active);

  const toggle = (key: string) => setExpanded(expanded === key ? null : key);

  const handleAddChannel = () => {
    const res = parseChannelLink(channelInput);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    if (summaryChannels.some((c) => c.id === res.channel.id)) {
      toast(`${res.channel.handle} уже добавлен`);
      setChannelInput("");
      return;
    }
    addSummaryChannel(res.channel);
    setChannelInput("");
    toast.success(`Канал ${res.channel.handle} добавлен в сводку`);
  };

  return (
    <div className="px-4 pt-5 space-y-3 max-w-[520px] mx-auto">
      <h1 className="text-2xl font-bold">Личное</h1>
      <p className="text-[12px] text-muted-foreground -mt-1">
        Персональные навыки — не привязаны к конкретному чату.
      </p>

      {/* Super-Summary */}
      <div className="glass-card rounded-[20px] overflow-hidden">
        <button
          onClick={() => toggle("summary")}
          className="w-full p-4 flex items-center gap-3 active:bg-white/5 transition"
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: superSummaryOn ? ICON_GRADIENTS.summary : "rgba(255,255,255,0.08)" }}
          >
            <HugeiconsIcon icon={SparklesIcon} size={20} strokeWidth={2} color={superSummaryOn ? "white" : "currentColor"} />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="font-semibold flex items-center gap-2">
              Super-Summary
              {superSummaryOn && <OnBadge />}
            </div>
            <div className="text-[11px] text-muted-foreground truncate">
              {superSummaryOn
                ? `Включён · 09:00${summaryChannels.length > 0 ? ` · +${summaryChannels.length} ${summaryChannels.length === 1 ? "канал" : summaryChannels.length < 5 ? "канала" : "каналов"}` : ""}`
                : "Отключён"}
            </div>
          </div>
          <ChevronDown size={16} className={`text-muted-foreground transition-transform ${expanded === "summary" ? "rotate-180" : ""}`} />
        </button>

        {expanded === "summary" && (
          <div className="px-4 pb-4 pt-1 space-y-4 border-t border-white/5">
            <div className="flex items-center justify-between pt-3">
              <div className="text-[13px] text-muted-foreground">
                Дайджест всех ваших чатов в одном сообщении каждое утро.
              </div>
              <Toggle
                defaultOn={superSummaryOn}
                onChange={(v) => {
                  setSuperSummary(v);
                  toast(v ? "Super-Summary включён" : "Super-Summary отключён");
                }}
              />
            </div>

            <SummaryStylePicker
              value={superSummaryStyle}
              onChange={(id) => {
                setSuperSummaryStyle(id);
                toast.success("Стиль обновлён", {
                  description: id === "custom" ? "Свой промпт активирован" : undefined,
                });
              }}
              context="super"
              isPro
              onUpgrade={() => navigate({ to: "/" })}
            />

            {/* Открытые каналы в сводке */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Открытые каналы {summaryChannels.length > 0 && `(${summaryChannels.length})`}
                </div>
                <span className="text-[10px] text-muted-foreground">🔒 только открытые</span>
              </div>
              <div className="text-[12px] text-muted-foreground -mt-0.5">
                Добавьте каналы — бот вынесет из них главное в утреннюю сводку вместе с чатами.
              </div>

              {summaryChannels.length > 0 && (
                <div className="space-y-1.5">
                  {summaryChannels.map((ch) => (
                    <div
                      key={ch.id}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/8"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
                        style={{ background: ICON_GRADIENTS.summary }}
                      >
                        {ch.title.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium truncate">{ch.title}</div>
                        <div className="text-[11px] text-muted-foreground truncate">{ch.handle}</div>
                      </div>
                      <button
                        onClick={() => {
                          removeSummaryChannel(ch.id);
                          toast(`${ch.handle} убран из сводки`);
                        }}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition shrink-0"
                        aria-label={`Убрать ${ch.handle}`}
                      >
                        <X size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  value={channelInput}
                  onChange={(e) => setChannelInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddChannel()}
                  placeholder="https://t.me/durov или @durov"
                  className="flex-1 bg-white/8 rounded-xl px-3 py-2.5 text-[13px] outline-none placeholder:text-muted-foreground/60"
                />
                <button
                  onClick={handleAddChannel}
                  disabled={!channelInput.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 disabled:opacity-40"
                  style={{ background: "var(--gradient-primary)" }}
                  aria-label="Добавить канал"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <button
              onClick={() => navigate({ to: "/" })}
              className="w-full py-2.5 text-[13px] font-medium rounded-xl bg-white/8 hover:bg-white/12 flex items-center justify-center gap-2"
            >
              Посмотреть последний выпуск <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Super Podcast */}
      <div className="glass-card rounded-[20px] overflow-hidden">
        <button
          onClick={() => toggle("podcast")}
          className="w-full p-4 flex items-center gap-3 active:bg-white/5 transition"
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: superPodcastOn ? ICON_GRADIENTS.podcast : "rgba(255,255,255,0.08)" }}
          >
            <HugeiconsIcon icon={HeadphonesIcon} size={20} strokeWidth={2} color={superPodcastOn ? "white" : "currentColor"} />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="font-semibold flex items-center gap-2">
              Super Podcast
              {superPodcastOn && <OnBadge />}
            </div>
            <div className="text-[11px] text-muted-foreground truncate">
              {superPodcastOn
                ? isPaidSubscription
                  ? `Подписка до ${superPodcastSubscription.expiresAt}`
                  : `Осталось ${freeMinutesLeft} из 16 бесплатных мин`
                : "Не активен"}
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {superPodcastOn && <span className="text-[10px] text-muted-foreground">{isPaidSubscription ? "$5.99/мес" : "Бесплатно"}</span>}
            <ChevronDown size={16} className={`text-muted-foreground transition-transform ${expanded === "podcast" ? "rotate-180" : ""}`} />
          </div>
        </button>

        {expanded === "podcast" && (
          <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/5">
            <div className="flex items-center justify-between">
              <div className="text-[13px] text-muted-foreground">Аудио-версия дайджеста — слушайте на ходу.</div>
              <Toggle
                defaultOn={superPodcastOn}
                onChange={(v) => {
                  setSuperPodcast(v);
                  toast(v ? "Super Podcast включён" : "Super Podcast отключён");
                }}
              />
            </div>

            {/* Voice */}
            <div className="flex items-center justify-between">
              <div className="text-[12px] text-muted-foreground">Голос</div>
              <div className="flex gap-1.5">
                {([{ id: "Onyx", label: "Мужской" }, { id: "Shimmer", label: "Женский" }] as const).map((v) => (
                  <button
                    key={v.id}
                    onClick={() => isPaidSubscription ? toast(`Голос: ${v.label.toLowerCase()}`) : toast("Доступно с подпиской")}
                    className={`text-[12px] px-3 py-1.5 rounded-lg transition ${
                      v.id === "Onyx" ? "bg-white/15 text-white" : "bg-white/6 text-muted-foreground"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Player */}
            <div className="rounded-2xl p-3 bg-white/5 border border-white/8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setPlaying((p) => !p); toast(playing ? "Пауза" : "Воспроизведение"); }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {playing ? <span className="text-sm">❚❚</span> : <Play size={16} fill="white" />}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold truncate">Выпуск 24.04 · все чаты</div>
                  <div className="mt-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full gradient-primary" style={{ width: playing ? "42%" : "0%" }} />
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">2:04 / 4:55</div>
                </div>
              </div>
            </div>

            {/* Usage & Subscription */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[12px] mb-1">
                <span className="text-muted-foreground">Использовано</span>
                <span className="font-semibold">
                  {isPaidSubscription ? `Подписка до ${superPodcastSubscription.expiresAt}` : `${16 - freeMinutesLeft} из 16 бесплатных мин`}
                </span>
              </div>
              {!isPaidSubscription && (
                <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(((16 - freeMinutesLeft) / 16) * 100, 2)}%`,
                      background: freeMinutesLeft <= 4 ? "oklch(0.65 0.22 25)" : "var(--gradient-primary)",
                    }}
                  />
                </div>
              )}
            </div>
            {!isPaidSubscription && (
              <button
                onClick={() => toast.success("Ссылка на оплату создана")}
                className="w-full py-2.5 text-[13px] font-semibold rounded-xl gradient-primary text-white"
              >
                Перейти на Super Podcast · $5.99/мес
              </button>
            )}
          </div>
        )}
      </div>

      {/* Anonymous */}
      <div className="glass-card rounded-[20px] overflow-hidden">
        <button
          onClick={() => toggle("anonymous")}
          className="w-full p-4 flex items-center gap-3 active:bg-white/5 transition"
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: anonChats.length > 0 ? ICON_GRADIENTS.anonymous : "rgba(255,255,255,0.08)" }}
          >
            <HugeiconsIcon icon={IncognitoIcon} size={20} strokeWidth={2} color={anonChats.length > 0 ? "white" : "currentColor"} />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="font-semibold flex items-center gap-2">
              Анонимные сообщения
              {anonChats.length > 0 && <OnBadge />}
            </div>
            <div className="text-[11px] text-muted-foreground truncate">
              {anonChats.length > 0 ? `Доступно в ${anonChats.length} чатах` : "Нет доступных чатов"}
            </div>
          </div>
          <ChevronDown size={16} className={`text-muted-foreground transition-transform ${expanded === "anonymous" ? "rotate-180" : ""}`} />
        </button>

        {expanded === "anonymous" && (
          <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/5">
            <div className="text-[13px] text-muted-foreground">
              Отправьте сообщение через бота — автор скрыт от всех. Лимит: 3 в день на человека.
            </div>
            {anonChats.length > 0 && (
              <>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Доступные чаты ({anonChats.length})
                </div>
                <div className="space-y-1.5">
                  {anonChats.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => navigate({ to: "/", search: { anon: c.id } as never })}
                      className="w-full text-left px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 flex items-center gap-2"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                        style={{ background: c.avatarColor }}
                      >
                        {c.initial}
                      </div>
                      <span className="text-[13px] flex-1">{c.name} {c.emoji}</span>
                      <span className="text-[10px] text-muted-foreground">{c.anonymous?.sentToday ?? 0} сегодня</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {anonChats.length === 0 && (
              <div className="text-[12px] text-muted-foreground italic">
                Включите «Анонимные сообщения» в каталоге навыков.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function OnBadge() {
  return (
    <span
      className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase"
      style={{ background: "oklch(0.72 0.16 155 / 0.20)", color: "oklch(0.85 0.15 155)" }}
    >
      ВКЛ
    </span>
  );
}
