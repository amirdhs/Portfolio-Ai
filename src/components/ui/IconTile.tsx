import type { ReactNode } from "react";

/** Rounded gold-tinted tile that holds a line icon. */
export function IconTile({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-11 shrink-0 place-items-center rounded-xl border border-bronze/25 bg-accent/15 text-bronze ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

/** Line icons by index, reused for lists of cards so each card gets a distinct glyph. */
export const ICON_PATHS: ReactNode[] = [
  <path key="0" d="M3 5h18v12H3zM8 21h8M12 17v4" />,
  <path key="1" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5" />,
  <path key="2" d="M4 5h16v11H8l-4 4zM8 9h8M8 12h5" />,
  <path key="3" d="M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8l2 2M6 18l2-2m8-8l2-2" />,
  <path key="4" d="M4 6h5v5H4zM15 13h5v5h-5zM9 8.5h4a2 2 0 012 2V13" />,
  <path
    key="5"
    d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"
  />,
  <path key="6" d="M14.7 6.3a4 4 0 00-5 5L4 17l3 3 5.7-5.7a4 4 0 005-5l-2.4 2.4-2.3-.7-.7-2.3z" />,
  <path key="7" d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />,
];
