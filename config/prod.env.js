'use strict'
module.exports = {
  OIDC: {
    authority: '"https://www.proxyrainbow.com/oidc"',
    clientId: '"Tge.Pro"',
    redirectUri: '"http://localhost:8080/#/oidc-callback"',
    postLogoutRedirectUri:'"http://localhost:8080"',
    responseType: '"code"',
    scope: '"openid profile Tgeapi"',
    automaticSilentRenew: true,
    silentRedirectUri: '"http://localhost:8080/silent-renew-oidc.html"'
  },
  NODE_ENV: '"production"',
  BASE_API:'"https://www.proxyrainbow.com"',
}
