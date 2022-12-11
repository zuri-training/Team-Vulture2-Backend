const mongoose = require("mongoose")

const userFileSchema = new mongoose.Schema({
    type: {
        type:String,
        unique: false,
        required:true,
    },
    name: {
        type:String,
        unique: true,
        required:true,
    },
    link: {
        type:String,
        unique: true,
        required:true,
    },
    user_id: {
        type:String,
        unique: false,
        required:true,
    }, 
}, {timestamps: true})
const UserFile = mongoose.model("user_files", userFileSchema)

module.exports = UserFile