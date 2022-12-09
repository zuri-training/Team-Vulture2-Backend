const mongoose = require("mongoose")

const termSchema = new mongoose.Schema({
    term: String,
    field: String,
    type: String,   
}, {timestamps: true})
const Term = mongoose.model("terms", termSchema)

module.exports = Term