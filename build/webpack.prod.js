const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const env = require(`../config/${process.env.ENV_CONFIG}.env.js`)
const devMode = process.env.NODE_ENV !== 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: 'mengyuan',
      favicon: resolve('favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: false
      },
      sourceMap: true,
      parallel: true
    }),
    new webpack.DefinePlugin({
      ...env
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        preset: ['default', {discardComments: {removeAll: true}}]
      },
      canPrint: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader,
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
          devMode
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
})