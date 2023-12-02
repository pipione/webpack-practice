
const Webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/util/alert.js'),
        use: {
          loader: 'imports-loader',
          options: {
            imports : [
              'namespace ../util/date util'
            ]
          }
        }
      },
      {
        test: require.resolve('./src/util/global.js'),
        use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    }),
    //   new Webpack.ProvidePlugin({
    //   utils: require.resolve('./src/util/index.js'),
    //   util: require.resolve('./src/util/index.js')
    // })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}