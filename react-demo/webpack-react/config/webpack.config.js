const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  // 项目的js入口文件，__dirname表示当前目录，入口文件位置，在当前目录的src下的index.js中
  entry: path.join(__dirname, "src", "index.js"),
  // 出口文件，在当前目录下生成一个build文件夹，打包之后的文件会放在这里命名为bundle.js
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },
  plugins: [
    // 配置项目使用的html的模版文件为index.html
    new HtmlWebpackPlugin({
      filename: "index.html", // 指定项目打包出来的html文件的名称
      template: path.join(__dirname, "index.html"), // 指定项目的html文件的路径
      // hash: false, // 防止缓存，在引入的文件后面加hash (PWA就是要缓存，这里设置为false)
      // inject: "body", // 是否将js放在body的末尾
    }),
    new CleanWebpackPlugin({
      path: path.join(__dirname, "build"), // 保证在每次打包的时候删除build中的老文件
    }),
  ],
  modules:{
    rules: [
      // 配置解析es6语法和jsx文件的Babel-loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
    ]
  },
  devServer: {
    port: 6666,   // 指定启动端口号
    open: true,  // 启动后自动打开浏览器
    progress: true, // 显示打包进度条
    contentBase: path.join(__dirname, "build"), // 启动的项目位置为build
  }
};
