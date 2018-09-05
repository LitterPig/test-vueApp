<template>
    <div>
        <header-bar title="个人中心"></header-bar>
        <div class="person-infos">
            <div class="info-list">
                 <div class="info-wrap">
                     <div class="avatar-img"><img src="../../assets/images/avatar.jpg" alt=""></div>
                     <div class="avatar-name">
                         <div>闹闹猪达</div>
                         <span style="font-size: 1.2rem;">156*****3473</span>
                     </div>
                 </div>
                 <div class="avater-icon">
                     <span><i class="iconfont icon-xinfeng"></i></span>
                     <span><i class="iconfont icon-shezhi"></i></span>
                 </div>
            </div>
            <div class="type-list">
                <div>
                    <span>288</span>
                    <span>收藏夹</span>
                </div>
                <div>
                    <span>2828</span>
                    <span>积分</span>
                </div>
                <div>
                    <span>3</span>
                    <span>优惠券</span>
                </div>
                <div>
                    <span>12</span>
                    <span>关注</span>
                </div>
            </div>
        </div>
        <div class="all-order">
            <div>全部订单</div>
            <div>
                <span>查看全部订单</span>
                <span> <i class="iconfont icon-youjiantou1"></i> </span>
            </div>
        </div>
        <div class="order-list">
            <div>
                <span><i class="iconfont icon-icon-test"></i></span>
                <span class="order-txt">待付款</span>
            </div>
            <div>
                <span><i class="iconfont icon-fahuotongzhi"></i></span>
                <span class="order-txt">待发货</span>
            </div>
            <div>
                <span><i class="iconfont icon-shouhuo"></i></span>
                <span class="order-txt">待收货</span>
            </div>
            <div>
                <span><i class="iconfont icon-pingjia"></i></span>
                <span class="order-txt">待评价</span>
            </div>
            <div>
                <span><i class="iconfont icon-jifenshangcheng"></i></span>
                <span class="order-txt">待退货</span>
            </div>
        </div>
        <div class="infos-list">
            <div class="infos-kinds">
                <div class="kinds-left">
                    <div class="infos-icon">
                        <span class="color1"><i class="iconfont icon-jifenshangcheng"></i></span>
                    </div>
                    <div class="infos-detail">
                        <h3>我的资料</h3>
                        <span>888888</span>
                    </div>
                </div>
                <div class="kinds-left">
                    <div class="infos-icon">
                        <span class="color2"><i class="iconfont icon-zuji"></i></span>
                    </div>
                    <div class="infos-detail">
                        <h3>我的足迹</h3>
                        <span>888888</span>
                    </div>
                </div>
                <div class="kinds-left">
                    <div class="infos-icon">
                        <span class="color3"><i class="iconfont icon-youhuiquan"></i></span>
                    </div>
                    <div class="infos-detail">
                        <h3>我的优惠券</h3>
                        <span>精彩商品，尽在眼前</span>
                    </div>
                </div>
            </div>
            <div class="infos-kinds">
                <div class="kinds-left">
                    <div class="infos-icon">
                        <span class="color1"><i class="iconfont icon-shoucang"></i></span>
                    </div>
                    <div class="infos-detail">
                        <h3>我的收藏</h3>
                        <span>266个商品</span>
                    </div>
                </div>
                <div class="kinds-left">
                    <div class="infos-icon">
                        <span class="color2"><i class="iconfont icon-survey"></i></span>
                    </div>
                    <div class="infos-detail">
                        <h3>意见反馈</h3>
                        <span>我们会不断优化体验</span>
                    </div>
                </div>
                <div class="kinds-left">
                    <div class="infos-icon">
                        <span class="color3"><i class="iconfont icon-bangzhu"></i></span>
                    </div>
                    <div class="infos-detail">
                        <h3>帮助中心</h3>
                        <span>购物更开心</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerBar from '../index/headerBar'
export default {
    data(){
        return{

        }
    },
    components:{headerBar}
}
</script>
<style lang="scss" scoped>
    .info-list,.type-list,.info-wrap,.type-list>div,.all-order,.order-list,.order-list>div,.infos-list,.infos-kinds,.kinds-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        >div{
            flex: 1;
            text-align: center;
        }
    }
    .person-infos{
        margin-top: 40px;
        background-color: #ff71aa;
        position: relative;
        &::before{
            content: "";
            pointer-events: none; /* 防止点击触发 */
            box-sizing: border-box;
            position: absolute;
            width: 200%;
            height: 200%;
            left: 0;
            top: 0;
            border-top:1px solid #fff;
            transform:scale(0.5);
            transform-origin: 0 0;
        }
        .info-list{
           padding: 1rem;
           color: #fff;
           .avatar-img{
                padding: 0.5rem;
                img{
                    border-radius: 50%;
                    border: 3px solid #ffb6d3;
                    width: 6rem;
                }
           }
           .avatar-name{
               >div{
                  font-size: 1.5rem;
                  margin-bottom: 0.3rem;
               }
           }
           .avater-icon{
                text-align: right;
                span:last-child{
                    vertical-align: super;
                }
                span:first-child{
                    margin-right: 1rem;   
                }
                i{
                   font-size: 2rem;
                   &.icon-xinfeng{
                     font-size: 2.5rem;  
                   }
                }
           }
        }
        .type-list{
           height: 4.5rem;
           background-color: rgba(0, 0, 0, 0.1);
           >div{
                flex-direction: column;
                margin: 0.3rem 0;
                border-right: 1px solid #fff;
                font-size: 1.3rem;
                color: #fff;
                &:last-child{
                    border: none;
                }
           }
        }
    }
    .all-order,.order-list,.infos-list{
        padding: 1rem;
        background-color: #fff;
        border-bottom: 1px solid #eee; 
    }
    .all-order{
        >div:first-child{
            text-align: left;
            font-size: 1.4rem;
            
        }
        >div:last-child{
            text-align: right;
            color: #999;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 1.2rem;
        }
    }
    .order-list{
        >div{
           flex-direction: column;
           i{
                font-size: 2rem;
                color: #000;
                &.icon-shouhuo,&.icon-jifenshangcheng{
                    font-size: 1.8rem;
                }
                &.icon-fahuotongzhi{
                    font-size: 2.2rem;
                }
           }
           .order-txt{
                font-size: 1.2rem;
                color: #666;
                margin-top: 2px;
           }
        }
    }
    .infos-list{
       border: none;
       padding: 0;
    }
    .infos-kinds{
        border-right: 1px solid #eee;
        flex-direction: column;
        &:last-child{
            border-right: none;
        }
        .kinds-left{
            width: 100%;
            border-bottom:1px solid #eee;
            padding: 2rem 0;
            &:last-child{
                border-right: none;
            }
        }
        .infos-icon{
            flex: 1;
            span{
                display: inline-block;
                width: 3rem;
                background-color: #fdeded;
                border-radius: 50%;
                padding: 0.5rem;
                margin-left: 1rem;
                i{
                    font-size: 3rem;
                    color: #ff5959;
                   
                }
                &.color2{
                    background-color: #e9f5fd;
                    i{
                    color: #32b6f7;
                    }
                } 
                &.color3{
                    background-color: #fff0e8;
                    i{
                    color: #f98f41;
                    }
                }    
            }
        }
        .infos-detail{
            flex: 2;
            text-align: left;
            padding-left: 1rem;
            h3{
                font-size: 1.5rem;
                font-weight: 400;
            }
            span{
                color: #c5c5c5;
                font-size: 1.1rem;
            }
        }
        
    }

</style>


