const mongoose = require("mongoose")

const policySchema = new mongoose.Schema({
    name: {
        type:String,
        unique: true,
        required:true
    },
    user_id: {
        type:String,
        unique: this.find,
        required:true
    },
    policy: {
        type:{
            where: [],
        },
        unique: false,
        required:true
    },
    // field: {type:String},
    type: {
        type:String,
        unique: false,
        required:true
    },   
}, {timestamps: true})
const Policy = mongoose.model("policies", policySchema)

module.exports = Policy
