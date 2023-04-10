<template>
    <view class="custom-class van-empty">
        <view class="van-empty__image">
            <slot name="image"></slot>
        </view>
        <view class="van-empty__image">
            <image class="van-empty__image__img" :src="computed.imageUrl(image)" v-if="image"></image>
        </view>
        <view class="van-empty__description">
            <slot name="description"></slot>
        </view>
        <view class="van-empty__description">{{ description }}</view>
        <view class="van-empty__bottom">
            <slot></slot>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/empty/index.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
export default {
    data() {
        return {};
    },
    props: {
        description: String,
        image: {
            type: String,
            default: 'default'
        }
    }
};
</script>
<style>
@import './index.css';
</style>
