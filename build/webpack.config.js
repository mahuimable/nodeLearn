var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

//css样式从js文件中分离出来
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 入口文件，多入口配置
    entry: {
        index: path.resolve(__dirname, '../views/pages/entry/main.js'),
        vendors: [
            'Vue'
        ]
    },
    // 输出配置
    output: {
        path: path.resolve(__dirname, '../output/static'), // 指定打包文件的路径
        publicPath: 'static/', // 这行代码好像没起什么作用，换成'/'结果也一样
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, 
                loader: 'vue-loader'   
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/ // 去除文件目录
            },
            // 加载图片
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            },
            // 解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.scss$/,

                // 这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
                loader: ExtractTextPlugin.extract("style", 'css!sass') 
                // loader:ExtractPlugin.extract('style-loader', 'css-loader!sass-loader')
                // loader: style!css!sass 
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", 'css')
                // loader: 'style!css'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../views/pages/index.html'),
            inject: true
        })
    ]
}