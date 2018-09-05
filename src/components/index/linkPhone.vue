<template>
    <div class="family-wrap">
        <h4 style="margin-bottom: 1rem;">{{HeadTitle}}</h4>
        <div class="family">
            <div v-for="item in goodList" :key="item.id">
                <div><img :src="item.imgSrc" alt="" v-lazy="item.imgSrc"></div>
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.desc}}</p>
                    <span>¥ {{item.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'goodList',
    props:{
        HeadTitle:{
            type:String,
            default:'商品展示'
        },
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
    },

}
</script>

<style lang="scss" scoped>
    .family-wrap{
    background-color: #efefef;
    h4{
            padding: 1rem 1rem 0;
            font-size: 1.6rem;
            color: #666;
        }
        .family{
                margin-left: 1%;
                overflow: hidden;
            >div{
                float: left;
                width: 49%;
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
        }   
    }
</style>