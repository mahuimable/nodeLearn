let User = require('../lib/mongo').User

module.exports = {
    // 注册新用户
    create: (user) => {
        return User.create(user).exec()
    },
    // 通过用户名获取用户信息
    getUserByName: (name) => {
        return User
            .findOne({name: name})
            // 自定义插件，通过_id生成时间戳
            .addCreatedAt()
            .exec()
    }
}