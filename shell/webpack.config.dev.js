/* eslint-disable */
// @ts-ignore
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript']
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'remote'
      },
      exposes: {
        './Shell': './src/Shell'
      },
      shared: require('./package.json').dependencies
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
