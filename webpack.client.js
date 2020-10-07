const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  target:'web',
  entry: './client/index.jsx',
  output: {
    filename: 'client.bundle.js',
    path: path.join(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config);