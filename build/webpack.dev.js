const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const env = require('../config/dev.env.js')

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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ...env
    })
  ]
})