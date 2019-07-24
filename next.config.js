const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
});
