const path = require('path')
const nodeExternals = require('webpack-node-externals');
const assetsPath = path.join(__dirname, 'public', 'dist')
const serverPath = path.join(__dirname, 'server')

module.exports = [
    {
        name: 'browser',
        entry: './src/client/index.jsx',
        output: {
            path: assetsPath,
            filename: 'bundle.js'
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
        }
    },
    {
        name: 'server-side rending',
        target: "node",
        entry: './server/server.js',
        output: {
            path: serverPath,
            filename: 'index.js',
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
