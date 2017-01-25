var express = require('express');
var Passport = require('./passport');
//var Auth = require('./auth');

var router = express.Router();
//auth = new Auth();
var passport = new Passport();

router.get('/', function(req, res) {
  res.json(req.session['userProfile']);
});

router.get('/thingplus',
  passport.passport.authenticate('thingplus', passport.getThingplusScope()));

router.get('/thingplus/callback',
  passport.passport.authenticate('thingplus', { failureRedirect: 'api/auth/thingplus/error' }),
    function(req, res) {
      req.session.userProfile =  {
        id: req.user.id,
        name: req.user.loginId,
      };

      res.redirect('/#/auth');
    }
);

module.exports = router;
