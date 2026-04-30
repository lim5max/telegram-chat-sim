import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as ME, w as oir, x as Iu, U as U6, k as U$, W as Wy } from "../_libs/hugeicons__core-free-icons.mjs";
import { H as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
const FEATURE_ICON_DATA = {
  summary: Wy,
  voice: U$,
  podcast: U6,
  kb: Iu,
  antispam: oir,
  anonymous: ME
};
const BLUE = "linear-gradient(135deg, oklch(0.65 0.15 230), oklch(0.45 0.18 240))";
const PINK = "linear-gradient(135deg, oklch(0.68 0.18 350), oklch(0.48 0.22 335))";
const ICON_GRADIENTS = {
  summary: BLUE,
  voice: PINK,
  podcast: BLUE,
  kb: BLUE,
  antispam: BLUE,
  anonymous: PINK
};
function FeatureIcon({
  feature,
  size = 20,
  className,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HugeiconsIcon,
    {
      icon: FEATURE_ICON_DATA[feature],
      size,
      strokeWidth: 2,
      color: color ?? "currentColor",
      className
    }
  );
}
function FeatureIconBadge({
  feature,
  size = 40,
  iconSize = 20
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-xl flex items-center justify-center shrink-0",
      style: {
        width: size,
        height: size,
        background: ICON_GRADIENTS[feature]
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { feature, size: iconSize, color: "white" })
    }
  );
}
export {
  FeatureIcon as F,
  ICON_GRADIENTS as I,
  FeatureIconBadge as a
};
