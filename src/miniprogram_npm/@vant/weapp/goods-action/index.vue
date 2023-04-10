<template>
    <view :class="'custom-class ' + utils.bem('goods-action', { safe: safeAreaInsetBottom })">
        <slot></slot>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/component');
var o = require('../common/relation');
export default {
    data() {
        return {};
    },
    relation: (0, o.useChildren)('goods-action-button', function () {
        this.children.forEach(function (e) {
            e.updateStyle();
        });
    }),
    props: {
        safeAreaInsetBottom: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
