var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
   res.render('process_get');
});

module.exports = router;
