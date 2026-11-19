"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import type { RobotScene } from "./robot-scene";
import { RobotStill } from "./RobotStill";

type Mode = "loading" | "live" | "still";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** How long the drawing may stay up if the canvas fade never reports its end (hidden tab). */
const FADE_FALLBACK_MS = 1200;

/**
 * Wires a started scene to the page: visibility, pointer, scroll, size and context loss.
 * Returns the cleanup; `onLost` fires once if the browser drops the WebGL context.
 */
function connectScene(
  scene: RobotScene,
  canvas: HTMLCanvasElement,
  onLost: () => void,
): () => void {
  const stage = canvas.parentElement ?? canvas;
  let inView = true;
  const sync = () => scene.setActive(inView && !document.hidden);

  const io =
    typeof IntersectionObserver === "undefined"
      ? null
      : new IntersectionObserver(([entry]) => {
          inView = Boolean(entry?.isIntersecting);
          sync();
        });
  io?.observe(canvas);
  const ro =
    typeof ResizeObserver === "undefined" ? null : new ResizeObserver(() => scene.resize());
  ro?.observe(canvas);

  const onPointer = (event: PointerEvent) => {
    const rect = stage.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    scene.setPointer(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ((event.clientY - rect.top) / rect.height) * 2 - 1,
    );
  };
  const onScroll = () => {
    const rect = stage.getBoundingClientRect();
    scene.setScroll(rect.height > 0 ? clamp(-rect.top / rect.height, 0, 1) : 0);
  };

  canvas.addEventListener("webglcontextlost", onLost);
  window.addEventListener("pointermove", onPointer, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("visibilitychange", sync);
  onScroll();
  sync();

  return () => {
    canvas.removeEventListener("webglcontextlost", onLost);
    io?.disconnect();
    ro?.disconnect();
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("visibilitychange", sync);
    scene.dispose();
  };
}

/**
 * The live 3D robot. Falls back to the flat drawing for reduced motion, without WebGL 2, or if the
 * scene fails to start; three.js is only downloaded when the live scene is actually used.
 */
export function RobotCanvas({
  stillClassName = "absolute inset-0 size-full",
}: {
  stillClassName?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<Mode>("loading");
  // The drawing cross-fades out under the canvas and unmounts once the fade has finished.
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (reduced || !canvas || !canvas.getContext("webgl2")) {
      setMode("still");
      return;
    }
    let cancelled = false;
    let disconnect: (() => void) | null = null;
    const teardown = () => {
      disconnect?.();
      disconnect = null;
    };
    // A lost context never renders again (three.js stops drawing): show the drawing instead.
    const onLost = () => {
      teardown();
      setMode("still");
    };

    import("./robot-scene")
      .then(({ createRobotScene }) => {
        if (cancelled) return;
        disconnect = connectScene(createRobotScene(canvas), canvas, onLost);
        setMode("live");
      })
      .catch((error: unknown) => {
        console.warn("Robot scene unavailable, showing the still image instead.", error);
        if (!cancelled) setMode("still");
      });

    return () => {
      cancelled = true;
      teardown();
    };
  }, [reduced]);

  useEffect(() => {
    if (mode !== "live") return;
    const timer = window.setTimeout(() => setFaded(true), FADE_FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, [mode]);

  const showStill = mode !== "live" || !faded;

  return (
    <div className="relative isolate size-full overflow-hidden">
      {showStill ? (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${mode === "live" ? "opacity-0" : "opacity-100"}`}
        >
          <div aria-hidden="true" className="grid-floor" />
          <RobotStill className={stillClassName} />
        </div>
      ) : null}
      {mode !== "still" ? (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          onTransitionEnd={() => setFaded(mode === "live")}
          className={`pointer-events-none absolute inset-0 size-full transition-opacity duration-700 ${mode === "live" ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </div>
  );
}
