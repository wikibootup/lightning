var express = require('express');
var passport = require('passport');
var Auth = require('./auth');

var router = express.Router();
auth = new Auth();

router.get('/auth/thingplus',
  passport.authenticate('thingplus'));

router.get('/auth/thingplus/callback',
  passport.authenticate('thingplus', { failureRedirect: '/auth/thingplus/error' }),
    function(req, res) {
      console.log(req.url.query);
      res.redirect('/');
    }
);

module.exports = router;
