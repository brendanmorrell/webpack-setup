const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.json', '.sass', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.scss/, use: ['style-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom template',
      template: path.resolve(__dirname, './src/template.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // historyApiFallback: true,
    // publicPath: '/dist',
  },
};
