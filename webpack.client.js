const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'client.bundle.js',
        path: path.join(__dirname, 'public', 'build')
    },
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
    },
    externals: [nodeExternals()]
}