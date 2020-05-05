const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('hello_response', { name });
  } else {
    res.redirect('/hello');
  }
})


module.exports = router
