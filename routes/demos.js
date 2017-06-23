var express = require('express');
var router = express.Router();
var path = require('path');
var libpath = __dirname.replace('routes','libs');
var visitorCountAdd = require(path.join(libpath,'visitorCount.js'));
router.get('/',function(req,res,next){
    res.render('demos');
    visitorCountAdd();
});

module.exports = router;