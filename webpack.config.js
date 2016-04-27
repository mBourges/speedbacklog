var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        path.resolve(ROOT_PATH, 'app-src/index'),
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'public'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: process.env.IP,
        port: 8081
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'API_URL': JSON.stringify(process.env.API_URL)
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("style.css"),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            title: 'Issues',
            template: 'template.html'
        })
    ]
};