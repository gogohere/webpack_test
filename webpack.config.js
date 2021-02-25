const path = require("path")

module.exports = {
  entry: path.join(__dirname, './page/index.html'),
  output:{
    filename: 'king'
  },
  module:{
    rules: [
      {
        test: /\.html$/,
        use: '',
      },
    ]
  }
}