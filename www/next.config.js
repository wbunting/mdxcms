const withTM = require('next-transpile-modules');
const withMDX = require('@next/mdx')();

module.exports = withMDX(
  withTM({
    target: 'serverless',
    webpack: config => {
      config.node = {
        fs: 'empty',
      };
      return config;
    },
    transpileModules: ['theme-ui', '@blocks/editor'],
  })
);
