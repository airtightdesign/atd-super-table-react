 var path = require('path');
 var webpack = require('webpack');
 var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 var ExtractTextPlugin = require('extract-text-webpack-plugin');
 const extractSass = new ExtractTextPlugin({
    filename: '../css/atd-super-table.css',
    allChunks: true
});
 
 module.exports = {
    entry  : {
        'index': './src/index.js', 
        'bootstrapper': './src/bootstrapper.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js'
    },
    plugins: [
        extractSass
    ],
     module: {
         rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query   : {
                    presets: ['env', 'react']
                }
            },
            { 
                test: /\.(sass|scss)$/,
                loader: extractSass.extract(['css-loader', 'sass-loader'])
            }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
     resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ],
        extensions : ['.js', '.jsx']
    }
 };
