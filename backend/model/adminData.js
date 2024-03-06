const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema= new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }

})

const admin = mongoose.model('admindata',adminSchema)
module.exports = admin