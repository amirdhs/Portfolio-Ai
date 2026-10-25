import type { ReactNode } from "react";

interface ValueProps {
  value: string | null | undefined;
  /** Label shown in the visible "missing" marker. */
  label: string;
  missing: (label: string) => string;
  children?: (value: string) => ReactNode;
}

/** Renders a configured business detail, or a clearly marked placeholder when it is missing. */
export function Value({ value, label, missing, children }: ValueProps) {
  if (value) return <>{children ? children(value) : value}</>;
  return (
    <mark className="rounded bg-danger-soft px-1.5 py-0.5 font-mono text-[0.85em] text-danger">
      {missing(label)}
    </mark>
  );
}
