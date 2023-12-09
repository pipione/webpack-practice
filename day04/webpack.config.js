const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: {
    hot: true,
    // 仅尝试热更新，而不会在热更新失败时回退到完全刷新。
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader 将 JS 字符串生成为 style 节点
          'style-loader',
          // css-loader 将 CSS 转化成 CommonJS 模块
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'webpack demo',
      filename: 'index.html'
    })
  ]
}