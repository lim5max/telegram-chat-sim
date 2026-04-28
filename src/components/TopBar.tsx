import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, MoreHorizontalIcon, ArrowLeft01Icon as ChevronLeftIcon } from "@hugeicons/core-free-icons";
import { Link } from "@tanstack/react-router";

export function TopBar({
  title,
  subtitle,
  back,
}: {
  title?: string;
  subtitle?: string;
  back?: { to: string; params?: Record<string, string> };
}) {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-xl bg-background/85 border-b border-white/8">
      <div className="max-w-[520px] mx-auto px-4">
        {/* Return to chat */}
        <div className="h-11 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition active:scale-95"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} strokeWidth={2} />
            <span>Вернуться в чат</span>
          </Link>
          <button className="w-9 h-9 -mr-2 flex items-center justify-center rounded-full text-muted-foreground active:bg-white/10">
            <HugeiconsIcon icon={MoreHorizontalIcon} size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Title row (optional) */}
        {title && (
          <div className="pb-2 flex items-center gap-3">
            {back && (
              <Link
                to={back.to as never}
                params={back.params as never}
                className="w-8 h-8 -ml-1 flex items-center justify-center rounded-full text-foreground active:bg-white/10"
              >
                <HugeiconsIcon icon={ChevronLeftIcon} size={20} strokeWidth={2} />
              </Link>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold truncate">{title}</div>
              {subtitle && (
                <div className="text-[11px] text-muted-foreground truncate">{subtitle}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
