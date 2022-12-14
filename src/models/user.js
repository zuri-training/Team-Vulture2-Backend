const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique: true,
        required:true,
    },
    firstName: {
        type:String,
        required: true
    },

    lastName: {
        type:String,
        required:true
    },

    phoneNumber: {
        type:String,
        required:true
    },

    password: {
        type:String ,
        required:true
   },
}, {timestamps: true})
const User = mongoose.model("users", userSchema)

module.exports = User
