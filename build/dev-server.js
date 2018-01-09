/**
 * 该配置文件主要用于在本地开发环境下跑node服务，端口号为8888
 */

var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')

var app = express()

// 调用webpack
var compiler = webpack(config)

// 调用webpack-dev-middleware中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 调用webpack-hot-middleware中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听HTML文件改变事件
// 搜索html-webpack-plugin插件，会看到这个事件html-webpack-plugin-after-emit
compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        // 发布事件
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// 注册中间件
app.use(devMiddleware)
app.use(hotMiddleware)

// 连接数据库
var config = require('config-lite')(__dirname)
var Mongolass = require('mongolass')
var mongolass = new Mongolass()

mongolass.connect(config.mongodb)

//监听8888端口，开启服务器
app.listen(8888, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('listening at http://localhost:8888')
})