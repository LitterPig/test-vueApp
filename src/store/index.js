import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/cart'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        cart
    }
})
export default store