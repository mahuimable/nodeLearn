let express = require('express')
let router = express.Router()

let checkLogin = require('../middlewares/check').checkLogin
let PostModel = require('../models/posts')

// 所有用户或者特定用户的文章页
router.get('/', (req, res, next) => {
    res.render('posts')
})

// 发表文章页面
router.get('/create', checkLogin, (req, res, next) => {
    res.render('create')
})

// 发表一篇文章
router.post('/', checkLogin, (req, res, next) => {
    console.log('--------------------')
    console.log(req.session)
    var author = req.session.user._id
    let title = req.fields.title
    let content = req.fields.content

    console.log('author:' + author)

    // 检验
    try {
        if (!title.length) {
            throw new Error('请填写标题')
        }
        if (!content.length) {
            throw new Error('请填写内容')
        }
    } catch(e) {
        req.flash('error', e.message)
        return res.redirect('back')
    }
    let post = {
        author: author,
        title: title,
        content: content,
        pv: 0
    }

    PostModel.create(post).then((result) => {
        post = result.ops[0]
        req.flash('success', '发表成功')

        // 跳转到文章页
        res.redirect('/posts/${post._id}')
    }).catch(next)
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