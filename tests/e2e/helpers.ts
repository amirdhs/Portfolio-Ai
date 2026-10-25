import type { APIRequestContext } from "@playwright/test";

/** All page paths, read from the sitemap so the list never drifts from the routes. */
export async function sitemapPaths(request: APIRequestContext): Promise<string[]> {
  const xml = await (await request.get("/sitemap.xml")).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return urls.map((url) => new URL(url).pathname);
}

export const LANG_OF = (path: string) => (path === "/en" || path.startsWith("/en/") ? "en" : "de");
