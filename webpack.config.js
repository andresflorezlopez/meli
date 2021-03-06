const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./client/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|ico)$/,
        loader: "url-loader?limit=100000&name=fonts/[name].[ext]"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
    alias: {
      "@components": path.resolve(__dirname, "client/components"),
      "@layouts": path.resolve(__dirname, "client/layouts"),
      "@assets": path.resolve(__dirname, "client/assets"),
      "@config": path.resolve(__dirname, "client/config"),
      "@hooks": path.resolve(__dirname, "client/hooks"),
      "@pages": path.resolve(__dirname, "client/pages")
    }
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./client",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: "./index.html"
    })
  ]
};
