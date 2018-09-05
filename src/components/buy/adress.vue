<template>
    <div>
        <header-bar title="新建收获地址">
            <router-link :to="links">
                <span @click="commitAdress" class="keeps">保存</span>
            </router-link>
        </header-bar>
        <div class="express-info">
            <ul>
                <li>
                    <div>
                       <input type="text" placeholder="收货人"  v-model="adress.name">
                    </div>
                </li>
                <li>
                    <div>
                       <input type="text" placeholder="手机号码" v-model="adress.tel">
                    </div>
                </li>
                <li>
                    <div>
                       <input type="text" placeholder="所在地区" v-model="adress.adress" @click="changeAdress">
                    </div>
                </li>
                <li>
                    <div>
                       <input type="text" v-model ="adress.detail" placeholder="详细地址:如道路,门牌号,小区单元室等">
                    </div>
                </li>
                <li>
                    <div>
                       设置为默认地址
                    </div>
                    <div class="switch">
                        <mt-switch  v-model="adress.value"></mt-switch>
                    </div>
                </li>
            </ul>
        </div>
        <mt-popup
        v-model="popupVisible"
        position="bottom">
           <mt-picker :slots="myAddressSlots" valueKey="name" :visibleItemCount ="5" @change="onAddressChange"></mt-picker>
        </mt-popup>
    </div>
</template>
<script>
import headerBar from '../index/headerBar'
import threeLevelAddress from '../../../static/dataList/area.json' 
export default {
    name:'adress',
    data(){
        return{
           popupVisible:false,
           links:'',
           adress:{
                name:'',
                tel:'',
                adress:'',
                detail:'',
                value:false,
           },
           isAll:false,
           myAddressSlots: [
                {
                    flex: 1,
                    values: this.getProvinceArr(), //省份数组
                    className: 'slot1',
                    textAlign: 'center'
                },
                //分隔符
                {
                    divider: true,
                    content: '',
                    className: 'slot2'
                },
                //市
                {
                    flex: 1,
                    values: this.getCityArr("北京市"),
                    className: 'slot3',
                    textAlign: 'center'
                },
                {
                    divider: true,
                    content: '',
                    className: 'slot4'
                },

            ]
        }
    },
    watch:{
        adress:{
            handler(cur){
               if(cur.name !="" && cur.tel !="" &&cur.detail !=""){
                    this.links = '/buy'
               }else{
                    this.links = '/adress'
                    this.$toast({
                        message: '请将信息填写完整',
                        position: 'center',
                        duration: 2000
                    });
               }
            },
            deep:true
        }
    },
    methods: {
        onAddressChange(picker, values) {
            if(values[0]["name"]){
                this.adress.adress = values[0]["name"] + values[1]["name"]
                //给市、县赋值
               picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
            }
        },
        getProvinceArr() {
            let provinceArr = [];
            threeLevelAddress.forEach(function (item) {
                let obj = {};
                obj.name = item.name;
                obj.code = item.code;
                provinceArr.push(obj);
            });
            return provinceArr;
        },
        getCityArr(province) {
            // console.log("省：" + province);
            let cityArr = [];
            threeLevelAddress.forEach(function (item) {
            if (item.name === province) {
                item.children.forEach(function (args) {
                let obj = {};
                obj.name = args.name;
                obj.code = args.code;
                cityArr.push(obj);
                });
            }
            });
            return cityArr;
        },
        changeAdress(){
            this.popupVisible = true;
        },
        commitAdress(){
            const commitAdress = this.adress
            this.$store.commit('COMMIT_ADRESSS',commitAdress)
        }
    },
    components:{
       headerBar
    }
}
</script>
<style lang="scss" scope>
    .keeps{
       color: #fff; 
    }
    .mint-popup.mint-popup-bottom{
        width: 100%;
        height: 30%;
    }
    .express-info {
       margin-top: 40px;
        li{
            display: flex;
            align-items: center;
            background-color: #fff;
            margin-bottom: 1rem;
            padding:  1rem;
            border-bottom: 1px solid #f5f5f5;
            margin: 0;
        >div{
            flex:1;
            text-align: right;
            line-height: 2;
            font-size: 1.3rem;
            &:first-child{
                text-align: left;
            } 
            input{
                width: 100%;
                line-height: 2;
                border: none;
                outline: none;
            }
        }
        .switch{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
   }
</style>
