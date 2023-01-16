const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //モードをdevelopment、production、noneから設定(必須)
  //development: 開発時のファイル出力モード(最適化より時間短縮、エラー表示を優先）
  //production: 本番時のファイル出力モード（最適化されて出力）
  mode: "development",

  //メインとなるjsファイル(エントリーポイント)
  entry: "./src/index.ts",
  //ファイルの出力設定
  output: {
    //出力先のディレクトリ（絶対パスで指定）
    path: path.resolve(__dirname, "dist"),
    //出力ファイル名
    filename: "bundle.js",
  },
  //ローダーの設定
  module: {
    rules: [
      {
        test: /\.css$/, //拡張子が.cssの場合
        use: ["vue-style-loader", "css-loader"], //vue-style-loader、css-loaderを使う
      },
      {
        test: /\.vue$/, //拡張子が.vueの場合
        loader: "vue-loader", //vue-loaderを使う
      },
      {
        test: /\.ts$/, //拡張子が.vueの場合
        loader: "ts-loader", //vue-loaderを使う
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },
  plugins: [
    //Vueを読み込むために必要
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    })
  ],
};
