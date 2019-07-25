const dir = require('node-dir');
const replaceString = require('replace-string');


const BLOG_DIR = "_posts/blog";


function getBlogPostUrlId(fileName){
    let str = fileName.replace(/.md/gi,'');
    return str.replace(/_posts\/blog\//gi,'');
}
exports.getBlogPostRoutes = function() {
    var files = dir.files(BLOG_DIR, {sync:true});
    var returnObj ={};
    files.forEach((fileName)=>{
        const id = getBlogPostUrlId(fileName);
        returnObj[`/post/${id}`] = {
            page:'blog-post',
            query:{
                id:id
            }
        };
    })
    return returnObj;
}