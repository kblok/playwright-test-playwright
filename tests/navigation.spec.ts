import { test, expect } from "@playwright/test";

test("navigate to mabl app", async ({ page }) => {
  await page.goto("https://app.mabl.com/");
});
