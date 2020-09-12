const path = require('path')
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public/dist');
const webpackNodeExternals = require('webpack-node-externals');

const client = {
  entry: `${SRC_DIR}/index.jsx`,
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
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      }
    ]
  },
}
const server = {
  target: 'node',
  entry: `${DIST_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        options: {
          presets: ['react', 'stage-0',
            ['env', {
              target: { browsers: ['last 2 versions'] }
            }]
          ]
        },
      }
      }
    ],
    externals: [webpackNodeExternals()]
  }
}

module.exports = [client, server]