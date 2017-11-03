let sha1 = require('sha1')
let express = require('express')
let router = express.Router()

let userModel = require('../models/users')
let checkNotLogin = require('../middlewares/check').checkNotLogin

// 登陆页
router.get('/', checkNotLogin, (req, res, next) => {
    res.render('signin')
})

// 用户登录
router.post('/', checkNotLogin, (req, res, next) => {
    let name = req.fields.name
    let password = req.fields.password

    userModel.getUserByName(name)
        .then((user) => {
            if (!user) {
                req.flash('error', '用户不存在')
                return res.redirect('back')
            }
            // 检查密码是否匹配
            if (sha1(password) !== user.password) {
                req.flash('error', '用户名或者密码错误')
                return res.redirect('back')
            }
            req.flash('success', '登陆成功')

            // 写入session
            delete user.password
            req.session.user = userModel

            // 跳转到主页
            res.redirect('/posts')
    }).catch(next)
})

module.exports = router