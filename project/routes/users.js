var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');

/* GET index users */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// Get specific user by id
router.get('/find/:id', userController.findById);
// Update user
router.put('/update/:id', userController.update);
// Delete user
router.delete('/delete/:id', userController.delete);

module.exports = router;
