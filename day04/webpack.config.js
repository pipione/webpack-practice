const htmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  devServer: {
    hot: true,
    // 仅尝试热更新，而不会在热更新失败时回退到完全刷新。
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            plugins: [
              require.resolve('react-refresh/babel')
            ]
          }
        }
      },
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
    new ReactRefreshWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpack demo',
      filename: 'index.html'
    })
  ]
}