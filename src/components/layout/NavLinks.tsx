"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  href: string;
  label: string;
}

interface NavLinksProps {
  items: NavItem[];
  /** Paths that only match exactly (locale home pages). */
  exactPaths: string[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

export function isActivePath(pathname: string, target: string, exact: boolean): boolean {
  if (exact) return pathname === target;
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function NavLinks({
  items,
  exactPaths,
  className = "",
  linkClassName = "",
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname() ?? "/";
  return (
    <ul className={className}>
      {items.map((item) => {
        const active = isActivePath(pathname, item.href, exactPaths.includes(item.href));
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={linkClassName}
              data-active={active || undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
