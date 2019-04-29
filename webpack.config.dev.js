const path = require("path");
import webpack from "webpack";

export default {
  entry: [
    "webpack-hot-middleware/client",
    path.resolve(__dirname, "./client/index.js")
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "client"),
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }``
  }
};
