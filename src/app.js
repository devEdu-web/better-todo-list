const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()

const authRoutes = require('./routes/auth')
const tasksRoutes = require('./routes/tasks')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "..", "views"))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, "..", "public")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', authRoutes)
app.use('/', tasksRoutes)


module.exports = app