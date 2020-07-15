/* eslint-disable */
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    publicPath: 'http://microfe-shell.com.s3-website-us-east-1.amazonaws.com/',
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
 
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },

  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
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
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css'
    }),
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
     // shared: require('./package.json').dependencies
      shared: ['react-dom', 'react', 'tailwindcss']
    }),
    new HtmlWebPackPlugin({
      templateContent: `
        <html>
        <head>
          <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
          <meta content="utf-8" http-equiv="encoding">
          <meta name="viewport" content="width=device-width,initial-scale=1">
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
