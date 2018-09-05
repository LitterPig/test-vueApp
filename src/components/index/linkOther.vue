<template>
    <div>
        <router-link to="/phoneInfo">
            <div v-for="item in goodList" :key="item.id" class="list" v-if="goodList.length>0">
                <div><img :src="item.imgSrc" alt="" v-lazy="item.imgSrc"></div>
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.desc}}</p>
                    <span>¥ {{item.price}}</span>
                </div>
            </div>
            <div class="no-goods" v-if="goodList.length == 0">
                <img src="http://img1.app.meitudata.com/meitushop/v4/mobile_img/pic_error_emoji@2x.png" alt="">
                <span>没有找到相关的商品</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"linkOther",
    props:{
       goodList:{
           type:Array,
           default(){
               return []
           }
       }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .list{
        float: left;
        width: 48.5%;
        text-align: center;
        margin-right: 1%;
        background-color: #fff;
        margin-bottom: 1%;
        height:20rem;
        >div{
            padding: 1rem 1rem 0;
            &:first-child{
                width: 10rem;
                height: 10rem;
                margin: 0 auto;
            }
            h4{
                font-size: 1.4rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #333;
            }
            p{
                font-size: 1.4rem;
                color: #999;
            }
            span{
                color: #f55669;
                font-size: 1.4rem;
                display: block;
                margin: 0.5rem 0;

            }
        }
    }
    .no-goods{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10rem; 
        img{
            width: 15rem;
        }
    }
</style>

