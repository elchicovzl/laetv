'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var basePath = process.cwd();

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(basePath, 'client/main.js')
    ],
    output: {
        path: path.join(basePath, '/dist/client/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.tpl.html',
            inject: 'body',
            filename: 'index.hbs'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.json?$/,
                loader: 'json'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.css$/,
                loaders: ["style", "css?modules&localIdentName=[name]---[local]---[hash:base64:5]", "sass"]
            }
        ]
    }
};