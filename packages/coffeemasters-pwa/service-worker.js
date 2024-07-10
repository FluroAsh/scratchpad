// We're going to be a pseudo-"server"/proxy

// Pre-cache assets during the service-worker installation event
self.addEventListener("install", async (event) => {
  const cache = await caches.open("cm-appshell");
  cache.addAll([
    "/", // Cache the root/default document as there is no "index.html" file retrieved from the server
    "/styles.css",
    // Cache our same-origin JS files
    "/scripts/API.js",
    "/scripts/app.js",
    "/scripts/Menu.js",
    "/scripts/Order.js",
    "/scripts/Router.js",
    // Cache our same-origin image assets
    "/images/logo.svg",
    "/images/icons/icon.png",
    "/data/menu.json",
    // Cache cross-origin assets
    "https://cdn.jsdelivr.net/npm/idb@8/build/umd.js",
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
  ]);
});

// Network-first strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      try {
        const fetchResponse = await fetch(event.request);
        // Update the cache
        const cache = await caches.open("cm-updated-assets");
        // NOTE: In JS we cannot re-use the same response object, as it is a "stream"
        // So we clone it to be able to use it in multiple places, and return it back to the browser
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;
      }
    })()
  );
});

// Intercept network requests and cache them, if not cached already...
// self.addEventListener("fetch", (event) => {

//   // Cache-first strategy
//   event.respondWith(
//     // Async IIFE
//     (async () => {
//       // Check if the request is already cached
//       const cachedResponse = await caches.match(event.request);

//       if (cachedResponse) {
//         // If it exists, let's return the cached response!
//         return cachedResponse;
//       } else {
//         // If it isn't cached, then request it as normal
//         return fetch(event.request);
//       }
//     })()
//   );
// });
