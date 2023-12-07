const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: {
      import: './src/index.js',
    },
    index2: {
      import: './src/index2.js',
    },
  },
  mode: 'development',
  devtool: 'source-map', // 生成单独的sourcemap文件
  // devtool: 'eval',
  // devtool: 'nosources-source-map',
  // devtool: 'hidden-source-map', // 生成单独的sourcemap文件, 和 source-map 一样，但不会在 bundle 末尾追加注释

  output: {
    clean: true,
    filename: '[name].[contenthash].bundle.js',
  },
  devServer: {
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}