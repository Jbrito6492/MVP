const path = require('path')
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public/dist');
const SRV_DIR = path.join(__dirname, '/server');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: `${SRV_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env', 'react', 'stage-0'],
        },
      }
    ],
  },
  externals: [nodeExternals()]
};
