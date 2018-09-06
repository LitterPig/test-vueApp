<template>
    <div>
        <header-bar title="商品详情">
            <router-link to="/cart" class="to-cart"><i class="iconfont icon-icon01"></i></router-link>
        </header-bar>
        <div class="swipe">
            <mt-swipe :auto="4000" :show-indicators="false"> 
                <mt-swipe-item v-for="(item,index) in goodsList.imgSrc" :key="index">
                    <img :src="item" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="phone-infos">
            <div>
                <span class="price">¥ <b ref="price">{{goodsList.price}}</b> 活动促销 </span>
            </div>
            <div class="old-price">价格 <span>3999</span></div>
            <h3 ref="title">{{goodsList.title}}</h3>
            <div class="phone-express">
                <span>快递:免运费</span>
                <span ref="saleAmount">月销2812笔</span>
                <span ref="adress">上海市</span>
            </div>
        </div>
        <div class="phone-type">
            <div>
                服务<span>7天无理由 * 7天内发货 </span>
                <span class="icon-right"><i class="iconfont icon-youjiantou1"></i>  </span>
            </div>
            <div @click="openModal">
                选择<span :id="goodsId">{{phoneInfos}} </span>
                <span class="icon-right"><i class="iconfont icon-youjiantou1"></i> </span>
            </div>
            <div>
                参数<span>CPU品牌 CPU型号</span>
                <span class="icon-right"> <i class="iconfont icon-youjiantou1"></i> </span>
            </div>
        </div>
        <div class="phone-img">
            <div class="info-wrapper">
                <img class="img" src="http://img1.app.meitudata.com/meitushop/v4/mobile_img/m8/hellokitty/mt-m8-hk.png?v=201704281757" alt="">
                <p class="desc">64GB | ￥2799</p>
            </div>
            <div class="info-more">
                <h2 class="main-title">
                    美图M8 Hello Kitty特别版，
                    <br>可爱与时尚的完美碰撞。
                </h2>
                <p class="desc">美图手机第四次携手Hello Kitty官方，推出美图M8<br>Hello Kitty特别版，一举萌化你的心。</p>
            </div>
            <div class="look-info">
                <img src="http://img1.app.meitudata.com/meitushop/v4/mobile_img/m8/hellokitty/m8-hk-tit.png?v=201705040939" alt="" class="img">
                <p class="desc">白色纯真可爱，粉色青春无敌，再搭配不同的Hello<br>Kitty造型，让你无法抗拒它的魅力。</p>
            </div>
        </div>
        <div class="buy-btn">
            <div class="join-in" @click="inCart" :id="goodsList.id">加入购物车</div>
            <div class="buy-in" @click="toBuy">
                <router-link :to="toLink">立即购买</router-link>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <phone-detail v-on:phoneInfos="getPhoneInfos" v-on:getAmt="getAmt" v-on:getType="getType" :types="goodsList.specification" v-on:joinIn="inCart" :price="goodsList.price" :id="goodsList.id"></phone-detail>
        </mt-popup>
    </div>
</template>
<script>
import phoneDetail from './phoneDetail'
import headerBar from '../index/headerBar'
import { goodsInfos } from '@/api/public'
export default {
    data(){
        return{
           popupVisible:false,
           toLink:'',
           goodsId:'',
           amount:0,
           allChoose:'请选择',
           phoneType:'规格',
           phoneColor:'颜色',
           url:'',
           type:'',
           color:'',
           goodsList:[]
        }
    },
    watch:{
       allChoose:{
           handler(cur){
             console.log(cur)
             if(cur == '已选择'){
                 this.toLink = '/cart'
             }else{
                 this.toLink = '/phoneInfo'
             }
           },
           deep:true
       }
    },
    mounted(){
        goodsInfos()
        .then((res) =>{
            console.log(res)
            this.goodsList = res.goodInfo
        })
    },
    computed:{
        phoneInfos(){
            return this.allChoose + ' ' + this.phoneType + ' ' + this.phoneColor
        }
    },
    methods:{
       //选择规格和颜色的弹框 
       openModal(){
           this.popupVisible = true
       },
       //规格和颜色的选择
       getPhoneInfos(str){
           console.log(str)
           if(str.phones.allChoose == "已选择"){
               this.allChoose = str.phones.allChoose;
               this.phoneType = str.phones.phoneType;
               this.phoneColor = str.phones.phoneColor;
               this.goodsId = str.Id;
           }else{
               this.allChoose = '请选择';
               this.phoneType = '规格';
               this.phoneColor = '颜色';
               this.goodsId = '';
           }
          
       },
        //获取添加商品的数量
        getAmt(str){
         this.amount = str.num;
        },
        //获取添加商品的规格
        getType(str){
         this.type = str.type;
        },
        //加入购物车
        inCart(e){
           //如果是弹框里面点击的加入购物车
           this.popupVisible = false
          //判断规格和颜色是否都已经选择完毕
          const phoneInfos = this.phoneInfos.split(' ')[0];
          console.log(phoneInfos)
          if(phoneInfos === '请选择'){
            this.popupVisible = true
          }else{
            this.$toast({
                message: '已添加到购物车',
                position: 'center',
                duration: 2000
            });
            const Id = e.currentTarget.id;   //1
            console.log(Id)
            const goodsId = this.goodsId;
            this.$store.commit('IS_EXIST',goodsId); //判断当前商品再购物车中已经存在
            const curIndex = this.$store.state.cart.curIndex
            const title = this.$refs.title.innerHTML
            const imgSrc = this.goodsList.imgSrc[goodsId]
            const price = this.goodsList.price
            const goodsInfos ={
                Id:Id,
                goodsId:goodsId,
                title:title,
                imgSrc:imgSrc,
                price:price,
                selected:false,
                desc:this.type,
                amount:this.amount ,
            }
            if(curIndex !=-1 && this.$store.state.cart.cartList[curIndex].goodsId === goodsId ){
                //购物车数量+1
                this.$store.dispatch('cur_goods_num');
                
            }else{
                //已经存在的商品加1
                this.$store.commit('ADD_CART',goodsInfos);
            }
          }
        },
        //提交订单,购买
        toBuy(){
           if(this.allChoose == "请选择"){
              this.popupVisible = true
           }else{
               //提交商品信息
                const phoneType = this.phoneType
                const phoneColor = this.phoneColor
                const goodsId = this.goodsId
                const imgSrc = this.goodsList.imgSrc[goodsId]
                const price = this.goodsList.price
                const commitInfos = {
                      title:'限量版美图公仔',
                      goodsId:goodsId,
                      desc:phoneType,
                      price:price,
                      amount:this.amount,
                      imgSrc:imgSrc
                }
                this.$store.commit('COMMIT_LIST',commitInfos)

           }
        }
    },
    components:{
        phoneDetail,
        headerBar
    }
}
</script>
<style lang="scss">
    .to-cart{
        color: #fff;
    }
    .swipe{
        margin-top: 40px;
        background-color: #fff;
         height: 21rem;
        >div{
            height: 100%;
            text-align: center;
            img{
                height: 20rem;
            }
        }
    }
    .phone-infos{
        background-color: #fff;
        border-top: 1px solid #f9f9f9;
        .price{
            color: #f75e2f;
            margin-left: 1rem;
            padding-top: 0.5rem;
            display: inline-block;
            b{
                font-size: 2rem; 
            }
        }
        .old-price{
            margin-left: 1rem;
            color: #c5c5c5;
            font-size: 1.2rem;
            padding-bottom: 0.3rem;
            span{
                text-decoration: line-through;
            }
        }
        h3{
            font-size: 1.5rem;
            margin-left: 1rem;
            word-wrap: break-word;
            word-break: break-all; 
        }
        .phone-express{
            margin-left: 1rem;
            display: flex;
            align-items: center;
            padding: 0.5rem 0.5rem 0.5rem 0;
            font-size: 1.2rem;
            span{
                flex: 1.2;
                line-height: 20px;
                color: #c5c5c5;
                text-align: center;
            }
            span:first-child{
                flex: 1;
                text-align: left;
            }
            span:last-child{
                text-align: right;
                flex: 0.8;
            }
        }
    }
    .phone-type,.phone-img{
        margin-top: 1rem;
        background-color: #fff;
        >div{
          line-height: 20px;
          font-size: 1.2rem;
          color: #c5c5c5;
          padding: 1rem;
          span{
              color: #222;
              margin-left: 1rem;
          }
          .icon-right{
              float: right;
              color: #c5c5c5;
          }
        }
    }
    .phone-img{
        .info-wrapper{
            width: 100%;
            padding-top: 3rem;
            height: 50rem;
            background: url(http://img1.app.meitudata.com/meitushop/v4/mobile_img/m8/hellokitty/bg-1.jpg?v=201705031820) no-repeat;
            background-size: cover;
            box-sizing: border-box;
            
        }
        .info-more{
            width: 100%;
            height: 50rem;
            background: url(http://img1.app.meitudata.com/meitushop/v4/mobile_img/m8/hellokitty/bg-3.jpg?v=201705031820) no-repeat;
            background-size: cover;
            padding-top: 3rem;
            box-sizing: border-box;
        }
        .look-info{
            height: 50rem;
            background: url(http://img1.app.meitudata.com/meitushop/v4/mobile_img/m8/hellokitty/bg-4.jpg?v=201705031820)no-repeat;
            background-size: cover;
        }
        img{
            display: block;
            width: 20rem;
            margin: 0 auto;
            margin-bottom: 1rem;
        }
        .main-title{
            color: #ff6495;
            text-align: center;
            font-weight: 400;
        }
        .desc{
            text-align: center;
            margin-top: 2rem;
            color: #666;
            font-size: 1.4rem;
        }
    }
    .buy-btn{
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        >div{
            flex: 1;
            color: #fff;
            height: 4rem;
            line-height: 4rem;
            font-size: 1.5rem;
            &.join-in{
                background: linear-gradient(to right, #f5adc9, #f38eb6, #f977ab);
            }
            &.buy-in{
              background: linear-gradient(to right, #f171a4 , #f869a2 , #ff71aa);
              a{
                  color: #fff;
              }
            }

        }
    }
    .mint-popup-bottom{
        width: 100%;
        height: 80%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
</style>

