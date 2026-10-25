import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

/** Search and answer-engine crawlers that are explicitly welcome (everything else follows the "*" rule). */
const ANSWER_ENGINE_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Claude-SearchBot",
  "Claude-User",
];

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ANSWER_ENGINE_BOTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
