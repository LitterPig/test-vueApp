<template lang="html">
  <div class="club-page">
    <header-bar title="美图福利社"></header-bar>
    <div class="club-container">
      <div class="content">
        <img src="http://img2.app.meitudata.com/meitushop/v4/mobile_img/club/welfare/1.jpg?v=20160728163742" alt="">
      </div>
      <div class="content">
        <img src="http://img2.app.meitudata.com/meitushop/v4/mobile_img/club/welfare/2.jpg" alt="">
      </div>
      <div class="content">
        <img src="http://img2.app.meitudata.com/meitushop/v4/mobile_img/club/welfare/4.jpg" alt="">
      </div>
      <div class="content">
        <img src="http://img2.app.meitudata.com/meitushop/v4/mobile_img/club/welfare/3.jpg" alt="">
      </div>
    </div>
    <div class="goback">
      <router-link to='/'>
        <i class="icon goback"></i>
      </router-link>
    </div>
    <div class="adv-box">
      <span @click="closeAdv" class="text-close">X</span>
      <p class="adv-text">下载美图福利社,即可免费领取手机壳或镜头套件哦！ </p>
    </div>
  </div>
</template>

<script>
import headerBar from '../index/headerBar'
export default {
  data () {
    return{
    }
  },
  components:{
    headerBar
  },
  methods: {
    closeAdv: function () {
      document.querySelector('.adv-box').style.display =' none'
    }
  }
}
window.onscroll = function() {
	var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
    var advBox = document.querySelector('.adv-box')
	if (scrollTop > 60) {
    advBox.style.display ='block';
	} else {
		advBox.style.display ='none';
	}
	}
</script>
<style lang="css" scoped>
    .cart {
        width: 2rem;
        height: 2rem;
        display: block;
        background: url(../../assets/images/iconCar.png) no-repeat;
        background-size: cover;
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
    .club-container {
      width: 100%;
    }
    .club-container .content {
      width: 100%;
    }
    .club-container .content img{
      width: 100%;
    }
    .download-btn {
        position: absolute;
        padding-left: 2rem;
        box-sizing: border-box;
        left: 30%;
        top: 40%;
        width: 13rem;
        height: 4rem;
        border-radius: 5px;
        background: #ff3161 url(../../assets/images/andorid.png) left 1rem no-repeat;
        background-size :2.5rem 2.5rem;
        color: #fff;
        font-size: 1.4rem;
        text-align: center;
        line-height: 4rem;
    }
    .goback {
        width: 3rem;
        height: 3rem;
        position: fixed;
        left: 1rem;
        bottom: 4.4rem;
        border-radius: 50px;
        background: #999 url(../../assets/images/goback.png) center center no-repeat;
        background-size: 2rem 2rem;
    }
    .adv-box{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 10;
        width: 100%;
        height: 4.4rem;
        background-color: #000;
        opacity: .7;
    }
    .adv-box .adv-text {
        color: #fff;
        line-height: 4.4rem;
        text-align: center;
        font-size: 1.2rem;
        font-weight: lighter;
    }
    .adv-box .text-close {
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        display: block;
        color: #fff;
        position: absolute;
        z-index: 999;
        right: 1rem;
        bottom: 3.4rem;
        border-radius:50% ;
        background: #fc64b4;
        font-size: 1.4rem;
    }
</style>
