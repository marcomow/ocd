/*const precacheFiles = [ 
    '/', '14zl0XbbsmfqvhYCEhB06jCQoCivfjaN4.json','16a08DOFkexs47W7r9sELoTN9Zy8WuBFOSm0QEuzeQ3c.json','18pPF2eVqdTzG0tkE66Jt3U2rIkuPK_KqX0R_ILWVVC8.json','1LNdmViPg7IAErww5N2HO1RQOPZPerWMA.json','1MO7xSNhS50noYPmzL21m6LNxwlmq16F-10vPc7xFZjk.json','1SbQRVr3udEGDJqyZS2NnVshPZO4tu2jfvR3x_KWVMUo.json','1dVgV7x8lMmCAc9O7jqgtDYq6cEdQ0ReYAF8XvtvM2qk.json','1i5HvzDTvd1lEY7EhAlJM9rU3esnpq_pK.json','1ik7V0guBa_1msBFyc93OFnCZNd0gkeyd.json','Logo_OCD.png','index.html','manifest.json','pwabuilder-sw.js','root.json','tailwind.css'];
*/

const CACHE = "pwabuilder-precache";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.NetworkFirst({
    cacheName: CACHE
  })
);