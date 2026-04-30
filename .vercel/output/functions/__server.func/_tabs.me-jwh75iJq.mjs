import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate } from "./_libs/tanstack__react-router.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { T as Toggle } from "./_ssr/Toggle-DZeKeTz7.mjs";
import { u as useChatsStore, s as superPodcast } from "./_ssr/router-Cx3ciUei.mjs";
import { T as Tar, I as Iv, M as ME } from "./_libs/hugeicons__core-free-icons.mjs";
import { I as ICON_GRADIENTS } from "./_ssr/FeatureIcon-CJCYaFzD.mjs";
import { H as HugeiconsIcon } from "./_libs/hugeicons__react.mjs";
import { e as ChevronDown, f as ChevronRight, g as Play } from "./_libs/lucide-react.mjs";
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
function ForMeScreen() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = reactExports.useState(null);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const setSuperSummary = useChatsStore((s) => s.setSuperSummary);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const setSuperPodcast = useChatsStore((s) => s.setSuperPodcast);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  useChatsStore((s) => s.totalAnonSentToday);
  const chats = useChatsStore((s) => s.chats);
  const [playing, setPlaying] = reactExports.useState(false);
  const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;
  const isPaidSubscription = superPodcastSubscription !== null;
  const anonChats = chats.filter((c) => c.anonymous?.active);
  const toggle = (key) => setExpanded(expanded === key ? null : key);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 space-y-3 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Личное" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground -mt-1", children: "Персональные навыки — не привязаны к конкретному чату." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle("summary"), className: "w-full p-4 flex items-center gap-3 active:bg-white/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0", style: {
          background: superSummaryOn ? ICON_GRADIENTS.summary : "rgba(255,255,255,0.08)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Tar, size: 20, strokeWidth: 2, color: superSummaryOn ? "white" : "currentColor" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold flex items-center gap-2", children: [
            "Super-Summary",
            superSummaryOn && /* @__PURE__ */ jsxRuntimeExports.jsx(OnBadge, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: superSummaryOn ? "Включён · ежедневно в 09:00" : "Отключён" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-muted-foreground transition-transform ${expanded === "summary" ? "rotate-180" : ""}` })
      ] }),
      expanded === "summary" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 space-y-3 border-t border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground", children: "Дайджест всех ваших чатов в одном сообщении каждое утро." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: superSummaryOn, onChange: (v) => {
            setSuperSummary(v);
            toast(v ? "Super-Summary включён" : "Super-Summary отключён");
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
          to: "/"
        }), className: "w-full py-2.5 text-[13px] font-medium rounded-xl bg-white/8 hover:bg-white/12 flex items-center justify-center gap-2", children: [
          "Посмотреть последний выпуск ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle("podcast"), className: "w-full p-4 flex items-center gap-3 active:bg-white/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0", style: {
          background: superPodcastOn ? ICON_GRADIENTS.podcast : "rgba(255,255,255,0.08)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Iv, size: 20, strokeWidth: 2, color: superPodcastOn ? "white" : "currentColor" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold flex items-center gap-2", children: [
            "Super Podcast",
            superPodcastOn && /* @__PURE__ */ jsxRuntimeExports.jsx(OnBadge, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: superPodcastOn ? isPaidSubscription ? `Подписка до ${superPodcastSubscription.expiresAt}` : `Осталось ${freeMinutesLeft} из 16 бесплатных мин` : "Не активен" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
          superPodcastOn && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: isPaidSubscription ? "$5.99/мес" : "Бесплатно" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-muted-foreground transition-transform ${expanded === "podcast" ? "rotate-180" : ""}` })
        ] })
      ] }),
      expanded === "podcast" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 space-y-3 border-t border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground", children: "Аудио-версия дайджеста — слушайте на ходу." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: superPodcastOn, onChange: (v) => {
            setSuperPodcast(v);
            toast(v ? "Super Podcast включён" : "Super Podcast отключён");
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground", children: "Голос" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: [{
            id: "Onyx",
            label: "Мужской"
          }, {
            id: "Shimmer",
            label: "Женский"
          }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => isPaidSubscription ? toast(`Голос: ${v.label.toLowerCase()}`) : toast("Доступно с подпиской"), className: `text-[12px] px-3 py-1.5 rounded-lg transition ${v.id === "Onyx" ? "bg-white/15 text-white" : "bg-white/6 text-muted-foreground"}`, children: v.label }, v.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl p-3 bg-white/5 border border-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setPlaying((p) => !p);
            toast(playing ? "Пауза" : "Воспроизведение");
          }, className: "w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0", style: {
            background: "var(--gradient-primary)"
          }, children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "❚❚" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, fill: "white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold truncate", children: "Выпуск 24.04 · все чаты" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full gradient-primary", style: {
              width: playing ? "42%" : "0%"
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: "2:04 / 4:55" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: isPaidSubscription ? `Подписка до ${superPodcastSubscription.expiresAt}` : `${freeMinutesLeft} из 16 бесплатных мин` }),
          !isPaidSubscription && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toast.success("Ссылка на оплату создана"), className: "px-3 py-1.5 rounded-lg gradient-primary text-white font-semibold text-[11px]", children: superPodcast.price })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle("anonymous"), className: "w-full p-4 flex items-center gap-3 active:bg-white/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0", style: {
          background: anonChats.length > 0 ? ICON_GRADIENTS.anonymous : "rgba(255,255,255,0.08)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: ME, size: 20, strokeWidth: 2, color: anonChats.length > 0 ? "white" : "currentColor" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold flex items-center gap-2", children: [
            "Анонимные сообщения",
            anonChats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(OnBadge, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: anonChats.length > 0 ? `Доступно в ${anonChats.length} чатах` : "Нет доступных чатов" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-muted-foreground transition-transform ${expanded === "anonymous" ? "rotate-180" : ""}` })
      ] }),
      expanded === "anonymous" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 space-y-3 border-t border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground", children: "Отправьте сообщение через бота — автор скрыт от всех. Лимит: 3 в день на чат." }),
        anonChats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: [
            "Доступные чаты (",
            anonChats.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: anonChats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
            to: "/",
            search: {
              anon: c.id
            }
          }), className: "w-full text-left px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold", style: {
              background: c.avatarColor
            }, children: c.initial }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] flex-1", children: [
              c.name,
              " ",
              c.emoji
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              c.anonymous?.sentToday ?? 0,
              " сегодня"
            ] })
          ] }, c.id)) })
        ] }),
        anonChats.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground italic", children: "Включите «Анонимные сообщения» в каталоге навыков." })
      ] })
    ] })
  ] });
}
function OnBadge() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded font-bold uppercase", style: {
    background: "oklch(0.72 0.16 155 / 0.20)",
    color: "oklch(0.85 0.15 155)"
  }, children: "ВКЛ" });
}
export {
  ForMeScreen as component
};
