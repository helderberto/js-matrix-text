const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js-matrix-text.min.js',
    libraryTarget: 'umd',
    library: 'JsMatrixText',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'example'),
      path.join(__dirname, 'build'),
    ],
  },
}
