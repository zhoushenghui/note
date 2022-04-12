const { defineConfig } = require('@vue/cli-service')
let path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath:'./note',
  lintOnSave: false,
  transpileDependencies: ["vuex-persist"],
};