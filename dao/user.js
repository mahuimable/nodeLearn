var models = require('../models')

var userModel = models.User

// 新增一个用户
exports.createUser = (name, password, gender, avatar, bio) => {
    // 每一个实例都是一个新的记录,先增加一条记录，再插入到表(collection)中
    var user = new userModel()

    user.name = name
    user.password = password
    user.gender = gender
    user.avatar = avatar
    user.bio = bio

    return user.save((err) => {
        if (err) {
            console.log(err)
        }
    })
}

// 根据ID查询用户
exports.findUserByName = (userName) => {
    return userModel.findOne({name: userName}, (err, doc) {
        if (err) {
            console.log(err)
        }
    })
}

// 更新用户信息
exports.updateUserInfo = (user) => {
    return userModel.update({
        _id: user.id
    }, {
        $set: {
            name: user.name,
            password: user.password,
            gender: user.gender,
            avatar: user.avatar,
            bio: user.bio,
        }
    }).exec()
}