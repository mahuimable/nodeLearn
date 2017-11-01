module.exports = {
    port: 3000,
    // express-session 的配置信息
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    // mongodb的地址
    mongodb: 'mongodb://localhost:27017/myblog'
};