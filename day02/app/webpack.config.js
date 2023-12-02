
const Webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Webpack.ProvidePlugin({
      utils: require.resolve('./src/util/index.js')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}