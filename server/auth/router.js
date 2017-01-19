var express = require('express');
var passport = require('passport');
var Auth = require('./auth');

var router = express.Router();
auth = new Auth();

router.get('/auth/thingplus',
  passport.authenticate('thingplus'));

router.get('/auth/thingplus/callback', function(req, res, next) {
  res.send('callback');
});

module.exports = router;
