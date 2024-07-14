/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-15 02:46:00
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-15 03:28:40
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

/**
 * html-webpack-plugin生成的html的文件webpack.config.js中必须设置mode环境
 */
module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js", //打包后文件名
    path: path.resolve(__dirname, "./dist"), //path要求绝对路径 打包后文件夹
  },
  resolve: {
    extensions: [".js", ".ts", ".json", ".cjs"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  devServer: {},
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
