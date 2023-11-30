require('dotenv').config()
require('./database/db')
const express = require('express')
const bodyParser = require('body-parser');
const PORT = process.env.PORT
global.DOMAIN = process.env.DOMAIN

const finishes = require("./routers/finishes")
const category = require("./routers/category")
const contract = require("./routers/contract")
const user = require("./routers/user")

const app = express()
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' })); 
app.use(express.json())

app.use("/images/", express.static('uploads/images'))
app.use("/documents/", express.static('uploads/documents'))

app.use("/finishes", finishes)
app.use("/category", category)
app.use("/contract", contract)
app.use("/user", user)

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
  })