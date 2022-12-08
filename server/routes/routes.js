const Router = require("express")
const router = new Router()
const UsersController = require("../controllers/users.controller")


// router.post('/login', UsersController.createUser)
router.post('/registratin', UsersController.createUser)
router.post('/login', UsersController.signInUser)
router.get('/verifyToken', UsersController.checkToken)

module.exports = router