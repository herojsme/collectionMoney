<template>
    <view style="height: 100%">
        <van-transition
            @tap.native="onClick"
            @touchmove.native.stop.prevent="noop"
            customClass="van-overlay"
            :customStyle="'z-index: ' + zIndex + '; ' + customStyle"
            :duration="duration"
            :show="show"
            v-if="lockScroll"
        >
            <slot></slot>
        </van-transition>
        <van-transition @tap.native="onClick" customClass="van-overlay" :customStyle="'z-index: ' + zIndex + '; ' + customStyle" :duration="duration" :show="show" v-else>
            <slot></slot>
        </van-transition>
    </view>
</template>

<script>
import vanTransition from '../transition/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
export default {
    components: {
        vanTransition
    },
    data() {
        return {};
    },
    props: {
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            default: 300
        },
        zIndex: {
            type: Number,
            default: 1
        },
        lockScroll: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onClick: function () {
            this.$emit('click');
        },
        noop: function () {}
    }
};
</script>
<style>
@import './index.css';
</style>
