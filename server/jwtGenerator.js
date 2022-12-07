const jwt = require("jsonwebtoken")

const jwtGenerator = (payload) => {
    return jwt.sign(payload, "mega secret key")
}

module.exports = jwtGenerator