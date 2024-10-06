import { test, expect } from "@playwright/test";

import { PAGES } from "./constants";
import { createNewSnapshot } from "../utils";
import injectElement from "./inject-element";

const snapshotName = (experimentCode: string) => `myer-${PAGES.homepage}-${experimentCode}.png`;
test.beforeEach(async ({ page }) => {
  await page.goto("https://myer.com.au");
});

test("testing", async ({ page }) => {
  // page.evaluate executes our function in a browser context
  await page.evaluate(injectElement, { name: "Ash" });

  // ensure that the screenshot is taken AFTER the element is injected
  // NOTE: This is still comparing a snapshot to the live site (which we don't want)
  await expect(page).toHaveScreenshot(snapshotName("AUG-123"));
  await page.getByText("Ash");
});
