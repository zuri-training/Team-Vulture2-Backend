const User = require("../models/user")
const UserFile = require("../models/userFile")
const Term = require("../models/terms")
const Condition = require("../models/conditions")
const Policy = require("../models/policies")
const bcrypt = require('bcrypt');



//User controllers
//add user
exports.registerUser= async (req, res)=>{
    try {
        const user = await req.body;
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        const registered = await User.create(user)
        if(!registered){
             return res.status(400).json({
                success: false,
                message: "User registration failed"
            })
        }
        return res.status(201).json({
            success: true,
            message: "new user registered",
            user: registered
                })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}


//get all users
exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.find({})
        if(!users.length === 0){
             return res.status(404).json({
                success: false,
                message: "no User was found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Users found",
            users: users,
            total: users.length
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}


//get single user
exports.getUser = async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user){
             return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User found",
            user
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//user login
exports.loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: email})
        const passValid = await bcrypt.compare(password, user.password)
        if(!user){
             return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        if(!passValid){
            return res.status(401).json({
                success: false,
                message: "User not authorized"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User found",
            user: {
                user_id: user._id.toString(),
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
            }
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//edit user
exports.updateUser = async (req, res)=>{
    try {
        let update = await req.body
        const newUser = await User.findByIdAndUpdate(req.params.id, {
            username: update.username,
            firstName: update.firstName,
            lastName: update.lastName,
            phoneNumber: update.phoneNumber,
            password: update.password   
        })
        if(!newUser){
             return res.status(404).json({
                success: false,
                message: "User not updated"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: await User.findOne({_id: req.params.id})
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//delete user with the permission to admins alone
exports.deleteUser = async (req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
             return res.status(400).json({
                success: false,
                message: "User not deleted"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}