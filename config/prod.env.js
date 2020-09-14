'use strict'
module.exports = {
  OIDC: {
    authority: '"https://www.proxyrainbow.com"',
    clientId: '"Rainbow.Pro"',
    redirectUri: '"https://www.proxyrainbow.com/#/oidc-callback"',
    postLogoutRedirectUri:'"https://www.proxyrainbow.com"',
    responseType: '"code"',
    scope: '"openid profile Tgeapi"',
    automaticSilentRenew: true,
    silentRedirectUri: '"https://www.proxyrainbow.com/silent-renew-oidc.html"'
  },
  NODE_ENV: '"production"',
  BASE_API:'"https://www.proxyrainbow.com"',
  PUBLISHABLE_KEY:'"pk_live_51HMu4CK7JUCEXS5aHhHm4lFmN7Y9N4RKyJJKfiGufSjF23zm8zm2s0KCTPcctJITFmziqntXRj3BjZzKaaOVxzBN00gxVPlrkh"'
}
