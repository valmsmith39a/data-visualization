var express = require('express');
var router = express.Router();

var records = [{record:'a', checkbox:false}];

router.get('/', function(req, res, next) {
  res.send(records);
});

router.post('/', function(req, res, next) {
  records.push(req.body);
  res.send(req.body);
});

router.put('/:index', function(req, res, next) {
  records.splice(parseInt(req.params.index), 1, req.body);
  res.send({recordObject:req.body, index:parseInt(req.params.index)});
});

router.delete('/:index', function(req, res, next) {
  records.splice(parseInt(req.params.index), 1);
  res.status(200).send(req.params.index);
});

module.exports = router;
