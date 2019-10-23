const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    endereco:{
        type:String,
        required:true
    },
    bairro:{
        type:String,
        required:true
    },
    numero:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

mongoose.model('User', UserSchema)