//  コアjsモジュール
const path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/food-app/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // bundle.jsがなくてもwebpackが作成したbundle.jsを使用する。
    publicPath: "/dist/"
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
  }
}