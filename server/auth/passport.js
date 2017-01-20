var passport = require('passport')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

function Passport() {
  this.passport = passport;
}

Passport.prototype.configureSession = function() {
  this.passport.serializeUser(function(user, cb) {
    cb(null, 'test serialized user');
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
      callbackURL: process.env['CALLBACK_URL']
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log('access token=');
      console.log(accessToken);
      cb(null,profile);      
    }
  ));
};

module.exports = Passport;
