const withSass = require("@zeit/next-sass");
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
      return {
          'blog':{
                page:'blog'
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
          },
          '/post/blog-1':{
              page:'post',
              query:{
                  id:'blog-1'
              }
          }
      }
  }
});
