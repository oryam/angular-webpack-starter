'use strict';

var path = require('path');
var zlib = require('zlib');
// Webpack Plugins
var webpack = require('webpack');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ENV = process.env.NODE_ENV = process.env.ENV = 'production';
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 8080;

var metadata = {
  title: 'Demo Application',
  baseUrl: '/',
  host: HOST,
  port: PORT,
  ENV: ENV,
  ROOT_SERVICE: 'http://localhost:9000/',
};

/**
 * Config
 */
module.exports = {
  // static data for index.html
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: false,
  
  // our angular app
  entry: {
    index: './src/index.js',
  },

  // Config for our build files
  output: {
    path: root('dist'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  resolve: {
    cache: false,
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
      // transpiling JavaScript files using Babel and ngAnnotate
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel-loader'],
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
    new WebpackMd5Hash(),
    new DedupePlugin(),
    new OccurenceOrderPlugin(true),
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
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
        'ROOT_SERVICE': JSON.stringify(metadata.ROOT_SERVICE),
      },
    }),
    new UglifyJsPlugin({
      // to debug prod builds uncomment //debug lines and comment //prod lines

      // beautify: true,//debug
      // mangle: false,//debug
      // dead_code: false,//debug
      // unused: false,//debug
      // deadCode: false,//debug
      // compress : { screw_ie8 : true, keep_fnames: true, drop_debugger: false, dead_code: false, unused: false, }, // debug
      // comments: true,//debug

      beautify: false,//prod
      // disable mangling because of a bug in angular2 beta.1, beta.2 and beta.3
      // TODO(mastertinner): enable mangling as soon as angular2 beta.4 is out
      // mangle: false,
      mangle: { screw_ie8: true },//prod
      compress: { screw_ie8: true },//prod
      comments: false//prod

    }),
    // include uglify in production
    new CompressionPlugin({
      algorithm: gzipMaxLevel,
      regExp: /\.css$|\.html$|\.js$|\.map$/,
      threshold: 2 * 1024
    })
  ],
  
  // don't use devServer for production

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

function gzipMaxLevel(buffer, callback) {
  return zlib['gzip'](buffer, { level: 9 }, callback)
}
