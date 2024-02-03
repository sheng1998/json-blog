/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  publicPath: '/json-blog',
  assetsDir: 'assets',
  devServer: {
    open: true,
    port: 2024,
    proxy: {
      '/api/v1': {
        ws: true,
        changeOrigin: true,
        target: 'http://127.0.0.1:3003/',
        pathRewrite: { '^/api/v1': '' },
      },
    },
    client: {
      // 不显示错误全屏警告
      overlay: false,
    },
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.store.set('$style', path.resolve(__dirname, 'src/assets/css/'));
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        // __VUE_OPTIONS_API__: true,
        // __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      });
      return definitions;
    });
  },
};
