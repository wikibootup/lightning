var rp = require('request-promise');
var OAuth2RequestOptions = require('../../api/helper/oauth2-options');

function Gateways() {
}

Gateways.getGateways = function(req) {
  if(typeof req.user === 'object' && 'accessToken' in req.user) {
    return rp(
      OAuth2RequestOptions.getThingplusOptions(
        method='GET', resource_url='/gateways', token=req.user['accessToken']
      )
    );
  }
  
  return new Promise(function(thenFunction) {
    thenFunction(new Object());
  });

}

module.exports = Gateways;
