'use strict';
var express = require('express');
var router = express.Router();

var a 

/* GET home page. */
router.get('/', function (req, res) {
    res.render('gallery', { title: 'Gallery' });
});

module.exports = router;
