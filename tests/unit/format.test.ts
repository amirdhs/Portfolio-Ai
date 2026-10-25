import { describe, expect, it } from "vitest";
import { plural } from "@/i18n/format";

describe("plural", () => {
  it("chooses the form and fills the number", () => {
    const forms = { one: "{n} Eintrag", other: "{n} Einträge" };
    expect(plural(1, forms)).toBe("1 Eintrag");
    expect(plural(0, forms)).toBe("0 Einträge");
    expect(plural(4, forms)).toBe("4 Einträge");
  });
});
