'use strict';

// Modules
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: 'Demo Application',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV,
};

/**
 * Config
 */
module.exports = {
  // static data for index.html
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,
  // cache: false,
  
  // our angular app
  entry: {
    index: './src/index.js',
  },

  // Config for our build files
  output: {
    path: root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },

  resolve: {
    // ensure loader extensions match
    extensions: prepend([
      '.js',
      '.json',
      '.css',
      '.scss',
      '.html',
    ]),
  },

  module: {
    preLoaders: [
      //{ test: /\.js$/, exclude: [/node_modules/, /src\/lib/], loaders: ['eslint-loader'] },
    ],

    loaders: [
      // transpiling JavaScript files using Babel
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      
      // Support for *.json files.
      {
        test: /\.json$/,
        loader: 'json-loader',
      },

      // support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [root('src/index.html')],
      },

      // Support for CSS as raw text
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      // Support for SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass-loader',
        exclude: /node_modules/,
      },
      
      // Resources
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?mimetype=application/font-woff&prefix=fonts',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?mimetype=application/octet-stream&prefix=fonts',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?mimetype=application/vnd.ms-fontobject&prefix=fonts',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?mimetype=image/svg+xml&prefix=fonts',
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    // static assets
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      }
    ]),
    // generating html
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // replace
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
      },
    }),
  ],
  
  // our Webpack Development Server config
  devServer: {
    port: metadata.port,
    host: metadata.host,
    // contentBase: 'src/',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  
  // we need this due to problems with es6-shim
  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
};

// Helper functions

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function prepend(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function (memo, val) {
    return memo.concat(val, args.map(function (prefix) {
      return prefix + val
    }));
  }, ['']);
}
