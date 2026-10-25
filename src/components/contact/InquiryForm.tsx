"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { Dictionary } from "@/i18n/dictionaries/de";
import type { Locale } from "@/i18n/config";
import { plural } from "@/i18n/format";
import type { InquiryResponse } from "@/lib/inquiry/handler";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/inquiry/options";
import {
  inquirySchema,
  toErrorCode,
  type Inquiry,
  type InquiryField,
  type InquiryInput,
} from "@/lib/inquiry/schema";
import { Field, inputClass } from "./Field";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; referenceId: string }
  | { state: "error"; code: "NOT_CONFIGURED" | "RATE_LIMITED" | "TOO_FAST" | "GENERIC" };

interface InquiryFormProps {
  locale: Locale;
  t: Dictionary["form"];
  serviceLabels: Record<string, string>;
  privacyHref: string;
  contactEmail: string | null;
  responseTimeDays: number | null;
}

const ENDPOINT = "/api/inquiry";

type ErrorStatus = Extract<Status, { state: "error" }>["code"];
const ERROR_TEXT: Record<ErrorStatus, (s: Dictionary["form"]["status"]) => string> = {
  NOT_CONFIGURED: (s) => s.notConfiguredText,
  RATE_LIMITED: (s) => s.rateLimitedText,
  TOO_FAST: (s) => s.tooFastText,
  GENERIC: (s) => s.errorText,
};

export function InquiryForm({
  locale,
  t,
  serviceLabels,
  privacyHref,
  contactEmail,
  responseTimeDays,
}: InquiryFormProps) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  /** performance.now() when the form mounted: a monotonic clock, unaffected by device time. */
  const mountedAt = useRef(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors, isSubmitted },
  } = useForm<InquiryInput, unknown, Inquiry>({
    resolver: zodResolver(inquirySchema),
    mode: "onTouched",
    // Focus is handled in focusFirstInvalid() so it follows the visual (DOM) order.
    shouldFocusError: false,
    defaultValues: {
      requestType: "projekt",
      name: "",
      email: "",
      company: "",
      website: "",
      service: "" as InquiryInput["service"],
      description: "",
      challenge: "",
      budget: "",
      timeline: "",
      consent: false as unknown as true,
      locale,
    },
  });

  // Prefill from links such as /kontakt?leistung=seo&art=erstgespraech
  useEffect(() => {
    mountedAt.current = performance.now();
    const params = new URLSearchParams(window.location.search);
    const service = params.get("leistung");
    if (service && (SERVICE_OPTIONS as readonly string[]).includes(service)) {
      setValue("service", service as InquiryInput["service"]);
    }
    if (params.get("art") === "erstgespraech") setValue("requestType", "erstgespraech");
  }, [setValue]);

  useEffect(() => {
    if (status.state === "success" || status.state === "error") statusRef.current?.focus();
  }, [status]);

  const message = (field: InquiryField) => {
    const code = errors[field]?.message;
    return code ? t.errors[toErrorCode(code)] : undefined;
  };

  function focusFirstInvalid() {
    requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    });
  }

  async function onSubmit(values: Inquiry) {
    setStatus({ state: "submitting" });
    const honeypot =
      (document.getElementById("inquiry-leave-empty") as HTMLInputElement | null)?.value ?? "";
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          leave_empty: honeypot,
          elapsedMs: Math.round(performance.now() - mountedAt.current),
        }),
      });
      const body = (await response.json().catch(() => null)) as InquiryResponse | null;
      if (body?.success) {
        setStatus({ state: "success", referenceId: body.data.referenceId });
        reset();
        return;
      }
      const code = body?.error.code;
      if (code === "VALIDATION" && body && !body.success && body.error.fields) {
        for (const [field, fieldCode] of Object.entries(body.error.fields)) {
          setError(field as InquiryField, { message: fieldCode });
        }
        setStatus({ state: "idle" });
        focusFirstInvalid();
        return;
      }
      setStatus({
        state: "error",
        code:
          code === "NOT_CONFIGURED" || code === "RATE_LIMITED" || code === "TOO_FAST"
            ? code
            : "GENERIC",
      });
    } catch {
      setStatus({ state: "error", code: "GENERIC" });
    }
  }

  if (status.state === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-[1.25rem] border border-success/30 bg-success-soft p-6 focus:outline-none md:p-10"
      >
        <p className="eyebrow text-success">✓</p>
        <h3 className="mt-3 text-title">{t.status.successTitle}</h3>
        <p className="mt-4 max-w-[52ch] leading-relaxed text-ink-2">{t.status.successText}</p>
        {responseTimeDays ? (
          <p className="mt-2 leading-relaxed text-ink-2">
            {plural(responseTimeDays, t.status.successResponseTime)}
          </p>
        ) : null}
        <p className="mt-6 font-mono text-sm text-ink-2">
          {t.status.reference}: <span className="text-ink">{status.referenceId}</span>
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-8 text-sm font-medium text-bronze-strong underline underline-offset-4 hover:text-ink"
        >
          {t.status.newRequest}
        </button>
      </div>
    );
  }

  const submitting = status.state === "submitting";
  const hasErrors = isSubmitted && Object.keys(errors).length > 0;
  const fieldProps = { requiredLabel: t.required, optionalLabel: t.fields.optional };

  return (
    <form
      ref={formRef}
      onSubmit={(event) => handleSubmit(onSubmit, focusFirstInvalid)(event)}
      noValidate
      aria-busy={submitting}
      className="grid gap-6"
    >
      <div role="alert" aria-live="assertive" className={hasErrors ? "" : "sr-only"}>
        {hasErrors ? (
          <p className="rounded-xl border border-danger/30 bg-danger-soft px-4 py-3 text-sm text-danger">
            {t.errorSummary}
          </p>
        ) : null}
      </div>

      {status.state === "error" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="rounded-[1.25rem] border border-danger/30 bg-danger-soft p-6 focus:outline-none"
        >
          <h3 className="text-lg font-semibold text-ink">
            {status.code === "NOT_CONFIGURED" ? t.status.notConfiguredTitle : t.status.errorTitle}
          </h3>
          <p className="mt-2 leading-relaxed text-ink-2">{ERROR_TEXT[status.code](t.status)}</p>
          {contactEmail ? (
            <p className="mt-2 text-ink-2">
              {t.status.mailFallback}{" "}
              <a href={`mailto:${contactEmail}`} className="link-underline text-ink">
                {contactEmail}
              </a>
            </p>
          ) : null}
        </div>
      ) : null}

      <fieldset>
        <legend className="text-sm font-medium text-ink">{t.requestType.legend}</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {(["projekt", "erstgespraech"] as const).map((value) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-rule-strong/70 px-4 py-3 transition-colors hover:border-ink has-[:checked]:border-ink has-[:checked]:bg-paper-2 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-bronze/40"
            >
              <input
                type="radio"
                value={value}
                {...register("requestType")}
                className="size-4 accent-[var(--color-ink)]"
              />
              <span>
                {value === "projekt" ? t.requestType.project : t.requestType.consultation}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="inquiry-name"
          label={t.fields.name}
          required
          error={message("name")}
          {...fieldProps}
        >
          {(describedBy) => (
            <input
              id="inquiry-name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy}
              className={inputClass}
              {...register("name")}
            />
          )}
        </Field>
        <Field
          id="inquiry-email"
          label={t.fields.email}
          required
          error={message("email")}
          {...fieldProps}
        >
          {(describedBy) => (
            <input
              id="inquiry-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy}
              className={inputClass}
              {...register("email")}
            />
          )}
        </Field>
        <Field
          id="inquiry-company"
          label={t.fields.company}
          required
          error={message("company")}
          {...fieldProps}
        >
          {(describedBy) => (
            <input
              id="inquiry-company"
              autoComplete="organization"
              aria-invalid={Boolean(errors.company)}
              aria-describedby={describedBy}
              className={inputClass}
              {...register("company")}
            />
          )}
        </Field>
        <Field
          id="inquiry-website"
          label={t.fields.website}
          hint={t.fields.websiteHint}
          error={message("website")}
          {...fieldProps}
        >
          {(describedBy) => (
            <input
              id="inquiry-website"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="example.com"
              aria-invalid={Boolean(errors.website)}
              aria-describedby={describedBy}
              className={inputClass}
              {...register("website")}
            />
          )}
        </Field>
      </div>

      <Field
        id="inquiry-service"
        label={t.fields.service}
        required
        error={message("service")}
        {...fieldProps}
      >
        {(describedBy) => (
          <select
            id="inquiry-service"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy}
            className={inputClass}
            {...register("service")}
          >
            <option value="" disabled>
              {t.fields.servicePlaceholder}
            </option>
            {SERVICE_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {value === "unklar" ? t.fields.serviceUnsure : serviceLabels[value]}
              </option>
            ))}
          </select>
        )}
      </Field>

      <Field
        id="inquiry-description"
        label={t.fields.description}
        hint={t.fields.descriptionHint}
        required
        error={message("description")}
        {...fieldProps}
      >
        {(describedBy) => (
          <textarea
            id="inquiry-description"
            rows={5}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={describedBy}
            className={`${inputClass} resize-y`}
            {...register("description")}
          />
        )}
      </Field>

      <Field
        id="inquiry-challenge"
        label={t.fields.challenge}
        hint={t.fields.challengeHint}
        required
        error={message("challenge")}
        {...fieldProps}
      >
        {(describedBy) => (
          <textarea
            id="inquiry-challenge"
            rows={3}
            aria-invalid={Boolean(errors.challenge)}
            aria-describedby={describedBy}
            className={`${inputClass} resize-y`}
            {...register("challenge")}
          />
        )}
      </Field>

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="inquiry-budget"
          label={t.fields.budget}
          error={message("budget")}
          {...fieldProps}
        >
          {(describedBy) => (
            <select
              id="inquiry-budget"
              aria-describedby={describedBy}
              className={inputClass}
              {...register("budget")}
            >
              <option value="">{t.fields.selectPlaceholder}</option>
              {BUDGET_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {t.options.budget[value]}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field
          id="inquiry-timeline"
          label={t.fields.timeline}
          error={message("timeline")}
          {...fieldProps}
        >
          {(describedBy) => (
            <select
              id="inquiry-timeline"
              aria-describedby={describedBy}
              className={inputClass}
              {...register("timeline")}
            >
              <option value="">{t.fields.selectPlaceholder}</option>
              {TIMELINE_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {t.options.timeline[value]}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive technology, tempting for bots. */}
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="inquiry-leave-empty">{t.fields.honeypot}</label>
        <input
          id="inquiry-leave-empty"
          name="leave_empty"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          data-1p-ignore
          data-lpignore="true"
        />
      </div>

      <div>
        <label className="flex gap-3 text-sm leading-relaxed text-ink-2">
          <input
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "inquiry-consent-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-[var(--color-ink)]"
            {...register("consent")}
          />
          <span>
            {t.fields.consentBefore}{" "}
            <Link href={privacyHref} className="link-underline text-ink">
              {t.fields.consentLink}
            </Link>
            {t.fields.consentAfter}
            <span className="text-bronze" aria-hidden="true">
              {" "}
              *
            </span>
          </span>
        </label>
        {errors.consent ? (
          <p id="inquiry-consent-error" className="mt-2 text-sm text-danger">
            {message("consent")}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[46ch] text-sm leading-relaxed text-ink-3">{t.privacyNote}</p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-colors hover:bg-bronze-strong disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? (
            <span
              aria-hidden="true"
              className="size-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper motion-reduce:animate-none"
            />
          ) : null}
          {submitting ? t.submitting : t.submit}
        </button>
      </div>
    </form>
  );
}
