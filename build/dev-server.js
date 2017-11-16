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

// 注册中间件
app.use(devMiddleware)

//监听8888端口，开启服务器
app.listen(8888, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('listening at http://localhost:8888')
})