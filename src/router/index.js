import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            redirect:'/home',
            component: () => import("@/views/index"),
            meta: {
                title: "Hypescript",
                keepAlive: true
            },
        },{
            path: "/home",
            name: "home",
            component: () => import("@/views/home"),
            meta: {
                title: "Hypescript",
                keepAlive: true
            }
        }
    ]
})
