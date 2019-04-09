const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
      filename: 'main.js',
      path: path.resolve('./build')
  },
  mode: 'development',
  module: {
      rules: [
          {
            test: /\.s(a|c)ss$/,
            use: [
              isProduction
              ? MiniCssExtractPlugin.loader
              : { loader: 'style-loader', options: { sourceMap: true } },
              { loader: 'css-loader', options: { sourceMap: isProduction } },
              { loader: 'postcss-loader', options: { sourceMap: isProduction } },
              { loader: 'sass-loader', options: { sourceMap: isProduction } }
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
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Daftacademy Drink Base',
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin()
  ]
}