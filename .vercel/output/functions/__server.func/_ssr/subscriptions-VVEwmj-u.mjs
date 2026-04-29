import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as TopBar } from "./TopBar-C__rpgVq.mjs";
import { u as useChatsStore, F as FEATURE_META } from "./router-DwIrenfy.mjs";
import { F as FeatureIcon } from "./FeatureIcon-CJCYaFzD.mjs";
import { T as Tar, I as Iv } from "../_libs/hugeicons__core-free-icons.mjs";
import "../_libs/sonner.mjs";
import { H as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
import { C as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
const ALL = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];
function SubscriptionsScreen() {
  const chats = useChatsStore((s) => s.chats);
  const superSummaryOn = useChatsStore((s) => s.superSummaryOn);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const superPodcastFreeMinutesUsed = useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  const freeMinutesLeft = 16 - superPodcastFreeMinutesUsed;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Мои подписки", subtitle: "По чатам и личные функции", back: {
      to: "/profile"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-5 max-w-[520px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 pb-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold", children: "Личные функции" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Tar, size: 18, strokeWidth: 2 }), title: "Super-Summary", status: superSummaryOn ? "Активна" : "Отключена", renew: "Бесплатно" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Iv, size: 18, strokeWidth: 2 }), title: "Super Podcast", status: superPodcastOn ? superPodcastSubscription ? "Активна · подписка" : `Активна · ${freeMinutesLeft} беспл. мин` : "Отключена", renew: superPodcastOn ? superPodcastSubscription ? `$5.99/мес · до ${superPodcastSubscription.expiresAt}` : "Бесплатные минуты" : "—" })
        ] })
      ] }),
      chats.map((c) => {
        const active = ALL.filter((fk) => isActive(c, fk));
        if (active.length === 0) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$chatId", params: {
            chatId: c.id
          }, className: "px-1 pb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold", style: {
              background: c.avatarColor
            }, children: c.initial }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-sm flex-1", children: [
              c.name,
              " ",
              c.emoji
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              c.plan,
              c.cancelled ? " · отменена" : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: active.map((fk) => {
            const f = FEATURE_META[fk];
            return /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature: fk, size: 18 }), title: f.label, status: c.cancelled ? `Активна до ${c.planUntil ?? "—"}` : "Активна", renew: f.monetization === "paid" ? `${f.price} · ${c.planUntil ?? "—"}` : "Бесплатно" }, fk);
          }) })
        ] }, c.id);
      })
    ] })
  ] });
}
function SubRow({
  icon,
  title,
  status,
  renew
}) {
  const isActive2 = status.toLowerCase().startsWith("актив");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold truncate", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: renew })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[11px] flex items-center gap-1 ${isActive2 ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground"}`, children: [
      isActive2 && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
      status
    ] })
  ] });
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
  SubscriptionsScreen as component
};
