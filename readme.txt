多页面配置步骤：
1、build\webpack.base.conf.js
根据需要加入多入口配置：
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
      a: './src/page/a/main.js',
      b:'./src/page/b/main.js'
  },
2、config\index.js
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    a: path.resolve(__dirname, '../dist/a/index.html'),
    b: path.resolve(__dirname, '../dist/b/index.html'),
    // Paths
3、build\webpack.dev.conf.js
在plugin节点中加入需要的HtmlWebpackPlugin，并将filename指向第2步中定义的模板名称
new HtmlWebpackPlugin({
      filename:config.build.index,
      template: './index.html',
      inject: true,
      chunks:["app"]
    }),
    new HtmlWebpackPlugin({
      filename: config.build.a,
      template: './src/page/a/index.html',
      inject: true,
      chunks:["a"]
    }),
    new HtmlWebpackPlugin({
      filename:  config.build.b,
      template: './src/page/b/index.html',
      inject: true,
      chunks:["b"]
    }),/**/
4、build\webpack.prod.conf.js
删掉plugins中的HtmlWebpackPlugin配置即可