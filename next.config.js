const withSass = require("@zeit/next-sass");
const postService = require("./postService");
const APP_ROUTES = {
    '/blog':{
                page:'/blog'
          },
           'landing':{
                page:'landing'
          },
           'chiase':{
                page:'chiase'
          },
           'thongdiep':{
                page:'thongdiep'
          },
          '404':{
                page:'404'
          },
          'index':{
                page:'index'
          }
}

module.exports = withSass({
  /* config options here */
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap:function(){
      const blogRoutes = postService.getBlogPostRoutes();
      const annoucementRoutes = postService.getAnnoucementPostRoutes();
      return {
          ...APP_ROUTES,
          ...blogRoutes,
          ...annoucementRoutes
      }
  }
});
