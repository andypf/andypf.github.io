const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const path = require("path");

const distFolderName = "dist";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, distFolderName),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          inlineRequires: "/images/",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pfau Software",
      template: "src/views/home.hbs",
      filename: "index.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      title: "Pfau Software - Datenschutz",
      template: "src/views/privacy.hbs",
      filename: "privacy.html",
      hash: true,
    }),

    new WebpackPwaManifest({
      name: "Pfau Software",
      short_name: "pfau",
      description: "We make the software",
      background_color: "#2b2c2c",
      display: "standalone",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("src/assets/images/android-chrome-192x192.png"),
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: path.resolve("src/assets/images/android-chrome-512x512.png"),
          sizes: "512x512",
          type: "image/png",
        },
      ],
    }),
  ],
  devServer: {
    static: `./${distFolderName}`,
    host: "0.0.0.0",
    port: process.env.APP_PORT,
    allowedHosts: "all",
    client: {
      webSocketURL: "ws://0.0.0.0/ws",
    },
    hot: true,
  },
};
