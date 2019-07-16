let {dirTop,dirArr} = require('./path.config');
require("./node_write2");

let getEntry2 = ()=>{ //{ a: './src/a', b: './src/b', index: './src/index' } 给 webpack 配置中的 entry使用
    let fs = require('fs');
    let result={};
    let dir = '';

    for(let i=0;i<dirArr.length;i++){
        dir=dirTop+dirArr[i];
        let fsdir = fs.readdirSync(dir);
        for(let i=0; i<fsdir.length;i++){
            let filename=fsdir[i];
            if(filename.match(/\.ts$/)){
                filename=filename.replace(/\.ts/,"");
                result[filename]=dir+filename;
            }
        }
    }
    return result;
}


let getHtmlWebPackPlugin2=()=>{
    let fs = require('fs');
    let result=[];
    let dir = '';
    let HtmlWebPackPlugin = require("html-webpack-plugin");
    
    let htmlWebPackPlugin=new HtmlWebPackPlugin({
        template:dirTop+'index.html',
        filename:'./mycode/index.html',
        chunks:[]
    })

    result.push(htmlWebPackPlugin);

    // 循环生成 TS文件对应的html文件
    for(let i=0;i<dirArr.length;i++){
        dir=dirTop+dirArr[i];
        let fsdir = fs.readdirSync(dir);
        for(let i=0; i<fsdir.length;i++){
            let filename=fsdir[i];
            if(filename.match(/\.ts$/)){
                filename=filename.replace(/\.ts/,"");
                let htmlWebPackPlugin=new HtmlWebPackPlugin({
                    template:dirTop+'template.html',
                    filename:'./mycode/html/'+filename+'.html',
                    chunks:[filename]
                })
                result.push(htmlWebPackPlugin);
            }
        }
    }
    return result;
}
module.exports={
    getEntry2,
    getHtmlWebPackPlugin2,
}


console.log(getEntry2());
// console.log(getHtmlWebPackPlugin2());
