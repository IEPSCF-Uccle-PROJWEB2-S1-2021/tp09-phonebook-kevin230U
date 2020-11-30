const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('phoneBook', { title: 'My phoneBook' });
});

module.exports = router;
