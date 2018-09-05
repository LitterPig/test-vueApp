<template>
    <div>
        <div class="goods-inf">
            <div class="goods-img">
                <img src="http://mshopimg1.meitudata.com/5910126d54d1369100.jpg" alt="">
            </div>
            <div class="goods-txt">
                <p class="goods-price">￥{{price}}</p>
                <span class="goods-amount">库存2689</span>
                <span>{{getPhoneInfos}}</span>
            </div>
        </div>
        <div class="goods-choose">
            <p>规格</p>
            <div class="choose-type"  @click="clickType" :id="index" v-for="(item,index) in types" :key="item.id"><span>{{item}}</span></div>
            <p>颜色</p>
            <div class="choose-color " @click="clickType" v-for="item in phoneInfo.phoneColor" :key="item.id"><span>{{item.name}}</span></div>
        </div>
        <div class="buy-amount">
            <span>购买数量</span>
            <div class="count">
                <span @click="delGoods">-</span>
                <span class="num">{{num}}</span>
                <span @click="addGoods">+</span>
            </div>
        </div>
        <div class="phone-pay">
            <div class="toCar" @click="joinIn" :id="id">加入购物车</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"phoneDetail",
    props:{
        types:{
            type:Array,
            default(){
                return []
            }
        },
        id:{
            type:Number,
            default:0
        },
        price:{
            type:Number,
            default:0
        },
    },
    data(){
        return{
            count:1,
            allChoose:"请选择",
            phoneType:"规格",
            typeId:'',
            phoneColor:"颜色",
            colorId:'',
            phoneInfo:{
                phoneColor:[
                    {
                        name:"魅影红",
                    },
                    {
                        name:"闪耀紫",
                    }
                ]
            }
        }
    },
    computed:{
        getPhoneInfos(){
            if(this.phoneType != "规格" && this.phoneColor != "颜色"){
                this.allChoose = '已选择'
            }else{
                this.allChoose = '请选择'
            }
            const phones = this.allChoose + ' ' + this.phoneType + ' ' + this.phoneColor;
            const Id = this.typeId + this.colorId;
            this.$emit('phoneInfos',{
                phones:{
                   allChoose:this.allChoose,
                   phoneType:this.phoneType,
                   phoneColor:this.phoneColor
                },
                Id:Id
            })
            return phones;
        },
        num(){
            const num = this.count;
            this.$emit('getAmt',{
               num:num,
            })
            return num
        }
    },
    methods:{
        //选择手机规格和颜色
        clickType(e){
            var classOnly = e.currentTarget.classList[0];
            var selectedClass = '';
            var isContains,$thisCLass,selected;
            var ht = e.currentTarget.querySelector('span').innerHTML;
            var curId = e.currentTarget.id;
            //判断是选择颜色还是类型
            if(classOnly == 'choose-type'){
                selectedClass = 'selected'
                this.phoneType = ht;
                this.typeId = curId;
            }else{
                selectedClass = 'selectedColor' 
                this.phoneColor = ht;
                this.colorId = curId;
            }
            isContains = e.currentTarget.classList.contains(selectedClass);
            $thisCLass = e.currentTarget.classList;
            selected = document.querySelector('.'+selectedClass);
            //当下是否被选中
            if(selected){
                selected.classList.remove(selectedClass);
                $thisCLass.add(selectedClass);
                if(isContains){
                    $thisCLass.remove(selectedClass);
                    if(selectedClass == 'selected' ){
                        this.phoneType = '规格'
                        this.typeId = ''
                    }else{
                        this.phoneColor = '颜色'
                        this.colorId = ''
                    }
                }
            }else{
                $thisCLass.add(selectedClass);
            }
            if(!isContains){
                //数量和类型
                const type = document.querySelector('.choose-type.selected').querySelector('span').innerHTML
                this.$emit('getType',{
                  type:type,
                })
            }
        },
        //加入购物车
        joinIn(e){
           this.$emit('joinIn',e) 
        },
        addGoods(e){
           this.count ++
           
        },
        delGoods(e){
           if(this.count>1){
               this.count --
           }
        } 
    }
}
</script>

<style lang="scss" scoped>
    .goods-inf,.goods-txt{
        display: flex;
        align-items: center;
    }
    .goods-inf,.goods-choose{
        border-bottom: 1px solid #f5f5f5;
        .goods-img{
            padding: 1rem;
            img{
                width: 8rem; 
            }
        }
        .goods-txt{
            flex-direction: column; 
            align-items: flex-start;
            margin-top: 1rem;
            line-height: 1.5;
            font-size: 1.2rem;
            .goods-price{
                color: #f55669;
            }
            .goods-amount{
                color: #c5c5c5;
            }
        }
    }
    .goods-choose,.buy-amount{
        padding: 1rem;
        font-size: 1.2rem;
        p{
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }
        .choose-type,.choose-color {
            span{
                border-radius: 5px;
                display: inline-block;
                text-align: center;
                margin-bottom: 1rem;
                background-color: #eeeeee;
                line-height: 1.5;
                padding: 0.5rem;
                margin-right: 0.5rem;
                border:1px solid #fff;
            }
            &.selected span,&.selectedColor span{
                color: #ff7787;
                border:1px solid #ff7787;
                background-color: #fff7f8;
            } 
        }
        .choose-color {
            display: inline-block;
        }
    }
    .buy-amount{
        .count{
            margin-right: 3rem;
            border: 1px solid #e6e6e6;
            float: right;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            span{
                width: 3rem;
                line-height:2;
                display: inline-block;
                border-right: 1px solid #e6e6e6;
                text-align: center;
                font-size: 1.2rem;
                color: #c5c5c5;
                &:last-child{
                    border: none;
                }
            &.num{
                 pointer-events:none;
                }
            }
        }
    }
    .phone-pay{
        position: absolute;
        bottom: 0;
        left: 10%;
        width: 80%;
        text-align: center;
        border-radius: 2rem;
        margin-bottom: 1rem;
        background-color: #ff7787;
        .toCar{
            height: 3.5rem;
            line-height: 3.5rem;
            color: #fff;
        }
  
    }
</style>
