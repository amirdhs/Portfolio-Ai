import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant =
  "primary" | "secondary" | "on-night" | "on-night-outline" | "on-lime" | "on-lime-outline";

const BASE =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-5 py-3 text-[0.92rem] font-medium tracking-[-0.005em] transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out active:scale-[0.98] focus-visible:outline-offset-4";

const SOLID =
  "btn-shine bg-lime text-on-accent shadow-[inset_0_1px_0_oklch(100%_0_0/0.4),0_10px_30px_-14px_oklch(85%_0.22_128/0.7)] hover:bg-accent-hover hover:shadow-[inset_0_1px_0_oklch(100%_0_0/0.4),0_0_40px_-6px_oklch(85%_0.22_128/0.75)]";
const OUTLINE =
  "border border-rule-strong bg-paper-2/60 text-ink backdrop-blur hover:border-lime/70 hover:bg-paper-3";

/** For lime slabs, where a lime button would disappear. */
const ON_LIME =
  "bg-on-accent text-lime shadow-[0_14px_30px_-16px_oklch(16%_0.02_140/0.9)] hover:bg-black";
const ON_LIME_OUTLINE =
  "border border-on-accent/40 text-on-accent hover:border-on-accent hover:bg-on-accent/5";

const VARIANTS: Record<Variant, string> = {
  primary: SOLID,
  secondary: OUTLINE,
  "on-night": SOLID,
  "on-night-outline": OUTLINE,
  "on-lime": ON_LIME,
  "on-lime-outline": ON_LIME_OUTLINE,
};

const SOLID_VARIANTS: Variant[] = ["primary", "on-night", "on-lime"];

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  withArrow = true,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {withArrow ? (
        SOLID_VARIANTS.includes(variant) ? (
          <span className="grid size-6 place-items-center rounded-full bg-black/15">
            <Arrow className="size-3.5" />
          </span>
        ) : (
          <Arrow />
        )
      ) : null}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const buttonClasses = (variant: Variant = "primary") => `${BASE} ${VARIANTS[variant]}`;
