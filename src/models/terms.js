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
            //Where will your terms and conditions be used?
            where: [],
            whereDetails: {
                websiteUrl: String,
                websiteName: String,
                entityType: String,
                country: {
                    type:String,
                    default: "Nigeria"
                }
            },
            //What kind of information do you collect from user?
            informationType: [],
            //How can user contact you for question regarding terms and conditions?
            contact: {
                email: String,
                phoneNumber: String,
                webPage: String
            }
        },
        unique: false,
        required:true
    },
    //The terms and conditions include necessary provision for:
    policyType: {
        type: String,
        default: "NDPR",
        unique: false,
        required:false
    },    
}, {timestamps: true})
const Term = mongoose.model("terms", termSchema)

module.exports = Term