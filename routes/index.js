module.exports = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/posts')
    })
    // 注册页面
    app.use('/signup', require('./signup'))

    // 登陆页面
    app.use('/signin', require('./signin'))

    // 登出
    app.use('/signout', require('./signout'))
    
    // 主页
    app.use('/posts', require('./posts'))
}