/*=====================
; Title: Application Config
; Author: George Henderson
; Date 15 March 2021
; Description: Initializes configuration variables
;=====================*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';

module.exports = config;