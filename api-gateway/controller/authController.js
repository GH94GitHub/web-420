/*=====================
; Title: Auth Controller
; Author: George Henderson
; Date 28 March 2021
; Description: Exports routing functions
;=====================*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};