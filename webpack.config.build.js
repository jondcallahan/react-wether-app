var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var settings = require('./enclave.js')
var pathPrefix = './'

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: pathPrefix + settings.index,
  filename: 'index.html',
  inject: 'body'
})

var UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
})

module.exports = {
  entry: [
    pathPrefix + settings.entry
  ],
  output: {
    path: pathPrefix + settings.output,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ]
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.(otf|eot|ttf|woff|png|jpe?g|txt)/i,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.[s]?css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    UglifyJsPluginConfig,
    new webpack.optimize.DedupePlugin(),
  ],
  devServer: {
    contentBase: pathPrefix + settings.output,
    hot: true,
  }
}
