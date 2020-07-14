/* eslint-disable */
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  output: {
    publicPath: 'http://microfe-shell.com.s3-website-us-east-1.amazonaws.com/',
    filename: '[name].[chunkhash:4].js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },
  devtool: 'source-map',
  devServer: {
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
      templateContent: `
        <html>
        <head>
          <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
          <meta content="utf-8" http-equiv="encoding">
          <script src="http://microfe-remote.com.s3-website-us-east-1.amazonaws.com/remoteEntry.js"></script>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `
    })
  ]
}
