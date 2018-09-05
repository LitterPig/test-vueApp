<template>
    <div>
        <header-bar title="购物车"></header-bar>
        <div class="cart">
            <cart-goods  :iconClass="iconClass" v-on:getChecked="getChecked"></cart-goods>
        </div>
        <div class="bottom-price">
            <div class="choice-btn">
                <div @click="allChoose">
                    <i :class="[iconClass,ischecked?activeClass:'']"></i>
                    <span>全选</span>
                </div>
                <div>
                    合计:<span class="all-price">¥{{choosePrice}}</span>
                </div>
            </div>
            <div @click="countTotal" :class="[countClass,checked?activeClass:'']" ref="count" >
                <router-link :to="toLink">
                       结算({{totalAmt}})
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import headerBar from '../index/headerBar'
import cartGoods from '../cart/cartGoods'
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
           ischecked:false,
           checked:false,
           toLink:'',
           iconClass:'iconfont icon-danxuanfuxuan',
           countClass:'count-total',
           activeClass:'active',
        }
    },
    components:{
        headerBar,
        cartGoods
    },
    watch:{
       checked:{
           handler(cur){
             if(cur ){
                 this.toLink = '/buy'
             }else{
                 this.toLink = '/cart'
             }
           },
           deep:true
       }
    },
    mounted(){
        this.$store.commit('UPDATE_CART')
    },
    computed:{
        ...mapGetters({
            choosePrices:'getTotalPrice'
        }),
        choosePrice(){
            this.$store.commit('TOTAL_PRICE')
            return this.choosePrices
        },
        totalAmt(){
            const list = this.$store.state.cart.cartList
            var count = 0
            for(let i = 0;i<list.length;i++){
                if(list[i].selected){
                   count = count + list[i].amount
                   this.checked = true
                }
            }
            return count
        },
    },
    methods:{
        allChoose(e){
            const isActive = e.currentTarget.querySelector('i').classList.contains('active');
            this.ischecked = !this.ischecked;
            if(this.ischecked){
                this.checked = true
                this.$store.commit('ALL_CHECK_STATUS')
            }else{
                this.checked = false
                this.$store.commit('NONE_CHECK_STATUS')
            }
            
        },  
        getChecked(s){
            this.ischecked = s
            this.checked = s
        },
        //结算
        countTotal(){
            console.log(this.totalAmt)
            if(this.totalAmt == 0){
                this.$toast({
                    message: '你还没有选择宝贝哦',
                    position: 'center',
                    duration: 2000
                });
            }else{
                const list = this.$store.state.cart.cartList
                for(let i = 0;i<list.length;i++){
                    if(list[i].selected){
                        this.$store.commit('COMMIT_LIST',list[i])
                    }
                }
                
            }
        }    
    }
}
</script>
<style lang="scss">
   .cart{
       margin-top: 50px;
   }
   .bottom-price{
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        width: 100%;
        box-shadow: 0 0 5px #c5c5c5;
        display: flex;
        align-items: center;
        height:5rem;
        >div{
            flex: 2;
            height: 5rem;
            line-height: 5rem;
            font-size: 1.5rem;
        &:last-child{
            flex: 1; 
            background-color: #c5c5c5;
            text-align: center;
            }  
        }
        .choice-btn{
            display: flex;
            align-items: center;
            >div{
                flex: 1;
                .iconfont{
                    color: #c5c5c5;
                    margin-left: 1rem;
                    font-size: 2rem;
                    &.active{
                        color: #f55669;
                    }
                }
                &:last-child{
                    text-align: right;
                    padding-right: 1rem;
                    flex: 2;
                    .all-price{
                        color: #f55669;
                        margin-left: 1rem;
                        font-size: 1.5rem;
                    }
                }   
            }
        }
        .count-total{
            &.active{
                background-color: #f55669;
                a{
                  color: #fff;
                }
            } 
            a{
                    color: #222;
            }
        }
   }
   .form-list{
                width: 85%;
                a{
                    border-bottom: 1px solid #f5f5f5;
                }
                .is-plain {
                    border: 1px solid #fd91bc;
                    color: #fff;
                    margin-top: 10rem;
                    border-radius: 5rem;
                    background-color: #fd91bc;                    // 
                }
            }
</style>

