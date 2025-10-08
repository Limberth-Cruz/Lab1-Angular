
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Lab1-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Lab1-Angular"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5G6F4UZY.js"
    ],
    "route": "/Lab1-Angular/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11811, hash: 'ee1a5b7f22295138d39dd4fb991366e7ac2cbfe16a4786a3e28f373121d390ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12333, hash: 'beb196e0dd49832db407750f40ea4e82fb420c28823c2329c4b0de2ccccd782a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30286, hash: '8d8cfede8d1ba0ab3841df9872c9d2361b18e21fdd1fd184c1aea5b5d2c38ea1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29493, hash: '12c84a278d86c31b10ee6728b819f67b6b7c277532fee95cf352468c3f878c0e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
