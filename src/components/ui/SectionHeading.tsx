import type { ReactNode } from "react";
import { GlitchReveal } from "@/components/fx/GlitchReveal";
import { Pill } from "./Pill";

interface SectionHeadingProps {
  id: string;
  label: string;
  heading: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

const SPLIT = /^(.{12,}?)( – |: |\. )(.{12,})$/;

/** Splits "Main claim – punchline." so the punchline can be set in the accent colour on its own line. */
function splitHeading(heading: ReactNode): { lead: string; sep: string; accent: string } | null {
  if (typeof heading !== "string") return null;
  const match = SPLIT.exec(heading);
  return match ? { lead: match[1]!, sep: match[2]!, accent: match[3]! } : null;
}

/** Centered section header: pill label, heading (second clause in the accent colour when it has one) and optional lead. */
export function SectionHeading({
  id,
  label,
  heading,
  lead,
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  const parts = splitHeading(heading);
  return (
    <header
      className={`scroll-reveal mx-auto flex max-w-3xl flex-col items-center text-center ${className}`}
    >
      <Pill>{label}</Pill>
      <GlitchReveal>
        <Heading id={id} className="mt-6 text-display text-ink">
          {parts ? (
            <>
              {parts.lead}
              <span className="sr-only">{parts.sep.trim() === "." ? "." : parts.sep}</span>{" "}
              <span className="mt-2 block">
                <span className="highlight">{parts.accent}</span>
              </span>
            </>
          ) : (
            heading
          )}
        </Heading>
      </GlitchReveal>
      {lead ? <p className="mt-5 max-w-[60ch] text-lead text-ink-2">{lead}</p> : null}
    </header>
  );
}
