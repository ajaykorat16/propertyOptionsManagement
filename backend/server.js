require('dotenv').config()
require('./database/db')
const express = require('express')
const PORT = process.env.PORT
const finishes = require("./routers/finishes")
const category = require("./routers/category")
const user = require("./routers/user")

const app = express()

app.use(express.json())

app.use("/images/", express.static('uploads/images'))
app.use("/finishes", finishes)
app.use("/category", category)
app.use("/user", user)

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
  })