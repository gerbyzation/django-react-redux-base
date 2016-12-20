const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles/[name].css');

module.exports = {
    devtool: 'source-map', // 'cheap-module-eval-source-map',
    // entry: {
    //     vendor: [
    //         'font-awesome-webpack!./src/static/styles/font-awesome.config.js'
    //     ]
    // },
    module: {
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
    // module: {
    //     loaders: [{
    //         test: /\.scss$/,
    //         loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass'
    //     }]
    // },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"development"'
        //     },
        //     '__DEVELOPMENT__': true
        // }),
        extractCSS,
        // new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
