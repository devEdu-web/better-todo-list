const express = require('express')
const path = require('path')
const app = express()

const authRoutes = require('./routes/auth')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "..", "views"))

app.use(express.static(path.join(__dirname, "..", "public")))
app.use(express.urlencoded({extended: true}))

app.use('/', authRoutes)


module.exports = app