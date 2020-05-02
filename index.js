const express = require('express')
const app = express()
const port = 4400

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('layout')
})

app.get('/hello', (req, res) => {
  res.render('hello')
})

app.post('/hello', (req, res) => {
  res.render('hello')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
