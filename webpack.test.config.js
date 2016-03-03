'use strict';

// Modules
var path = require('path');
//var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'test';

var metadata = {
  ENV: ENV,
  ROOT_SERVICE: 'http://localhost:3001/',
};

/**
 * Config
 */
module.exports = {
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

  devtool: 'inline-source-map',

  module: {
    preLoaders: [
      //{ test: /\.js$/, exclude: [/node_modules/, /src\/lib/], loaders: ['eslint-loader'] },
    ],

    loaders: [
      // transpiling JavaScript files using Babel
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel-loader'],
        exclude: [
          /node_modules/,
          /\.e2e\.js$/,
        ],
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

    postLoaders: [
      // instrument only testing sources with Istanbul
      {
        test: /\.js$/,
        include: root('src'),
        loader: 'istanbul-instrumenter-loader',
        exclude: [
          /\.(e2e|spec)\.js$/,
          /node_modules/
        ]
      }
    ],

  },

  plugins: [
    new DefinePlugin({
      // Environment helpers
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
        'ROOT_SERVICE': JSON.stringify(metadata.ROOT_SERVICE),
      },
    }),
  ],
  
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
