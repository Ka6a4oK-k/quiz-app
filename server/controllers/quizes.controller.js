const db = require('../db.js')
const jwt = require('jsonwebtoken')
const tokenValidation = require('../jwt/tokenValidation')

class QuizesController {

    async addQuiz(req, res) {
        try {
            const user = await tokenValidation.getUser(req, res)
            const userId = user.user_id
            const quiz = JSON.stringify(req.body)
            try {
                await db.query('INSERT INTO quizes (user_id, quiz_json) values ($1, $2)', [userId, quiz])
            } catch (err) {
                console.error(err.message)
            }
            res.json(JSON.parse(quiz))
        } catch (err) {
            console.error(err.message)
        }
    }

    async getQuizes(req, res) {
        try {
            const user = await tokenValidation.getUser(req, res)
            const userId = user.user_id
            try {
                const quizes = await db.query('SELECT * FROM quizes where user_id = ($1)', [userId])
                res.json(quizes.rows)
            } catch (err) {
                console.error(err.message)
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    async getAllQuizes(req, res) {
        try {
            const quizes = await db.query('SELECT * FROM quizes ')
            res.json(quizes.rows)
        } catch (err) {
            console.error(err.message)
        }
    }
}

module.exports = new QuizesController()