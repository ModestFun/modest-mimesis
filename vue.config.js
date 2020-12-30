const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 81,
    proxy: {
      '^/icons': {
        target: 'http://localhost:82',
        changeOrigin: true
      }
    }
  },

  productionSourceMap: false,
  css: {
    extract: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  lintOnSave: true,

  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },

  publicPath:
    process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : './', //process.env.VUE_APP_BASE_API,

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  },
}
