import Vue from 'vue'
import Router from 'vue-router'
import OidcCallback from '@/views/OidcCallback'
import oidcRedirect from '@/views/OidcRedirect'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            redirect:'/home',
            component: () => import("@/views/home"),
            meta: {
                title: "RainBow",
                keepAlive: true
            },
        },{
            path: "/home",
            name: "home",
            component: () => import("@/views/home"),
            meta: {
                title: "RainBow",
                keepAlive: true
            }
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/about"),
            meta: {
                title: "RainBow",
                keepAlive: true
            }
        }, 
        { path: '/login', redirect:'oidcRedirect', meta: { sortNo: 0 }, hidden: true },
        {
          path: '/oidc-callback', // Needs to match redirect_uri in you oidcSettings
          name: 'oidcCallback',
          component: OidcCallback,
          meta: {
            sortNo: 0,
            isOidcCallback: true,
            isPublic: true
          }
        },
        {
          path: '/oidcRedirect', // oidc临时跳转页面
          name: 'oidcRedirect',
          meta: { sortNo: 0 },
          component: oidcRedirect
        },
        {
            path: "/order",
            name: "order",
            component: () => import("@/views/order"),
            meta: {
                title: "RainBow",
                keepAlive: true
            }
        }
    ]
})
