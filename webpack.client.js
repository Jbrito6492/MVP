const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    filename: 'client.bundle.js',
    path: path.join(__dirname, 'public', 'build')
  }
}

module.exports = merge(baseConfig, config);