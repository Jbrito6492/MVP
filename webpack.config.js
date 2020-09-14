const path = require('path')
const nodeExternals = require('webpack-node-externals');
const assetsPath = path.join(__dirname, 'public')
const serverPath = path.join(__dirname, 'server')

module.exports = [
    {
        name: 'browser',
        target: 'node',
        entry: './client/src/index.jsx',
        output: {
            path: assetsPath,
            filename: 'client_bundle.js',
            publicPath: '/',
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            query: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: ['@babel/plugin-transform-runtime'],
                            },
                        }
                    ]
                }
            ]
        },
        externals: [nodeExternals()]
    },
    {
        name: 'server-side rending',
        target: "node",
        entry: './server/index.js',
        output: {
            path: serverPath,
            filename: 'server_bundle.js',
            publicPath: '/',
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            query: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: ['@babel/plugin-transform-runtime'],
                            },
                        }
                    ]
                }
            ]
        },
        externals: [nodeExternals()]
    }
]

