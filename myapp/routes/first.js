var express = require('express');
var router = express.Router();


router.post('/',function(req,res)
{
    res.send("Tutorial on Angular");
});
router.put('/',function(req,res)
{
    res.send('Welcome to Guru99 Tutorials');
});

module.exports = router;
