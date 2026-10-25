"use client";

import { ErrorPanel } from "@/components/layout/ErrorPanel";
import { getDictionary } from "@/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = getDictionary("de").error;
  return (
    <ErrorPanel title={t.title} text={t.text} retryLabel={t.retry} error={error} reset={reset} />
  );
}
