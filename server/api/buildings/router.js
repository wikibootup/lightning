var express = require('express');
var util = require('util')

var Buildings = require('./buildings');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('buildings works.');
});

router.post('/new', function(req, res) {
  req.checkBody("name", "Enter a valid name.").notEmpty();

  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
      return;
    }
  res.json(Buildings.register(req.body));
  });
});

module.exports = router;
