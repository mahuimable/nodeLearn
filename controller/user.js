import * as user from '../proxy/user'
// 注册功能
exports.register = (name, password, gender, avator, bio) => {
    if (!name) {
        alert('请输入您的姓名~')
    }
    if (!password) {
        alert('请设置您的密码~')
    }
    if (!avator) {
        alert('请上传您的头像~')
    }
    if(!bio) {
        alert('请介绍下自己吧~')
    }
    user.createUser(name, password, gender, avator, bio)
}