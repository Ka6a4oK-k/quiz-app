const db = require('../db.js')
const jwt = require('jsonwebtoken')
const tokenValidation = require('../jwt/tokenValidation')

class QuizesController {

    async addQuiz(req, res) {
        try {
            const user = await tokenValidation.getUser(req, res)
            const userId = user.user_id
            const quiz = JSON.stringify(req.body)
            console.log(user);
        } catch (err) {
            console.error(err.message)
        }
        
        // try {
        //     await db.query('INSERT INTO quizes (user_id, quiz_json) values ($1, $2)', [userId, quiz])
        // } catch (err) {
        //     console.error(err.message)
        // }
        // res.json(JSON.parse(quiz))
    }

    async getQuiz(req,res) {

    }

}

module.exports = new QuizesController()