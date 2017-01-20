var express = require('express');
var Passport = require('./passport');
var Auth = require('./auth');

var router = express.Router();
auth = new Auth();
var passport = new Passport();

router.get('/auth/thingplus',
  passport.passport.authenticate('thingplus', passport.scope));

router.get('/auth/thingplus/callback',
  passport.passport.authenticate('thingplus', { failureRedirect: '/auth/thingplus/error' }),
    function(req, res) {
      res.redirect('/#/dashboard');
    }
);

module.exports = router;
