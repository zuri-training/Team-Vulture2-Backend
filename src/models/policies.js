const mongoose = require("mongoose")

const policySchema = new mongoose.Schema({
    //name to retrieve the policy data for future re-use
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
    //data that will be used to generate the privacy policy
    data: {
        type:{
            //Where will your privacy policy be used?
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
            //How can user contact you for question regarding privacy Policy?
            contact: {
                email: String,
                phoneNumber: String,
                webPage: String
            }
        },
        unique: false,
        required:true
    },
    //The privacy policy include necessary provision for:
    policyType: {
        type: String,
        default: "NDPR",
        unique: false,
        required:false
    },   
}, {timestamps: true})
const Policy = mongoose.model("policies", policySchema)

module.exports = Policy
