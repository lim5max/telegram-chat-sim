import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { R as Rb, A as lZr, B as dp, F as ztr, G as Ay } from "../_libs/hugeicons__core-free-icons.mjs";
import { u as useChatsStore, d as collectionKey } from "./router-CG29-TTj.mjs";
import { H as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
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
  const sheet = open && collection ? /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSheet, { ctx: collection, onClose: () => setOpen(false) }) : null;
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5 leading-tight", children: "Запустить сбор — каждый участник доплатит свою часть" })
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
function CollectionSheet({ ctx, onClose }) {
  const startCollection = useChatsStore((s) => s.startCollection);
  const existing = useChatsStore((s) => s.collections[collectionKey(ctx.chatId, ctx.feature)]);
  const active = existing && existing.status === "active";
  const suggestedTarget = Math.min(Math.max(8, Math.ceil(ctx.totalAmount / 1.5)), ctx.memberCount);
  const [target, setTarget] = reactExports.useState(suggestedTarget);
  const perPerson = Math.ceil(ctx.totalAmount / target * 100) / 100;
  const [deadline, setDeadline] = reactExports.useState("через 3 дня");
  const onStart = () => {
    startCollection({
      chatId: ctx.chatId,
      feature: ctx.feature,
      planLabel: ctx.planLabel,
      totalAmount: ctx.totalAmount,
      targetCount: target,
      deadline
    });
    toast.success("Сбор запущен. Бот написал в чат.");
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-3",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full max-w-[460px] glass-card rounded-[24px] p-5 max-h-[85vh] overflow-y-auto",
          onClick: (e) => e.stopPropagation(),
          children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[16px] font-bold leading-tight", children: "Скинуться чатом" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-0.5", children: ctx.planLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: dp, size: 20, strokeWidth: 2 }) })
            ] }),
            active ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveCollectionView, { col: existing, onClose }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2", children: "Как работает" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 1, text: "Бот публикует пост в чате с суммой и кнопкой «Внести»." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 2, text: "Участники нажимают и платят свою долю — каждый видит прогресс." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { n: 3, text: "Когда собрано — бот включает тариф и пишет «Готово»." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2", children: "Параметры" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-3 space-y-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Цель", value: `$${ctx.totalAmount.toFixed(2)}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Row,
                  {
                    label: "Участников",
                    value: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => setTarget(Math.max(2, target - 1)),
                          className: "w-6 h-6 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-sm",
                          children: "−"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold w-8 text-center", children: target }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => setTarget(Math.min(ctx.memberCount, target + 1)),
                          className: "w-6 h-6 rounded-md bg-white/10 hover:bg-white/15 flex items-center justify-center text-sm",
                          children: "+"
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "С каждого", value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                  "$",
                  perPerson.toFixed(2)
                ] }) }),
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
                    "Запустить сбор"
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
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
  const pct = Math.min(col.contributors.length / col.targetCount * 100, 100);
  const youContributed = col.contributors.some((c) => c.name === "Вы");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Собрано" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          col.contributors.length,
          " из ",
          col.targetCount,
          " участников"
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "$",
          (col.contributors.length * col.perPerson).toFixed(2),
          " / $",
          col.totalAmount.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "до ",
          col.deadline
        ] })
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
            toast.success(`Внесено $${col.perPerson.toFixed(2)}`);
          },
          className: "flex-1 py-3 rounded-2xl gradient-primary text-white text-[13px] font-semibold",
          children: [
            "Внести $",
            col.perPerson.toFixed(2)
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
  const pct = Math.min(col.contributors.length / col.targetCount * 100, 100);
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
                "По $",
                col.perPerson.toFixed(2),
                " · до ",
                col.deadline
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: lZr, size: 11, strokeWidth: 2 }),
                col.contributors.length,
                " из ",
                col.targetCount
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                "$",
                (col.contributors.length * col.perPerson).toFixed(2),
                " / $",
                col.totalAmount.toFixed(2)
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
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSheet, { ctx, onClose: () => setOpen(false) })
  ] });
}
export {
  CollectionStatusCard as C,
  PayOrCollectBanner as P
};
