var express = require('express');
var router = express.Router();

// CREATE
router.post('/', function(req, res) {
});

// READ
router.get('/', function(req, res, next) {
  res.render('registros', { registros: [] });
});

router.get('/:id', function(req, res, next) {
});


// UPDATE
router.put('/:id', function(req, res) {
});

// DELETE
router.delete('/:id', function(req, res) {
});


module.exports = router;
