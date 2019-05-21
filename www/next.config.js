const withMDX = require('@zeit/next-mdx')()
module.exports = withMDX({
  target: 'serverless',
  webpack: (config) => {
    config.node = {fs: 'empty'}
    return config
  }
})