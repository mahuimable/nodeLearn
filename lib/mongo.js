let config = require('config-lite')(__dirname)
let Mongolass = require('mongolass')
let mongolass = new Mongolass()

mongolass.connect(config.mongodb)

exports.User = mongolass.model('User', {
    name: {type: 'string'},
    password: {type: 'string'},
    avatar: {type: 'string'},
    gender: {type: 'string', enum: ['m', 'f', 'x']},
    bio: {type: 'string'}
})
exports.User.index({name: 1}, {unique: true}).exec()