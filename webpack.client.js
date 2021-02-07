const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const TerserPlugin = require("terser-webpack-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');

const config = {
  target: 'web',
  entry: './client/index.jsx',
  output: {
    filename: 'client.bundle.js',
    chunkFilename: '[name].bundle.js',
    sourceMapFilename: "[name].js.map",
    path: path.join(__dirname, 'public')
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new LoadablePlugin(),
  ]
}

module.exports = merge(baseConfig, config);