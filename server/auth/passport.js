var passport = require('passport')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

/**
* Configure OAuth2 authorization for Thingplus
* @param {String} name - Strategy name
*/
function configureThingplusStrategy(name) {
  passport.use(name, new OAuth2Strategy({
    authorizationURL: process.env['AUTHORIZATION_URL'],
    tokenURL: process.env['TOKEN_URL'],
    clientID: process.env['CLIENT_ID'],
    clientSecret: process.env['CLIENT_SECRET'],
    callbackURL: process.env['CALLBACK_URL']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(err, profile);
    }
  ));
}

exports.configureThingplusStrategy = configureThingplusStrategy;
