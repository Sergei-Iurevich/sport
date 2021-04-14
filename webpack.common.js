module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "media/images/",
          },
        },
      },
    ],
  },
};
