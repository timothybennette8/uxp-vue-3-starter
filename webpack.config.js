const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devtool: "inline-source-map",
  externals: {
    uxp: "commonjs2 uxp",
    photoshop: "commonjs2 photoshop",
    os: "commonjs2 os",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("sp-"),
          },
        },
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin(["plugin"], {
      copyUnmodified: true,
    }),
  ],
};
