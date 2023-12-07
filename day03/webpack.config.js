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
    filename: '[name].[contenthash:8].bundle.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        async: {
          name: 'async',
          chunks: 'async',
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
        },
        sync: {
          name: 'sync',
          chunks: 'initial',
          minChunks: 2,
          priority: 20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}