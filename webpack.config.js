const path = require('path');
const nodeExternals = require('webpack-node-externals');
const assetsPath = path.join(__dirname, 'public');
const serverPath = path.join(__dirname, 'server');
const webpack = require('webpack');
var IsomorphicLoaderPlugin = require("isomorphic-loader/lib/webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                                plugins: ['@babel/plugin-transform-runtime', "@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
                            },
                        }
                    ]
                },

                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    sideEffects: true,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath: '../'
                            },
                        },
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' },
                        { loader: 'sass-loader' },
                    ]
                },
            ]

        },
        plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "true"
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
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
                                plugins: ['@babel/plugin-transform-runtime', "@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
                            },
                        }
                    ]
                },
                // {
                //     test: /\.css$/,
                //     use: [
                //         {
                //             loader: MiniCssExtractPlugin.loader,
                //             options: {
                //                 publicPath: '/client/src/components/',
                //                 esModule: true,
                //             },
                //         },
                //         'css-loader',
                //     ],
                // },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                __isBrowser__: "false"
            }),
            // new IsomorphicLoaderPlugin()
        ],
        externals: [nodeExternals()]
    }
]

