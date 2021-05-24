// コアjsモジュール
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/food-app/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // sourcemapを使用する
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader",
      exclude: "/node_modules/"
    }]
  },
  // webpackでtsをコンパイルする
  // ts-loaderで型検査をしてくれるが、tsconfig.jsonを参照しているオプションも存在するので必要
  resolve: {
    extensions: [".ts",  ".js"]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}