importScripts('/contributors-chart/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/contributors-chart/_nuxt/13bc73cd58be1eae88d7.js",
    "revision": "eb09633182b51f2a51012c65d3dca021"
  },
  {
    "url": "/contributors-chart/_nuxt/2e67dacca218efa66e8e.js",
    "revision": "62e6d2c7ef04a539eb07b746cfe37fc3"
  },
  {
    "url": "/contributors-chart/_nuxt/409a1ef105ca19017004.css",
    "revision": "4792714a1d5220fdc98bc61b4d10b45a"
  },
  {
    "url": "/contributors-chart/_nuxt/8b8d32879c5dffef8abb.js",
    "revision": "14ba600ba645ecafd0591e7d15c3916f"
  },
  {
    "url": "/contributors-chart/_nuxt/d792431187a82357a4db.js",
    "revision": "7a9e7f6d3caba9d14dba5fdbfbc27344"
  },
  {
    "url": "/contributors-chart/_nuxt/d99a054220ed089f241b.js",
    "revision": "0df1a6a5304f24f8a07d95841d459af9"
  },
  {
    "url": "/contributors-chart/_nuxt/ffef3d02f68dee3e34c7.css",
    "revision": "e2186da8f520f9cd188a28ff0ae6fa80"
  }
], {
  "cacheId": "contributors-chart",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/contributors-chart/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/contributors-chart/.*'), workbox.strategies.networkFirst({}), 'GET')





