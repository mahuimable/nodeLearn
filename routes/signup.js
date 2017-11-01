let express = require('express')
let router = express.Router()

let checkNotLogin = require('../middlewares/check').checkNotLogin

// 注册页
router.get('/', checkNotLogin, (req, res, next) => {
    res.render('signup')
})

// 用户注册
router.post('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash())
})

module.exports = router