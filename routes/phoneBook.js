const express = require('express');
const router = new express.Router();

/* get users listing. */

router.get('/',(req, res, next) =>{
  res.render('phoneBook',{title: 'PhonBook'});
});

module.exports = router;
