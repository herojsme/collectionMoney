<template>
    <view :class="'custom-class ' + utils.bem('loading', { vertical: vertical })">
        <view :class="'van-loading__spinner van-loading__spinner--' + type" :style="computed.spinnerStyle({ color: color, size: size })">
            <view class="van-loading__dot" v-if="type === 'spinner'" v-for="(item, index) in array12" :key="index"></view>
        </view>
        <view class="van-loading__text" :style="computed.textStyle({ textSize: textSize })">
            <slot></slot>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/loading/index.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
export default {
    data() {
        return {
            array12: Array.from({
                length: 12
            })
        };
    },
    props: {
        color: String,
        vertical: Boolean,
        type: {
            type: String,
            default: 'circular'
        },
        size: String,
        textSize: String
    }
};
</script>
<style>
@import './index.css';
</style>
