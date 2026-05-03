import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as TopBar } from "./TopBar-C__rpgVq.mjs";
import { T as Toggle } from "./Toggle-DZeKeTz7.mjs";
import { c as Route, u as useChatsStore, F as FEATURE_META } from "./router-vCEVUicX.mjs";
import { I as ICON_GRADIENTS, F as FeatureIcon } from "./FeatureIcon-nBXRY4eQ.mjs";
import { F as FeatureSettings } from "./FeatureSettings-Cy9zAxQf.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/hugeicons__core-free-icons.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/hugeicons__react.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/lucide-react.mjs";
function FeatureSettingsPage() {
  const {
    chatId,
    featureKey
  } = Route.useParams();
  const fk = featureKey;
  const chat = useChatsStore((s) => s.chats.find((c) => c.id === chatId));
  const toggleFeature = useChatsStore((s) => s.toggleFeature);
  if (!chat) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center pb-32", children: "Чат не найден" });
  const f = FEATURE_META[fk];
  const active = isActive(chat, fk);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: f.label, subtitle: `${chat.name}${chat.emoji ? " " + chat.emoji : ""}`, back: {
      to: "/chat/$chatId",
      params: {
        chatId
      }
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-4 max-w-[520px] mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-[20px] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", style: {
          background: active ? ICON_GRADIENTS[fk] : "rgba(255,255,255,0.08)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature: fk, size: 22, color: active ? "white" : "currentColor" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground", children: f.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { defaultOn: active, onChange: (v) => {
          toggleFeature(chatId, fk);
          toast(v ? `${f.label} включён` : `${f.label} отключён`);
        } })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureSettings, { fk, chat })
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
  FeatureSettingsPage as component
};
