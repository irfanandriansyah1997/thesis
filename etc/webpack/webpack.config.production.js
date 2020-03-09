const path = require('path');
const merge = require('webpack-merge');
// const NpmDtsPlugin = require('npm-dts-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        'common/testing': './src/common/testing.tsx',
        'desktop/index': path.resolve(__dirname, '../../src/desktop/index.ts'),
        'mobile/index': path.resolve(__dirname, '../../src/mobile/index.ts')
    },
    module: {
        rules: [
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
        })
        // new NpmDtsPlugin({
        //     logLevel: 'debug'
        // })
    ]
});
