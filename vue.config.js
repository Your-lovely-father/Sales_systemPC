/*
@name: 代理文件
@description: 主要用于vue3跨域代理和其他配置
@author: ZhiYuanWang
@time: 2020-08-26 11:08:23
*/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './': '/',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true,
  // chainWebpack: () => {},
  // configureWebpack: () => {},
  //移动端rem转换
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue: 75, // 换算的基数
  //           propList: ['*'],
  //         }),
  //       ]
  //     }
  //   }
  // },
  //反向代理
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASEURL,//指向vue的环境配置 dev：开发 prod：线上 test：测试
        ws: true,
        secure:false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

};
