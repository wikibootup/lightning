var express = require('express');
var util = require('util')

var Buildings = require('./buildings');

var router = express.Router();

router.get('/', function(req, res) {
  res.json(req.session['buildings']);
});

router.get('/:id', function(req, res) {
  var buildings = req.session['buildings'];
  for (building in buildings) {
    if(buildings[building]['id'] == req.params.id) {
      res.json(buildings[building]);
    }
  }
  res.json();
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

router.get('/:id/gateways', function(req, res) {
  var buildings = req.session['buildings']; 
  var building;

  for (building in buildings) {
    if(buildings[building]['id'] == req.params.id) {
      building = buildings[building];
    }
  }
  res.json(building['gateways']);
});

module.exports = router;
