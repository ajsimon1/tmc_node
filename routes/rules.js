'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rules', function (req, res) {
    res.render('rules', { title: 'Rules' });
});

module.exports = router;
