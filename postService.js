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

const ANNOUCEMENT_DIR = "_posts/annoucement";
function getAnnoucementPostUrlId(fileName){
    let str = fileName.replace(/.md/gi,'');
    return str.replace(/_posts\/annoucement\//gi,'');
}
exports.getAnnoucementPostRoutes = function() {
    var files = dir.files(ANNOUCEMENT_DIR, {sync:true});
    var returnObj ={};
    files.forEach((fileName)=>{
        const id = getAnnoucementPostUrlId(fileName);
        returnObj[`/annoucement/${id}`] = {
            page:'annoucement-post',
            query:{
                id:id
            }
        };
    })
    return returnObj;
}