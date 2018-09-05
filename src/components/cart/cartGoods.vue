<template>
    <div class="cartGoods-wrap">
        <router-link to="/accessories">
            <div class="no-goods" v-show="showMsg">
                <img src="../../assets/images/informbg_03.png" alt="">
                <p>购物车空空如也，快去逛逛吧</p>
            </div>
        </router-link>
        <mt-cell-swipe  v-for="item in getCartList" :key="item.id"
        :right="[
            {
            content: '删除',
            style: { background: '#f55669', color: '#fff' },
            handler: () =>{delGoodsList(item.goodsId)}
            }]">
                <div class="cart-wrap" ref="goodsId" :id="item.goodsId">
                    <div class="cart-radio">
                        <i @click="chooseOne" :dataId="item.goodsId"  :class="[iconClass,item.selected?'active':'']"></i>
                    </div>
                    <div class="cart-img">
                        <img :src="item.imgSrc" alt="">
                    </div>
                    <div class="cart-infos">
                        <h3>{{item.title}}</h3>
                        <p class="cart-type">{{item.desc}}</p>
                        <p class="cart-price">￥{{item.price}}</p>
                        <div class="count">
                            <span @click="delNum" :dataId = "item.goodsId">-</span>
                            <span class="amount" ref="amount">{{item.amount}}</span>
                            <span @click="addNum" :dataId = "item.goodsId">+</span>
                        </div>
                    </div>
                </div>
        </mt-cell-swipe>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:"cartGoods",
    props:{
        iconClass:{
            type:String,
            default:'iconfont icon-danxuanfuxuan'
        },
    },
    data(){
        return{
           num:1,
        }
    },
    computed:{
        showMsg(){
            if(this.$store.state.cart.cartList.length>0){
                return false
            }else{
                return true
            }
        },
        ...mapGetters([
           'getCartList'
        ]),
    },    
    methods:{
        //商品数量+1
       addNum(e){
           const id = e.currentTarget.getAttribute('dataId')
           //获取当前购物车内商品的curIndex
           this.$store.commit('IS_EXIST',id);
           //改变购物车的数量和商品的数量
           this.$store.commit('CUR_GOODS_NUM');
       },
       //商品数量-1
       delNum(e){
            const id = e.currentTarget.getAttribute('dataId')
            //获取当前购物车内商品的curIndex
            this.$store.commit('IS_EXIST',id);
            //改变购物车的数量和商品的数量
            this.$store.commit('DEL_CART');        
       },
       //选中当前商品
       chooseOne(e){
            const id = e.currentTarget.getAttribute('dataId');
            this.$store.commit('IS_EXIST',id)
            this.$store.commit('CHECK_STATUS')
            const list = this.$store.state.cart.cartList.length;
            const count = this.$store.state.cart.count
            if(list == count){
                this.$emit('getChecked',true)
            }else{
                this.$emit('getChecked',false)
            }
       },
       //删除商品列表
       delGoodsList(id){
            console.log(id)
            this.$store.commit('DEL_GOODS',id)

       } 
    }
}
</script>

<style lang="scss">
    .cartGoods-wrap{
        .mint-cell.mint-cell-swipe{
            background-image: none;
            margin-bottom: 1rem;
        }
        .mint-cell-wrapper{
            display: inline-block!important;
            padding: 0!important;

        }
        div.mint-cell-swipe-buttongroup{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f55669;
            padding: 0 10px;
            font-size: 1.2rem;
            .mint-cell-swipe-button{
                height: auto;
                padding: 0;
                line-height: auto;
            }
        }
    }
    .no-goods{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            color: #999;
            img{
                width: 5rem;
                margin-bottom: 1rem;
                margin-top: 3rem;
            }
    }

    .cart-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0;
        margin-bottom: 10px;
        background-color: #fff;
        width: 100%;
        >div{
            flex: 1;
            text-align: center;
        }
        .cart-radio{
            i{
                font-size: 2rem;
                color: #c5c5c5;
                &.active{
                    color: #f55669;
                }  
            }
        }
        .cart-infos{
            flex:3;
            text-align: left;
            margin-left: 1rem;
            h3{
                font-size: 1.5rem; 
            }
            .count{
                margin-right: 3rem;
                border: 1px solid #e6e6e6;
                float: right;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                span{
                    width: 3rem;
                    line-height: 2;
                    display: inline-block;
                    border-right: 1px solid #e6e6e6;
                    text-align: center;
                    font-size: 1.2rem;
                    color: #c5c5c5;
                    &:last-child{
                        border: none;
                    }
                }
            }
            .cart-type,.cart-price{
                font-size: 1.2rem;
                line-height: 2;
            }
            .cart-price{
                color: #f55669;
            }
        }
        .cart-img img{
            width: 6rem;
            height: 6rem;
            display: inline-block;

        }
    }    
</style>

