import express from 'express';
import bodyParser from 'body-parser';
import models from './models';
var path = require('path');
var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var logger = require('morgan');
var app = express();
var fileUpload = require('express-fileupload');

// Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var metricsRouter = require('./routes/metrics');
var registrosRouter = require('./routes/registros');
var uploadRouter = require('./routes/upload');

var seeder = require('./models/seeder');

// default options for fileUpload
app.use(fileUpload());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definir rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/metrics', metricsRouter);
app.use('/registros', registrosRouter);
app.use('/upload', uploadRouter);

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

models.sequelize.sync().then(() => {
  app.listen(8080, function() {
    console.log('Servidor disponible en el puerto 3000');
    /* console.log('Haciendo seeder');
    seeder.seedRol();
    seeder.seedUser();
    seeder.seedEmpresas(); */
  })
});
