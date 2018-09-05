<template>
    <div>
        <header-bar title="美图手机"></header-bar>
        <v-phone></v-phone>
    </div>
</template>
<script>
import vPhone from '../index/phone'
import headerBar from '../index/headerBar'
export default {
    data(){
        return{

        }
    },
    components:{
        vPhone,
        headerBar
    }
}
</script>

