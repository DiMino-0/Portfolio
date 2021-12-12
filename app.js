//attributes:
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');

//routes
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var contactRouter = require('./routes/contact');

{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/css/pikaday.min.css"> */}

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
const connectSources = 
[
  "'self'"
];
const fontSources =
[
  "'self'",
  'https://cdnjs.cloudflare.com'
];

//server setup
const port = 3000;
const app = express();

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
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//routes ----------------------------------
app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/projects', projectsRouter);
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
