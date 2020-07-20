const path = require('path') //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
  devServer: {
    port: 8888,
    open: true,
    proxy: {
      '/api': {
        target: 'http://11.111.111.112:8001',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `            
            @import "@/assets/scss/_variable.scss";
            // @import "@/assets/scss/reset.scss";
          `
      }
    }
  }
}
