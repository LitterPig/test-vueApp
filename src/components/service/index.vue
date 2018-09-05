<template>
  <div class="services-page">
    <header-bar title="服务与支持"></header-bar>
    <div class="call-box">
      <i class="icon service"></i>
      <div class="desc">
        <p class="telephone">021-95311</p>
        <p class="time">周一至周日 09:00 - 24:00</p>
      </div>
    </div>
    <div class="service-theme">
      <ul class="themes">
        <li class="theme feedback">
          <router-link to=''>用户反馈</router-link>
        </li>
        <li class="theme offline">
          <router-link to=''>线下体验店</router-link>
        </li>
        <li class="theme point">
          <router-link to=''>服务网点</router-link>
        </li>
      </ul>
    </div>
    <div class="service-container">
      <h2 class="title">购物指南</h2>
      <div class="service-content">
        <ul class="services">
          <li class="item">
            <router-link to=''>美图M8常见问题</router-link>
          </li>
          <li class="item">
            <router-link to=''>美图T8常见问题</router-link>
          </li>
          <li class="item">
            <router-link to=''>美图M6常见问题</router-link>
          </li>
          <li class="item">
            <router-link to=''>美图V4常见问题</router-link>
          </li>
          <li class="item">
            <router-link to=''>美图V4s常见问题</router-link>
          </li>
          <li class="item">
            <router-link to=''>支付教程</router-link>
          </li>
          <li class="item">
            <router-link to=''>支付方式</router-link>
          </li>
          <li class="item">
            <router-link to=''>订单相关</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="service-container">
        <h2 class="title">配送方式</h2>
        <div class="service-content">
          <ul class="services">
            <li class="item">
              <router-link to=''>配送说明</router-link>
            </li>
            <li class="item">
              <router-link to=''>签收须知</router-link>
            </li>
            <li class="item">
              <router-link to=''>配送常见问题</router-link>
            </li>
            <li class="item">
              <router-link to=''>配送物流</router-link>
            </li>
          </ul>
        </div>
      </div>
    <div class="service-container">
      <h2 class="title">售后服务</h2>
      <div class="service-content">
        <ul class="services">
          <li class="item">
            <router-link to=''>维修流程</router-link>
          </li>
          <li class="item">
            <router-link to=''>退换货流程</router-link>
          </li>
          <li class="item">
            <router-link to=''>三包政策</router-link>
          </li>
          <li class="item">
            <router-link to=''>寻找美图手机</router-link>
          </li>
        </ul>
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
    components:{
       headerBar
    }
}
</script>

<style lang="scss">
.services-page {
    margin-top: 40px;
    .call-box {
    width: 100%;
    height: 11rem;
    background-color: #fff;
    margin-top: .5rem;
    align-items: center;
    display: flex;
    .service {
        display: block;
        width: 8rem;
        height: 8rem;
        background: url(../../assets/images/informbg_03.png) no-repeat;
        background-size: cover;
        margin-left: 1rem;
        margin-right: 1rem;
            
        }
        .telephone {
        font-size: 2rem;
        font-weight: 400;
        color: #3c363e;
        }
        .time {
        font-size: 1.4rem;
        color: #817b82;
        margin-top: .5rem;
        }
    }
    .service-theme {
        width: 100%;
        align-items: center;
        overflow: hidden;
        .themes {
            width: 96%;
            display: flex;
            margin: 1rem auto;
            box-sizing: border-box;
            .theme {
                width: 11rem;
                height: 8rem;
                text-align: center;
                line-height: 8rem;
                border-radius: 5px;
                position: relative;
                &::before,&::after{
                    content: "";
                    position: absolute;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    right: -50px;
                }
                &::before{
                    width: 10rem;
                    height: 10rem;
                    bottom: -4rem;
                    right: -5.5rem;
                }
                &::after{
                    width: 7rem;
                    height: 7rem;
                    bottom: 4rem;
                    right: -4rem;
                }
                a{
                    color: #fff;
                    font-size: 1.4rem;
                    }
                }
            }
        }
    .service-container{
        width: 100%;
        clear:both;
        h2{
           padding: 1rem 0.5rem;
        }
        .service-content{
        clear: both;
        background-color: #fff;
        }
    }
    
}

.feedback {
  margin-right: 1rem;
  background-color: #f997be;
}
.offline {
  margin-right: 1rem;
  background-color: #ff88b8;
}
.point {
 background-color: #f980b0;
}

.services .item {
  width: 50%;
  padding:1rem;
  float: left;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
}
.service-content .item a {
  color: #3c363e;
  font-size: 1.4rem;
}
</style>
