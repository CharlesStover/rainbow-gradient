const path = require('path');

module.exports = {
  entry: './src/rainbow-gradient.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    library: 'rainbow-gradient',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  }
};
