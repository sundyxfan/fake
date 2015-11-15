var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var browserify = require('browserify-middleware');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// back-end router

// app.use('/') 和 app.get('/') 区别
app.get('/', function (req, res, next) {
    res.header('Content-Type', 'text/html');
    res.end(new String(fs.readFileSync('./public/index.html')));
    next();
});

// router 定义的路由只有当扑捉到/api  时router中定义的路由才起作用，否则app中相同的路径的生效
app.use('/', require('./routes/index')());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});


module.exports = app;
