import type { ReactNode } from "react";

interface SideHeadingProps {
  id: string;
  /** Decorative section number; kept out of the heading text and hidden from assistive technology. */
  index?: string;
  tone?: "paper" | "night";
  className?: string;
  children: ReactNode;
}

/** Heading in the left column of a two-column section: small number above, real heading text below. */
export function SideHeading({
  id,
  index,
  tone = "paper",
  className = "",
  children,
}: SideHeadingProps) {
  return (
    <div className={`md:col-span-3 md:pt-1 ${className}`}>
      {index ? (
        <p
          aria-hidden="true"
          className={`eyebrow tabular-nums ${tone === "night" ? "text-gold" : "text-bronze"}`}
        >
          {index}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-xl font-semibold leading-snug tracking-[-0.02em] md:text-2xl ${index ? "mt-2" : ""} ${tone === "night" ? "text-on-night" : "text-ink"}`}
      >
        {children}
      </h2>
    </div>
  );
}
