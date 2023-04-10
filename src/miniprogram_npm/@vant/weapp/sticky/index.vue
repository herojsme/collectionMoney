<template>
    <view class="custom-class van-sticky" :style="computed.containerStyle({ fixed: fixed, height: height, zIndex: zIndex })">
        <view :class="utils.bem('sticky-wrap', { fixed: fixed })" :style="computed.wrapStyle({ fixed: fixed, offsetTop: offsetTop, transform: transform, zIndex: zIndex })">
            <slot></slot>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/sticky/index.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var t = require('../common/utils');
var e = require('../common/component');
var o = require('../common/validator');
var i = require('../mixins/page-scroll');
export default {
    data() {
        return {
            height: 0,
            fixed: false,
            transform: 0
        };
    },
    props: {
        zIndex: {
            type: Number,
            default: 99
        },
        offsetTop: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean
        },
        container: {
            type: null
        },
        scrollTop: {
            type: null
        }
    },
    mixins: [
        (0, i.pageScrollMixin)(function (t) {
            if (null == this.scrollTop) {
                this.onScroll(t);
            }
        })
    ],
    mounted: function () {
        this.onScroll();
    },
    methods: {
        onScroll: function (e) {
            var that = this;
            var r = (void 0 === e ? {} : e).scrollTop;
            var n = this;
            var s = n.container;
            var a = n.offsetTop;
            if (n.disabled) {
                this.setDataAfterDiff({
                    fixed: false,
                    transform: 0
                });
            } else {
                this.scrollTop = r || this.scrollTop;
                if ('function' != typeof s) {
                    (0, t.getRect)(this, '.van-sticky').then(function (t) {
                        if ((0, o.isDef)(t)) {
                            if (a >= t.top) {
                                that.setDataAfterDiff({
                                    fixed: true,
                                    height: t.height
                                });
                                that.transform = 0;
                            } else {
                                that.setDataAfterDiff({
                                    fixed: false
                                });
                            }
                        }
                    });
                } else {
                    Promise.all([(0, t.getRect)(this, '.van-sticky'), this.getContainerRect()]).then(function (t) {
                        var e = t[0];
                        var o = t[1];
                        if (a + e.height > o.height + o.top) {
                            that.setDataAfterDiff({
                                fixed: false,
                                transform: o.height - e.height
                            });
                        } else {
                            if (a >= e.top) {
                                that.setDataAfterDiff({
                                    fixed: true,
                                    height: e.height,
                                    transform: 0
                                });
                            } else {
                                that.setDataAfterDiff({
                                    fixed: false,
                                    transform: 0
                                });
                            }
                        }
                    });
                }
            }
        },
        setDataAfterDiff: function (t) {
            var that = this;
            uni.nextTick(function () {
                var o = Object.keys(t).reduce(function (o, i) {
                    if (t[i] !== that[i]) {
                        o[i] = t[i];
                    }
                    return o;
                }, {});
                if (Object.keys(o).length > 0) {
                    that.setData(o);
                }
                that.$emit('scroll', {
                    scrollTop: that.scrollTop,
                    isFixed: t.fixed || that.fixed
                });
            });
        },
        getContainerRect: function () {
            var t = this.container();
            return new Promise(function (e) {
                return t.boundingClientRect(e).exec();
            });
        }
    },
    watch: {
        offsetTop: {
            handler: function (e) {
                var that = this;
                var r = (void 0 === e ? {} : e).scrollTop;
                var n = this;
                var s = n.container;
                var a = n.offsetTop;
                if (n.disabled) {
                    this.setDataAfterDiff({
                        fixed: false,
                        transform: 0
                    });
                } else {
                    this.scrollTop = r || this.scrollTop;
                    if ('function' != typeof s) {
                        (0, t.getRect)(this, '.van-sticky').then(function (t) {
                            if ((0, o.isDef)(t)) {
                                if (a >= t.top) {
                                    that.setDataAfterDiff({
                                        fixed: true,
                                        height: t.height
                                    });
                                    that.transform = 0;
                                } else {
                                    that.setDataAfterDiff({
                                        fixed: false
                                    });
                                }
                            }
                        });
                    } else {
                        Promise.all([(0, t.getRect)(this, '.van-sticky'), this.getContainerRect()]).then(function (t) {
                            var e = t[0];
                            var o = t[1];
                            if (a + e.height > o.height + o.top) {
                                that.setDataAfterDiff({
                                    fixed: false,
                                    transform: o.height - e.height
                                });
                            } else {
                                if (a >= e.top) {
                                    that.setDataAfterDiff({
                                        fixed: true,
                                        height: e.height,
                                        transform: 0
                                    });
                                } else {
                                    that.setDataAfterDiff({
                                        fixed: false,
                                        transform: 0
                                    });
                                }
                            }
                        });
                    }
                }
            },

            immediate: true
        },

        disabled: {
            handler: function (e) {
                var that = this;
                var r = (void 0 === e ? {} : e).scrollTop;
                var n = this;
                var s = n.container;
                var a = n.offsetTop;
                if (n.disabled) {
                    this.setDataAfterDiff({
                        fixed: false,
                        transform: 0
                    });
                } else {
                    this.scrollTop = r || this.scrollTop;
                    if ('function' != typeof s) {
                        (0, t.getRect)(this, '.van-sticky').then(function (t) {
                            if ((0, o.isDef)(t)) {
                                if (a >= t.top) {
                                    that.setDataAfterDiff({
                                        fixed: true,
                                        height: t.height
                                    });
                                    that.transform = 0;
                                } else {
                                    that.setDataAfterDiff({
                                        fixed: false
                                    });
                                }
                            }
                        });
                    } else {
                        Promise.all([(0, t.getRect)(this, '.van-sticky'), this.getContainerRect()]).then(function (t) {
                            var e = t[0];
                            var o = t[1];
                            if (a + e.height > o.height + o.top) {
                                that.setDataAfterDiff({
                                    fixed: false,
                                    transform: o.height - e.height
                                });
                            } else {
                                if (a >= e.top) {
                                    that.setDataAfterDiff({
                                        fixed: true,
                                        height: e.height,
                                        transform: 0
                                    });
                                } else {
                                    that.setDataAfterDiff({
                                        fixed: false,
                                        transform: 0
                                    });
                                }
                            }
                        });
                    }
                }
            },

            immediate: true
        },

        container: {
            handler: function (e) {
                var that = this;
                var r = (void 0 === e ? {} : e).scrollTop;
                var n = this;
                var s = n.container;
                var a = n.offsetTop;
                if (n.disabled) {
                    this.setDataAfterDiff({
                        fixed: false,
                        transform: 0
                    });
                } else {
                    this.scrollTop = r || this.scrollTop;
                    if ('function' != typeof s) {
                        (0, t.getRect)(this, '.van-sticky').then(function (t) {
                            if ((0, o.isDef)(t)) {
                                if (a >= t.top) {
                                    that.setDataAfterDiff({
                                        fixed: true,
                                        height: t.height
                                    });
                                    that.transform = 0;
                                } else {
                                    that.setDataAfterDiff({
                                        fixed: false
                                    });
                                }
                            }
                        });
                    } else {
                        Promise.all([(0, t.getRect)(this, '.van-sticky'), this.getContainerRect()]).then(function (t) {
                            var e = t[0];
                            var o = t[1];
                            if (a + e.height > o.height + o.top) {
                                that.setDataAfterDiff({
                                    fixed: false,
                                    transform: o.height - e.height
                                });
                            } else {
                                if (a >= e.top) {
                                    that.setDataAfterDiff({
                                        fixed: true,
                                        height: e.height,
                                        transform: 0
                                    });
                                } else {
                                    that.setDataAfterDiff({
                                        fixed: false,
                                        transform: 0
                                    });
                                }
                            }
                        });
                    }
                }
            },

            immediate: true
        },

        scrollTop: {
            handler: function (t) {
                this.onScroll({
                    scrollTop: t
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
