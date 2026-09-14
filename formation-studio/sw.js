// Lineup moved to /lineup/. This worker replaces the old one and removes itself, without touching open pages
// (someone may be editing: they keep going, their work is saved on the device and in their account). The next time
// the old address is opened it lands on the redirect page. Caches are left to the new site (same origin).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
