"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface GlitchRevealProps {
  className?: string;
  children: ReactNode;
}

const THRESHOLD = 0.2;

/**
 * Plays a one-shot slice/RGB-split glitch the first time the content scrolls into view.
 * The content is visible by default: the hidden start state only applies once JS has
 * marked the document (`html.js`) and the visitor has not asked for reduced motion.
 */
export function GlitchReveal({ className = "", children }: GlitchRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold: THRESHOLD },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`glitch-reveal ${className}`}>
      {children}
    </div>
  );
}
