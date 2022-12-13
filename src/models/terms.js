const mongoose = require("mongoose")

const termSchema = new mongoose.Schema({
    //name to retrieve the terms and conditions data for future re-use
    name: {
        type: String,
        unique: true,
        required:true
    },
    user_id: {
        type: String,
        unique: false,
        required:true
    },
    //data that will be used to generate the terms and conditions
    data: {
        type:{
            //Website Name
           websiteName: String,
           //Website URL
           websiteUrl: String,
           //Country of operation defaulted to Nigeria for now
           country: {
            type: String,
            default: "Nigeria"
           },
           //Email Address
           email: String,
           //Entity type (whether business or individual)
           entityType: String
        },
        unique: false,
        required:true
    }    
}, {timestamps: true})
const Term = mongoose.model("terms", termSchema)

module.exports = Term