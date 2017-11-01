let path = require('path')
let express = require('express')
let session = require('express-session')
let MongoStore = require('connect-mongo')(session)
let flash = require('connect-flash')
let config = require('config-lite')(__dirname)
let routes = require('./routes')
let pkg = require('./package')

let app = express()

// 设置模板目录
app.set('views', path.join(__dirname, 'views'))

// 设置模板引擎
app.set('view engine', 'ejs')

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// session中间件
app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        url: config.mongodb
    })
}))

// flash中间件，用来显示通知
app.use(flash())

// 设置模板全局变量
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
}

// 添加模板必需的三个变量
app.use((req, res, next) => {
    res.locals.user = req.session.user
    res.locals.success = req.flash('success').toString()
    res.locals.error = req.flash('error').toString()
    next()
})

// 路由
routes(app)

app.listen(config.port, () => {
    console.log('${pkg.name} listening on port ${config.port}')
})