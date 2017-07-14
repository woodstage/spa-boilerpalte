/* eslint no-console: 0 */
'use strict';

var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: { inline: true },
  entry: {
    app: ["./app/index.js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-object-rest-spread', 'babel-plugin-transform-class-properties'],
            presets: ['env', 'react']
          }
        }
      },
      {
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
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.jpg', '.jpeg', '.png', '.gif', '.svg']
  }
};