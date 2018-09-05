export default {
    getCartList: state =>{
        return state.cartList
    },
    getCartListLen: state =>{
        return state.cartList.length
    },
    getTotalPrice: state =>{
        return state.cartInfos.total_price
    },
    getCommitTotalPrices:state =>{
        return state.cartInfos.commitPrice
    },

}