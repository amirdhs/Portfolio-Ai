import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";

// Downloaded at build time and self-hosted: no requests to Google at runtime.
export const schibsted = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-schibsted",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});
