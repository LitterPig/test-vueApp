<template>
    <div>
        <header class="headers">
            <img class="logo" src="../../assets/images/logo.png" alt="">
            <div class="icon-link">
                <router-link to="###">
                    <span class="icon-header seaech">
                        <i class="iconfont icon-chaxun"></i>
                    </span>
                </router-link>
                <router-link to="/person">
                    <span class="icon-header person">
                        <i class="iconfont icon-gerenyonghutouxiang"></i>
                    </span>
                </router-link>
                <router-link to="/cart">
                    <span class="icon-header car">
                        <i class="iconfont icon-icon01"></i>
                        <em class="number">{{num}}</em>
                    </span>
                </router-link>
            </div>
        </header>
        <div class="swipe-banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="http://mshopimg2.meitudata.com/59290fe961c4971444.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="http://mshopimg4.meitudata.com/58db95cf9d82545293.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="http://mshopimg4.meitudata.com/5912da04efd6e11335.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="http://mshopimg2.meitudata.com/579aedbde2d0619482.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="http://mshopimg1.meitudata.com/5921032b47fff66246.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="list-wrap">
            <ul>
                <li class="list">
                    <router-link to="/phone">
                        <div>
                           <span class="list1"></span>
                           <span class="list-title">手机</span>
                        </div>
                        
                    </router-link>
                </li>
                <li class="list">
                    <router-link to="/accessories">
                        <div>
                           <span class="list2"></span>
                           <span class="list-title">配件</span>
                        </div>
                    </router-link>
                </li>
                <li class="list">
                    <router-link to="/services">
                        <div>
                           <span class="list3"></span>
                            <span class="list-title">服务</span>
                        </div>
                    </router-link>
                </li>
                <li class="list">
                    <router-link to="/club">
                        <div>
                           <span class="list4"></span>
                           <span class="list-title">美图福利社</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="hot-display">
            <h4>热门推荐</h4>
            <div class="swipe-banner">
                <mt-swipe :auto="0" :show-indicators="false" :continuous="false">
                    <mt-swipe-item>
                        <img src="http://mshopimg1.meitudata.com/577b6c126884c98714.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="http://mshopimg2.meitudata.com/584545674579f47971.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="http://mshopimg4.meitudata.com/57ba9c0ec94f532807.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        num(){
            return this.$store.state.cart.cartInfos.total_amount
        }
    }
}
</script>
<style lang="scss">
     .headers{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;
        .logo{
            width: 10rem;
            flex: 1;
            padding: 0.5rem;
        }
        .icon-link{
            display: inline-block;
            flex: 1;
            text-align: right;
            padding: 0.5rem;
            .icon-header{
                display: inline-block;
                width: 2.2rem;
                padding: 0.5rem;
                position: relative;
                i{
                    font-size: 2.2rem;
                    color:#c5c5c5
                }
                .number{
                    position: absolute;
                    background: #f74554;
                    min-width: 1.2rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    font-size: 1rem;
                    color: #fff;
                    top: .3rem;
                    right: 0;
                    text-align: center;
                    border-radius: 1.2rem;
                    box-sizing: border-box;
                    font-style: normal;
                }
            }
         }
         
     }
     .swipe-banner{
        width: 100%;
        height: 14rem;
        .mint-swipe-indicator.is-active{
            color: #fff;
            opacity: 1;
        }
        .mint-swipe-indicator{
            color: #5d5757;
            opacity: 0.5;
        }
    } 
    .list-wrap{
        padding-top: 1rem;
        background-color: #fff;
        >ul{
            display: flex;
            flex-direction: row;
            align-items: center;
         }
         .list{
             flex: 1;
             text-align: center;
             display: flex;
             justify-content: center;
             span:first-child{
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                display: block;
                margin: 0 auto;
                &.list1{
                    background:#46c0ff url(../../assets/images/view_icon_03.png) center center no-repeat;
                    background-size: 1.8rem;
                }
                &.list2{
                    background:#94d00b url(../../assets/images/view_icon_06.png) center center no-repeat;
                    background-size: 2.4rem;
                }
                &.list3{
                    background:#ff9c7d url(../../assets/images/view_icon_09.png) center center no-repeat;
                    background-size: 2.3rem;
                }
                &.list4{
                    background:#ff71aa url(../../assets/images/view_icon_12.png) center center no-repeat;
                    background-size: 4rem;
                }
             }
             .list-title{
                 color: #222;
                 display: inline-block;
                 margin-top: 0.5rem;
                 font-size: 1.4rem;
                 margin-bottom: 1rem;
             }
         }
     }  
    .hot-display{
        background-color: #efefef;
        h4{
            padding: 1rem 1rem 0;
            font-size: 1.6rem;
            color: #666;
        }
        .mint-swipe{
            width: 95%;
            margin: 1.5rem auto;
            height: 12rem;
            box-shadow: 0 12px 5px -10px rgba(0,0,0,.1), 0 0 4px 0 rgba(0,0,0,.1);
            }  
    }


</style>



