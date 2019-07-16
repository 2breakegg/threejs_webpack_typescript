let {dirTop,dirArr} = require('./path.config');

let filename="myfiles.js";
let filepath="./dist/mycode/";

let getFileString = ()=>{ //{ a: './src/a', b: './src/b', index: './src/index' } 给 webpack 配置中的 entry使用
   let fs = require('fs');
   let result={};
   let dir = '';

   for(let i=0;i<dirArr.length;i++){
      dir=dirTop+'/'+dirArr[i];
      let fsdir = fs.readdirSync(dir);
      let files=[];
      for(let i=0; i<fsdir.length;i++){
         let filename=fsdir[i];
         if(filename.match(/\.ts$/)){
               filename=filename.replace(/\.ts/,"");
               files.push(filename);
         }
      }
      result[dirArr[i]]=files;
   }
   return result;
}
var fs = require("fs");

var data=getFileString();
if(!fs.existsSync(filepath)){
   fs.mkdirSync(filepath);
}
fs.writeFileSync('./dist/mycode/myfiles.js', `var files = `+JSON.stringify(data,null,4));

module.exports={getFileString};