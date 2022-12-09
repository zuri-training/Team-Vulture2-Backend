const express = require("express")
const {config} = require("dotenv")
const connect = require("./src/config/database")
const route = require("./src/router/route")
connect()
config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use("/", route)

app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})