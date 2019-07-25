const dir = require('node-dir');
const replaceString = require('replace-string');

function getPostUrlId(fileName){
    let str = fileName.replace(/.md/gi,'');
    return str.replace(/_posts\/blog\//gi,'');
}
exports.getBlogPostNames = function() {
    var files = dir.files("_posts/blog", {sync:true});
    var returnObj ={};
    files.forEach((fileName)=>{
        const id = getPostUrlId(fileName);
        returnObj[`/post/${id}`] = {
            page:'post',
            query:{
                id:id
            }
        };
    })
    return returnObj;
    // return {
    //     '/post/blog-1':{
    //           page:'post',
    //           query:{
    //               id:'blog-1'
    //           }
    //       }
    // }
}