var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    password: String,
    gender: String,
    avatar: String,
    bio: String
})

userSchema.index({name: 1}, {unique: true})

module.exports = mongoose.model('myblog', userSchema)