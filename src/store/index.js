import Vue from 'vue'
import Vuex from 'vuex'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    oidcStore: vuexOidcCreateStoreModule(
      process.env.OIDC,
      // Optional OIDC store settings
      {
        namespaced: false,
        dispatchEventsOnWindow: true
      },
      // Optional OIDC event listeners
      {
        userLoaded: user => {
          console.log("OIDC user is loaded:", user);
          return;
        },
        userUnloaded: () => console.log("OIDC user is unloaded"),
        accessTokenExpiring: () => console.log("Access token will expire"),
        accessTokenExpired: () => {
          console.log("Access token did expire");
          return;
        },
        silentRenewError: () => console.log("OIDC user is unloaded"),
        userSignedOut: () => {
          console.log("OIDC user is signed out");
          return;
        }
      }
    )
  }
})