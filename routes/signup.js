var fs = require('fs')
var path = require('path')
var sha1 = require('sha1')
var express = require('express')
var router = express.Router()

var userModel = require('../models/users')
var checkNotLogin = require('../middlewares/check').checkNotLogin

// 注册页
router.get('/', checkNotLogin, (req, res, next) => {
    res.render('signup')
})

// 用户注册
router.post('/', checkNotLogin, (req, res, next) => {
    var name = req.fields.name
    var gender = req.fields.gender
    var bio = req.fields.bio
    var avatar = req.files.avatar.path.split(path.sep).pop()
    var password = req.fields.password
    var repassword = req.fields.repassword
    try {
        if (!(name.length >= 1 && name.length <= 10)) {
            throw new Error('名字限制在1-10个字符')
        }
        if (['m', 'f', 'x'].indexOf(gender) === -1) {
          throw new Error('性别只能是 m、f 或 x');
        }
        // if (!(bio.length >= 1 && bio.length <= 30)) {
        //   throw new Error('个人简介请限制在 1-30 个字符');
        // }
        if (!req.files.avatar.name) {
          throw new Error('缺少头像');
        }
        if (password.length < 5) {
          throw new Error('密码至少 5 个字符');
        }
        if (password !== repassword) {
          throw new Error('两次输入密码不一致');
        }
    } catch(e) {
        // 注册失败
        fs.unlink(req.files.avatar.path)
        req.flash('error', e.message)
        return res.redirect('/signup')
    }

    // 密码加密
    password = sha1(password)

    // 待写入数据库的用户信息
    var user = {
        name: name,
        password: password,
        gender: gender,
        bio: bio,
        avatar: avatar
    }

    // 写入数据库
    userModel.create(user).then((result) => {
        // 插入mongodb后的值
        user = result.ops[0]

        console.log('result', result)
        console.log('result.ops[0]', result.ops[0])
        
        // 将用户信息存入session
        delete user.password
        req.session.user = user

        // 写入flash
        req.flash('success', '注册成功')

        // 跳转到首页
        res.redirect('/posts')
    }).catch((e) => {
        fs.unlink(req.files.avatar.path)
        if(e.message.match('E11000 duplicate key')) {
            req.flash('error', '用户名已被占用')
            return res.redirect('/signup')
        }
        next(e)
    })
})

module.exports = router