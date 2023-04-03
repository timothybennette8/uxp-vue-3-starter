const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  performance: {
    maxEntrypointSize: Infinity,
    maxAssetSize: Infinity,
  },
  externals: {
    photoshop: "commonjs2 photoshop",
    uxp: "commonjs2 uxp",
    fs: "commonjs2 fs",
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
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin(["plugin"], {
      copyUnmodified: true,
    }),
  ],
};
