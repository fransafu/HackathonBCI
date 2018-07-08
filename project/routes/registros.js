var express = require('express');

var router = express.Router();
var registroController = require('../controller/registro.controller');



// READ
router.get('/', registroController.read);

// CREATE
router.get('/new', registroController.new);
router.post('/create', registroController.create);

// Find specific id
router.get('/:id', registroController.findById);

// UPDATE
router.put('/:id', registroController.update);

// DELETE
router.get('/delete/:id', registroController.delete);

module.exports = router;
