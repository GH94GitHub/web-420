/*=====================
; Title: api-catalog routes
; Author: George Henderson
; Date 28 March 2021
; Description: Registers routes
;=====================*/

var express = require('express');
var router = express.Router();
var auth_controller = require('../controller/authController');

// POST request for logging in a user
router.post('/auth/login', auth_controller.user_login);

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register)


// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

// GET request for logging out a user
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;