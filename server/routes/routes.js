const Router = require("express")
const router = new Router()
const UsersController = require("../controllers/users.controller")


// router.post('/login', UsersController.createUser)
router.post('/registratin', UsersController.createUser)
router.post('/login', UsersController.signInUser)

module.exports = router