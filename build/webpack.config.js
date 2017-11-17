var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: ['webpack-hot-middleware/client', path.resolve(__dirname, '../app/index/index.js')],
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
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}