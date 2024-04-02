// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
}
