const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Property Reporter',
      template: './src/template.html'
    }),
    new CopyWebpackPlugin([
      'assets/*'
    ])
  ],
  resolve: {
    alias: {
      node_modules: path.resolve(__dirname, 'node_modules'),
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      services: path.resolve(__dirname, 'src/services'),
      containers: path.resolve(__dirname, 'src/containers')
    }
  },
  cache: false,
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000/' // FIXME
      }
    }
  }
}
