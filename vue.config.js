const path = require('path');
/* eslint-disable import/extensions, import/no-unresolved */
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
/* eslint-enable */

module.exports = {
  devServer: {
    open: true,
    port: 2024,
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
