<template>
    <div>
        <header-bar title="登陆"></header-bar>
        <div class="login-con">
             <div class="upload-img">
                 <div class="avatar-img" @click="uploadImg"><img src="../../assets/images/avatar.jpg" alt=""></div>
                 <div class="form-list">
                    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel" readonly></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" readonly></mt-field>
                   
                         <router-link to="/">
                            <mt-button type="default" plain size="large" @click="toLogin">
                              登陆
                            </mt-button>
                         </router-link>
                    
                 </div>
             </div>
        </div>
        <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>
<script>
import headerBar from '../index/headerBar'
export default {
    data(){
       return{
           sheetVisible:false,
           actions:[
            {
                name: '拍照',
                method : this.getCamera	// 调用methods中的函数
            }, {
                name: '从相册中选择', 
                method : this.getLibrary	// 调用methods中的函数
            }
           ],
           tel:'15656023473',
           password:'123456'
       }
    },
    methods:{
        uploadImg(){
            this.sheetVisible = true;
        },
        toLogin(){
            this.$store.commit('Login',true)
        }
    },
    components:{
        headerBar
    }
}
</script>

<style lang="scss" scope>
   .login-con{
        background: url(../../assets/images/login-back.jpg) no-repeat;
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        background-size: 100% 100%;
        height: calc(100% - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
        .upload-img{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            .avatar-img{
                width: 7rem;
                margin-bottom: 2rem;
                img{
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
            }
            .form-list{
                width: 85%;
                a{
                    border-bottom: 1px solid #f5f5f5;
                }
                .mint-cell-wrapper{
                    display: flex;
                       padding: 0 10px;

                }
                .is-plain {
                    border: 1px solid #fd91bc;
                    color: #fff;
                    margin-top: 10rem;
                    border-radius: 5rem;
                    background-color: #fd91bc;                    // 
                }
            }
        }
   }
</style>
