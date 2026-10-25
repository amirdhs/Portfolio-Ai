"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { HeroChat } from "./HeroChat";
import poster from "../../../public/hero/hero-poster.webp";

const VIDEO_DESKTOP = "/hero/hero-desktop.mp4";
const VIDEO_MOBILE = "/hero/hero-mobile.mp4";
const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export interface VideoHeroProps {
  badge: string;
  /** Headline phrases; the one at `emphasisIndex` is set in the accent colour. */
  headline: string[];
  emphasisIndex: number;
  lead: string;
  points: string[];
  posterAlt: string;
  chat: ComponentProps<typeof HeroChat>["chat"];
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
}

/** True unless the visitor asked for reduced motion. The server render assumes true. */
function useMotionAllowed(): boolean {
  return useSyncExternalStore(
    (notify) => {
      const query = window.matchMedia(REDUCED_MOTION_QUERY);
      query.addEventListener("change", notify);
      return () => query.removeEventListener("change", notify);
    },
    () => !window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => true,
  );
}

/** Runs `task` once the page has loaded and the browser is idle, so the video never competes with first paint. */
function whenIdle(task: () => void): () => void {
  let cancelled = false;
  let idleHandle: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const run = () => {
    if (cancelled) return;
    if ("requestIdleCallback" in window)
      idleHandle = window.requestIdleCallback(task, { timeout: 2000 });
    else timer = setTimeout(task, 300);
  };
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run, { once: true });
  return () => {
    cancelled = true;
    window.removeEventListener("load", run);
    if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
    clearTimeout(timer);
  };
}

const POINT_ICONS: ReactNode[] = [
  // Inquiries
  <path
    key="a"
    d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
  />,
  // Less manual work
  <path key="b" d="M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8l2 2M6 18l2-2m8-8l2-2" />,
  // Connected systems
  <path
    key="c"
    d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"
  />,
];

/**
 * Hero: a looping full-bleed video behind centered text. The video starts after the page has
 * loaded, pauses when scrolled out of view, and is replaced by the still poster for visitors with
 * reduced motion or data saver.
 */
export function VideoHero({
  badge,
  headline,
  emphasisIndex,
  lead,
  points,
  posterAlt,
  chat,
  primaryCta,
  secondaryCta,
}: VideoHeroProps) {
  const motionAllowed = useMotionAllowed();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (!motionAllowed || !video || connection?.saveData) return;

    const play = () => {
      if (video.getAttribute("src")) video.play().catch(() => {});
    };
    const cancelLoad = whenIdle(() => {
      video.src = window.matchMedia(MOBILE_QUERY).matches ? VIDEO_MOBILE : VIDEO_DESKTOP;
      video.load();
      play();
    });
    const onPlaying = () => setPlaying(true);
    video.addEventListener("playing", onPlaying);

    // Save battery and CPU: only play while the hero is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) play();
      else video.pause();
    });
    observer.observe(video);

    return () => {
      cancelLoad();
      observer.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [motionAllowed]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-rule"
    >
      {/* Video: decorative, full-bleed. Scrims keep the text readable and blend the hero into the page. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image src={poster} alt={posterAlt} fill priority sizes="100vw" className="object-cover" />
        <video
          ref={videoRef}
          aria-hidden="true"
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 motion-reduce:hidden ${playing ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 [background:linear-gradient(90deg,oklch(10%_0.006_70/0.92),oklch(10%_0.006_70/0.72)_45%,oklch(10%_0.006_70/0.4))]" />
        <div className="absolute -left-40 top-10 size-[34rem] rounded-full bg-[oklch(66%_0.1_58/0.28)] blur-[120px] motion-safe:animate-[drift_16s_ease-in-out_infinite_alternate]" />
        <div className="absolute -right-32 bottom-0 size-[28rem] rounded-full bg-[oklch(56%_0.11_48/0.22)] blur-[120px] motion-safe:animate-[drift_20s_ease-in-out_-6s_infinite_alternate-reverse]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-paper" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper/80 to-transparent" />
      </div>

      <div className="container-page relative z-10 grid min-h-[max(40rem,calc(100dvh-var(--header-height)))] items-center gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-6">
          <Pill className="rise">{badge}</Pill>

          <h1
            id="hero-heading"
            data-speakable
            className="mt-6 font-semibold tracking-[-0.035em] [font-size:clamp(2.1rem,0.9rem+3vw,3.6rem)] [line-height:1.06]"
          >
            {headline.map((line, index) => (
              <span
                key={line}
                className={`rise block ${index === emphasisIndex ? "text-shimmer" : ""}`}
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            data-speakable
            className="rise mt-6 max-w-[48ch] text-base leading-relaxed text-ink-2 [--reveal-delay:300ms] sm:text-lg"
          >
            {lead}
          </p>

          <div className="rise mt-8 flex flex-col items-stretch gap-3 [--reveal-delay:380ms] sm:flex-row sm:items-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary" withArrow={false}>
              {secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="rise mt-10 grid gap-3 text-sm text-ink-2 [--reveal-delay:460ms]">
            {points.map((point, index) => (
              <li key={point} className="flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-rule-strong bg-paper-2/80">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-4 text-bronze"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {POINT_ICONS[index]}
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise [--reveal-delay:240ms] lg:col-span-6">
          <HeroChat chat={chat} />
        </div>
      </div>
    </section>
  );
}
