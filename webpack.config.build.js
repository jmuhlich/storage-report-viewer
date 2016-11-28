// webpack.config.js
var webpack = require('webpack');
var fs = require('fs');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = [
  // Client build
  {
    plugins: [
      // Note: the HtmlPlugin automatically adds the needed css and js
      // to the html file
      new HtmlPlugin({
        template: './app/index.html',
        filename: 'index.html'
      }),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
    ],
    entry: {
      'bundle.min': [
        'babel-polyfill',
        './app/index.jsx'
      ]
    },
    output: {
      path: './dist',
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        { test: /\.(css|scss)$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        { test: /\.(png|jpg)$/,
          loader: 'file-loader?name=img/[hash].[ext]'
        },
        // Bootstrap
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'},
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    }
  }
];
