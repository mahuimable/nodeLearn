/**
 * 本地运行需要的配置，更改了主配置里的一些参数
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// 引入基本设置
var config = require('./webpack.config')

config.output.publicPath = '/'

config.plugins = [
    // 添加三个插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../views/pages/index.html'),
        inject: true
    })
]

// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client'
var devClient = './build/dev-client'
Object.keys(config.entry).forEach((name, i) => {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config