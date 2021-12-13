//attributes:
var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');
const app = express();
var portNum = app.listen(process.env.PORT || 3000);

// Set Content Security Policies
const scriptSources = 
[
  "'self'", 
  'https://cdn.jsdelivr.net',
  'https://cdnjs.cloudflare.com'
];
const styleSources = 
[
  "'self'",
  'https://cdnjs.cloudflare.com'
];
const fontSources =
[
  "'self'",
  'https://cdnjs.cloudflare.com'
];


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: scriptSources,
    styleSrc: styleSources,
    fontSrc: fontSources
  }
 }));
app.use(compression());
app.listen(portNum);
// app.listen(process.env.PORT || port, () => {
//   console.log(`Server is running...`);
// });

//routes ----------------------------------
// app.use('/', indexRouter);
// app.use('/contact', contactRouter);
// app.use('/projects', projectsRouter);
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/projects', function(req, res, next) {
  res.render('projects');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
//------------------------------------------

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
