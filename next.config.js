const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  devIndicators: {
    autoPrerender: false
  },
  exportTrailingSlash: true,

  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});
