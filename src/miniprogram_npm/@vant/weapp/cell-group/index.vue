<template>
    <view style="height: 100%">
        <view :class="utils.bem('cell-group__title', { inset: inset })" v-if="title">{{ title }}</view>
        <view :class="'custom-class ' + utils.bem('cell-group', { inset: inset }) + ' ' + (border ? 'van-hairline--top-bottom' : '')">
            <slot></slot>
        </view>
    </view>
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
        title: String,
        border: {
            type: Boolean,
            default: true
        },
        inset: Boolean
    }
};
</script>
<style>
@import './index.css';
</style>
