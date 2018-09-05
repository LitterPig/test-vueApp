<template>
    <mt-header fixed :title="title">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right">
            <slot></slot>
        </mt-button>
    </mt-header>
</template>
<script>
export default {
    name:'headerBar',
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>

