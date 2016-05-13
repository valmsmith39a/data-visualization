var express = require('express');
var router = express.Router();

var records = [];

router.get('/', function(req, res, next) {
  res.send(records);
});

router.post('/', function(req, res, next) {
  records.push(req.body);
  res.send(req.body);
});

router.put('/:index', function(req, res, next) {
  records.splice(req.params.index, 1, req.body);
  res.send({recordObject:req.body, index:req.params.index});
})

router.delete('/:index', function(req, res, next) {
  records.splice(req.params.index, 1);
  res.send(req.params.index);
});

module.exports = router;
