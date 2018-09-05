<template>
    <div>
        <v-index></v-index>
        <v-phone></v-phone>
        <link-phone HeadTitle = "配件" :goodList ="list1"></link-phone>
        <link-phone HeadTitle = "MeituFamily专区" :goodList ="list2"></link-phone>
    </div>
</template>
<script>
import vIndex from '../components/index/index'
import vPhone from '../components/index/phone'
import linkPhone from '../components/index/linkPhone';

export default {
    name:'index',
    data(){
        return{
        list1:[
                {
                    imgSrc: 'http://mshopimg3.meitudata.com/563745f67f45545765.jpg',
                    title:'美图遥控器第二代',
                    desc:'',
                    price:89
                },
                {
                    imgSrc: 'http://mshopimg1.meitudata.com/577f007c56ea942623.jpg',
                    title:'MeituFamily印花移动电源',
                    desc:'',
                    price:189
                },
                {
                    imgSrc: 'http://mshopimg3.meitudata.com/58f821664f7cc70281.jpg?thumb220',
                    title:'美图T8钢化玻璃贴膜',
                    desc:'原装正品，品质保证',
                    price:39
                },
                {
                imgSrc: 'http://mshopimg2.meitudata.com/57fe0a266385b34439.jpg?thumb220',
                    title:'MeituFamily潮趣手机壳',
                    desc:'潮趣手机壳',
                    price:99
                },
                {
                imgSrc: 'http://mshopimg1.meitudata.com/5795a7a49ed5238759.jpg?thumb220',
                    title:'美图M6/美图M6s/美图T8手机数据线',
                    desc:'原装正品，品质保证',
                    price:39
                },
                {
                imgSrc: 'http://mshopimg3.meitudata.com/561e03a60e3cb47662.jpg?thumb220',
                    title:'美图手机专属耳机',
                    desc:'美图专属耳机',
                    price:79
                }
          ],
        list2:[
            {
                imgSrc: 'http://mshopimg3.meitudata.com/572dd7f1e9cd873807.jpg',
                title:'MLGB潮服',
                desc:'',
                price:89
            },
            {
                imgSrc: 'http://mshopimg4.meitudata.com/58da17cc0064d36805.jpg',
                title:'美图暖心保温杯',
                desc:'',
                price:189
            },
            {
                imgSrc: 'http://mshopimg3.meitudata.com/585c8b035111f42937.jpg?thumb220',
                title:'MeituFamily公仔',
                desc:'潮酷公仔',
                price:69
            },
            {
                imgSrc: 'http://mshopimg4.meitudata.com/585b8b976b86749677.jpg?thumb220',
                title:'MeituFamily公仔(达可)',
                desc:'潮酷公仔',
                price:139
            },
            {
                imgSrc: 'http://mshopimg1.meitudata.com/58e5ddb81d89a24268.jpg?thumb220',
                title:'MeituFamily棒球服',
                desc:'刺绣棒球服',
                price:288
            },
            {
                imgSrc: 'http://mshopimg1.meitudata.com/579f0829b30f234760.jpg?thumb220',
                title:'美图笔记本',
                desc:'专属记录',
                price:20
            }
         ]
        }
    },
    components:{
        vIndex,
        vPhone,
        linkPhone
    }
}
</script>

