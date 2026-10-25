import type { ReactNode } from "react";
import { RootDocument, rootMetadata, rootViewport } from "@/components/layout/RootDocument";

/** Every page must be fully prerendered; request-time rendering fails the build. */
export const ensureStatic = "navigation";
export const metadata = rootMetadata("de");
export const viewport = rootViewport;

export default function GermanRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="de">{children}</RootDocument>;
}
