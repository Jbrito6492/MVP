const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react',
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }], ["@babel/plugin-proposal-class-properties"]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
}