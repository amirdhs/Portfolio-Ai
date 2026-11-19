import type { ReactNode } from "react";

/** Terminal-style label above section headings; transparent, so it works on dark and lime surfaces. */
export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 rounded-full border border-rule-strong px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-2 ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-[1px] bg-bronze" />
      {children}
    </p>
  );
}
