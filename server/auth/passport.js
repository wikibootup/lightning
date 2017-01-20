var passport = require('passport')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var request = require('request');
var Options = require('../api/options');

function Passport() {
  this.passport = passport;
  this.scope = { scope: ["user-profile-read", "gateway-update", "timeline-read", 
    "tag", "rule-read", "service-read", "site-read"] };
}

Passport.prototype.configureSession = function() {
  this.passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  this.passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
      cb(err, user);
    });
  });
}
 
/**
* Configure OAuth2 authorization for Thingplus
* @param {String} name - Strategy name
*/
Passport.prototype.configureThingplusStrategy = function(name) {
  passport.use(name, new OAuth2Strategy({
      authorizationURL: process.env['AUTHORIZATION_URL'],
      tokenURL: process.env['TOKEN_URL'],
      clientID: process.env['CLIENT_ID'],
      clientSecret: process.env['CLIENT_SECRET'],
      callbackURL: process.env['CALLBACK_URL'],
    },
    function(accessToken, refreshToken, profile, cb) {
      const userData = 
        request(
          Options.getThingplusOptions(
            method='GET', resource_url='/users/me', token=accessToken
          ), 
          function (error, response, body) {
            if (error) throw new Error(error);
          }
        );
      
      profile = {
        id: userData.id,
        name: userData.loginId,
        accessToken: accessToken
      }

      cb(null, profile);
    }
  ));
};

module.exports = Passport;
