const jwt = require('jsonwebtoken')

async function getUser (req, res)  {
    try {
        const token = req.headers.authorization
        if (!token) {
            return console.log("no token");
        }
        const userData = await jwt.verify(token, "mega secret key")
        if (userData){
            return userData
        } else {
            return res.json("invalid token")
        }
    } catch (err) {
        console.error(err.message)
    }
}

async function tokenValidation(req, res) {
    if (getUser) {
        return res.json(true)
    } else {
        return res.json("invalid token")
    }
}

module.exports.getUser = getUser 
module.exports.tokenValidation = tokenValidation