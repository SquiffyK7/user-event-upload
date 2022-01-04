module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["src/*.test.js"],
    exclude: [],
    preprocessors: {
      "src/*.test.js": ["webpack"],
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.m?js$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
        ],
      },
    },
    reporters: ["dots"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    browsers: ["Firefox"],

    singleRun: false,
    concurrency: Infinity,
  });
};
