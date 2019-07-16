const path=require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
let webpack =  require('webpack');

// let myWebpackFunction = require(' /mywebpackfunction');
let myWebpackFunction = require('./for_webpack/mywebpackfunction');


module.exports={
    mode:'development',
    entry:myWebpackFunction.getEntry2(),
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')+"/mycode/js/"
    },
    devtool: "source-map",
    resolve:{
        extensions:[".ts",".tsc",".js","json"]
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use:[
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001
    },

    plugins: 
    myWebpackFunction.getHtmlWebPackPlugin2(),

    externals:{
        three:"THREE"
    }
};