let config = require('config-lite')(__dirname)
let Mongolass = require('mongolass')
let mongolass = new Mongolass()

mongolass.connect(config.mongodb)


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

