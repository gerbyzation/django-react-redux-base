const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles/[name].css');

module.exports = {
    // devtool: 'source-map', // No need for dev tool in production

    // entry: {
    //     vendor: [
    //         'font-awesome-webpack!./src/static/styles/font-awesome.config.prod.js'
    //     ]
    // },

    module: {
        // loaders: [{
        //     test: /\.scss$/,
        //     loader: ExtractTextPlugin.extract("style", "css?minimize!postcss-loader!sass")
        // }]
        rules: [{
            test: /\.css$/,
            use: [
                extractCSS.extract('style'),
                'css-loader?localIdentName=[path][name]--[local]',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                extractCSS.extract('style'),
                'css-loader?localIdentName=[path][name]--[local]',
                'postcss-loader',
                'sass-loader',
            ]
        }],
    },

    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     },
        //     '__DEVELOPMENT__': false
        // }),
        // new ExtractTextPlugin('styles/[name].[contenthash].css'),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
        extractCSS,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
