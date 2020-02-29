module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "es2015",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
