<template>
    <div>
        <h1>这是app组件</h1>
        <mt-button type="default" @click="show">default</mt-button>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <router-view></router-view>

        <button type="button" class="mui-btn mui-btn-royal">
					紫色
		</button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {};
    },
    methods: {
        show(){
            Toast({
                message: "提示信息",
                duration: 1000,
                position: 'top',
                iconClass: 'glyphicon glyphicon-ok'
            });
        }
    },
}
</script>

<style>
</style>