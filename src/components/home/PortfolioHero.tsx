import type { ReactNode } from "react";
import { RobotStage } from "@/components/robot/RobotStage";
import { ButtonLink } from "@/components/ui/Button";

interface Cta {
  href: string;
  label: string;
}

interface PortfolioHeroProps {
  eyebrow: string;
  headline: string[];
  /** A phrase inside one headline line, set on the lime highlight box. */
  highlight: string;
  lead: string;
  points: string[];
  robotLabel: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

/** Wraps the first occurrence of `phrase` in `line` with the lime highlight box. */
function withHighlight(line: string, phrase: string): ReactNode {
  const at = phrase ? line.indexOf(phrase) : -1;
  if (at < 0) return line;
  return (
    <>
      {line.slice(0, at)}
      <span className="highlight">{phrase}</span>
      {line.slice(at + phrase.length)}
    </>
  );
}

/**
 * Portfolio hero: name, first-person headline and calls to action over a full-bleed 3D stage —
 * the robot stands right of the text on desktop and below it on phones.
 */
export function PortfolioHero({
  eyebrow,
  headline,
  highlight,
  lead,
  points,
  robotLabel,
  primaryCta,
  secondaryCta,
}: PortfolioHeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-var(--header-height))] overflow-hidden border-b border-rule/60"
    >
      <RobotStage
        label={robotLabel}
        className="!absolute inset-x-0 bottom-0 -z-10 h-[min(54svh,500px)] lg:inset-y-0 lg:h-auto"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_20%_40%,var(--color-paper)_20%,transparent_75%)] max-lg:hidden"
      />

      <div className="container-page relative flex flex-col justify-start pb-[min(58svh,540px)] pt-14 md:pt-20 lg:justify-center lg:py-24">
        <p className="eyebrow reveal inline-flex items-center gap-2.5 text-lime-ink">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-lime shadow-[0_0_12px_2px_oklch(85%_0.22_128/0.8)]"
          />
          {eyebrow}
        </p>
        <h1
          id="hero-heading"
          data-speakable
          className="rise mt-8 text-[clamp(1.55rem,0.35rem+5.2vw,4.4rem)] font-bold uppercase leading-[1.14] tracking-[-0.035em] md:mt-10 [hyphens:manual] [overflow-wrap:normal] lg:max-w-[66%]"
        >
          {headline.map((line, index) => (
            <span key={line} className="block">
              {withHighlight(line, highlight)}
              {index < headline.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        <p
          data-speakable
          className="reveal mt-9 max-w-[46ch] md:mt-12 text-lead text-ink-2 [--reveal-delay:120ms]"
        >
          {lead}
        </p>
        <div className="reveal mt-9 flex flex-col gap-3 [--reveal-delay:200ms] sm:flex-row sm:items-center">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="secondary" withArrow={false}>
            {secondaryCta.label}
          </ButtonLink>
        </div>
        <ul className="reveal mt-10 flex max-w-2xl flex-wrap gap-x-6 gap-y-2 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-ink-3 [--reveal-delay:280ms]">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-lime-ink">
                ▸
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
