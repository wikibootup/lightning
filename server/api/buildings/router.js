var express = require('express');
var Buildings = require('./buildings');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('buildings works.');
});

router.post('/new', function(req, res) {
  res.json(Buildings.register(req.body));
});

module.exports = router;
