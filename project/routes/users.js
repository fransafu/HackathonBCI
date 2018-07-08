var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');

// index
router.get('/', userController.read);

// Get specific user by id
router.get('/:id', userController.findById);

// Create
router.post('/', userController.create)

// Update
router.put('/:id', userController.update);

// Delete
router.delete('/:id', userController.delete);

module.exports = router;
