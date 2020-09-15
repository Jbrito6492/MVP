const path = require('path');
const nodeExternals = require('webpack-node-externals');
const assetsPath = path.join(__dirname, 'public');
const serverPath = path.join(__dirname, 'server');
const webpack = require('webpack');

module.exports = [
    {
        name: 'browser',
        entry: './client/src/index.jsx',
        output: {
            path: assetsPath,
            filename: 'client_bundle.js',
            publicPath: '/public',
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
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[name]__[local]__[hash:base64:5]'
                                }
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [autoprefixer()]
                            }
                        }
                    ]
                }]

        },
        plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "true"
            })
        ],
    },
    {
        name: 'server-side rending',
        target: "node",
        entry: './server/index.js',
        output: {
            path: serverPath,
            filename: 'server_bundle.js',
            publicPath: '/server',
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
        plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "false"
            })
        ],
        externals: [nodeExternals()]
    }
]

