const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const env = require(`../config/${process.env.ENV_CONFIG}.env.js`)


module.exports = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: false
      },
      sourceMap: true,
      parallel: true
    }),
    new webpack.DefinePlugin({
      ...env
    })
  ]
})