const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  output: {
    publicPath: "http://microfe-remote.com.s3-website-us-east-1.amazonaws.com/",
    filename: "[name].[chunkhash:4].js",
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
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
