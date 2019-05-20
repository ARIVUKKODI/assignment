var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('find', { title: 'Express' , name: 'arun' , address: '3/35'});
});


module.exports = router;
