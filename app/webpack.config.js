var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
  	entry: __dirname + "/web/main.js",//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/public",//打包后的文件存放的地方
        publicPath: '/public/',//Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
    	filename: "[name].js",//打包后输出文件的文件名 npm start
  	},
    devServer: {//webpack-dev-server配置
        host:'localhost',
        port:8088,
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新 npm run server
        hot:true
    },
    performance: {
        hints: false
    },
	module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
            {
		        test: /\.less$/,
		        loader: 'style-loader!css-loader!less-loader'
		    }
        ]
    },
    devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}