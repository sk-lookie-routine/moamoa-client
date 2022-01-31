const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
      '/',
      '/home',
      '/signup',
      '/login',
      '/post',
      '/room',
      '/:notFound(.*)',
    ],
    server: {
      port: 8080,
    },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app',
    }),
  }),
];

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },
  devServer: {
    overlay: false,
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_API_URL,
    //     changeOrigin: true,
    //   },
    // },
  },
};
