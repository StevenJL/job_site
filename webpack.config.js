const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/job_site.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/react"]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
