import type { ReactNode } from "react";

/** Small rounded label with a champagne spark, used above section headings. */
export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-rule-strong bg-paper-2/80 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink-2 backdrop-blur ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-3.5 text-bronze"
        fill="currentColor"
      >
        <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" />
      </svg>
      {children}
    </p>
  );
}
