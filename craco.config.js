const path = require('path');

const resolve = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
    },
  },
};
