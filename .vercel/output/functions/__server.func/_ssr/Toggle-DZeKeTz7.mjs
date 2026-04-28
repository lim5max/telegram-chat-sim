import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Toggle({
  defaultOn = false,
  onChange
}) {
  const [on, setOn] = reactExports.useState(defaultOn);
  reactExports.useEffect(() => {
    setOn(defaultOn);
  }, [defaultOn]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => {
        const v = !on;
        setOn(v);
        onChange?.(v);
      },
      className: `relative w-[51px] h-[31px] rounded-full transition-colors shrink-0 ${on ? "bg-[oklch(0.72_0.18_155)]" : "bg-white/15"}`,
      "aria-pressed": on,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `absolute top-0.5 left-0.5 w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform ${on ? "translate-x-5" : ""}`
        }
      )
    }
  );
}
export {
  Toggle as T
};
