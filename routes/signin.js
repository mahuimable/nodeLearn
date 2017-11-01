let express = require('express')
let router = express.Router()

let checkNotLogin = require('../middlewares/check').checkNotLogin

// 登陆页
router.get('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash())
})

// 用户登录
router.post('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash())
})

module.exports = router