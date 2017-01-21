var express = require('express');
var Passport = require('./passport');
//var Auth = require('./auth');

var router = express.Router();
//auth = new Auth();
var passport = new Passport();

router.get('/', function(req, res) {
  res.json(req.user);
});

router.get('/thingplus',
  passport.passport.authenticate('thingplus', passport.getThingplusScope()));

router.get('/thingplus/callback',
  passport.passport.authenticate('thingplus', { failureRedirect: 'api/auth/thingplus/error' }),
    function(req, res) {
      res.redirect('/#/dashboard');
    }
);

module.exports = router;
