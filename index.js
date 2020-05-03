const express = require('express')
const cookieParser = require('cookie-parser')
const port = 4400

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())


app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('hello_response', { name });
  } else {
    res.redirect('/hello');
  }
})

app.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('hello_response')
  } else {
    res.render('hello');
  }
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.render('hello_response', { name: req.body.username })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
