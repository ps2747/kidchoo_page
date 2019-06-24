importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2428fbd482a0cfe2520d.js",
    "revision": "c3283d21e1d4b32ff4d80f21d54b929f"
  },
  {
    "url": "/_nuxt/2cd084f356492a330f03.js",
    "revision": "233e69cfac8bb118bca94f3c28112aaf"
  },
  {
    "url": "/_nuxt/3f4c1f2e1f38278660da.js",
    "revision": "674cbf9708ef2e3d0d831dd536071bab"
  },
  {
    "url": "/_nuxt/4b2c6e69e3c34ea85efd.js",
    "revision": "9d42fcde14feead26bb6dcae481766a6"
  },
  {
    "url": "/_nuxt/4b8b97211e47a19913ee.js",
    "revision": "a96fa64fe0a8b1fb1e03f10f806c2b06"
  },
  {
    "url": "/_nuxt/4ee338924cd7a5e14335.js",
    "revision": "618f306f0c1d1ce050de48dc4f0a6779"
  },
  {
    "url": "/_nuxt/6121b213e78f4dd8a44d.js",
    "revision": "bb524f5c629eb6e858b592f3c4a03a55"
  },
  {
    "url": "/_nuxt/6642a97e5f566b4655aa.js",
    "revision": "0ef9560fd69c6e2bad31ec904565043e"
  },
  {
    "url": "/_nuxt/6b7b0e03f6dc455f036e.js",
    "revision": "93ef38c9363194ce5dcec22fc42fa5ba"
  },
  {
    "url": "/_nuxt/831e9464dc6d257f632e.js",
    "revision": "12a41ecd6729811307453604d6528e63"
  },
  {
    "url": "/_nuxt/84e04b44d9041755a016.js",
    "revision": "f2887848ab8c8f4d4c14332ab0f5b8b0"
  },
  {
    "url": "/_nuxt/bdc89ffc998ef61e19fd.js",
    "revision": "034721d16760a91f5cd1818c241bac0b"
  },
  {
    "url": "/_nuxt/c5de6d45b31f5174ce1c.js",
    "revision": "ff635334871891095de429b567a484fa"
  },
  {
    "url": "/_nuxt/cb31218758f79d15706a.js",
    "revision": "5163972bccd30939f7624ab2381e560f"
  },
  {
    "url": "/_nuxt/de6c104f43c8fab3db4b.js",
    "revision": "8dcc433cc146c9a8565ada8be373b734"
  }
], {
  "cacheId": "Kidchoo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
