var path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('./lib/'),
    library: 'isElement',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  }
};