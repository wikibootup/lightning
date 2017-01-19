var express = require('express');
var router = express.Router();

var Auth = require('./auth');
auth = new Auth();

router.get('/auth/thingplus', function(req, res, next) {
  passport.use
//  res.redirect(auth.getAuthUrl());
});

module.exports = router;
