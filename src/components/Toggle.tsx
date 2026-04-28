import { useEffect, useState } from "react";

export function Toggle({
  defaultOn = false,
  onChange,
}: {
  defaultOn?: boolean;
  onChange?: (v: boolean) => void;
}) {
  const [on, setOn] = useState(defaultOn);

  // Sync internal state when parent-controlled value changes
  useEffect(() => {
    setOn(defaultOn);
  }, [defaultOn]);

  return (
    <button
      onClick={() => {
        const v = !on;
        setOn(v);
        onChange?.(v);
      }}
      className={`relative w-[51px] h-[31px] rounded-full transition-colors shrink-0 ${
        on ? "bg-[oklch(0.72_0.18_155)]" : "bg-white/15"
      }`}
      aria-pressed={on}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform ${
          on ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}
