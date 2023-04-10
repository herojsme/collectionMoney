<template>
    <view
        @transitionend="onTransitionEnd"
        :class="'van-transition custom-class ' + classes"
        :style="computed.rootStyle({ currentDuration: currentDuration, display: display, customStyle: customStyle })"
        v-if="inited"
    >
        <slot></slot>
    </view>
</template>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/transition/index.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/component');
var s = require('../mixins/transition');
export default {
    data() {
        return {
            classes: '',
            inited: ''
        };
    },
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [(0, s.transition)(true)]
};
</script>
<style>
@import './index.css';
</style>
