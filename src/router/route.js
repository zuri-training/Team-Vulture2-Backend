const router = require("express").Router()
const controller = require("../controller/controller")


router
.post("/users", controller.registerUser)
.get("/users", controller.getAllUsers)
.get("/users/:id", controller.getUser)
.put("/users/:id", controller.updateUser)
.delete("/users/:id", controller.deleteUser)

module.exports = router