const User = require("../models/user")
const UserFile = require("../models/userFile")
const Term = require("../models/terms")
const Policy = require("../models/policies")
const bcrypt = require('bcryptjs');



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
        // req.flash('info', 'Registration successful');
        return res.status(201).json({
            success: true,
            message: "new user registered",
            user: {
                user_id: registered._id.toString(),
                username: registered.username,
                email: registered.email,
                firstName: registered.firstName,
                lastName: registered.lastName,
                phoneNumber: registered.phoneNumber,
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


//get all users with the permission to admins alone
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
        // req.flash('info', 'login Sucessful');
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
            phoneNumber: update.phoneNumber
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
            user: {
                user_id: req.params.id,
                username: update.username,
                email: update.email,
                firstName: update.firstName,
                lastName: update.lastName,
                phoneNumber: update.phoneNumber,
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

//change password
exports.changePassword = async (req, res)=>{
    try {
        let newPassword = await req.body
        const hash = await bcrypt.hash(newPassword.password, 10)
        const newUser = await User.findByIdAndUpdate(req.params.id, {password: hash})
        if(!newUser){
             return res.status(404).json({
                success: false,
                message: "User not updated"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Password changed successfully"
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

//Policy controller
//create policy
exports.addPolicy= async (req, res)=>{
    try {
        const policy = await req.body
        const newPolicy = await Policy.create(policy)
        if(!newPolicy){
             return res.status(400).json({
                success: false,
                message: "Policy creation failed"
            })
        }
        return res.status(201).json({
            success: true,
            message: "new policy successfully created",
            newPolicy
            })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//get all policies
exports.getAllPolicies = async (req, res)=>{
    try {
        const policies = await Policy.find({})
        if(!policies.length === 0){
             return res.status(404).json({
                success: false,
                message: "Privacy policy not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Privacy Policies found",
            policies: policies,
            total: policies.length
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//get all policies for a particular
exports.getAllUserPolicies = async (req, res)=>{
    try {
        const policies = await Policy.find({user_id: req.params.user_id})
        const user = await User.findById({_id: req.params.user_id})
        if(!policies.length === 0){
             return res.status(404).json({
                success: false,
                message: "Privacy policy not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: `Privacy Policies found for ${user.firstName} ${user.lastName}`,
            policies: policies,
            total: policies.length
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//get single policy
exports.getPolicy = async (req, res)=>{
    try {
        const policy = await Policy.findById(req.params.id)
        if(!policy){
             return res.status(404).json({
                success: false,
                message: "Privacy Policy not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Privacy Policy found",
            policy
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//edit policy
exports.updatePolicy = async (req, res)=>{
    try {
        let update = await req.body
        const newPolicy = await Policy.findByIdAndUpdate(req.params.id, {
            name: update.name,
            data: update.data,
            policyType: update.policyType
        })
        if(!newPolicy){
             return res.status(404).json({
                success: false,
                message: "Privacy Policy not updated"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Privacy Policy updated successfully",
            newPolicy
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}


//delete all policies of a single user
exports.deleteAllUserPolicies = async (req, res)=>{
    try {
        const policies = await Policy.find({user_id: req.params.user_id})
        const user = await User.findById({_id: req.params.user_id})
        for(const policy of policies){
            await Policy.findByIdAndDelete(policy.id)
        }
        if(!policies){
             return res.status(400).json({
                success: false,
                message: "Privacy Policy not deleted"
            })
        }
        return res.status(200).json({
            success: true,
            message: `Privacy Policies for ${user.firstName} ${user.lastName} deleted successfully`
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//delete policy
exports.deletePolicy = async (req, res)=>{
    try {
        const policy = await Policy.findByIdAndDelete(req.params.id)
        if(!policy){
             return res.status(400).json({
                success: false,
                message: "Privacy Policy not deleted"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Privacy Policy deleted successfully"
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//Term controller
//create term
exports.addTerm= async (req, res)=>{
    try {
        const term = await req.body
        const newTerm = await Term.create(term)
        if(!newTerm){
             return res.status(400).json({
                success: false,
                message: "Terms and Conditions creation failed"
            })
        }
        return res.status(201).json({
            success: true,
            message: "New terms and conditions successfully created",
            newTerm
            })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//get all terms
exports.getAllTerms = async (req, res)=>{
    try {
        const terms = await Term.find({})
        if(!terms.length === 0){
             return res.status(404).json({
                success: false,
                message: "no terms and conditiond was found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Terms and Condditions found",
            terms: terms,
            total: terms.length
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//get single term
exports.getTerm = async (req, res)=>{
    try {
        const term = await Term.findById(req.params.id)
        if(!term){
             return res.status(404).json({
                success: false,
                message: "Terms and Conditions not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Terms and Conditions found",
            term
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//get all policies for a particular
exports.getAllUserTerms = async (req, res)=>{
    try {
        const terms = await Term.find({user_id: req.params.user_id})
        const user = await User.findById({_id: req.params.user_id})
        if(!terms.length === 0){
             return res.status(404).json({
                success: false,
                message: "terms and conditions not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: `Terms and conditions found for ${user.firstName} ${user.lastName}`,
            policies: terms,
            total: terms.length
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//edit term
exports.updateTerm = async (req, res)=>{
    try {
        let update = await req.body
        const newTerm = await Term.findByIdAndUpdate(req.params.id, {
            name: update.name,
            data: update.data,
            termType: update.termType
        })
        if(!newTerm){
             return res.status(404).json({
                success: false,
                message: "Terms and Conditions not updated"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Terms and Conditions updated successfully",
            newTerm
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}

//delete all terms of a single user
exports.deleteAllUserTerms = async (req, res)=>{
    try {
        const terms = await Term.find({user_id: req.params.user_id})
        const user = await User.findById({_id: req.params.user_id})
        for(const term of terms){
            await Term.findByIdAndDelete(term.id)
        }
        if(!terms){
             return res.status(400).json({
                success: false,
                message: "terms and conditions not deleted"
            })
        }
        return res.status(200).json({
            success: true,
            message: `Terms and conditions for ${user.firstName} ${user.lastName} deleted successfully`
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}


//delete term 
exports.deleteTerm = async (req, res)=>{
    try {
        const term = await Term.findByIdAndDelete(req.params.id)
        if(!term){
             return res.status(400).json({
                success: false,
                message: "Terms and Conditions not deleted"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Terms and Conditions deleted successfully"
        })         
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error",
            error: error.message
        })
    }
}
