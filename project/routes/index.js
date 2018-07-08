var express = require('express');
var router = express.Router();
var db = require('../models');
var Registro = db.registro;
var User = db.user;
var Empresa = db.empresa;

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
