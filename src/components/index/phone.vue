<template>
    <div class="phone">
        <h4 style="margin-bottom: 1rem;">手机</h4>
            <div class="phone-good" v-for="item in list" :key="item.id">
            <router-link to="/phoneInfo">
                <div>
                    <img :src="item.imgSrc" alt="" v-lazy="item.imgSrc">
                </div>
                <div>
                    <h2>{{item.title}}</h2>
                    <p>{{item.desc}}</p>
                    <span>¥ {{item.price}} 起</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           list:[
               {
                    imgSrc: 'http://mshopimg1.meitudata.com/59117a033dee368348.jpg?thumb220',
                    title: '美图T8',
                    desc: '个性定制',
                    price: 2588
                },
                {
                    imgSrc: 'http://mshopimg3.meitudata.com/59117a2e0038d81818.jpg?thumb220',
                    title: '美图M8(特别版 白月光)',
                    desc: 'hello kitty 特别版',
                    price: 2788
                },
                {
                    imgSrc: 'http://mshopimg2.meitudata.com/58d4cd34da1a584329.jpg?thumb220',
                    title: '美图T8(幻影黑)',
                    desc: 'Angelababy参与设计',
                    price: 3599
                },
                {
                    imgSrc: 'http://mshopimg1.meitudata.com/59117a681974d99035.jpg?thumb220',
                    title: '美图M8个性定制',
                    desc: '个性定制版',
                    price: 2899
                },
                {
                    imgSrc: 'http://mshopimg3.meitudata.com/59117a2e0038d81818.jpg?thumb220',
                    title: '美图M8(特别版 白月光)',
                    desc: 'hello kitty 特别版',
                    price: 2788
                },
                {
                    imgSrc: 'http://mshopimg2.meitudata.com/58d4cd34da1a584329.jpg?thumb220',
                    title: '美图T8(幻影黑)',
                    desc: 'Angelababy参与设计',
                    price: 3599
                },
                {
                    imgSrc: 'http://mshopimg3.meitudata.com/59117a2e0038d81818.jpg?thumb220',
                    title: '美图M8(特别版 白月光)',
                    desc: 'hello kitty 特别版',
                    price: 2788
                },
                {
                    imgSrc: 'http://mshopimg2.meitudata.com/58d4cd34da1a584329.jpg?thumb220',
                    title: '美图T8(幻影黑)',
                    desc: 'Angelababy参与设计',
                    price: 3599
                },
           ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .phone{
        background-color: #efefef;
        h4{
            padding: 1rem 1rem 0;
            font-size: 1.6rem;
            color: #666;
         }
        .phone-good a{
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #fff;  
            position: relative;
            padding: 1rem 0;
            >div{
                flex: 1.5;
                align-items: center;
                display: flex;
                justify-content: center;
                &:last-child{
                    flex:2;
                    flex-direction: column;
                    align-items: normal;
                    h2{
                        line-height: 2;
                        font-size: 1.6rem;
                        color: #000;
                    }
                    P{
                        line-height: 2;
                        color: #a2a0a3;
                        font-size: 1.2rem;
                    }
                    span{
                        line-height: 2;
                        color: #f55669;
                        font-size: 1.4rem;
                    }
                }
                img{
                   width: 9rem;
                   height: 9rem; 
                }
            }
            &::before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                height: 1px;
                background: #f1f1f1;

            }
         }
    }
</style>
