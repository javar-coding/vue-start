import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout/Layout'
import HelloWorld from '../view/helloworld/HelloWorld'
import Index from '../view/Index'
import Login from '../view/login/Login'
import RequestDemo from '../view/requestdemo/RequestDemo'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'index',
      redirect: '/login',
      meta: { title: '首页', icon: 'home' },
      children: [
        {
          path: '/index',
          component: Index,
          hidden: true
        }
      ]
    },
    {
      path: '/vue',
      component: Layout,
      name: 'vue',
      meta: { title: 'Vue世界', icon: 'star' },
      children: [
        {
          path: '/vue/helloWorld',
          name: 'helloWorld',
          component: HelloWorld,
          meta: { title: 'HelloWorld', icon: 'car' }
        }
      ]
    },
    {
      path: '/request',
      component: Layout,
      name: 'request',
      meta: { title: '请求Demo', icon: 'edit' },
      children: [
        {
          path: '/request/demo',
          name: 'demo',
          component: RequestDemo,
          meta: { title: 'Demo', icon: 'config' }
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      hidden: true
    }
  ]
})
export default router
