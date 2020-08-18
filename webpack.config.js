const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
      filename: "index.bundle.js",
      path: path.resolve(__dirname, "./src/js")
  },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "./src/"),
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true
    },
    module: {
      rules: [
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader'
          }
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  strictMath: true,
                },
              },
            },
          ],
        },
      ],
    }
}