let express = require('express')
let router = express.Router()

let checkLogin = require('../middlewares/check').checkLogin

// 登出
router.get('/', checkLogin, (req, res, next) => {
    res.send(req.flash())
})

module.exports = router