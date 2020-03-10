const path = require('path');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        filename: 'script/[name].[chunkhash:32].bundle.js',
        chunkFilename: 'script/[name].[chunkhash:32].chunk.bundle.js'
    },
    entry: {
        app: './src/documentation/app.tsx'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        noEmitOnErrors: true
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../../'),
            verbose: true,
            dry: false,
            exclude: []
        }),
        new OptimizeCSSAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[hash].css',
            chunkFilename: 'style/[name].[hash].chunk.css'
        }),
        new WorkboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://irfanandriansyah1997.github.io/TrainingReact/'),
                    handler: 'StaleWhileRevalidate'
                }
            ]
        })
    ]
});
