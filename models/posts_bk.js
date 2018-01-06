var Post = require('../lib/mongo').Post

module.exports = {
    // 创建文章
    create: (post) => {
        return Post.create(post).exec()
    }
}