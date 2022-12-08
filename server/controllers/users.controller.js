const db = require('../db.js')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const jwtGenerator = require('../jwtGenerator')

class UsersController {
    async createUser(req, res){
        const {username, email, password} = req.body
        try {
            const exists = await db.query("SELECT * FROM users WHERE email = $1", [email])
            if(exists.rows.length !== 0){
                return res.json(`user with email ${email} already exists`);
            } else {
                await db.query("INSERT INTO users (username, email, password) values ($1, $2, $3) RETURNING *", [username, email, password])
            }
        } catch (err) {
            console.log(err);
        }
        res.json(req.body+" user added")
    }

    async signInUser(req, res) {
        const { email, password } = req.body
        try {
            const user = await db.query("SELECT * FROM users where email = $1", [email])
            if (!user.rows[0]) {
                return res.json("incorrect data");
            }
            const passIsValid = await bcrypt.compare(password, user.rows[0].password)
            if (!passIsValid) {
                return res.json("incorrect data");
            }
            const token = jwtGenerator(user.rows[0])
            res.json({ token })
        } catch (err) {
            console.log(err);
        }
    }

    async checkToken(req, res) {
        try {
            const token = req.headers.authorization
            if (!token) {
                return console.log("no token");
            }
            const userData = await jwt.verify(token, "mega secret key")
            console.log(userData);
            res.json(true)
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UsersController()