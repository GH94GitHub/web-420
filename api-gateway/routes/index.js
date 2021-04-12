/*=====================
; Title: Index route
; Author: George Henderson
; Date 28 March 2021
; Description: Registers a route
;=====================*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
