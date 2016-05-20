var express = require('express');
var router = express.Router();

var records = [];
var likes = [];

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

router.get('/likes', function(req, res, next) {
  res.send(likes);
});

router.post('/likes', function(req, res, next) {
  likes.push(req.body);
  res.send(req.body);
})

router.put('/likes/:index', function(req, res, next) {
  res.send('edit likes array');
})

module.exports = router;
