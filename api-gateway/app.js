/*===================
; Title: App
; Author: George Henderson
; Date: 28 March 2021
; Description: Application logic
;===================*/

var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');

var apiCatalog = require('./routes/api-catalog');
var indexRouter = require('./routes/index');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1.qqxjy.mongodb.net/api-gateway?authSource=admin&replicaSet=atlas-njj3c5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { //!fix string
  promiseLibrary: require('bluebird')
}).then(() => console.log('connection successful')).catch((err) => console.error(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
