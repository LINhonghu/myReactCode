var webpack = require('webpack');
var path = require('path');
module.exports={
    context:__dirname + '\\src',//基本路径
    entry:".\\js\\index.js",
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
          loader:'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        }
      ]
    },
    output:{
        path:__dirname+"/src/",
        filename:"bundle.js"
    }
};
