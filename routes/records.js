var express = require('express');
var router = express.Router();

var records = [1,2,3];

router.get('/', function(req, res, next){
  res.send(records);
});

router.post('/', function(req, res, next){
  console.log('req.body: ', req.body);
  res.send(req.body);
})



module.exports = router;
