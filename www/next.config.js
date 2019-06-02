require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const withTM = require('next-transpile-modules');
const withMDX = require('@next/mdx')();

module.exports = withMDX(
  withTM({
    target: 'serverless',
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];

      config.node = {
        fs: 'empty',
      };
      return config;
    },
    transpileModules: ['theme-ui', '@blocks/editor'],
  })
);
