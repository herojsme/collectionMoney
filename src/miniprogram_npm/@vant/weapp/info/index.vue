<template>
    <view :class="'van-info ' + utils.bem('info', { dot: dot }) + ' custom-class'" :style="customStyle" v-if="(info !== null && info !== '') || dot">{{ dot ? '' : info }}</view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
export default {
    data() {
        return {};
    },
    props: {
        dot: Boolean,
        info: null,
        customStyle: String
    }
};
</script>
<style>
@import './index.css';
</style>
