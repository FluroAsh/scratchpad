import Menu from "./Menu.js";
import Order from "./Order.js";
import Router from "./Router.js";

// Initializes our custom caching service-worker
navigator.serviceWorker.register("/service-worker.js");

// Request persistent storage
(async () => {
  if (!navigator.storage && !navigator.storage.persist) return;

  if (!(await navigator.storage.persisted())) {
    const result = await navigator.storage.persist();
    console.log(`The persistent storage permission is ${result}`);
  }
})();

(async () => {
  if (!navigator.storage && !navigator.storage.estimate) return;

  const q = await navigator.storage.estimate();
  console.log(`Quota available: ${q.quota / 1024 / 1024}MB`);
  console.log(`Quota used: ${q.usage / 1024}KB`);
})();

window.addEventListener("DOMContentLoaded", () => {
  Router.init();
  Menu.load();
  Order.render();
});
