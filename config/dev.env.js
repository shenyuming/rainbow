'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  OIDC: {
    authority: '"https://www.proxyrainbow.com"',
    clientId: '"Rainbow.Pro"',
    redirectUri: '"http://localhost:8080/#/oidc-callback"',
    postLogoutRedirectUri:'"http://localhost:8080"',
    responseType: '"code"',
    scope: '"openid profile Tgeapi"',
    automaticSilentRenew: true,
    silentRedirectUri: '"http://localhost:8080/silent-renew-oidc.html"'
  },
  NODE_ENV: '"development"',
  BASE_API:'"http://www.tge-eureka.com:52789"',
  PUBLISHABLE_KEY:'"pk_live_51HMu4CK7JUCEXS5aHhHm4lFmN7Y9N4RKyJJKfiGufSjF23zm8zm2s0KCTPcctJITFmziqntXRj3BjZzKaaOVxzBN00gxVPlrkh"'
})
