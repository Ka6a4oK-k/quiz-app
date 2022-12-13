const Router = require("express")
const router = new Router()
const UsersController = require("../controllers/users.controller")
const QuizesController = require("../controllers/quizes.controller")
const tokenValidation = require('../jwt/tokenValidation.js')

router.post('/registratin', UsersController.createUser)
router.post('/login', UsersController.signInUser)
router.get('/verifyToken', tokenValidation.tokenValidation)
router.post('/addQuiz', QuizesController.addQuiz)
router.get('/myQuizes', QuizesController.getQuizes)
router.get('/allQuizes', QuizesController.getAllQuizes)

module.exports = router