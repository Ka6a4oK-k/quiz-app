const Router = require("express")
const router = new Router()
const UsersController = require("../controllers/users.controller")
const QuizesController = require("../controllers/quizes.controller")
const tokenValidation = require('../jwt/tokenValidation.js')

router.post('/registratin', UsersController.createUser)
router.post('/login', UsersController.signInUser)
router.get('/verifyToken', tokenValidation.tokenValidation)
router.post('/addQuiz', QuizesController.addQuiz)

module.exports = router