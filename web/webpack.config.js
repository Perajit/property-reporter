const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Property Reporter',
      template: './src/template.html'
    })
  ],
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/_actions'),
      constants: path.resolve(__dirname, 'src/_constants'),
      components: path.resolve(__dirname, 'src/_components'),
      helpers: path.resolve(__dirname, 'src/_helpers'),
      reducers: path.resolve(__dirname, 'src/_reducers'),
      services: path.resolve(__dirname, 'src/_services')
    }
  }
}
