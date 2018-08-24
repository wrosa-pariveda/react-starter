const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  //watch: true
};