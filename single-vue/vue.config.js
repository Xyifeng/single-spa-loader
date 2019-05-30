const path = require('path')
const env = process.env.NODE_ENV
module.exports = {
  configureWebpack: config => {
    config.output.library = 'single'
    config.output.libraryTarget = 'amd'
    config.entry = { app: ['./src/main.js'],store:'./src/Store.js' }
    if (env === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // 配置输出目录
  outputDir: path.resolve(__dirname, './single'),
  // 关闭hash
  filenameHashing: false,
  // 关闭map
  productionSourceMap: false,
  // 静态文件路径
  publicPath: '/single',
  devServer: {
    port: '8201',
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
}