var express = require('express');
var util = require('util')

var Buildings = require('./buildings');

var router = express.Router();

router.get('/', function(req, res) {
  res.json({name: 'smart building1'});
});

router.post('/new', function(req, res) {
  req.checkBody("name", "Enter a valid name.").notEmpty();

  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
      return;
    }

    if('buildings' in req.session) {
      req.session['buildings'].concat(req.body);
    }
    else {
      req.session['buildings'] = (new Array).concat(req.body);
    }

    res.send(req.session['buildings']);
  });
});

module.exports = router;
