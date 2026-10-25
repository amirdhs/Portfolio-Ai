import type { ReactNode } from "react";

type Tone = "neutral" | "bronze" | "outline";

const TONES: Record<Tone, string> = {
  neutral: "bg-paper-3 text-ink-2",
  bronze: "bg-bronze text-paper",
  outline: "border border-rule-strong text-ink-2",
};

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}
