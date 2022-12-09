const mongoose = require("mongoose")

const conditionSchema = new mongoose.Schema({
    condition: String,
    field: String,
    type: String,   
}, {timestamps: true})
const Condition = mongoose.model("conditions", conditionSchema)

module.exports = Condition