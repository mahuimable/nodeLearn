/**
 * 本地运行需要的配置，更改了主配置里的一些参数
 */
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

// 引入基本设置
var config = require('./webpack.config')

config.output.publicPath = '/'

config.plugins = [
    new htmlWebpackPlugin([
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    ])
]

module.exports = config