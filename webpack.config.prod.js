const path = require("path");
const common = require("./webpack.config.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/production"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  ...common,
};
