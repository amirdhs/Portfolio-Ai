import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  requiredLabel: string;
  optionalLabel: string;
  hint?: string;
  error?: string;
  className?: string;
  children: (describedBy: string | undefined) => ReactNode;
}

export const inputClass =
  "mt-2 block w-full rounded-xl border border-rule-strong/70 bg-paper-2 px-4 py-3 text-base text-ink transition-[border-color,box-shadow] placeholder:text-ink-3 hover:border-ink-3 focus:border-ink focus:outline-none focus:ring-2 focus:ring-bronze/30 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/20";

/** Label, hint and error wiring for one form control (aria-describedby / aria-invalid). */
export function Field({
  id,
  label,
  required,
  requiredLabel,
  optionalLabel,
  hint,
  error,
  className = "",
  children,
}: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 text-sm font-medium text-ink"
      >
        <span>
          {label}
          {required ? (
            <span className="text-bronze" aria-hidden="true">
              {" "}
              *
            </span>
          ) : null}
          {required ? <span className="sr-only"> ({requiredLabel})</span> : null}
        </span>
        {!required ? <span className="font-normal text-ink-3">{optionalLabel}</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-ink-3">
          {hint}
        </p>
      ) : null}
      {children(describedBy)}
      {error ? (
        <p id={errorId} className="mt-2 flex items-start gap-2 text-sm text-danger">
          <span aria-hidden="true">!</span>
          {error}
        </p>
      ) : null}
    </div>
  );
}
