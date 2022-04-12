const { defineConfig } = require('@vue/cli-service')
let path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuex-persist"],
};