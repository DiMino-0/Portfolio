var express = require('express');
var router = express.Router();

//get the animation page
router.get('/', function(req, res, next) {
    res.render('animation', { title: 'Animation' });
});

module.exports = router;