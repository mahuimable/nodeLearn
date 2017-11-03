let config = require('config-lite')(__dirname)
let Mongolass = require('mongolass')
let mongolass = new Mongolass()

mongolass.connect(config.mongodb)

let moment = require('moment')
let objectIdToTimestamp = require('objectid-to-timestamp')

// 根据ID生成创建时间created_at
mongolass.plugin('addCreatedAt', {
    afterFind: (results) => {
        results.forEach((item) => {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm')
        })
        return results
    },
    afterFindOne: (result) => {
        if (result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
        }
        return result
    }
})

// 用户
exports.User = mongolass.model('User', {
    name: {type: 'string'},
    password: {type: 'string'},
    avatar: {type: 'string'},
    gender: {type: 'string', enum: ['m', 'f', 'x']},
    bio: {type: 'string'}
})
exports.User.index({name: 1}, {unique: true}).exec()

// 发表文章
exports.Post = mongolass.model('Post', {
    author: {type: Mongolass.Types.ObjectId},
    title: {type: 'string'},
    content: {type: 'string'},
    pv: {type: 'number'}
})
exports.Post.index({author: 1, _id: -1}).exec()
