import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { t as toast } from "./_libs/sonner.mjs";
import { d as dZ, I as Iv, O as OY } from "./_libs/hugeicons__core-free-icons.mjs";
import { u as useChatsStore, F as FEATURE_META } from "./_ssr/router-CacNlKLI.mjs";
import { F as FeatureIcon } from "./_ssr/FeatureIcon-nBXRY4eQ.mjs";
import { H as HugeiconsIcon } from "./_libs/hugeicons__react.mjs";
import { e as ChevronDown, C as CircleCheck, f as ChevronRight } from "./_libs/lucide-react.mjs";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/zustand.mjs";
import "./_libs/zod.mjs";
const CHAT_FEATURES = ["summary", "voice", "podcast", "kb", "antispam", "anonymous"];
function ProfileScreen() {
  const chats = useChatsStore((s) => s.chats);
  const adminCount = chats.filter((c) => c.isAdmin).length;
  const [subsOpen, setSubsOpen] = reactExports.useState(false);
  const [subsFilter, setSubsFilter] = reactExports.useState("all");
  const superPodcastOn = useChatsStore((s) => s.superPodcastOn);
  const superPodcastSubscription = useChatsStore((s) => s.superPodcastSubscription);
  const hasPersonalSub = superPodcastOn && superPodcastSubscription;
  const chatSubs = chats.filter((c) => CHAT_FEATURES.some((fk) => isActiveFeature(c, fk) && isPaidFeature(c, fk)));
  const hasSubs = hasPersonalSub || chatSubs.length > 0;
  const showPersonal = subsFilter === "all" || subsFilter === "personal";
  const showChat = subsFilter === "all" || subsFilter === "chat";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 space-y-4 max-w-[520px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Профиль" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] p-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold", style: {
        background: "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.62 0.20 15))"
      }, children: "O" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-lg", children: "Олег" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground", children: "@oleg · id 1234567" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 mt-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground", children: [
            chats.length,
            " общих с ботом"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground", children: [
            "админ в ",
            adminCount,
            " чатах"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[20px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSubsOpen(!subsOpen), className: "w-full p-4 flex items-center gap-3 active:bg-white/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-2xl flex items-center justify-center", style: {
          background: "var(--gradient-primary)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: dZ, size: 20, strokeWidth: 2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Мои подписки" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-0.5", children: hasSubs ? "Подписки по чатам и личные" : "Нет активных подписок" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: `text-muted-foreground transition-transform ${subsOpen ? "rotate-180" : ""}` })
      ] }),
      subsOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-1 space-y-3 border-t border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: [{
          id: "all",
          label: "Все"
        }, {
          id: "personal",
          label: "Личные"
        }, {
          id: "chat",
          label: "Навыки чатов"
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubsFilter(f.id), className: `text-[11px] px-3 py-1.5 rounded-lg transition font-medium ${subsFilter === f.id ? "bg-white/15 text-white" : "bg-white/6 text-muted-foreground"}`, children: f.label }, f.id)) }),
        showPersonal && hasPersonalSub && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: "Личные" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: Iv, size: 16, strokeWidth: 2 }), title: "Super Podcast", status: "Активна", renew: `$5.99/мес · до ${superPodcastSubscription.expiresAt}` })
        ] }),
        showChat && chatSubs.map((c) => {
          const paid = CHAT_FEATURES.filter((fk) => isActiveFeature(c, fk) && isPaidFeature(c, fk));
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-semibold", style: {
                background: c.avatarColor
              }, children: c.initial }),
              c.name,
              " ",
              c.emoji
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: paid.map((fk) => /* @__PURE__ */ jsxRuntimeExports.jsx(SubRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature: fk, size: 14 }), title: FEATURE_META[fk].label, status: "Активна", renew: featurePrice(fk) + (c.planUntil ? ` · до ${c.planUntil}` : "") }, fk)) })
          ] }, c.id);
        }),
        !(showPersonal && hasPersonalSub) && !(showChat && chatSubs.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-muted-foreground text-center py-3", children: "У вас пока нет платных подписок" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] divide-y divide-white/8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HugeiconsIcon, { icon: OY, size: 16, strokeWidth: 2 }), label: "Поддержка", onClick: () => toast("Напишите нам: @ChatLogixSupport") }) })
  ] });
}
function Row({
  icon,
  label,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: "w-full px-4 py-3.5 flex items-center gap-3 hover:bg-white/5 active:bg-white/8 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-left text-sm", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-muted-foreground" })
  ] });
}
function SubRow({
  icon,
  title,
  status,
  renew
}) {
  const active = status.toLowerCase().startsWith("актив");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 py-2 px-3 rounded-xl bg-white/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold truncate", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: renew })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[11px] flex items-center gap-1 shrink-0 ${active ? "text-[oklch(0.85_0.15_155)]" : "text-muted-foreground"}`, children: [
      active && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
      status
    ] })
  ] });
}
function isActiveFeature(c, fk) {
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
    default:
      return false;
  }
}
function isPaidFeature(c, fk) {
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
function featurePrice(fk) {
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
export {
  ProfileScreen as component
};
