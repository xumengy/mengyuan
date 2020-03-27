const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

const env = require('../config/dev.env.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(common, {
  mode: 'development',
  devtool: '#inline-source-map',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    contentBase: './dist',
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: 'mengyuan',
      favicon: resolve('favicon.ico')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ...env
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', 
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
})