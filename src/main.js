// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import VueScroller from 'vue-scroller'
import './assets/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VueCompositionApi from '@vue/composition-api' // composition-api
import VueParticles from 'vue-particles'
import '@/icons'

Vue.config.productionTip = false

Vue.use(ElementUI, { zhLocale })
Vue.use(VueScroller)
Vue.use(VueCompositionApi)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (store.getters.userInfo.name !== '') {
      next({path: '/index'})
    } else {
      next()
    }
  } else if (store.getters.userInfo.name === undefined || store.getters.userInfo.name === '') {
    next({path: '/login'})
  } else {
    next()
  }
})
