module.exports = class Auth {

  constructor() {
    this._AUTHORIZATION_URL = process.env['AUTHORIZATION_URL'];
    this._RESPONSE_TYPE = 'code';
    this._CLIENT_ID = process.env['CLIENT_ID'];
    this._REDIRECT_URI = process.env['REDIRECT_URI']; 
  }

  /**
  * Get Oauth2 authorization URL
  * @return {string} Authorization query URL
  */
  getAuthUrl() {
    const AUTH_QUERY_URL = this._AUTHORIZATION_URL + 
      '?response_type=' + this._RESPONSE_TYPE + 
      '&client_id=' + this._CLIENT_ID + 
      '&redirect_uri=' + this._REDIRECT_URI;

    return AUTH_QUERY_URL;
  }
}
