const express = require('express')
const app = express()
const cors = require("cors")
const usersRouter = require("./routes/routes")
const pool = require("./db.js")

app.use(cors())
app.use(express.json())
app.use('/', usersRouter)

app.listen(3000, () => {
    console.log("server is working");
})