importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2a0190d86ecd507d628f.js",
    "revision": "17d8ef50d04b3e0d8177c05658976216"
  },
  {
    "url": "/_nuxt/30c1f3d7a66a126b800f.js",
    "revision": "34e0a6a0a820b07d55c22d26d31b3a5a"
  },
  {
    "url": "/_nuxt/5784f47a8726770904db.js",
    "revision": "147a444104405ff9ca53225f9873469e"
  },
  {
    "url": "/_nuxt/deff4756a75718c223cf.js",
    "revision": "194f9446ea43505e89c82671063223bc"
  },
  {
    "url": "/_nuxt/fa597cf21925fc8719a9.js",
    "revision": "cdf0b9941b7221a7caa057abdd446bba"
  },
  {
    "url": "/_nuxt/ff64f6d2c51be10257fb.js",
    "revision": "c82faf7a176fbf6070c3b0050b00a65a"
  }
], {
  "cacheId": "eidip",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
