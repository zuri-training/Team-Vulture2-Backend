const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    password: String    
}, {timestamps: true})
const User = mongoose.model("users", userSchema)

module.exports = User