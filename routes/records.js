var express = require('express');
var router = express.Router();

var records = [1,2,3];

router.get('/', function(req, res, next){
  res.send(records);
});



module.exports = router;
