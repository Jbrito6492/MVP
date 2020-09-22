const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const nodeExternals = require('webpack-node-externals');

const config = {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.join(__dirname, 'server', 'build')
    },
    externals: [nodeExternals()]
}

module.exports = merge(baseConfig, config);
