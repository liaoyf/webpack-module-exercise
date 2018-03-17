const path = require('path')
module.exports = {
  entry: './src/app.style.isomorphic.js',
  output: {
    path: path.resolve('./build'),
    filename: 'app.style.is.js',
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
        use: ['isomorphic-style-loader', 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"']
      }
    ]
  },
  externals: [{ react: 'react', 'react-dom': 'react-dom', 'props-style': 'props-style' }]
}
