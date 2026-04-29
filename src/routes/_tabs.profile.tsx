import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CreditCardIcon,
  Notification01Icon,
  Message01Icon,
  File02Icon,
  HelpCircleIcon,
  Logout01Icon,
} from "@hugeicons/core-free-icons";

import { useChatsStore } from "@/store/chats";

export const Route = createFileRoute("/_tabs/profile")({
  head: () => ({
    meta: [
      { title: "Профиль — ChatLogix" },
      { name: "description", content: "Профиль, подписка и настройки ChatLogix." },
    ],
  }),
  component: ProfileScreen,
});

function ProfileScreen() {
  const chats = useChatsStore((s) => s.chats);
  const adminCount = chats.filter((c) => c.isAdmin).length;

  return (
    <div className="px-4 pt-5 space-y-4 max-w-[520px] mx-auto">
      <h1 className="text-2xl font-bold">Профиль</h1>

      <div className="glass-card rounded-[20px] p-4 flex items-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 35), oklch(0.62 0.20 15))" }}
        >
          O
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg">Олег</div>
          <div className="text-[12px] text-muted-foreground">@oleg · id 1234567</div>
          <div className="flex gap-1.5 mt-1.5">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground">
              {chats.length} общих с ботом
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-muted-foreground">
              админ в {adminCount} чатах
            </span>
          </div>
        </div>
      </div>

      {/* Subscriptions */}
      <Link
        to="/subscriptions"
        className="w-full text-left glass-card rounded-[20px] p-4 flex items-center gap-3 active:scale-[0.99] transition"
      >
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center"
          style={{ background: "var(--gradient-primary)" }}
        >
          <HugeiconsIcon icon={CreditCardIcon} size={20} strokeWidth={2} />
        </div>
        <div className="flex-1">
          <div className="font-semibold">Мои подписки</div>
          <div className="text-[12px] text-muted-foreground mt-0.5">
            Подписки по чатам и личные, даты продления
          </div>
        </div>
        <ChevronRight size={18} className="text-muted-foreground" />
      </Link>

      <div className="glass-card rounded-[20px] divide-y divide-white/8">
        <Row icon={<HugeiconsIcon icon={Message01Icon} size={16} strokeWidth={2} />} label="Поддержка" onClick={() => toast("Напишите нам: @ChatLogixSupport")} />
        <Row icon={<HugeiconsIcon icon={File02Icon} size={16} strokeWidth={2} />} label="Условия использования" onClick={() => toast("Документ откроется в браузере.")} />
      </div>

    </div>
  );
}

function Row({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-3.5 flex items-center gap-3 hover:bg-white/5 active:bg-white/8 transition"
    >
      <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">{icon}</div>
      <div className="flex-1 text-left text-sm">{label}</div>
      <ChevronRight size={16} className="text-muted-foreground" />
    </button>
  );
}
