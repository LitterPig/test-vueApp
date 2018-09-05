<template>
    <div id="buy">
        <header-bar title="确认订单"></header-bar>
        <div class="address">
            <div>
               <i class="iconfont icon-youjiantou1"></i>
            </div>
            <div class="creat-adress" v-show="isShow">
               <router-link to="/adress">
                  没有收获地址哦,赶快创建一个吧
               </router-link>
           </div>
           <div v-show="!isShow" class="self-wrap" >
                <div  v-for="item in commitAdress" :key="item.id">
                    <div class="self-info">
                            <span>收货人:{{item.name}}</span>
                            <span>{{item.tel}}</span>
                        </div>
                        <div>
                            收获地址:{{item.adress}}
                        </div>
                </div>
           </div>
           <div></div>
        </div>
        <div  v-for="item in goodsInfos" :key="item.id" class="content">
            <div class="cart-wrap"> 
                <div class="cart-img">
                    <img :src="item.imgSrc" alt="">
                </div>
                <div class="cart-infos">
                    <h3>{{item.title}}</h3>
                    <p class="cart-type">{{item.desc}}</p>
                    <p class="cart-price">￥{{item.price}}</p>
                    <p class="cart-count">x {{item.amount}}</p>
                </div>
            </div>
            <div class="express-info">
                <ul>
                    <li>
                        <div>
                        配送方式
                        </div>
                        <div>
                        <span>中通快递 免邮</span>
                        <span><i class="iconfont icon-youjiantou1"></i></span>
                        </div>
                    </li>
                    <li>
                        <div>
                        买家留言
                        </div>
                        <div  class="only">
                        <input type="text" name="" placeholder="选填:填写备注" >
                        </div>
                    </li>
                    <li>
                        <div>
                        商品总额
                        </div>
                        <div>
                        共{{item.amount}}件商品 小计: ￥{{commitPrice}}
                        </div>
                    </li>
                    <li>
                        <div>
                        优惠折扣
                        </div>
                        <div>
                        ￥0
                        </div>
                    </li>
                </ul>
            </div>
        </div>
       <div class="paymoney">
           <div class="money">合计金额:<span class="price">￥{{getCommitPrices}}</span></div>
           <div class="submit-btn" @click="submitOrder">提交订单</div>
        </div>
    </div>
</template>
<script>
import headerBar from '../index/headerBar'
import { mapState } from 'vuex'
export default {
    data(){
        return{
           goodsInfos:[],
           commitAdress:[],
           isShow:true,
        }
    },
    mounted(){

        this.goodsInfos = this.$store.state.cart.commitList
        console.log(this.$store.state.cart.commitAdress)
        this.commitAdress = this.$store.state.cart.commitAdress
        this.showAdress()
    },
    computed:{
       commitPrice(){
          const commitList = this.$store.state.cart.commitList
          return parseInt(commitList[0].amount * commitList[0].price)
       },
       getCommitPrices(){
           return this.$store.state.cart.cartInfos.commitPrice
       }
    },
    components:{
       headerBar
    },
    methods:{
        submitOrder(){
           
        },
        showAdress(){
            if(this.commitAdress.length>0){
                this.isShow = false

            }
        }
    }
}
</script>
<style lang="scss" scoped>
    #buy{
            margin-bottom: 4rem;
    }
    .address,.self-info,.cart-wrap,.express-info li,.paymoney{
        display: flex;
        align-items: center;
        background-color: #fff;
        margin-bottom: 1rem;
    }
   .address{
       margin-top: 40px;
       padding: 1rem 0;
       font-size: 1.3rem;
       >div{
           flex:1;
           text-align: center;
       }
       .creat-adress{
         text-align: center;
         a{
             color: #2c3e50;
         }
       }
       .self-wrap,.creat-adress{
           flex:8;
           text-align: left; 
           >div{
               line-height: 1.3;
           }
           .self-info{
               line-height: 2;
               margin: 0;
               span{
                   flex:1;
                   text-align: right;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                   &:first-child{
                       text-align: left
                   }
               }
           }
       }
       
   }
   .content{
       margin-bottom: 1rem;
   }
   .cart-wrap{
       text-align: center;
       padding: 1rem 0;
       background-color: #f9f9f9;
       margin-bottom: 0;
       >div{
          flex:1;
          &.cart-img{
             img{
                width: 6rem;
                height: 6rem;
                display: inline-block;
             }
          }
          &.cart-infos{
              flex:2;
              text-align: left;
              h3{
                  margin-bottom: 0.5rem;
              }
              .cart-count{
                  text-align: right;
                  padding-right: 1rem;
              }
              .cart-price{
                    color: #f55669; 
                    margin-top: 0.5rem;
              }
          }

       }
   }
   .express-info{
       margin-top: 0!important
   }
   .express-info li{
       padding:  1rem;
       border-bottom: 1px solid #f5f5f5;
        margin: 0;
       >div{
           flex:1;
           text-align: right;
            line-height: 2;
          &:first-child{
            text-align: left;
          } 
          &.only{
              flex:3;
              text-align: left;
              input{
                  border:none;
                  outline: none;
              }
          }
       }
   }
   .paymoney{
        position: fixed;
        width: 100%;
        bottom: 0;
        margin: 0;
        left: 0;
        height: 4rem;
        line-height: 4;
        font-size: 1.4rem;
        overflow: hidden;
       >div{
           flex: 1;
           text-align: center;
           &.money{
               flex: 2;
               text-align: right;
                padding-right: 2rem;
                background: #fff;
                .price{
                    color: #ff5c70;
                    font-size: 1.5rem;
                }
           }
           &.submit-btn{
                text-align: center;
                background-color: #ff5c70;
                color: #fff;
           }
       }
   }
</style>


