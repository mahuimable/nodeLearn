let express = require('express')
let router = express.Router()

let checkLogin = require('../middlewares/check').checkLogin

// 登出
router.get('/', checkLogin, (req, res, next) => {
    // 清空session中用户信息
    req.session.user = null
    req.flash('success', '登出成功')
    // 登出成功后跳转到主页
    res.redirect('/posts')
})

module.exports = router