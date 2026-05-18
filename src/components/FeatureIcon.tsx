import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckListIcon,
  Mic01Icon,
  PodcastIcon,
  HeadphonesIcon,
  BookSearchIcon,
  Shield01Icon,
  IncognitoIcon,
  AiChat01Icon,
} from "@hugeicons/core-free-icons";
import type { FeatureKey } from "@/data/chats";

const FEATURE_ICON_DATA: Record<FeatureKey, typeof CheckListIcon> = {
  summary: CheckListIcon,
  voice: Mic01Icon,
  podcast: PodcastIcon,
  superPodcast: HeadphonesIcon,
  kb: BookSearchIcon,
  antispam: Shield01Icon,
  anonymous: IncognitoIcon,
  askBot: AiChat01Icon,
};

/* macOS-style icon gradients — shared across all pages */
/* Blue = productive, Pink = entertainment */
const BLUE = "linear-gradient(135deg, oklch(0.65 0.15 230), oklch(0.45 0.18 240))";
const PINK = "linear-gradient(135deg, oklch(0.68 0.18 350), oklch(0.48 0.22 335))";

export const ICON_GRADIENTS: Record<FeatureKey, string> = {
  summary: BLUE,
  voice: PINK,
  podcast: BLUE,
  superPodcast: PINK,
  kb: BLUE,
  antispam: BLUE,
  anonymous: PINK,
  askBot: BLUE,
};

export function FeatureIcon({
  feature,
  size = 20,
  className,
  color,
}: {
  feature: FeatureKey;
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <HugeiconsIcon
      icon={FEATURE_ICON_DATA[feature]}
      size={size}
      strokeWidth={2}
      color={color ?? "currentColor"}
      className={className}
    />
  );
}

/** Icon with gradient background — use in cards, lists, etc. */
export function FeatureIconBadge({
  feature,
  size = 40,
  iconSize = 20,
}: {
  feature: FeatureKey;
  size?: number;
  iconSize?: number;
}) {
  return (
    <div
      className="rounded-xl flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        background: ICON_GRADIENTS[feature],
      }}
    >
      <FeatureIcon feature={feature} size={iconSize} color="white" />
    </div>
  );
}
