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
    "url": "advanced/index.html",
    "revision": "1ff538e9becfd10743840bbfe1283a4b"
  },
  {
    "url": "advanced/java-code-style.html",
    "revision": "081ece33493ea33ef53974e5a28034db"
  },
  {
    "url": "advanced/java-crypto.html",
    "revision": "8aac893e44e25efc3a79cc8cde1cb28a"
  },
  {
    "url": "advanced/java-locale.html",
    "revision": "b38a31b30eda8abf54fdf40ef84729cf"
  },
  {
    "url": "advanced/java-regex.html",
    "revision": "f4efbe262ea555fad4696a053bd262fa"
  },
  {
    "url": "advanced/jdk8.html",
    "revision": "1347ea45ed7286e28e3579e81551a4ed"
  },
  {
    "url": "assets/css/0.styles.1dfebbd7.css",
    "revision": "5434c4f1793919f0fb93c1db404a9122"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eec41bdb.js",
    "revision": "5c3e46433e70b4e72785964db4f31bf6"
  },
  {
    "url": "assets/js/11.d1891260.js",
    "revision": "91fb2535ac75f43aa7c61496efc1b1b9"
  },
  {
    "url": "assets/js/12.3528efde.js",
    "revision": "c8d96a7d0e0a99d8efe471d2bf3a567e"
  },
  {
    "url": "assets/js/13.0e172202.js",
    "revision": "06231f878454df1d97d2e879732ef1ef"
  },
  {
    "url": "assets/js/14.a20b8bc9.js",
    "revision": "b2c0f48482806771bd14d0949de8ada1"
  },
  {
    "url": "assets/js/15.fdd7e222.js",
    "revision": "ad6e22a2c917a86886cf6c595a1af63c"
  },
  {
    "url": "assets/js/16.723f942b.js",
    "revision": "7ac37aef08c3f86e7b898b3d60a79a1b"
  },
  {
    "url": "assets/js/17.2248e2ac.js",
    "revision": "363726686685be29afa2f00373c1970c"
  },
  {
    "url": "assets/js/18.57bc468b.js",
    "revision": "c654df24889896270e7f5889181fc7d2"
  },
  {
    "url": "assets/js/19.f2b0acaa.js",
    "revision": "7f0a9e0e672c75908a4e6d8eefd01527"
  },
  {
    "url": "assets/js/20.79dfc82c.js",
    "revision": "5babcf71e35f7bb8f054d285fb6d4846"
  },
  {
    "url": "assets/js/21.a2b2b3d9.js",
    "revision": "10e3ddb3f325ed9eda3f6d4ce16c101b"
  },
  {
    "url": "assets/js/22.f68ead4a.js",
    "revision": "b36823bb504295459862dc27df4db807"
  },
  {
    "url": "assets/js/23.10347421.js",
    "revision": "83c9802090c94f759c1300d994dace5e"
  },
  {
    "url": "assets/js/24.2a123951.js",
    "revision": "57e439a5e78f4a95ab848731e2ae9487"
  },
  {
    "url": "assets/js/25.bb128b09.js",
    "revision": "b5fba7f0137ea258465d8e0b0b2a4fb7"
  },
  {
    "url": "assets/js/26.c428fa60.js",
    "revision": "d5a088a46f81d9629b40336618bd8b8c"
  },
  {
    "url": "assets/js/27.4ba85609.js",
    "revision": "a0c7523550d379a4897d21bb92684ca2"
  },
  {
    "url": "assets/js/28.1eb43d6b.js",
    "revision": "0cbf264c6e5bd5742897249a6e154a3d"
  },
  {
    "url": "assets/js/29.47750a72.js",
    "revision": "857f62a888dcc880d193e60372a76aff"
  },
  {
    "url": "assets/js/30.855f22eb.js",
    "revision": "cb5907fea181c819052b2cf9c2a42f14"
  },
  {
    "url": "assets/js/31.8704a4a9.js",
    "revision": "fd9e93aa1c00178fb2dbb803ddb04f6b"
  },
  {
    "url": "assets/js/32.f619fe9a.js",
    "revision": "66e25256f5dfd5602e110505c228e76d"
  },
  {
    "url": "assets/js/33.f473cbd6.js",
    "revision": "3af161a1c3c3f5fcc6a40391372cd093"
  },
  {
    "url": "assets/js/34.1f6ab2a5.js",
    "revision": "926c050207f271086d71bfe309f4fb96"
  },
  {
    "url": "assets/js/35.4ba95da1.js",
    "revision": "bebf8d218052fc29143d82318f8b1a76"
  },
  {
    "url": "assets/js/36.83801dff.js",
    "revision": "2f3aa53c4503b9f4027ff31732caa84c"
  },
  {
    "url": "assets/js/37.48450ad3.js",
    "revision": "fb34deb1f6503cf2ff2290b596f919d7"
  },
  {
    "url": "assets/js/38.2ddcdfe9.js",
    "revision": "62bfc9c6b6f2f6646da453523dac5e13"
  },
  {
    "url": "assets/js/39.468dcde2.js",
    "revision": "a3e1a304b92eb8c91d3b25ecfdd65c4a"
  },
  {
    "url": "assets/js/4.c9a192fb.js",
    "revision": "3ba11f02072cd133be9861fda056e3ca"
  },
  {
    "url": "assets/js/40.d38ab46c.js",
    "revision": "0f0e1ac0393be561e194972cafd90438"
  },
  {
    "url": "assets/js/41.3a8d5b7b.js",
    "revision": "5ef1b6891da90a859d9632cab3156706"
  },
  {
    "url": "assets/js/42.a399f7b8.js",
    "revision": "223dc1a36409cc9ee732e970bd50635b"
  },
  {
    "url": "assets/js/43.d14d4985.js",
    "revision": "666a928f2075ce0bc57f68452c56246f"
  },
  {
    "url": "assets/js/44.7c5a3a7b.js",
    "revision": "d71896aab7db3b38882c519218089e8f"
  },
  {
    "url": "assets/js/45.065f3db2.js",
    "revision": "77d3fdf99a4ba543a7ce70983d93208c"
  },
  {
    "url": "assets/js/46.54993e19.js",
    "revision": "27b37a2b20419b0a0a7e43b2fb453c37"
  },
  {
    "url": "assets/js/47.1f466d0f.js",
    "revision": "5abcc2eaa3fa9ba88fbc38b2b02ff776"
  },
  {
    "url": "assets/js/48.0580d278.js",
    "revision": "6dd966535801422092259c1146f2d89a"
  },
  {
    "url": "assets/js/49.6587dc2f.js",
    "revision": "39665291a9dad912902603a433701ed6"
  },
  {
    "url": "assets/js/5.5c1b0512.js",
    "revision": "1ff6cada595bc62edd52226aed284145"
  },
  {
    "url": "assets/js/50.04a4013b.js",
    "revision": "8961226f64ecb3306ae0b9d6455099bd"
  },
  {
    "url": "assets/js/51.c8e61a81.js",
    "revision": "1caeb19ed52304ce10be722764e09f6c"
  },
  {
    "url": "assets/js/52.e8c9e89b.js",
    "revision": "3fd4329d4bf9f7873aa2837dd9f0f046"
  },
  {
    "url": "assets/js/53.175554ff.js",
    "revision": "4a2d73de2dc9ad684d1137236625302c"
  },
  {
    "url": "assets/js/54.1c2a3cb9.js",
    "revision": "fe37a44fbdd0a8d28ba46d649cab14af"
  },
  {
    "url": "assets/js/55.4677c0e1.js",
    "revision": "b9c260a531d70eda3face47f834c8f16"
  },
  {
    "url": "assets/js/56.350c7496.js",
    "revision": "5363918b5896759ff351af5cfefe71bf"
  },
  {
    "url": "assets/js/57.eee026af.js",
    "revision": "faeafda40b79057e30949ce87484d5eb"
  },
  {
    "url": "assets/js/58.9fc5c657.js",
    "revision": "c733eb934a637378175789da3e45a4af"
  },
  {
    "url": "assets/js/59.ed81dbfe.js",
    "revision": "de152975d7f98144cacd0a9a57a43fb4"
  },
  {
    "url": "assets/js/6.490ec091.js",
    "revision": "05f4edcd443fb29fe91794274c9ac691"
  },
  {
    "url": "assets/js/60.40115a87.js",
    "revision": "560c17d4c820b9e9180b47c128856a80"
  },
  {
    "url": "assets/js/61.d255b511.js",
    "revision": "9965be2512f30ca7b9fb865698ef6f93"
  },
  {
    "url": "assets/js/62.034c22b4.js",
    "revision": "b30f4da7a540d389dcb0df1b5b4ff758"
  },
  {
    "url": "assets/js/63.0d42be12.js",
    "revision": "2373644fd5f5c7bc3d610fc08d63572a"
  },
  {
    "url": "assets/js/7.6fea9814.js",
    "revision": "406868a4e630804cb506dca51776ad0b"
  },
  {
    "url": "assets/js/8.74fdd0c9.js",
    "revision": "87dfce8eeb7ccedcb69c9ab008a84be0"
  },
  {
    "url": "assets/js/9.8a2f0880.js",
    "revision": "c912b704b4169d68459c5dbbb23bd7e6"
  },
  {
    "url": "assets/js/app.c30588b9.js",
    "revision": "c74f8b70c1fa5941984657e637bf896c"
  },
  {
    "url": "assets/js/vendors~flowchart.3ce362cb.js",
    "revision": "6f1363afe314ec7cb1c8e6bc9fa98fbc"
  },
  {
    "url": "assets/js/vendors~notification.96afd22b.js",
    "revision": "c4bbafc68016576dead5099c0afe0a81"
  },
  {
    "url": "basics/index.html",
    "revision": "98a9295d2682b3840e9ecc6a764619bf"
  },
  {
    "url": "basics/java-annotation.html",
    "revision": "d36dc28a9f7b7bc08187ca641967e4cb"
  },
  {
    "url": "basics/java-array.html",
    "revision": "79111850f320c186f9696a851554157f"
  },
  {
    "url": "basics/java-basic-grammar.html",
    "revision": "4cbad17e11840dc1073c21e043f067c8"
  },
  {
    "url": "basics/java-class.html",
    "revision": "ce65d4b52d8af36454138c57a8c3e964"
  },
  {
    "url": "basics/java-common-tool-class.html",
    "revision": "4f16ce1cf4da9a8371a2ba68fafe0df4"
  },
  {
    "url": "basics/java-control-statement.html",
    "revision": "0159fb7e26ee2f1dc727ead1deddc35f"
  },
  {
    "url": "basics/java-data-type.html",
    "revision": "3673a39cce9d1fdd4041f4a266054662"
  },
  {
    "url": "basics/java-develop-env.html",
    "revision": "b1974a15851b3a3a8ac1366572bd1411"
  },
  {
    "url": "basics/java-enum.html",
    "revision": "e2e8fe05116d05d06713d5754aebeb86"
  },
  {
    "url": "basics/java-exception.html",
    "revision": "232276d004ee59ce68c7a80cefe825e3"
  },
  {
    "url": "basics/java-generic.html",
    "revision": "0d6a91d5a4087a26591c98a549afb8fb"
  },
  {
    "url": "basics/java-method.html",
    "revision": "bac664731d06f6c29db9ea8e4adcefcf"
  },
  {
    "url": "basics/java-oop.html",
    "revision": "c09640f7c355dc64f292c3ee44a20c98"
  },
  {
    "url": "basics/java-reflection.html",
    "revision": "c8e62ebad590cc2a1813aad71fc2fdc7"
  },
  {
    "url": "concurrent/index.html",
    "revision": "46975b7e46046c10a1d27385949f8dba"
  },
  {
    "url": "concurrent/java-atomic-class.html",
    "revision": "f1342f350a72e5f21c7c3c2ecc1cd94b"
  },
  {
    "url": "concurrent/java-concurrent-basic-mechanism.html",
    "revision": "09cacdcf18ba41788d567cbdbe8256bd"
  },
  {
    "url": "concurrent/java-concurrent-container.html",
    "revision": "a960e380307aabf1f9d398a5c07096f6"
  },
  {
    "url": "concurrent/java-concurrent-interview.html",
    "revision": "2025fd4376fb4ce592095b2535a9d974"
  },
  {
    "url": "concurrent/java-concurrent-introduction.html",
    "revision": "1c3801edf0aa0624ab704cb4016b27bb"
  },
  {
    "url": "concurrent/java-concurrent-tools.html",
    "revision": "fc1d950c3aa2d53bea2ffaf290fa1cf6"
  },
  {
    "url": "concurrent/java-lock.html",
    "revision": "653b087c457636976ede552e8f21b859"
  },
  {
    "url": "concurrent/java-memory-model.html",
    "revision": "e5e87c66b45aa6e8eec01a97033d7628"
  },
  {
    "url": "concurrent/java-thread-pool.html",
    "revision": "616201e0094eb2e58090b37310c7bfa1"
  },
  {
    "url": "concurrent/java-thread.html",
    "revision": "61324a6fd4047e1332ebdf843ce318e3"
  },
  {
    "url": "container/index.html",
    "revision": "f39de41b634abee0e3c537f9ca7f8a6a"
  },
  {
    "url": "container/java-container-list.html",
    "revision": "8cdcf248b4308f917efcde916754e96e"
  },
  {
    "url": "container/java-container-map.html",
    "revision": "34eb3afc064121b418cd363581e9d005"
  },
  {
    "url": "container/java-container-queue.html",
    "revision": "97b3ed2074d3e925e2f3492cc6798b07"
  },
  {
    "url": "container/java-container-set.html",
    "revision": "af431d165b4d23adeddbfc18b4257fe2"
  },
  {
    "url": "container/java-container.html",
    "revision": "6218ba5577cc1c4a1c42a12eeef2947b"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "165911e56490826f456bfb62a85c695e"
  },
  {
    "url": "io/index.html",
    "revision": "df9bc94e7fed810d5ef6dc2223a79130"
  },
  {
    "url": "io/java-bio.html",
    "revision": "661818ff6edd22ddfbcb613dadfae82a"
  },
  {
    "url": "io/java-io-base.html",
    "revision": "c24e1d9748ca1473d6e71057c530817a"
  },
  {
    "url": "io/java-net.html",
    "revision": "bae3ab64bc424191d9ca88354a1bd4a6"
  },
  {
    "url": "io/java-nio.html",
    "revision": "2565cbf5c2c70ad15e7d7a872734fe12"
  },
  {
    "url": "io/java-serialization.html",
    "revision": "d604fb2a25e240120f21cbcd1e7d1b90"
  },
  {
    "url": "jvm/index.html",
    "revision": "14ff5df210fcc3d77b17f21eb5b3cbab"
  },
  {
    "url": "jvm/jvm-action.html",
    "revision": "cd91fdc629fdbe861d805f0d749b6d47"
  },
  {
    "url": "jvm/jvm-architecture.html",
    "revision": "25cb86c30a5cfcc066bdb5434b199ba3"
  },
  {
    "url": "jvm/jvm-bytecode.html",
    "revision": "7cd23d4e0a3995963f5bf07e1d72d915"
  },
  {
    "url": "jvm/jvm-class-loader.html",
    "revision": "35badf7092262f32c5b904bd10dc3aa7"
  },
  {
    "url": "jvm/jvm-gc.html",
    "revision": "bbdbe4988e9d5141b8af79a615a2bceb"
  },
  {
    "url": "jvm/jvm-memory.html",
    "revision": "0604a4f34774d88e1976afdabfb4ae13"
  },
  {
    "url": "jvm/jvm-tools.html",
    "revision": "488ab27560de78620ebe34fd2d706240"
  },
  {
    "url": "jvm/troubleshooting.html",
    "revision": "ec41122a77b8da0f858d3b6a80a73170"
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
