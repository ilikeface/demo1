const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave:false,
  //代理跨域,通过api向第三方代理请求
  devServer: {
    proxy: {
         '/api': {
              target: 'http://gmall-h5-api.atguigu.cn',
         },
    },
 },
})
