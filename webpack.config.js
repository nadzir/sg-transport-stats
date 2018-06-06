const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

const DEV = process.env.NODE_ENV === "development";
const PROD = process.env.NODE_ENV === "production";

const babelEnvPreset = [
  "@babel/env",
  {
    targets: {
      browsers: ["last 2 versions", "Firefox ESR", "not dead"]
    }
  }
];

module.exports = {
  // Defaults to development, pass --mode production to override
  mode: "development",

  context: path.resolve(__dirname, "src"),

  target: "web",

  entry: {
    app: "./index.tsx"
  },

  output: {
    filename: "[name].[hash:7].js",
    // ./ is used when hosting in a subdirectory (eg. GitHub pages)
    publicPath: PROD ? "./" : "/"
  },

  module: {
    rules: [
      // Vanilla CSS
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|mp4|webm|mp3|ogg|svg)$/,
        loader: "file-loader",
        options: {
          name: "./f/[hash:16].[ext]"
        }
      },
      // Mostly for tests, but legacy JS in source too
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            ...(DEV ? ["react-hot-loader/babel"] : [])
          ],
          presets: [babelEnvPreset, "@babel/stage-3", "@babel/react"]
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /\/node_modules\//,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            ...(DEV ? ["react-hot-loader/babel"] : [])
          ],
          presets: [babelEnvPreset, "@babel/typescript", "@babel/react"]
        }
      }
    ]
  },

  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["yarn --silent tsc:check:no-error"],
      dev: false
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./static/favicon.ico"
    }),
    // Generate .gz for production builds
    // Consider adding brotli-webpack-plugin if your server supports .br
    ...(PROD ? [new CompressionPlugin()] : [])
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /\/node_modules\//,
          filename: "vendor.[hash:7].js",
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },

  // Using cheap-eval-source-map for build times
  // switch to inline-source-map if detailed debugging needed
  devtool: PROD ? false : "cheap-eval-source-map",

  devServer: {
    clientLogLevel: "warning",
    contentBase: "app/ui/www",
    historyApiFallback: true,
    stats: "minimal"
  },

  externals: {
    cheerio: "window",
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@test": path.resolve(__dirname, "test")
    }
  }
};
