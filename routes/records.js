var express = require('express');
var router = express.Router();

var records = [1,2,3];

router.get('/', function(req, res, next){
  res.send(records);
});

router.post('/:index', function(req, res, next){
  console.log('req.body: ', req.body);
  console.log('req.params: ', req.params.index);
  res.send('post successful');
})



module.exports = router;
