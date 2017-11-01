let express = require('express')
let router = express.Router()

let checkLogin = require('../middlewares/check').checkLogin

// 所有用户或者特定用户的文章页
router.get('/', (req, res, next) => {
    res.send(req.flash())
})

// 发表一篇文章
router.post('/', checkLogin, (req, res, next) => {
    res.send(req.flash())
})

// 发表文章页
router.get('/create', checkLogin, (req, res, next) => {
    res.send(req.flash())
})

// 单独一篇文章页
router.get('/:postId', (req, res, next) => {
    res.send(req.flash())
})

module.exports = router