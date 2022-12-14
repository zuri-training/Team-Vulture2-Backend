const router = require("express").Router()
const controller = require("../controller/controller")


router
.post("/users/register", controller.registerUser)
.get("/users", controller.getAllUsers)
.get("/users/:id", controller.getUser)
.put("/users/:id", controller.updateUser)
.delete("/users/:id", controller.deleteUser)
.post("/users/login", controller.loginUser)
.put("/users/:id/password", controller.changePassword)
.post("/policies", controller.addPolicy)
.get("/policies", controller.getAllPolicies)
.get("/policies/:id", controller.getPolicy)
.put("/policies/:id", controller.updatePolicy)
.delete("/policies/:id", controller.deletePolicy)
.get("/policies/users/:user_id", controller.getAllUserPolicies)
.delete("/policies/users/:user_id", controller.deleteAllUserPolicies)
.post("/terms", controller.addTerm)
.get("/terms", controller.getAllTerms)
.get("/terms/:id", controller.getTerm)
.put("/terms/:id", controller.updateTerm)
.delete("/terms/:id", controller.deleteTerm)
.get("/terms/users/:user_id", controller.getAllUserTerms)
.delete("/terms/users/:user_id", controller.deleteAllUserTerms)

module.exports = router