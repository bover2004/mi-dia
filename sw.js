// Service worker de Mi Día: guarda los archivos de la app para que abra sin internet.
// Cuando cambies algo de la app, sube el número de versión (v1 -> v2) para que el iPhone
// descargue la versión nueva.
const VERSION = "mi-dia-v1";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

// 1. Instalación: descargamos y guardamos los archivos de la app
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(ARCHIVOS)));
  self.skipWaiting();
});

// 2. Activación: borramos las cachés de versiones antiguas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((c) => c !== VERSION).map((c) => caches.delete(c)))
    )
  );
  self.clients.claim();
});

// 3. Peticiones: primero intentamos internet (para tener lo último) y si no hay, usamos la caché
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const esFuente = req.url.startsWith("https://fonts.googleapis.com") || req.url.startsWith("https://fonts.gstatic.com");
  const esPropio = new URL(req.url).origin === self.location.origin;
  if (!esPropio && !esFuente) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copia = res.clone();
        caches.open(VERSION).then((cache) => cache.put(req, copia));
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
  );
});
