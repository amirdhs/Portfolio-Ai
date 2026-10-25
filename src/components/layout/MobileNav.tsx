"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { ButtonLink } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavLinks, type NavItem } from "./NavLinks";

interface MobileNavProps {
  locale: Locale;
  items: NavItem[];
  exactPaths: string[];
  ctaLabel: string;
  ctaHref: string;
  labels: { open: string; close: string; nav: string; language: string };
}

export function MobileNav({
  locale,
  items,
  exactPaths,
  ctaLabel,
  ctaHref,
  labels,
}: MobileNavProps) {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on: any navigation (links, Back) closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn !== null && openOn === pathname;
  const setOpen = useCallback((value: boolean) => setOpenOn(value ? pathname : null), [pathname]);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(
    (restoreFocus = true) => {
      setOpen(false);
      if (restoreFocus) buttonRef.current?.focus();
    },
    [setOpen],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    // The panel covers the page: make the content behind it unreachable for keyboard and screen readers.
    const background = [document.getElementById("main"), document.querySelector("body > footer")];
    background.forEach((el) => el?.setAttribute("inert", ""));
    // Close when the viewport grows to the desktop layout, where the toggle is hidden.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) close(false);
    };
    desktop.addEventListener("change", onDesktop);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      background.forEach((el) => el?.removeAttribute("inert"));
      desktop.removeEventListener("change", onDesktop);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close() : setOpen(true))}
        className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-ink/15 bg-paper/80 transition-colors hover:border-ink"
      >
        <span className="sr-only">{open ? labels.close : labels.open}</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>

      {open
        ? createPortal(
            // Portalled to <body>: the sticky header uses backdrop-filter, which
            // would otherwise become the containing block of this fixed panel.
            <div
              ref={panelRef}
              id={panelId}
              className="fixed inset-0 z-40 overflow-y-auto bg-paper px-[var(--gutter)] pb-10 pt-[calc(var(--header-height)+1.5rem)] lg:hidden"
            >
              <nav aria-label={labels.nav}>
                <NavLinks
                  items={items}
                  exactPaths={exactPaths}
                  onNavigate={() => close(false)}
                  className="divide-y divide-rule border-y border-rule"
                  linkClassName="flex items-center justify-between py-4 text-2xl font-medium tracking-[-0.02em] transition-colors hover:text-bronze-strong data-[active]:text-bronze-strong"
                />
              </nav>
              <ButtonLink href={ctaHref} className="mt-8 w-full" onClick={() => close(false)}>
                {ctaLabel}
              </ButtonLink>
              <div className="mt-8 flex justify-center">
                <LanguageSwitcher current={locale} label={labels.language} landmark={false} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
