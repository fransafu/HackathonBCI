var express = require('express');
var router = express.Router();


router.post('/upload', function(req, res) {
  console.log(req.files);
  if (!req.files)
    res.json({"mensaje": "No files were uploaded."});
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('', function(err) {
    if (err)
      res.json(JSON.parse(err));
 
    res.json({"mensaje": "File uploaded!"});
  });
});

 router.get('/', function(req, res, next) {
  res.render('upload');
});
module.exports = router;