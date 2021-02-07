const Dotenv = require('dotenv-webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['@babel/preset-react',
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]],
          plugins: [
            require("@babel/plugin-proposal-class-properties"),
            require("react-loadable/babel"),
            require("@babel/plugin-syntax-dynamic-import"),
            require("@babel/plugin-proposal-object-rest-spread"),
            require("@loadable/babel-plugin"),
          ]
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
              sourceMap: true,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new LoadablePlugin(),
  ]
};