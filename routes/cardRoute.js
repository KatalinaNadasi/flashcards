const express = require('express')
const router = express.Router()

const { data } = require('../data/flashcardData.json')
const { cards } = data

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('hello_response')
  } else {
    res.render('hello');
  }
})

router.get('/hello/:id', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    const { side } = req.query
    const { id } = req.params
    const text = cards[id][side]
    const { hint } = cards[id]
    const templateData = { text }

    res.render('hello_response', templateData)

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
