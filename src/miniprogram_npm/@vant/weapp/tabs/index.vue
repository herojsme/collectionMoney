<template>
    <view :class="'custom-class ' + utils.bem('tabs', [type])">
        <van-sticky @scroll="onTouchScroll" :container="container" :disabled="!sticky" :offsetTop="offsetTop" :zIndex="zIndex">
            <view :class="utils.bem('tabs__wrap', { scrollable: scrollable }) + ' ' + (type === 'line' && border ? 'van-hairline--top-bottom' : '')">
                <slot name="nav-left"></slot>
                <scroll-view
                    :class="utils.bem('tabs__scroll', [type])"
                    :scrollLeft="scrollLeft"
                    :scrollWithAnimation="scrollWithAnimation"
                    :scrollX="scrollable"
                    :style="color ? 'border-color: ' + color : ''"
                >
                    <view :class="utils.bem('tabs__nav', [type, { complete: !ellipsis }]) + ' nav-class'" :style="computed.navStyle(color, type)">
                        <view
                            class="van-tabs__line"
                            :style="
                                computed.lineStyle({
                                    color: color,
                                    lineOffsetLeft: lineOffsetLeft,
                                    lineHeight: lineHeight,
                                    skipTransition: skipTransition,
                                    duration: duration,
                                    lineWidth: lineWidth
                                })
                            "
                            v-if="type === 'line'"
                        ></view>
                        <view
                            @tap="onTap"
                            :class="
                                computed.tabClass(index === currentIndex, ellipsis) +
                                ' ' +
                                utils.bem('tab', { active: index === currentIndex, disabled: item.disabled, complete: !ellipsis })
                            "
                            :data-index="index"
                            :style="
                                computed.tabStyle({
                                    active: index === currentIndex,
                                    ellipsis: ellipsis,
                                    color: color,
                                    type: type,
                                    disabled: item.disabled,
                                    titleActiveColor: titleActiveColor,
                                    titleInactiveColor: titleInactiveColor,
                                    swipeThreshold: swipeThreshold,
                                    scrollable: scrollable
                                })
                            "
                            v-for="(item, index) in tabs"
                            :key="index"
                        >
                            <view :class="ellipsis ? 'van-ellipsis' : ''" :style="item.titleStyle">
                                {{ item.title }}
                                <van-info customClass="van-tab__title__info" :dot="item.dot" :info="item.info" v-if="item.info !== null || item.dot"></van-info>
                            </view>
                        </view>
                    </view>
                </scroll-view>
                <slot name="nav-right"></slot>
            </view>
        </van-sticky>
        <view @touchcancel="onTouchEnd" @touchend="onTouchEnd" @touchmove="onTouchMove" @touchstart="onTouchStart" class="van-tabs__content">
            <view
                :class="utils.bem('tabs__track', [{ animated: animated }]) + ' van-tabs__track'"
                :style="computed.trackStyle({ duration: duration, currentIndex: currentIndex, animated: animated })"
            >
                <slot></slot>
            </view>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/tabs/index.wxs"></script>
<script>
import vanInfo from '../info/index';
import vanSticky from '../sticky/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var t = require('../common/component');
var e = require('../mixins/touch');
var i = require('../common/utils');
var n = require('../common/validator');
var a = require('../common/relation');
export default {
    components: {
        vanInfo,
        vanSticky
    },
    data() {
        return {
            tabs: [],
            scrollLeft: 0,
            scrollable: false,
            currentIndex: 0,
            container: null,
            skipTransition: true,
            scrollWithAnimation: false,
            lineOffsetLeft: 0
        };
    },
    mixins: [e.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: (0, a.useChildren)('tab', function () {
        this.updateTabs();
    }),
    props: {
        sticky: Boolean,
        border: Boolean,
        swipeable: Boolean,
        titleActiveColor: String,
        titleInactiveColor: String,
        color: String,
        animated: {
            type: Boolean
        },
        lineWidth: {
            type: null,
            default: 40
        },
        lineHeight: {
            type: null,
            default: -1
        },
        active: {
            type: null,
            default: 0
        },
        type: {
            type: String,
            default: 'line'
        },
        ellipsis: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 0.3
        },
        zIndex: {
            type: Number,
            default: 1
        },
        swipeThreshold: {
            type: Number,
            default: 5
        },
        offsetTop: {
            type: Number,
            default: 0
        },
        lazyRender: {
            type: Boolean,
            default: true
        }
    },
    mounted: function () {
        var that = this;
        (0, i.requestAnimationFrame)(function () {
            that.swiping = true;
            that.setData({
                container: function () {
                    return uni.createSelectorQuery().in(that).select('.van-tabs');
                }
            });
            that.resize();
            that.scrollIntoView();
        });
    },
    methods: {
        updateTabs: function () {
            var t = this.children;
            var e = void 0 === t ? [] : t;
            var i = this;
            this.setData({
                tabs: e.map(function (t) {
                    return t.data;
                }),
                scrollable: this.children.length > i.swipeThreshold || !i.ellipsis
            });
            this.setCurrentIndexByName(i.active || this.getCurrentName());
        },
        trigger: function (t, e) {
            var i = this.currentIndex;
            var a = e || this.children[i];
            if ((0, n.isDef)(a)) {
                this.$emit(t, {
                    index: a.index,
                    name: a.getComputedName(),
                    title: a.data.title
                });
            }
        },
        onTap: function (t) {
            var that = this;
            var n = t.currentTarget.dataset.index;
            var a = this.children[n];
            if (a.data.disabled) {
                this.trigger('disabled', a);
            } else {
                this.setCurrentIndex(n);
                (0, i.nextTick)(function () {
                    that.trigger('click');
                });
            }
        },
        setCurrentIndexByName: function (t) {
            var e = this.children;
            var i = (void 0 === e ? [] : e).filter(function (e) {
                return e.getComputedName() === t;
            });
            if (i.length) {
                this.setCurrentIndex(i[0].index);
            }
        },
        setCurrentIndex: function (t) {
            var that = this;
            var a = this;
            var r = this.children;
            var s = void 0 === r ? [] : r;
            if (
                !(!(0, n.isDef)(t) || t >= s.length || t < 0) &&
                ((0, i.groupSetData)(this, function () {
                    s.forEach(function (i, n) {
                        var a = n === t;
                        (a === i.data.active && i.inited) || i.updateRender(a, that);
                    });
                }),
                t !== a.currentIndex)
            ) {
                var o = null !== a.currentIndex;
                this.setData({
                    currentIndex: t
                });
                (0, i.requestAnimationFrame)(function () {
                    that.resize();
                    that.scrollIntoView();
                });
                (0, i.nextTick)(function () {
                    that.trigger('input');
                    if (o) {
                        that.trigger('change');
                    }
                });
            }
        },
        getCurrentName: function () {
            var t = this.children[this.currentIndex];
            if (t) {
                return t.getComputedName();
            }
        },
        resize: function () {
            var that = this;
            if ('line' === this.type) {
                var e = this;
                var n = e.currentIndex;
                var a = e.ellipsis;
                var r = e.skipTransition;
                Promise.all([(0, i.getAllRect)(this, '.van-tab'), (0, i.getRect)(this, '.van-tabs__line')]).then(function (e) {
                    var s = e[0];
                    var o = void 0 === s ? [] : s;
                    var l = e[1];
                    var c = o[n];
                    if (null != c) {
                        var u = o.slice(0, n).reduce(function (t, e) {
                            return t + e.width;
                        }, 0);
                        u += (c.width - l.width) / 2 + (a ? 0 : 8);
                        that.setData({
                            lineOffsetLeft: u
                        });
                        that.swiping = true;
                        if (r) {
                            (0, i.nextTick)(function () {
                                that.setData({
                                    skipTransition: false
                                });
                            });
                        }
                    }
                });
            }
        },
        scrollIntoView: function () {
            var that = this;
            var e = this;
            var n = e.currentIndex;
            var a = e.scrollable;
            var r = e.scrollWithAnimation;
            if (a) {
                Promise.all([(0, i.getAllRect)(this, '.van-tab'), (0, i.getRect)(this, '.van-tabs__nav')]).then(function (e) {
                    var a = e[0];
                    var s = e[1];
                    var o = a[n];
                    var l = a.slice(0, n).reduce(function (t, e) {
                        return t + e.width;
                    }, 0);
                    that.setData({
                        scrollLeft: l - (s.width - o.width) / 2
                    });
                    r ||
                        (0, i.nextTick)(function () {
                            that.setData({
                                scrollWithAnimation: true
                            });
                        });
                });
            }
        },
        onTouchScroll: function (t) {
            this.$emit('scroll', t.detail);
        },
        onTouchStart: function (t) {
            if (this.swipeable) {
                this.swiping = true;
                this.touchStart(t);
            }
        },
        onTouchMove: function (t) {
            if (this.swipeable && this.swiping) {
                this.touchMove(t);
            }
        },
        onTouchEnd: function () {
            if (this.swipeable && this.swiping) {
                var t = this.direction;
                var e = this.deltaX;
                var i = this.offsetX;
                if ('horizontal' === t && i >= 50) {
                    var n = this.getAvaiableTab(e);
                    if (-1 !== n) {
                        this.setCurrentIndex(n);
                    }
                }
                this.swiping = false;
            }
        },
        getAvaiableTab: function (t) {
            for (var e = this, i = e.tabs, n = e.currentIndex, a = t > 0 ? -1 : 1, r = a; n + r < i.length && n + r >= 0; r += a) {
                var s = n + r;
                if (s >= 0 && s < i.length && i[s] && !i[s].disabled) {
                    return s;
                }
            }
            return -1;
        }
    },
    watch: {
        animated: {
            handler: function () {
                var that = this;
                this.children.forEach(function (e, i) {
                    return e.updateRender(i === that.currentIndex, that);
                });
            },

            immediate: true
        },

        lineWidth: {
            handler: function () {
                var that = this;
                if ('line' === this.type) {
                    var e = this;
                    var n = e.currentIndex;
                    var a = e.ellipsis;
                    var r = e.skipTransition;
                    Promise.all([(0, i.getAllRect)(this, '.van-tab'), (0, i.getRect)(this, '.van-tabs__line')]).then(function (e) {
                        var s = e[0];
                        var o = void 0 === s ? [] : s;
                        var l = e[1];
                        var c = o[n];
                        if (null != c) {
                            var u = o.slice(0, n).reduce(function (t, e) {
                                return t + e.width;
                            }, 0);
                            u += (c.width - l.width) / 2 + (a ? 0 : 8);
                            that.setData({
                                lineOffsetLeft: u
                            });
                            that.swiping = true;
                            if (r) {
                                (0, i.nextTick)(function () {
                                    that.setData({
                                        skipTransition: false
                                    });
                                });
                            }
                        }
                    });
                }
            },

            immediate: true
        },

        active: {
            handler: function (t) {
                if (t !== this.getCurrentName()) {
                    this.setCurrentIndexByName(t);
                }
            },

            immediate: true
        },

        swipeThreshold: {
            handler: function (t) {
                this.setData({
                    scrollable: this.children.length > t || !this.ellipsis
                });
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
