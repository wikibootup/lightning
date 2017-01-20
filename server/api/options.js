function RequestOptions() { }

RequestOptions.getThingplusOptions = function(method, resource_url, token) {
  const domain = 'https://api.thingplus.net/v1';
  return this.getOptions(method, domain, resource_url, token); 
}

/**
* Get Oauth2 options for request
* @param {String} method - Http method, ex) 'GET', 'POST', ...
* @param {String} domain - API domain, ex) 'https://api.thingplus.net/v1'
* @param {String} resource_url - URL resource, ex) '/users/me'
* @param {String} token - Oauth2 Access Token(Bearer)
* @return {Object} options - http options for request(library)
*/
RequestOptions.getOptions = function(method, domain, resource_url, token) {
  const options = {
    method: method,
    url: domain + resource_url,
    headers: { 
      'cache-control': 'no-cache',
      authorization: 'Bearer ' + token 
    }
  };
  return options;
}

module.exports = RequestOptions;
