var express = require('express');
var router = express.Router();

var records = [1,2,3];

router.get('/', function(req, res, next){
  res.send(records);
});

router.post('/', function(req, res, next){
  res.send(req.body);
});

router.delete('/', function(req, res, next){
  res.send('delete successful');
});

module.exports = router;
