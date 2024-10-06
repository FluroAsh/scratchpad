import { expect, test } from "vitest";
import { queryByText } from "@testing-library/dom";
import { page, userEvent, server, BrowserCommands } from "@vitest/browser/context";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { chromium } from "playwright";

const myCommand: BrowserCommands = async (ctx) => {
  if (ctx.provider.name === "playwright") {
    // ctx.page
  }
};

import HelloWorld from "./HelloWorld.js";

// const browser = test("renders name", async () => {
//   const parent = HelloWorld({ name: "Vitest" });
//   document.body.appendChild(parent);

//   const element = await queryByText(parent, "Hello Vitest!");
//   expect(element).not.toBe(null);
// });

test("creates snapshot of https://www.myer.com.au/", async (...args) => {
  console.log(...args);
  // server.config({
  //   url: "https://www.myer.com.au/",
  // });

  const parent = HelloWorld({ name: "Vitest" });
  document.body.appendChild(parent);

  page.viewport(1920, 1080);
  await page.screenshot({ path: "./snapshots/myer-home-page.png" });
});

// test("matches snapshots", async () => {
//   // take snapshot of myer site
//   // compare this against the code that is run
//   const browser = await chromium.launch();
// });
