import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  MessageMultiple01Icon,
  GridIcon,
  SparklesIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

const tabs: { to: "/home" | "/chats" | "/marketplace" | "/me" | "/profile"; label: string; icon: typeof Home01Icon }[] = [
  { to: "/home", label: "Главная", icon: Home01Icon },
  { to: "/chats", label: "Чаты", icon: MessageMultiple01Icon },
  { to: "/marketplace", label: "Все навыки", icon: GridIcon },
  { to: "/me", label: "Твои навыки", icon: SparklesIcon },
  { to: "/profile", label: "Профиль", icon: UserIcon },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/85 border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-[520px] mx-auto grid grid-cols-5">
        {tabs.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            activeProps={{ className: "text-white" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex flex-col items-center gap-0.5 py-2.5 transition active:scale-95"
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
                    isActive ? "bg-white/15" : ""
                  }`}
                  style={isActive ? { background: "var(--gradient-primary)" } : undefined}
                >
                  <HugeiconsIcon icon={t.icon} size={18} strokeWidth={2} className={isActive ? "text-white" : ""} />
                </div>
                <span className="text-[10px] font-medium">{t.label}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
