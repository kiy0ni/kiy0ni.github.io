// Lineup moved to /lineup/. This worker takes over from the old one, removes itself and reloads open pages,
// which then land on the redirect page. The caches are left alone: the new site (same origin) manages them.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister();
      const pages = await self.clients.matchAll({ type: 'window' });
      for (const page of pages) page.navigate(page.url);
    })(),
  );
});
