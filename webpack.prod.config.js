var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        path.resolve(ROOT_PATH, 'app-src/index'),
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /node_modules\/auth0-lock\/.*\.js$/,
            loaders: [
                'transform-loader/cacheable?brfs',
                'transform-loader/cacheable?packageify'
            ]
        }, {
            test: /node_modules\/auth0-lock\/.*\.ejs$/,
            loader: 'transform-loader/cacheable?ejsify'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'public'),
        filename: 'bundle.js'
    }/*,
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: process.env.IP,
        port: 8081
    },*/
    , plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("style.css"),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            title: 'Issues',
        })
    ]
};