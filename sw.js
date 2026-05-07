const CACHE_NAME = "a2z-pwa-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./seller.html",
  "./admin.html",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});