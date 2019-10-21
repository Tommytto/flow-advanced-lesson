const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pathList = {
  dist: path.resolve(__dirname, 'dist'),
  public: path.resolve(__dirname, 'public')
};

module.exports = {
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }]
  },
  entry: './src/index.js',
  output: {
    path: pathList.dist,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: pathList.dist,
    compress: true,
    port: 8080,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new CopyPlugin([{ from: pathList.public, to: pathList.dist }])
  ]
};
