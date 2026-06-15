import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { R as Rb, y as lZr, A as dp, B as ztr, F as Ay } from "../_libs/hugeicons__core-free-icons.mjs";
import { D as Drawer$1 } from "../_libs/vaul.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { u as useChatsStore, e as collectionKey } from "./router-Ka44_1ec.mjs";
import { H as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer$1.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
const DrawerPortal = Drawer$1.Portal;
const DrawerClose = Drawer$1.Close;
const DrawerOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
const RUB_RATE = 78;
const CONTRIBUTION_PRESETS = [100, 200, 500, 1e3];
const toRub = (usd) => Math.round(usd * RUB_RATE);
const fmtRub = (rub) => `${rub.toLocaleString("ru-RU")} ₽`;
const defaultPresetFor = (goalRub) => CONTRIBUTION_PRESETS.find((p) => goalRub / p <= 25) ?? CONTRIBUTION_PRESETS[0];
function PayOrCollectBanner({
  variant = "full",
  collection
}) {
  const [open, setOpen] = reactExports.useState(false);
  const handle = () => {
    if (collection) {
      setOpen(true);
    } else {
      toast("Открой настройки фичи в чате, чтобы запустить сбор");
    }
  };
  const sheet = collection ? /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSheet, { ctx: collection, open, onOpenChange: setOpen }) : null;
  if (variant === "compact") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handle,
          className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/8 active:scale-[0.99] transition text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                style: { background: "oklch(0.72 0.16 155 / 0.18)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Rb, size: 16, strokeWidth: 2, color: "oklch(0.85 0.15 155)" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold leading-tight", children: "Скинуться чатом" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5 leading-tight", children: "Запустить сбор — каждый внесёт фиксированную сумму" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 text-muted-foreground shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }) })
          ]
        }
      ),
      sheet
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-3.5 flex items-start gap-3",
        style: {
          background: "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.10), oklch(0.72 0.16 200 / 0.08))",
          border: "1px solid oklch(0.72 0.16 155 / 0.20)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
              style: { background: "oklch(0.72 0.16 155 / 0.20)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Rb, size: 18, strokeWidth: 2, color: "oklch(0.85 0.15 155)" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold leading-tight", children: "Платить может не только админ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1 leading-relaxed", children: "Оплати сам или запусти сбор в чате — бот разошлёт ссылку участникам и каждый скинется по чуть-чуть." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handle,
                className: "mt-2 text-[12px] font-semibold inline-flex items-center gap-1",
                style: { color: "oklch(0.85 0.15 155)" },
                children: [
                  "Как это работает",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-3.5 h-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }) })
                ]
              }
            )
          ] })
        ]
      }
    ),
    sheet
  ] });
}
function CollectionSheet({
  ctx,
  open,
  onOpenChange
}) {
  const startCollection = useChatsStore((s) => s.startCollection);
  const existing = useChatsStore((s) => s.collections[collectionKey(ctx.chatId, ctx.feature)]);
  const active = existing && existing.status === "active";
  const goalRub = toRub(ctx.totalAmount);
  const [perPerson, setPerPerson] = reactExports.useState(() => defaultPresetFor(goalRub));
  const [deadline, setDeadline] = reactExports.useState("через 3 дня");
  const onStart = () => {
    startCollection({
      chatId: ctx.chatId,
      feature: ctx.feature,
      planLabel: ctx.planLabel,
      totalAmount: goalRub,
      perPerson,
      deadline
    });
    toast.success("Сбор запущен. Бот написал в чат.");
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerContent, { className: "max-h-[90vh] border-white/10 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto px-5 pb-7 pt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0",
          style: { background: "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.4), oklch(0.72 0.16 200 / 0.3))" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Rb, size: 22, strokeWidth: 2, color: "oklch(0.92 0.12 155)" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerTitle, { className: "text-[16px] font-bold leading-tight", children: "Скинуться чатом" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDescription, { className: "text-[12px] text-muted-foreground mt-0.5", children: ctx.planLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerClose, { className: "text-muted-foreground hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: dp, size: 20, strokeWidth: 2 }) })
    ] }),
    active ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveCollectionView, { col: existing, onClose: () => onOpenChange(false) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2", children: "Как работает" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 1, text: "Бот публикует пост в чате с суммой и кнопкой «Внести»." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 2, text: "Участники нажимают и платят фиксированный взнос — каждый видит прогресс." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 3, text: "Когда собрано — бот включает тариф и пишет «Готово»." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2", children: "Параметры" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-3 space-y-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Цель", value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: fmtRub(goalRub) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mb-2", children: "Взнос с каждого" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5", children: CONTRIBUTION_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setPerPerson(p),
              className: `py-2 rounded-xl text-[13px] font-semibold transition ${perPerson === p ? "gradient-primary text-white" : "bg-white/10 text-muted-foreground hover:bg-white/15"}`,
              children: [
                p,
                " ₽"
              ]
            },
            p
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Row,
          {
            label: "Срок",
            value: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["через 1 день", "через 3 дня", "через 7 дней"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDeadline(d),
                className: `px-2 py-1 rounded-md text-[11px] font-medium ${deadline === d ? "gradient-primary text-white" : "bg-white/10 text-muted-foreground"}`,
                children: d.replace("через ", "")
              },
              d
            )) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2", children: "Где следить" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground leading-relaxed mb-4", children: "Прогресс будет тут — в настройках навыка появится карточка со счётчиком взносов. Бот в чате пингует за день до дедлайна и закрывает сбор при достижении цели." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onStart,
          className: "w-full py-3 rounded-2xl gradient-primary text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: ztr, size: 18, strokeWidth: 2, color: "white" }),
            "Запустить сбор по ",
            fmtRub(perPerson)
          ]
        }
      )
    ] })
  ] }) }) });
}
function Step({ n, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5",
        style: { background: "oklch(0.72 0.16 155 / 0.22)", color: "oklch(0.92 0.12 155)" },
        children: n
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] leading-relaxed", children: text })
  ] });
}
function Row({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px]", children: value })
  ] });
}
function ActiveCollectionView({ col, onClose }) {
  const navigate = useNavigate();
  const cancel = useChatsStore((s) => s.cancelCollection);
  const contribute = useChatsStore((s) => s.contributeToCollection);
  const collected = col.contributors.length * col.perPerson;
  const pct = Math.min(collected / col.totalAmount * 100, 100);
  const youContributed = col.contributors.some((c) => c.name === "Вы");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Собрано" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          fmtRub(collected),
          " из ",
          fmtRub(col.totalAmount)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-white/8 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full transition-all",
          style: {
            width: `${Math.max(pct, 3)}%`,
            background: "var(--gradient-primary)"
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: lZr, size: 12, strokeWidth: 2 }),
          col.contributors.length,
          " внесли"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: col.deadline })
      ] })
    ] }),
    col.contributors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2", children: "Внесли" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-2xl divide-y divide-white/5", children: col.contributors.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 text-[12px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Ay, size: 14, strokeWidth: 2, color: "oklch(0.85 0.15 155)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.at })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      !youContributed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            contribute(col.chatId, col.feature);
            toast.success(`Внесено ${fmtRub(col.perPerson)}`);
          },
          className: "flex-1 py-3 rounded-2xl gradient-primary text-white text-[13px] font-semibold",
          children: [
            "Внести ",
            fmtRub(col.perPerson)
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            onClose();
            navigate({ to: "/chat/$chatId", params: { chatId: col.chatId } });
          },
          className: "flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-[13px] font-semibold",
          children: "Открыть чат"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          cancel(col.chatId, col.feature);
          toast("Сбор отменён");
          onClose();
        },
        className: "w-full mt-2 py-2 text-[12px] text-muted-foreground hover:text-[oklch(0.82_0.17_25)]",
        children: "Отменить сбор"
      }
    )
  ] });
}
function CollectionStatusCard({
  chatId,
  feature,
  ctx
}) {
  const col = useChatsStore((s) => s.collections[collectionKey(chatId, feature)]);
  const [open, setOpen] = reactExports.useState(false);
  if (!col || col.status !== "active") return null;
  const collected = col.contributors.length * col.perPerson;
  const pct = Math.min(collected / col.totalAmount * 100, 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-3.5 space-y-2.5",
        style: {
          background: "linear-gradient(135deg, oklch(0.72 0.16 155 / 0.12), oklch(0.72 0.16 200 / 0.08))",
          border: "1px solid oklch(0.72 0.16 155 / 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-7 h-7 rounded-lg flex items-center justify-center shrink-0",
                style: { background: "oklch(0.72 0.16 155 / 0.25)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Rb, size: 14, strokeWidth: 2, color: "oklch(0.92 0.12 155)" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[12px] font-semibold leading-tight", children: [
                "Идёт сбор на ",
                col.planLabel
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                "По ",
                fmtRub(col.perPerson),
                " · ",
                col.deadline
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: lZr, size: 11, strokeWidth: 2 }),
                col.contributors.length,
                " внесли"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                fmtRub(collected),
                " / ",
                fmtRub(col.totalAmount)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full rounded-full",
                style: {
                  width: `${Math.max(pct, 3)}%`,
                  background: "var(--gradient-primary)"
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(true),
              className: "w-full text-[12px] font-semibold py-2 rounded-xl bg-white/8 hover:bg-white/12",
              children: "Открыть сбор"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSheet, { ctx, open, onOpenChange: setOpen })
  ] });
}
export {
  CollectionStatusCard as C,
  PayOrCollectBanner as P
};
