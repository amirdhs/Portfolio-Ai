"use client";

import { useSyncExternalStore } from "react";

/** Live result of a CSS media query; `serverValue` is used while prerendering and hydrating. */
export function useMediaQuery(query: string, serverValue = false): boolean {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window.matchMedia !== "function") return () => {};
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () =>
      typeof window.matchMedia === "function" ? window.matchMedia(query).matches : serverValue,
    () => serverValue,
  );
}

/** True when the visitor asked the OS for reduced motion. False on the server. */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True on devices whose primary pointer can hover (mouse, trackpad). */
export function useCanHover(): boolean {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}
