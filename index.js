const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require('cors');
const {config} = require("dotenv")
const connect = require("./src/config/database")
const route = require("./src/router/route")
// const flash = require('express-flash')


connect()
config()
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())
// app.use(express.cookieParser('keyboard cat'));
// app.use(express.session({ cookie: { maxAge: 60000 }}));
// app.use(flash());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
