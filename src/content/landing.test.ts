import { describe, expect, it } from "bun:test";
import { landingContent } from "./landing";

describe("Course purchase destination", () => {
  it("uses the requested Hotmart link", () => {
    expect(landingContent.checkout.href).toBe("https://go.hotmart.com/Q106134789L");
  });

  it("opens purchases in a new tab", () => {
    expect(landingContent.checkout.target).toBe("_blank");
  });
});