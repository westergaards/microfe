const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  output: {
    publicPath: "http://microfe-shell.com.s3-website-us-east-1.amazonaws.com/",
    filename: "[name].[chunkhash:4].js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
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
      name: "shell",
      library: { type: "var", name: "shell" },
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote",
      },
      exposes: {
        "./Shell": "./src/Shell",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      templateContent: `
        <html>
        <head>
          <script src="http://microfe-remote.com.s3-website-us-east-1.amazonaws.com/remoteEntry.js"></script>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `,
    }),
  ],
}
