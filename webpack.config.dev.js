const path = require("path");
const common = require("./webpack.config.common.js");

module.exports = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/dev"),
  },
  devtool: "inline-source-map",
  ...common,
};
