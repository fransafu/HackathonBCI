var express = require('express');
var router = express.Router();
var empresaController = require('../controller/empresa.controller');

// Index
router.get('/', empresaController.read);

// Get specific user by id
router.get('/:id', empresaController.findById);

// Create
router.post('/', empresaController.create)

// Update
router.put('/:id', empresaController.update);

// Delete
router.delete('/:id', empresaController.delete);

module.exports = router;
