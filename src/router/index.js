import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',

      component: resolve =>
        require(['@/views/index.vue'], resolve)
    },
    {
      path: '/person',
      name: 'person',
      component: resolve =>
        require(['@/views/person.vue'], resolve)
    },
    {
      path: '/phone',
      name: 'phone',
      component: resolve =>
        require(['@/views/phone.vue'], resolve)
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: resolve =>
        require(['@/views/accessories.vue'], resolve)
    },
    {
      path: '/phoneInfo',
      name: 'phoneInfo',
      component: resolve =>
        require(['@/views/phoneInfo.vue'], resolve)
    },
    {
      path: '/cart',
      name: 'cart',
      component: resolve =>
        require(['@/views/cart.vue'], resolve)
    },
    {
      path: '/services',
      name: 'services',
      component: resolve =>
        require(['@/views/services.vue'], resolve)
    },
    {
      path: '/club',
      name: 'club',
      component: resolve =>
        require(['@/views/club.vue'], resolve)
    },
    {
      path: '/buy',
      name: 'buy',
      meta: {
        title: '',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
     },
      component: resolve =>
        require(['@/views/buy.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve =>
        require(['@/views/login.vue'], resolve)
    },
    {
      path: '/adress',
      name: 'adress',
      component: resolve =>
        require(['@/components/buy/adress.vue'], resolve)
    }
  ]
})
