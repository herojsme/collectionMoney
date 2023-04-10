<template>
    <view style="height: 100%">
        <van-overlay @click="onClickOverlay" :customStyle="overlayStyle" :duration="duration" :lockScroll="lockScroll" :show="show" :zIndex="zIndex" v-if="overlay"></van-overlay>
        <view
            @transitionend="onTransitionEnd"
            :class="'custom-class ' + classes + ' ' + utils.bem('popup', [position, { round: round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop }])"
            :style="computed.popupStyle({ zIndex: zIndex, currentDuration: currentDuration, display: display, customStyle: customStyle })"
            v-if="inited"
        >
            <slot></slot>
            <van-icon
                @tap.native="onClickCloseIcon"
                :class="'close-icon-class van-popup__close-icon van-popup__close-icon--' + closeIconPosition"
                :name="closeIcon"
                v-if="closeable"
            ></van-icon>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/popup/index.wxs"></script>
<script>
import vanIcon from '../icon/index';
import vanOverlay from '../overlay/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/component');
var o = require('../mixins/transition');
export default {
    components: {
        vanIcon,
        vanOverlay
    },
    data() {
        return {
            duration: '',
            show: '',
            classes: '',
            inited: ''
        };
    },
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class', 'close-icon-class'],
    mixins: [(0, o.transition)(false)],
    props: {
        round: Boolean,
        closeable: Boolean,
        customStyle: String,
        overlayStyle: String,
        transition: {
            type: String
        },
        zIndex: {
            type: Number,
            default: 100
        },
        overlay: {
            type: Boolean,
            default: true
        },
        closeIcon: {
            type: String,
            default: 'cross'
        },
        closeIconPosition: {
            type: String,
            default: 'top-right'
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: 'center'
        },
        safeAreaInsetBottom: {
            type: Boolean,
            default: true
        },
        safeAreaInsetTop: {
            type: Boolean,
            default: false
        },
        lockScroll: {
            type: Boolean,
            default: true
        }
    },
    created: function () {
        this.observeClass();
    },
    methods: {
        onClickCloseIcon: function () {
            this.$emit('close');
        },
        onClickOverlay: function () {
            this.$emit('click-overlay');
            if (this.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function () {
            var e = this;
            var o = e.transition;
            var t = e.position;
            var s = e.duration;
            var n = {
                name: o || t
            };
            if ('none' === o) {
                n.duration = 0;
                this.originDuration = s;
            } else {
                if (null != this.originDuration) {
                    n.duration = this.originDuration;
                }
            }
            this.setData(n);
        }
    },
    watch: {
        transition: {
            handler: function () {
                var e = this;
                var o = e.transition;
                var t = e.position;
                var s = e.duration;
                var n = {
                    name: o || t
                };
                if ('none' === o) {
                    n.duration = 0;
                    this.originDuration = s;
                } else {
                    if (null != this.originDuration) {
                        n.duration = this.originDuration;
                    }
                }
                this.setData(n);
            },

            immediate: true
        },

        position: {
            handler: function () {
                var e = this;
                var o = e.transition;
                var t = e.position;
                var s = e.duration;
                var n = {
                    name: o || t
                };
                if ('none' === o) {
                    n.duration = 0;
                    this.originDuration = s;
                } else {
                    if (null != this.originDuration) {
                        n.duration = this.originDuration;
                    }
                }
                this.setData(n);
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
