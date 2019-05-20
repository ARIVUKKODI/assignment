var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var findsRouter = require('./routes/find');
var processRouter = require('./routes/process_get');
var firstRouter = require('./routes/first');
var profileRouter = require('./routes/profile');

const profile = {
  username: 'azat',
  email: '[reducted]',
  url: 'http://azat.co'
}


var app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/find', findsRouter);
app.use('/process_get', processRouter);
app.use('/first', firstRouter);
app.use('/profile', profileRouter);

app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.firstname)
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


app.get('/profile', (req, res)=>{
  res.send(profile)
});
app.post('/profile', (req, res) => {
  profile = req.body
  res.sendStatus(201)
});
app.put('/profile', (req, res)=>{
  Object.assign(profile, req.body)
  res.sendStatus(204)
});
app.delete('/profile', (req, res)=>{
  profile ={}
  res.sendStatus(204)
});

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
