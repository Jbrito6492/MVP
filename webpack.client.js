const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  target: 'web',
  entry: './client/index.jsx',
  optimization: {
    namedModules: true,
    namedChunks: true,
    removeAvailableModules: true,
    flagIncludedChunks: true,
    occurrenceOrder: false,
    usedExports: true,
    concatenateModules: true,
    sideEffects: false,
  },
  output: {
    filename: 'client.bundle.js',
    sourceMapFilename: "[name].js.map",
    path: path.join(__dirname, 'public')
  },
  devtool: "source-map",
}

module.exports = merge(baseConfig, config);