'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  OIDC: {
    authority: '"https://www.proxyrainbow.com"',
    clientId: '"Tge.Pro"',
    redirectUri: '"http://localhost:8080/#/oidc-callback"',
    postLogoutRedirectUri:'"http://localhost:8080"',
    responseType: '"code"',
    scope: '"openid profile Tgeapi"',
    automaticSilentRenew: true,
    silentRedirectUri: '"http://localhost:8080/silent-renew-oidc.html"'
  },
  NODE_ENV: '"development"',
  BASE_API:'"https://www.proxyrainbow.com"',
})
