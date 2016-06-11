'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var basePath = process.cwd();

module.exports = {
    entry: [
        path.join(basePath, 'client/main.js')
    ],
    output: {
        path: path.join(basePath, '/dist/client/laetv'),
        filename: '[name]-[hash].min.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(basePath, 'client/index.tpl.html'),
            inject: 'body',
            filename: 'index.hbs'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),

        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
              unused: true,
              dead_code: true,
              warnings: false,
              screw_ie8: true
            },
            compressor: {
                warnings: false
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
                },
                  {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
                  {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
                  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
                  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"}, 
                  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
                {
                    test: /\.(jpg|jpeg|gif|png)$/,
                    exclude: /node_modules/,
                    loader:'url-loader?limit=1024&name=images/[name].[ext]'
                },
                {
                  test: /\.html$/,
                  loader: 'html-loader?attrs[]=video:url'
                },
                {
                  test: /\.mp4$/,
                  loader: 'url?limit=20000&mimetype=video/mp4'
                },
        ]
    }
};