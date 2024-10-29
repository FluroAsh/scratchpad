import { defineConfig } from 'vitest/config.js';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      screenshotDirectory: 'snapshots',
      // https://playwright.dev
      providerOptions: {},
    },
  },
});
