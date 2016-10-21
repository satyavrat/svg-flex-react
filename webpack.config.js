'use strict';

const path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: 'app.js',
  debug: true,
  cache: true,
  devtool: '#inline-source-map',

  output: {
    path:'./dist/',
    publicPath: '/dist',
    filename: 'bundle.js'
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ["", ".js", ".jsx"],
    fallback: path.join(__dirname, "node_modules")
  },

  resolveLoader: { fallback: path.join(__dirname, "node_modules") },

  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }

};
