import * as types from './mutations_types'
export default {
    add_cart:({commit}) =>{
        commit(types.ADD_CART)
    },
    total_price:({commit}) =>{
        commit(types.TOTAL_PRICE)
    },
    cur_goods_num:({commit}) =>{
        commit(types.CUR_GOODS_NUM)
    },
    del_goods:({commit}) =>{
        commit(types.DEL_GOODS)
    },
    del_cart:({commit}) =>{
        commit(types.DEL_CART)
    },
    login:({commit}) =>{
        commit(types.Login)
    },
    is_exist:({commit}) =>{
        commit(types.IS_EXIST)
    }
}