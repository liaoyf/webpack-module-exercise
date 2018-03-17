const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: './src/app.style.js',
  output: {
    path: path.resolve('./build'),
    filename: 'app.style.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('app.style.css')],
  externals: [nodeExternals()]
}
