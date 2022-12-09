const mongoose = require("mongoose")

const policySchema = new mongoose.Schema({
    policy: String,
    field: String,
    type: String,   
}, {timestamps: true})
const Policy = mongoose.model("policies", policySchema)

module.exports = Policy