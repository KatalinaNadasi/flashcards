const express = require('express')
const cookieParser = require('cookie-parser')
const port = 4400

const mainRoute = require('./routes/mainRoute')
const cardRoute = require('./routes/cardRoute')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())


app.set('view engine', 'pug')
app.use('/', mainRoute, cardRoute)


app.listen(port, () => console.log(`Listening on port ${port}`))
