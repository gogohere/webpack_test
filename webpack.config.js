const path = require("path");

module.exports = {
  entry: path.join(__dirname, './page/index.html'),
  output:{
    filename: 'king.js'
  },
  module:{
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ]
  }
}