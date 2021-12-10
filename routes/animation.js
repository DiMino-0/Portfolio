//express app studd
var express = require('express');
var router = express.Router();

//get the animation page
router.get('/', function(req, res, next) {
    res.render('animation', { title: 'Animations' });
});
//export the router
module.exports = router;