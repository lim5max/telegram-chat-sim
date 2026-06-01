import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  HandCoinsIcon,
  UserMultipleIcon,
  CalendarSetting01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  RocketIcon,
} from "@hugeicons/core-free-icons";
import { useChatsStore, collectionKey, type Collection } from "@/store/chats";
import { type FeatureKey } from "@/data/chats";

type Variant = "compact" | "full";

type CollectionContext = {
  chatId: string;
  feature: FeatureKey;
  planLabel: string;
  totalAmount: number;
  memberCount: number;
};

export function PayOrCollectBanner({
  variant = "full",
  collection,
}: {
  variant?: Variant;
  collection?: CollectionContext;
}) {
  const [open, setOpen] = useState(false);
  const handle = () => {
    if (collection) {
      setOpen(true);
    } else {
      toast("Открой настройки фичи в чате, чтобы запустить сбор");
    }
  };

  const sheet = open && collection ? (
    <CollectionSheet ctx={collection} onClose={() => setOpen(false)} />
  ) : null;

  if (variant === "compact") {
    return (
      <>
        <button
          type="button"
          onClick={handle}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/8 active:scale-[0.99] transition text-left"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.72 0.16 155 / 0.18)" }}
          >
            <HugeiconsIcon icon={HandCoinsIcon} size={16} strokeWidth={2} color="oklch(0.85 0.15 155)" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-semibold leading-tight">Скинуться чатом</div>
            <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
              Запустить сбор — каждый участник доплатит свою часть
            </div>
          </div>
          <svg className="w-4 h-4 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {sheet}
      </>
    );
  }

  return (
    <>
      <div
        className="rounded-2xl p-3.5 flex items-start gap-3"
        style={{
          background: "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.10), oklch(0.72 0.16 200 / 0.08))",
          border: "1px solid oklch(0.72 0.16 155 / 0.20)",
        }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.72 0.16 155 / 0.20)" }}
        >
          <HugeiconsIcon icon={HandCoinsIcon} size={18} strokeWidth={2} color="oklch(0.85 0.15 155)" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold leading-tight">Платить может не только админ</div>
          <div className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
            Оплати сам или запусти сбор в чате — бот разошлёт ссылку участникам и каждый скинется по чуть-чуть.
          </div>
          <button
            type="button"
            onClick={handle}
            className="mt-2 text-[12px] font-semibold inline-flex items-center gap-1"
            style={{ color: "oklch(0.85 0.15 155)" }}
          >
            Как это работает
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {sheet}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom sheet                                                       */
/* ------------------------------------------------------------------ */

function CollectionSheet({ ctx, onClose }: { ctx: CollectionContext; onClose: () => void }) {
  const startCollection = useChatsStore((s) => s.startCollection);
  const existing = useChatsStore((s) => s.collections[collectionKey(ctx.chatId, ctx.feature)]);
  const active = existing && existing.status === "active";

  const suggestedTarget = Math.min(Math.max(8, Math.ceil(ctx.totalAmount / 1.5)), ctx.memberCount);
  const [target, setTarget] = useState(suggestedTarget);
  const perPerson = Math.ceil((ctx.totalAmount / target) * 100) / 100;
  const [deadline, setDeadline] = useState("через 3 дня");

  const onStart = () => {
    startCollection({
      chatId: ctx.chatId,
      feature: ctx.feature,
      planLabel: ctx.planLabel,
      totalAmount: ctx.totalAmount,
      targetCount: target,
      deadline,
    });
    toast.success("Сбор запущен. Бот написал в чат.");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-3"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[460px] glass-card rounded-[24px] p-5 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.4), oklch(0.72 0.16 200 / 0.3))" }}
          >
            <HugeiconsIcon icon={HandCoinsIcon} size={22} strokeWidth={2} color="oklch(0.92 0.12 155)" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[16px] font-bold leading-tight">Скинуться чатом</div>
            <div className="text-[12px] text-muted-foreground mt-0.5">{ctx.planLabel}</div>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-white">
            <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={2} />
          </button>
        </div>

        {active ? (
          <ActiveCollectionView col={existing!} onClose={onClose} />
        ) : (
          <>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Как работает
            </div>
            <div className="space-y-2 mb-4">
              <Step n={1} text="Бот публикует пост в чате с суммой и кнопкой «Внести»." />
              <Step n={2} text="Участники нажимают и платят свою долю — каждый видит прогресс." />
              <Step n={3} text="Когда собрано — бот включает тариф и пишет «Готово»." />
            </div>

            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Параметры
            </div>
            <div className="glass-card rounded-2xl p-3 space-y-3 mb-4">
              <Row label="Цель" value={`$${ctx.totalAmount.toFixed(2)}`} />
              <Row
                label="Участников"
                value={
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTarget(Math.max(2, target - 1))}
                      className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-sm"
                    >
                      −
                    </button>
                    <span className="text-[13px] font-semibold w-8 text-center">{target}</span>
                    <button
                      onClick={() => setTarget(Math.min(ctx.memberCount, target + 1))}
                      className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                }
              />
              <Row label="С каждого" value={<span className="font-semibold">${perPerson.toFixed(2)}</span>} />
              <Row
                label="Срок"
                value={
                  <div className="flex gap-1">
                    {(["через 1 день", "через 3 дня", "через 7 дней"] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => setDeadline(d)}
                        className={`px-2 py-1 rounded-md text-[11px] font-medium ${
                          deadline === d ? "gradient-primary text-white" : "bg-white/10 text-muted-foreground"
                        }`}
                      >
                        {d.replace("через ", "")}
                      </button>
                    ))}
                  </div>
                }
              />
            </div>

            <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              Где следить
            </div>
            <div className="text-[12px] text-muted-foreground leading-relaxed mb-4">
              Прогресс будет тут — в настройках навыка появится карточка со счётчиком взносов.
              Бот в чате пингует за день до дедлайна и закрывает сбор при достижении цели.
            </div>

            <button
              onClick={onStart}
              className="w-full py-3 rounded-2xl gradient-primary text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2"
            >
              <HugeiconsIcon icon={RocketIcon} size={18} strokeWidth={2} color="white" />
              Запустить сбор
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5"
        style={{ background: "oklch(0.72 0.16 155 / 0.22)", color: "oklch(0.92 0.12 155)" }}
      >
        {n}
      </div>
      <div className="text-[12px] leading-relaxed">{text}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-[12px] text-muted-foreground">{label}</div>
      <div className="text-[13px]">{value}</div>
    </div>
  );
}

function ActiveCollectionView({ col, onClose }: { col: Collection; onClose: () => void }) {
  const navigate = useNavigate();
  const cancel = useChatsStore((s) => s.cancelCollection);
  const contribute = useChatsStore((s) => s.contributeToCollection);
  const pct = Math.min((col.contributors.length / col.targetCount) * 100, 100);
  const youContributed = col.contributors.some((c) => c.name === "Вы");

  return (
    <>
      <div className="glass-card rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <span className="text-muted-foreground">Собрано</span>
          <span className="font-semibold">
            {col.contributors.length} из {col.targetCount} участников
          </span>
        </div>
        <div className="h-2 w-full bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${Math.max(pct, 3)}%`,
              background: "var(--gradient-primary)",
            }}
          />
        </div>
        <div className="flex items-center justify-between mt-3 text-[12px]">
          <span className="text-muted-foreground">
            ${(col.contributors.length * col.perPerson).toFixed(2)} / ${col.totalAmount.toFixed(2)}
          </span>
          <span className="text-muted-foreground">до {col.deadline}</span>
        </div>
      </div>

      {col.contributors.length > 0 && (
        <div className="mb-4">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
            Внесли
          </div>
          <div className="glass-card rounded-2xl divide-y divide-white/5">
            {col.contributors.map((c, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 text-[12px]">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} strokeWidth={2} color="oklch(0.85 0.15 155)" />
                <span className="flex-1">{c.name}</span>
                <span className="text-muted-foreground">{c.at}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {!youContributed && (
          <button
            onClick={() => {
              contribute(col.chatId, col.feature);
              toast.success(`Внесено $${col.perPerson.toFixed(2)}`);
            }}
            className="flex-1 py-3 rounded-2xl gradient-primary text-white text-[13px] font-semibold"
          >
            Внести ${col.perPerson.toFixed(2)}
          </button>
        )}
        <button
          onClick={() => {
            onClose();
            navigate({ to: "/chat/$chatId", params: { chatId: col.chatId } });
          }}
          className="flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-[13px] font-semibold"
        >
          Открыть чат
        </button>
      </div>

      <button
        onClick={() => {
          cancel(col.chatId, col.feature);
          toast("Сбор отменён");
          onClose();
        }}
        className="w-full mt-2 py-2 text-[12px] text-muted-foreground hover:text-[oklch(0.82_0.17_25)]"
      >
        Отменить сбор
      </button>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress card — shows in feature settings when active             */
/* ------------------------------------------------------------------ */

export function CollectionStatusCard({
  chatId,
  feature,
  ctx,
}: {
  chatId: string;
  feature: FeatureKey;
  ctx: CollectionContext;
}) {
  const col = useChatsStore((s) => s.collections[collectionKey(chatId, feature)]);
  const [open, setOpen] = useState(false);
  if (!col || col.status !== "active") return null;
  const pct = Math.min((col.contributors.length / col.targetCount) * 100, 100);

  return (
    <>
      <div
        className="rounded-2xl p-3.5 space-y-2.5"
        style={{
          background: "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.12), oklch(0.72 0.16 200 / 0.08))",
          border: "1px solid oklch(0.72 0.16 155 / 0.25)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.72 0.16 155 / 0.25)" }}
          >
            <HugeiconsIcon icon={HandCoinsIcon} size={14} strokeWidth={2} color="oklch(0.92 0.12 155)" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-semibold leading-tight">Идёт сбор на {col.planLabel}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              По ${col.perPerson.toFixed(2)} · до {col.deadline}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <HugeiconsIcon icon={UserMultipleIcon} size={11} strokeWidth={2} />
              {col.contributors.length} из {col.targetCount}
            </span>
            <span className="font-semibold">
              ${(col.contributors.length * col.perPerson).toFixed(2)} / ${col.totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.max(pct, 3)}%`,
                background: "var(--gradient-primary)",
              }}
            />
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="w-full text-[12px] font-semibold py-2 rounded-xl bg-white/8 hover:bg-white/12"
        >
          Открыть сбор
        </button>
      </div>
      {open && <CollectionSheet ctx={ctx} onClose={() => setOpen(false)} />}
    </>
  );
}
