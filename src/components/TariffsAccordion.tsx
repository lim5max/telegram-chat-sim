import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { tariffs } from "@/data/chats";

export function TariffsAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-[20px] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-4 py-3.5 flex items-center justify-between text-sm font-medium"
      >
        Сравнить тарифы
        <ChevronDown
          size={18}
          className={`transition-transform text-muted-foreground ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-white/8 pt-3">
          {tariffs.map((t) => (
            <div key={t.name} className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-[12px] text-muted-foreground">{t.desc}</div>
              </div>
              <div className="text-[13px] text-gradient font-semibold whitespace-nowrap">
                {t.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
