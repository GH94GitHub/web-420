/*=======================
; Title: User model
; Author: George Henderson
; Date: 28 March 2021
; Description: Exports a User model with {username, password, email}
;=======================*/

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
var User  = mongoose.model('User', userSchema);

module.exports = User;

module.exports.add = function(user, callback) {
    user.save(callback);
}
module.exports.getById = function(id, callback) {
    var query = {_id : id};
    User.findById(query, callback);
}
module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
}