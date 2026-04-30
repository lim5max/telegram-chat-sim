import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as TopBar } from "./TopBar-C__rpgVq.mjs";
import { u as useChatsStore, F as FEATURE_META } from "./router-Cx3ciUei.mjs";
import { F as FeatureIcon } from "./FeatureIcon-CJCYaFzD.mjs";
import { I as Iv } from "../_libs/hugeicons__core-free-icons.mjs";
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
  useChatsStore((s) => s.superSummaryOn);
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  useChatsStore((s) => s.superPodcastFreeMinutesUsed);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Мои подписки", subtitle: "По чатам и персональные навыки", back: {
      to: "/profile"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-5 max-w-[520px] mx-auto", children: [
      superPodcastOn && superPodcastSubscription && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 pb-2 text-[11px] uppercase tracking-wider text-foreground/50 font-semibold", children: "Личные подписки" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Iv, size: 18, strokeWidth: 2 }), title: "Super Podcast", status: "Активна", renew: `$5.99/мес · до ${superPodcastSubscription.expiresAt}` }) })
      ] }),
      chats.map((c) => {
        const paidActive = ALL.filter((fk) => isActive(c, fk) && isPaid(c, fk));
        if (paidActive.length === 0) return null;
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
            c.cancelled && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "отменена" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: paidActive.map((fk) => {
            const f = FEATURE_META[fk];
            return /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature: fk, size: 18 }), title: f.label, tariff: featureTariff(c, fk), status: "Активна", renew: featurePrice(c, fk) + (c.planUntil ? ` · до ${c.planUntil}` : "") }, fk);
          }) })
        ] }, c.id);
      }),
      !chats.some((c) => ALL.some((fk) => isActive(c, fk) && isPaid(c, fk))) && !(superPodcastOn && superPodcastSubscription) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-[13px] text-muted-foreground py-8", children: "У вас пока нет платных подписок" })
    ] })
  ] });
}
function SubRow({
  icon,
  title,
  tariff,
  status,
  renew
}) {
  const isActive2 = status.toLowerCase().startsWith("актив");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] font-semibold truncate", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground truncate", children: renew })
    ] }),
    tariff && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground shrink-0", children: tariff }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[12px] flex items-center gap-1 shrink-0 ${isActive2 ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground"}`, children: [
      isActive2 && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13 }),
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
function isPaid(c, fk) {
  switch (fk) {
    case "summary":
      return c.plan !== "Nano";
    case "voice":
      return c.voice?.plan === "Pro" || c.voice?.plan === "Ultra";
    case "podcast":
      return true;
    case "antispam":
      return c.antispam?.paid ?? false;
    default:
      return false;
  }
}
function featurePrice(_c, fk) {
  switch (fk) {
    case "summary":
      return "$4.99/мес";
    case "voice":
      return "$16.99/мес";
    case "podcast":
      return "$2.99/мес";
    case "antispam":
      return "$2.49/мес";
    default:
      return "";
  }
}
function featureTariff(c, fk) {
  switch (fk) {
    case "summary":
      return c.plan;
    case "voice":
      return c.voice?.plan ?? "Free";
    case "podcast":
      return c.chatPodcast?.status?.includes("Бесплатная") ? "Free" : "Pro";
    case "antispam":
      return c.antispam?.paid ? "Pro" : "Free";
    default:
      return "";
  }
}
export {
  SubscriptionsScreen as component
};
