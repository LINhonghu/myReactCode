var webpack = require('webpack');
var path = require('path');
module.exports={
    context:__dirname + '\\src',//基本路径
    entry:".\\js\\root.js",
    module:{
        rules:[
          {
            test:/\.js?$/,
            exclude: /(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015'],
                plugins:['react-html-attrs'],
            }
        },
        {
          test:/\.css$/,
          loader:'style-loader!css-loader'//应用别人代码无需本地化配置
        }
      ]
    },
    output:{
        path:__dirname+"/src/",
        filename:"bundle.js"
    }
};
