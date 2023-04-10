<template>
    <view @tap="onClick" :class="computed.rootClass({ classPrefix: classPrefix, name: name })" :style="computed.rootStyle({ customStyle: customStyle, color: color, size: size })">
        <van-info customClass="van-icon__info" :dot="dot" :info="info" v-if="info !== null || dot"></van-info>
        <image class="van-icon__image" mode="aspectFit" :src="name" v-if="computed.isImage(name)"></image>
    </view>
</template>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/icon/index.wxs"></script>
<script>
import vanInfo from '../info/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
export default {
    components: {
        vanInfo
    },
    data() {
        return {};
    },
    props: {
        dot: Boolean,
        info: null,
        size: null,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            default: 'van-icon'
        },
        name: String
    },
    methods: {
        onClick: function () {
            this.$emit('click');
        }
    }
};
</script>
<style>
@import './index.css';
</style>
