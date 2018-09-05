import * as types from './mutations_types'
export default {
    //该商品是否已经存在购物车中
    [types.IS_EXIST] (state,id){
       const list = state.cartList
       if(list.length>0){
        for(let i = 0;i<list.length;i++){
            if(list[i].goodsId === id){
                state.curIndex = i
            }
        }
       }
    },
    //添加商品到购物车
    [types.ADD_CART](state,product){
        console.log(state)
        console.log(product)
        state.cartList.push(product);
        state.cartInfos.total_amount = state.cartInfos.total_amount + product.amount
    },
    //添加已经存在的商品
    [types.CUR_GOODS_NUM] (state){
        state.cartList[state.curIndex].amount = parseInt(state.cartList[state.curIndex].amount)
        //当前商品数量+1
        state.cartList[state.curIndex].amount ++
        //购物车数量+1
        state.cartInfos.total_amount ++
    },    
    //计算总价
    [types.TOTAL_PRICE](state){
        state.cartInfos.total_price = 0
        const list= state.cartList
        for (let i = 0;i<list.length;i++){
            if(list[i].selected){
                state.cartInfos.total_price = state.cartInfos.total_price + (list[i].price * list[i].amount)
            }
        }
    },
    //删除购物车商品
    [types.DEL_GOODS] (state,id){
        const list = state.cartList
        var idx = '';
        let num = 0;
        for(let i = 0;i<list.length;i++){
            if(list[i].goodsId === id){
                idx = i
                num = list[i].amount
            }
        }
        state.cartList.splice(idx,1)
        state.cartInfos.total_amount = state.cartInfos.total_amount - num
    },
    //DEL_CART购物车数量-1
    [types.DEL_CART](state){
        state.cartList[state.curIndex].amount > 1 ? state.cartList[state.curIndex].amount -- :1
        state.cartInfos.total_amount > 1 ? state.cartInfos.total_amount -- : 1
        
    },
    //全选的状态
    [types.ALL_CHECK_STATUS](state){
        state.count = state.cartList.length
        const list = state.cartList 
        for(let i = 0;i<list.length;i++){
            if(!list[i].selected){
                list[i].selected = true
            }
        } 

    },
    //全不选的状态
    [types.NONE_CHECK_STATUS](state){
        state.count = 0
        const list = state.cartList 
        for(let i = 0;i<list.length;i++){
            if(list[i].selected){
                list[i].selected = false
            }
           
        } 
    },
    //商品是否被选中
    [types.CHECK_STATUS](state){
        state.cartList[state.curIndex].selected = !state.cartList[state.curIndex].selected 
        if(state.cartList[state.curIndex].selected){
            state.count ++
        }else{
            state.count >0 ? state.count -- : 0
        }
    },
    //UPDATE_CART
    [types.UPDATE_CART](state){
        state.count = 0
        const list = state.cartList 
        for(let i = 0;i<list.length;i++){
            list[i].selected = false
        }
         
    },
    //立即购买的订单信息
    [types.COMMIT_LIST](state,product){
        // state.commitList = []
        state.cartInfos.commitPrice = 0
        state.commitList.push(product);
        console.log(state.commitList)
        const commitList = state.commitList
        for(let i =0;i<commitList.length;i++){
            state.cartInfos.commitPrice = state.cartInfos.commitPrice + (commitList[i].amount * commitList[i].price)
        }
        console.log(state.cartInfos.commitPrice)
    },  
    //提交新建的地址
    [types.COMMIT_ADRESSS] (state,adress){
        state.commitAdress = []
        state.commitAdress.push(adress);
    },
    //登陆状态
    [types.Login](state,loginMsg){
        console.log(loginMsg)
        state.loginStatus = loginMsg
    },
 
}