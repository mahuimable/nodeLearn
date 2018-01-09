var models = require('../models/index')
var userModel = models.User

// 增加用户
const createUser = (name, password, gender, avator, bio) => {
    var user = new userModel()
    user.name = name
    user.password = password
    user.gender = gender
    user.avator = avator
    user.bio = bio

    return user.save((err) => {
        if (err) {
            console.log(err)
        }
    })
}

// 查找用户
const findUserByName = (name) => {
    return userModel.findOne({name: name}, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

// 更新用户信息
const updateUser = (user) => {
    return userModel.update({
        _id: user.id
    }, {
        $set: {
            name: user.name,
            password: user.password,
            gender: user.gender,
            avator: user.avator,
            bio: user.bio
        }
    })
}

export {
    createUser,
    findUserByName,
    updateUser
}