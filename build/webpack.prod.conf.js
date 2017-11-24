/**
 * 生产环境配置
 */
 var HtmlWebpackPlugin = require('html-webpack-plugin')
 var path = require('path')
 var webpack = require('webpack')

 // 引入基本配置
 var config = require('./webpack.config')

// 覆盖总配置文件的插件选项
config.plugins = [
    // 这块没太明白
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        } 
    }),
    // 压缩代码，这段代码暂时报错，后面会看下其他的压缩方式
   /* new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }), */

    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.js'
    }),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: path.resolve(__dirname, '../views/pages/index.html'),
        inject: true
    })
]
module.exports = config
