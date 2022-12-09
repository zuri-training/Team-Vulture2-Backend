const mongoose = require("mongoose")

const userFileSchema = new mongoose.Schema({
    type: String,
    name: String,
    link: String,
    user_id: String  
}, {timestamps: true})
const UserFile = mongoose.model("user_files", userFileSchema)

module.exports = UserFile