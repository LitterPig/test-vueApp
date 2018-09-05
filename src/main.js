// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './style/common.scss'
import './assets/iconfont/iconfont.css'
Vue.use(MintUI)
Vue.use(Vuex);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if(store.state.cart.loginStatus){
          next()
      }else if(store.state.cart.cartList.length == 0){
        next({
            path:'/cart',
        })
      }else{
          next({
              path:'/login',
              query:{ redirect: to.fullPath} 
          })
      }
  }else{
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
