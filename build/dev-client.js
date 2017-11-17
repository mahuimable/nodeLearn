var hotClient = require('webpack-hot-middleware/client')

// 订阅事件，当event.action === 'reload'时执行页面刷新
// 之所以这样写，是因为在dev-server.js中发布了reload的事件
hotClient.subscribe((event) => {
    if (event.action === 'reload') {
        window.location.reload()
    }
})