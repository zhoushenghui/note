const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // // 方法一：开启代理服务器
  // // devServer:{
  // //   proxy:'http://192.168.31.141:8000'
  // // },
  // // 方法二：开启代理服务器
  // devServer: {
  //   proxy: {     
  //     target:'http://192.168.31.141:8000',
  //     changeOrigin:true,
  //     ws:false
  //   }    
  // },
})
