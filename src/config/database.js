const mongoose = require("mongoose")
const {config} = require("dotenv")

config()

const connectionString = process.env.MONGODB_URI
const connect = async ()=>{
    try {
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("database connection successful")
    } catch (error) {
        console.log(err)
    }
}
module.exports = connect