"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCanHover, useReducedMotion } from "@/hooks/useMediaQuery";
import { damp } from "@/lib/robot/motion";
import type { DepthRenderer } from "./depth-shader";

interface DepthPortraitProps {
  src: string;
  depthSrc: string;
  width: number;
  height: number;
  alt: string;
  sizes: string;
  className?: string;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Could not load ${src}`));
    image.src = src;
  });
}

/** Runs the shader loop while the portrait is on screen. Returns the cleanup. */
function animate(renderer: DepthRenderer, stage: HTMLElement): () => void {
  const target = { x: 0, y: 0, hover: 0 };
  const now = { x: 0, y: 0, hover: 0 };
  let frame = 0;
  let last = performance.now();
  let start = last;

  const tick = (time: number) => {
    const dt = Math.min((time - last) / 1000, 0.1);
    last = time;
    now.x = damp(now.x, target.x, 6, dt);
    now.y = damp(now.y, target.y, 6, dt);
    now.hover = damp(now.hover, target.hover, 5, dt);
    renderer.render(now.x, now.y, now.hover, (time - start) / 1000);
    frame = requestAnimationFrame(tick);
  };
  const play = () => {
    if (frame) return;
    last = performance.now();
    if (!start) start = last;
    frame = requestAnimationFrame(tick);
  };
  const pause = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };

  const onMove = (event: PointerEvent) => {
    const rect = stage.getBoundingClientRect();
    target.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    target.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    target.hover = 1;
  };
  const onLeave = () => {
    target.x = 0;
    target.y = 0;
    target.hover = 0;
  };
  stage.addEventListener("pointermove", onMove);
  stage.addEventListener("pointerleave", onLeave);
  const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? play() : pause()));
  io.observe(stage);
  const ro = new ResizeObserver(() => renderer.resize());
  ro.observe(stage);

  return () => {
    pause();
    io.disconnect();
    ro.disconnect();
    stage.removeEventListener("pointermove", onMove);
    stage.removeEventListener("pointerleave", onLeave);
    renderer.dispose();
  };
}

/**
 * Portrait with the reference's "depth map" effect: pixels shift by depth as the pointer moves and
 * lime scan-lines sweep across the subject. The plain image is always rendered underneath, so
 * crawlers, no-JS, touch screens and reduced-motion visitors simply see the photo.
 */
export function DepthPortrait({
  src,
  depthSrc,
  width,
  height,
  alt,
  sizes,
  className = "",
}: DepthPortraitProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const canHover = useCanHover();
  const [live, setLive] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (reduced || !canHover || !stage || !canvas) return;
    let cancelled = false;
    let stop: (() => void) | null = null;

    Promise.all([loadImage(src), loadImage(depthSrc), import("./depth-shader")])
      .then(([image, depth, { createDepthRenderer }]) => {
        if (cancelled) return;
        stop = animate(createDepthRenderer(canvas, image, depth), stage);
        setLive(true);
      })
      .catch((error: unknown) => {
        console.warn("Depth portrait unavailable, showing the plain photo.", error);
      });

    return () => {
      cancelled = true;
      stop?.();
      setLive(false);
    };
  }, [reduced, canHover, src, depthSrc]);

  return (
    <div
      ref={stageRef}
      className={`group relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="size-full object-cover"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 size-full transition-opacity duration-500 ${live ? "opacity-100" : "opacity-0"}`}
      />
      <span aria-hidden="true" className="scanlines" />
    </div>
  );
}
