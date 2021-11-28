const path = require('path');

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'src/main.ts', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  devServer: {
    port: 8080, // 固定端口
    hot: true, // 开启热更新
    open: 'Google Chrome', // 固定打开浏览器
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /vtk\.js[/\\]Sources/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: false, happyPackMode: true }
        }
      ],
    },
    output: {
      libraryExport: 'default'
    },
  }
};
