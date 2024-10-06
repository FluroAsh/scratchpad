import type { Page } from "@playwright/test";

import path from "path";
import fs from "fs";

const snapshotPath = path.join(__dirname, "snapshots");

export const createNewSnapshot = async (page: Page, { pageName, experimentCode }) => {
  const testScreenshotPath = path.join(snapshotPath, pageName, `myer-${pageName}-${experimentCode}.png`);

  const payload = {
    existingSnapshot: fs.existsSync(testScreenshotPath) ? fs.readFileSync(testScreenshotPath) : null,
    newSnapshot: null,
  };

  payload.newSnapshot = await page.screenshot({ path: testScreenshotPath });

  if (!payload.existingSnapshot) {
    console.log("no screenshot");
  }

  return payload;
};
