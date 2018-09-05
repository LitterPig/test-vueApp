<template>
    <div>
        <header-bar title="有好货"></header-bar>
        <div class="swipe-slide">
            <ul ref="Ul">
                <li v-for="(item,index) in list" :class="{active:index==count}" :key="item.id" @click="tabNav(index)">
                    <span>{{item.text}}</span>
                </li>
            </ul>
        </div>
        <div class="good-list">
            <mt-tab-container v-model="active" swipeable>
                <mt-tab-container-item id="tab-0" class="accessories">
                    <link-other  :goodList = "allgoods" ></link-other>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-1" class="accessories">
                    <link-other  :goodList = "goodList1" ></link-other>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-2" class="accessories">
                    <link-other  :goodList = "goodList2" ></link-other>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-3" class="accessories">
                    <link-other  :goodList = "goodList3" ></link-other>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import headerBar from '../index/headerBar'
import linkOther from '../index/linkOther'
export default {
    data(){
        return{
          active:'tab-0',
          count:0,
          list:[
              {
                text:"全部",
                url:'###'
              },
              {
                text:"充电器",
                url:'###'
              },
              {
                text:"手机壳",
                url:'###'
              },
              {
                text:"贴膜",
                url:'###'
              }
          ],
          allgoods: [
            {
            imgSrc: 'http://mshopimg3.meitudata.com/58aea5cca616828350.jpg?thumb220',
            title: 'MeituFamily抱枕',
            price: 79,
            url:'bolster'
            },
            {
            imgSrc: 'http://mshopimg1.meitudata.com/5640736873a2c18944.jpg?thumb220',
            title: '限量版美图公仔',
            price: 59,
            url:'doll'
            },
            {
            imgSrc: 'http://mshopimg2.meitudata.com/5621b27b8b2e886188.jpg?thumb220',
            title: '美图潮牌手机',
            price: 129,
            url:'phoneShell'
            },
            {
            imgSrc: 'http://mshopimg1.meitudata.com/5436601baee3893413.jpg?thumb220',
            title: 'Meitu x MLGB 2017',
            price: 288,
            url: 'clothes'
            },
            {
            imgSrc: 'http://mshopimg4.meitudata.com/582e95ef1b25279092.jpg?thumb220',
            title: '气球恐龙帽',
            price: 56,
            url:'hat'
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/561e03a60e3cb47662.jpg?thumb220',
            title:'美图手机专属耳机',
            price:79,
            url:'headSet'
            },
            {
            imgSrc: 'http://mshopimg4.meitudata.com/5694bafec3f0072720.jpg?thumb220',
            title: '美图V4透明手机壳',
            price: 49
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/563745f67f45545765.jpg',
            title:'美图遥控器第二代',
            price:89
            },
            {
            imgSrc: 'http://mshopimg1.meitudata.com/577f007c56ea942623.jpg',
            title:'MeituFamily印花移动电源',
            price:189
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/58f821664f7cc70281.jpg?thumb220',
            title:'美图T8钢化玻璃贴膜',
            price:39
            },
            {
            imgSrc: 'http://mshopimg2.meitudata.com/57fe0a266385b34439.jpg?thumb220',
            title:'MeituFamily潮趣手机壳',
            price:99
            },
            {
            imgSrc: 'http://mshopimg1.meitudata.com/5795a7a49ed5238759.jpg?thumb220',
            title:'美图M6/美图M6s/美图T8手机数据线',
            price:39
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/58aea5cca616828350.jpg?thumb220',
            title: 'MeituFamily抱枕',
            price: 49,
            url:'bolster'
            },
            {
            imgSrc: 'http://mshopimg1.meitudata.com/5640736873a2c18944.jpg?thumb220',
            title: '限量版美图公仔',
            price: 59,
            url:'doll'
            },
            {
            imgSrc: 'http://mshopimg2.meitudata.com/5621b27b8b2e886188.jpg?thumb220',
            title: '美图潮牌手机',
            price: 129,
            url:'phoneShell'
            },
            {
            imgSrc: 'http://mshopimg1.meitudata.com/5436601baee3893413.jpg?thumb220',
            title: 'Meitu x MLGB 2017',
            price: 168,
            url: 'clothes'
            },
            {
            imgSrc: 'http://mshopimg4.meitudata.com/582e95ef1b25279092.jpg?thumb220',
            title: '气球恐龙帽',
            price: 56,
            url:'hat'
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/561e03a60e3cb47662.jpg?thumb220',
            title:'美图手机专属耳机',
            price:79,
            url:'headSet'
            }
          ],
          goodList1:[
            {
                imgSrc: 'http://mshopimg2.meitudata.com/5924f6148e4b810297.jpg?thumb220',
                title: '美图T8/美图M8电源适配器',
                price: 29,
                url: 'charger'
            },
            {
                imgSrc: 'http://mshopimg3.meitudata.com/5795a7f688e8313351.jpg?thumb220',
                title: '美图M6/美图M6s/美图T8手机数据线',
                price: 39,
                url:'dataline'
            }  
          ],
          goodList2:[
            {
            imgSrc: 'http://mshopimg4.meitudata.com/5694bafec3f0072720.jpg?thumb220',
            title: '美图V4透明手机壳',
            price: 49,
            url:'phoneShell'
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/5577fd94756dc86653.jpg?thumb220',
            title: '美图V4皮革手机壳',
            price: 69,
            url:'phoneShell'
            },
            {
            imgSrc: 'http://mshopimg2.meitudata.com/5621b27b8b2e886188.jpg?thumb220',
            title: '美图V8潮牌手机壳',
            price: 129,
            url:'phoneShell'
            },
            {
            imgSrc: 'http://mshopimg2.meitudata.com/5555a36cde5d272584.jpg?thumb220',
            title: '美图M4手机壳',
            price: 49,
            url:'phoneShell'
            },
            {
            imgSrc: 'http://mshopimg3.meitudata.com/5555a19d6f46e70436.jpg?thumb220',
            title: '美图M4编织手机壳',
            price: 99,
            url:'phoneShell'
            }
          ],
          goodList3:[],
        }
    },
    mounted(){
        
    },
    components:{
        headerBar,
        linkOther
    },
    watch:{
        active:{
            handler(curVal,oldVal){
                // console.log(curVal.split("-")[1]);
                const idx = curVal.split("-")[1];
                this.count = idx;
            },
            deep: true, 
        }
    },
    methods:{
        tabNav(index){
            this.active = 'tab-'+index
        }
    }
}
</script>
<style lang="scss" scoped>
   ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
    }
  .swipe-slide{
    margin-top: 38px;
    width: 100%;
    overflow-x: scroll;
    height: 4rem;
    line-height: 4rem;
    background-color: #f968a2;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
      ul{
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
        li{
            flex: 1;
            float: left;
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;
            text-align: center;
            span{
                color: rgba(255, 255, 255, 0.5);
                display: inline-block;
                line-height: 20px;
                font-size: 1.2rem;
               
            }
            &.active{
                span{
                    color: #fff;
                }
                span::after{
                    content:"";
                    display: block;
                    width:20px;
                    border-bottom: 2px solid #fff;
                    margin: 0 auto;
                }
            }
        }
      }
  }
  .good-list{
    padding-top: 1%;
  }
  .accessories{
        margin-left: 1%;
        overflow: hidden;      
    }
</style>

