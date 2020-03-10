const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');

const HOST = '0.0.0.0';
const PORT = 4001;

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    devServer: {
        stats: 'verbose',
        hot: true,
        contentBase: 'dist',
        compress: true,
        host: HOST,
        port: PORT,
        open: true,
        // overlay: { warnings: true, errors: true },
        overlay: { errors: true },
        publicPath: '/',
        quiet: true,
        watchOptions: {
            poll: true
        }
    },
    entry: {
        app: './src/documentation/app.tsx'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
