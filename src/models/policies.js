const mongoose = require("mongoose")

const policySchema = new mongoose.Schema({
    policy: {type:String},
    field: {type:String},
    type: {type:String},   
}, {timestamps: true})
const Policy = mongoose.model("policies", policySchema)

module.exports = Policy
