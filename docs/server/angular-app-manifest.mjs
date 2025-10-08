
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Lab1-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Lab1-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 442, hash: 'a0615ff20dd660ed9aab4756940758e244ae7a033487b5f55bc2594a278d319a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '23d91fdda3d02cc7ce764fc071c13a03f72a92cec276ad458cc11554ea97d697', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21569, hash: '2545c1f623e623059c08fc565e889ac39c2747ec8dda3a2ff3f44c3ff92ef1e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
