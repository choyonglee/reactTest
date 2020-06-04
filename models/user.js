// mongodb 라이브러리 가져오기 
// 몽고DB에 스키마 설정하기
const mongodb = require('mongoose')
const userSchema = mongodb.Schema({
    name: {
        type: String,
        maxlength: 50
    },

    email: {
        type: String,
        trim: true,
        unique: 1
    },

    password: {
        type: String,
        minlength: 5
    },

    lastname: {
        type: String,
        maxlength: 50
    },

    role: {
        type: Number,
        default: 0
    },

    image: String,

    token: {
        type: String
    },

    tokenExp: {
        type: Number
    }
})

const User = mongodb.model('User', userSchema)

module.exports = { User }