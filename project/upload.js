const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var router = express.Router();
// default options
 
router.post('/', function(req, res ,next) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
//   The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
   //Use the mv() method to place the file somewhere on your server
  sampleFile.mv('', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

module.exports= router;