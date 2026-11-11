// Service worker mínimo: permite instalar o portal como app. Sempre busca a versão nova das páginas.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response("<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'><body style='font-family:sans-serif;padding:24px;text-align:center'><h2>Sem internet</h2><p>O portal precisa de conexão. Tente de novo em instantes.</p></body>", { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
