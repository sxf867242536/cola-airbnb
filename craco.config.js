const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
      // '@mui/styled-engine': resolve('@mui/styled-engine-sc'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
