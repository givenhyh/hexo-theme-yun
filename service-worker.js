/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.bf686d9e.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8ce4280.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.12589b32.js",
    "revision": "2cfe6031835c8020b5a770850d227819"
  },
  {
    "url": "assets/js/12.3bf3b95d.js",
    "revision": "b593708f174c902485e8a5b8895bc148"
  },
  {
    "url": "assets/js/13.5c0e3107.js",
    "revision": "191a9f14ed4556de96440a237702d99f"
  },
  {
    "url": "assets/js/14.ee8dc7bd.js",
    "revision": "53cf75d3f679b488ecba47e201a09468"
  },
  {
    "url": "assets/js/15.287bc112.js",
    "revision": "2e009a0d8c96ec32988d0ac410af2d24"
  },
  {
    "url": "assets/js/16.6b076d14.js",
    "revision": "e8bd34dce5f4e94135cee27742252f25"
  },
  {
    "url": "assets/js/17.1f33c9ad.js",
    "revision": "7f39d163016e00f75eb02b4caabedde9"
  },
  {
    "url": "assets/js/18.5103f93f.js",
    "revision": "a8bfd6c41fb239d7317e614af0fcaf36"
  },
  {
    "url": "assets/js/2.87270e65.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/3.f9f44839.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.326d35e8.js",
    "revision": "cd79d2067b3dbcf3ecabc34d2b243d91"
  },
  {
    "url": "assets/js/5.5a688d0c.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.f10ceb6f.js",
    "revision": "2b0180504c044f2b2ba6cee20e3ef44f"
  },
  {
    "url": "assets/js/7.ad2d785b.js",
    "revision": "daccce7f6840e5d5cfbd27ac5d9b5567"
  },
  {
    "url": "assets/js/8.e61a35e4.js",
    "revision": "34289b2af2ebb8babc2d1610e904008f"
  },
  {
    "url": "assets/js/9.026f77ea.js",
    "revision": "dc75c276d2ab064a188109e26ce2be13"
  },
  {
    "url": "assets/js/app.8a7bb57e.js",
    "revision": "8f398659382727da24693452f1e1d194"
  },
  {
    "url": "en/guide/index.html",
    "revision": "7f3f5525d225061c81baa0c7e5af3afd"
  },
  {
    "url": "en/index.html",
    "revision": "a43ad549e00ce1852987527537d733d6"
  },
  {
    "url": "guide/about.html",
    "revision": "e01d9eca875d1a333794d49e2d197d42"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "6829af25944e89fdf909a018f890ec14"
  },
  {
    "url": "guide/config.html",
    "revision": "85b95ca85db477d422310979a9ce396f"
  },
  {
    "url": "guide/faq.html",
    "revision": "9ea9f63f34c51e951d6000a544a92891"
  },
  {
    "url": "guide/index.html",
    "revision": "5f712847a4ddbe8b6d49785d672384f9"
  },
  {
    "url": "guide/page.html",
    "revision": "666931ff509c730c40ba1c094589d416"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "4f806753692b90295b910cdb326a1cda"
  },
  {
    "url": "guide/Todo.html",
    "revision": "d074cfc635a84ef4edb663c8f1319414"
  },
  {
    "url": "index.html",
    "revision": "3dc5df561b5e6a6959e64ab6f770590c"
  },
  {
    "url": "logo.gif",
    "revision": "a15b28b70e73f11115a7d195eba8b3b9"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
