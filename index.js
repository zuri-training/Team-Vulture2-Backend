const express = require("express")
const fs = require("fs")
const path = require("path")
const {config} = require("dotenv")
const connect = require("./src/config/database")
const route = require("./src/router/route")
connect()
config()
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use("/", route)
app.get("/", (req, res)=>{
    const filePath = path.join(__dirname, "src", "documentation", "index.html")
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    fs.readFile(filePath, "utf8", (err, data)=>{
        res.end(data)
    })
})
app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})
