const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('./build'),
    filename: 'app.js',
    libraryTarget: 'commonjs2'
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: [nodeExternals()]
}
