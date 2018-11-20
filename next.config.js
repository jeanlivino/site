const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

module.exports = withFonts()

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
  }
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/site' : '',

})
