'use strict';
var express = require('express');
var router = express.Router();

/* GET honors page. */
router.get('/', function (req, res) {
    res.render('honors', { title: 'Honors' });
});

module.exports = router;
