var webpack = require('webpack');

var config = {
  entry : './main.js',
  output: {
    path : './',
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        { test : /\.jsx?$/, loader : 'babel-loader', exclude : /node_modules/, query : {presets : ['es2015','react']}}
      ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.less']
  }
};

module.exports = config;
