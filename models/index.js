var mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/myblog');

exports.User = require('./user')