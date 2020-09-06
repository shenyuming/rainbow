import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const whiteList = ['/login', '/oidc-callback'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  
  if (store.getters.oidcUser == null && to.path !== '/oidcRedirect') {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
      return
    } else {
      next('/login')
      return
    }
  }

  store.dispatch('oidcCheckAccess', to).then(function (hasAccess) {
    if (!hasAccess) {
      return
    }
    if (to.path === '/login') { // 登录后login自动跳转
      next({
        path: '/'
      })
      return
    }

    next()
  })
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
