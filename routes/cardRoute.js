const express = require('express')
const router = express.Router()

const { data } = require('../data/flashcardData.json')
const { cards } = data

router.get('/', (req, res) => {
  const numberOfCards = cards.length
  const flashcardId = Math.floor( Math.random() * numberOfCards )
  const name = req.cookies.username;
  if (name) {
    res.redirect(`/hello/${flashcardId}?side=question`)
  } else {
    res.redirect('/hello');
  }
})

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
    const { side } = req.query
    const { id } = req.params
    const text = cards[id][side]
    const { hint } = cards[id]
    const templateData = { id, text }

    if (!side) {
      res.redirect(`/hello/${id}?side=question`)
    }

    if (side === 'question'){
      templateData.hint = hint
      templateData.sideToShow = 'answer'
      templateData.sideToShowDisplay = 'Answer'
    } else if (side === 'answer'){
      templateData.sideToShow = 'question'
      templateData.sideToShowDisplay = 'Question'
    }
    res.render('hello_response', templateData)
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
