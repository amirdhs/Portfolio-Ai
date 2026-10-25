import { describe, expect, it, vi } from "vitest";
import { getSiteUrl } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { logServerEvent } from "@/lib/logger";

describe("i18n helpers", () => {
  it("validates locales and binds links to a locale", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(getI18n("en").link("contact", { hash: "anfrage" })).toBe("/en/contact#anfrage");
    expect(getI18n("de").link("contact")).toBe("/kontakt");
  });
});

describe("site url", () => {
  it("strips trailing slashes and falls back to localhost", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://amir.example//");
    expect(getSiteUrl()).toBe("https://amir.example");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined as unknown as string);
    expect(getSiteUrl()).toBe("http://localhost:3000");
    vi.unstubAllEnvs();
  });
});

describe("logServerEvent", () => {
  it("writes one structured JSON line", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    logServerEvent("test.event", { code: 1 });
    expect(JSON.parse(spy.mock.calls[0][0] as string)).toMatchObject({
      level: "error",
      event: "test.event",
      code: 1,
    });
    spy.mockRestore();
  });
});
