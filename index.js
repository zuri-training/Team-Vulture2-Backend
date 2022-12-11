const express = require("express")
const {config} = require("dotenv")
const connect = require("./src/config/database")
const route = require("./src/router/route")
connect()
config()
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use("/", route)

app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})


// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳')
// })

// module.exports = app