const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  output: {
    publicPath: "http://microfe-remote.com.s3-website-us-east-1.amazonaws.com/",
    // filename: "[name].[chunkhash:4].js",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new ModuleFederationPlugin({
      name: "remote",
      library: { type: "var", name: "remote" },
      filename: "remoteEntry.js",
      remotes: {
        shell: "shell",
        remote: "remote",
      },
      exposes: {
        "./RemoteWidget": "./src/RemoteWidget",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      templateContent: `
        <html>
        <head>
          <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
          <meta content="utf-8" http-equiv="encoding">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <script src="http://microfe-remote.com.s3-website-us-east-1.amazonaws.com/remoteEntry.js"></script>
          <script src="http://microfe-shell.com.s3-website-us-east-1.amazonaws.com/remoteEntry.js"></script>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `,
    }),
  ],
}
