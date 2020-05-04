const express = require('express')
const router = express.Router()

const { data } = require('../data/flashcardData.json')
const { cards } = data

router.get('/hello/:id', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('hello_response', {
      question: cards[req.params.id].question,
    })
  } else {
    res.render('hello');
  }
})

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

router.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello')
})

module.exports = router
