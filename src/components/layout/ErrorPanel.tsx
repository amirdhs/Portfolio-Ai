"use client";

import { useEffect } from "react";

interface ErrorPanelProps {
  title: string;
  text: string;
  retryLabel: string;
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorPanel({ title, text, retryLabel, error, reset }: ErrorPanelProps) {
  useEffect(() => {
    console.error(error.digest ?? error.name);
  }, [error]);

  return (
    <section className="container-page py-[var(--space-section)]" role="alert">
      <h1 className="max-w-[16ch] text-display">{title}</h1>
      <p className="mt-6 max-w-[52ch] text-lead text-ink-2">{text}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-bronze-strong"
      >
        {retryLabel}
      </button>
    </section>
  );
}
