module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react',
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]],
        }
      }
    ]
  }
}