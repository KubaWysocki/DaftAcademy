const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve('./build')
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
              ]
            },
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
    },
    plugins: [new HtmlWebpackPlugin()]
};

module.exports = baseConfig;