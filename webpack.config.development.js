/* eslint no-console: 0 */
'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false&reload=true',
      './app/index.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel', 'babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-object-rest-spread', 'babel-plugin-transform-class-properties'],
            presets: ['es2015', 'react']
          }
        }
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.jpg', '.jpeg', '.png', '.gif', '.svg']
  }
};