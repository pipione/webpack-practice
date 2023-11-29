
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: './src/app.jsx',
  entry: './src/index.js',
  mode: 'development',
  // experiments: {
  //   outputModule: true
  // },
  output: {
    path: __dirname + '/lib',
    library: {
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}