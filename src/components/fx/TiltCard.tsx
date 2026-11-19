"use client";

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { useCanHover, useReducedMotion } from "@/hooks/useMediaQuery";
import { tiltFromPointer } from "@/lib/fx/tilt";

interface TiltCardProps {
  as?: "div" | "article" | "li";
  className?: string;
  /** Maximum lean in degrees. */
  maxDeg?: number;
  /** Adds the lime scan-line overlay that brightens on hover. */
  scanlines?: boolean;
  children: ReactNode;
}

const FLAT_VARS = { "--rx": "0deg", "--ry": "0deg", "--px": "0.5", "--py": "0.5" };

function applyVars(el: HTMLElement, vars: Record<string, string>) {
  for (const [key, value] of Object.entries(vars)) el.style.setProperty(key, value);
}

/**
 * Leans towards the pointer in 3D (the reference's "depth" cards). Inert on touch screens and
 * for visitors who prefer reduced motion: the card then renders flat.
 */
export function TiltCard({
  as: Tag = "div",
  className = "",
  maxDeg = 7,
  scanlines = true,
  children,
}: TiltCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const canHover = useCanHover();
  const active = canHover && !reduced;

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!active || !el) return;
    const tilt = tiltFromPointer(event.clientX, event.clientY, el.getBoundingClientRect(), maxDeg);
    applyVars(el, {
      "--rx": `${tilt.rx}deg`,
      "--ry": `${tilt.ry}deg`,
      "--px": String(tilt.px),
      "--py": String(tilt.py),
    });
  };

  const reset = () => {
    if (ref.current) applyVars(ref.current, FLAT_VARS);
  };

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      data-tilt={active ? "on" : "off"}
      className={`tilt-card group relative ${className}`}
      style={FLAT_VARS as CSSProperties}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
      {scanlines ? <span aria-hidden="true" className="scanlines" /> : null}
    </Tag>
  );
}
