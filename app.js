var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require('cors')
const adminHelper = require('./helpers/admin')

// mongoose.connect(`mongodb://localhost/rekap-cpkp`)
mongoose.connect(`mongodb://irianto223:anak223@cluster0-shard-00-00-kgsxm.mongodb.net:27017,cluster0-shard-00-01-kgsxm.mongodb.net:27017,cluster0-shard-00-02-kgsxm.mongodb.net:27017/scoreboard?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
`, (err, resolve) => {
  if (err) {
    console.log(`MongoDB err: ${err}`);
  } else {
    console.log(resolve);
  }
})

var index = require('./routes/index');
var users = require('./routes/users');
var lectures = require('./routes/lectures');
var results = require('./routes/results');

var app = express();

adminHelper.createAdmin()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/lectures', lectures);
app.use('/results', results);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
