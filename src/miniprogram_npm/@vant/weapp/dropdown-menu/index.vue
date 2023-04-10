<template>
    <view class="van-dropdown-menu van-dropdown-menu--top-bottom custom-class">
        <view @tap="onTitleTap" :class="utils.bem('dropdown-menu__item', { disabled: item.disabled })" :data-index="index" v-for="(item, index) in itemListData" :key="index">
            <view
                :class="item.titleClass + ' ' + utils.bem('dropdown-menu__title', { active: item.showPopup, down: (item.showPopup === direction) === 'down' })"
                :style="item.showPopup ? 'color:' + activeColor : ''"
            >
                <view class="van-ellipsis">{{ computed.displayTitle(item) }}</view>
            </view>
        </view>
        <slot></slot>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var t = require('../common/component');
var e = require('../common/relation');
var n = require('../common/utils');
var i = [];
export default {
    data() {
        return {
            itemListData: []
        };
    },
    field: true,
    relation: (0, e.useChildren)('dropdown-item', function () {
        this.updateItemListData();
    }),
    props: {
        activeColor: {
            type: String
        },
        overlay: {
            type: Boolean,
            default: true
        },
        zIndex: {
            type: Number,
            default: 10
        },
        duration: {
            type: Number,
            default: 200
        },
        direction: {
            type: String,
            default: 'down'
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        closeOnClickOutside: {
            type: Boolean,
            default: true
        }
    },
    beforeCreate: function () {
        var t = (0, n.getSystemInfoSync)().windowHeight;
        this.windowHeight = t;
        i.push(this);
    },
    destroyed: function () {
        var that = this;
        i = i.filter(function (e) {
            return e !== that;
        });
    },
    methods: {
        updateItemListData: function () {
            this.setData({
                itemListData: this.children.map(function (t) {
                    return t.data;
                })
            });
        },
        updateChildrenData: function () {
            this.children.forEach(function (t) {
                t.updateDataFromParent();
            });
        },
        toggleItem: function (t) {
            this.children.forEach(function (e, n) {
                var i = e.data.showPopup;
                if (n === t) {
                    e.toggle();
                } else {
                    if (i) {
                        e.toggle(false, {
                            immediate: true
                        });
                    }
                }
            });
        },
        close: function () {
            this.children.forEach(function (t) {
                t.toggle(false, {
                    immediate: true
                });
            });
        },
        getChildWrapperStyle: function () {
            var that = this;
            var e = this;
            var i = e.zIndex;
            var o = e.direction;
            return (0, n.getRect)(this, '.van-dropdown-menu').then(function (e) {
                var a = e.top;
                var r = void 0 === a ? 0 : a;
                var d = e.bottom;
                var u = 'down' === o ? (void 0 === d ? 0 : d) : that.windowHeight - r;
                var c = 'z-index: '.concat(i, ';');
                return 'down' === o ? (c += 'top: '.concat((0, n.addUnit)(u), ';')) : (c += 'bottom: '.concat((0, n.addUnit)(u), ';'));
            });
        },
        onTitleTap: function (t) {
            var that = this;
            var n = t.currentTarget.dataset.index;
            this.children[n].data.disabled ||
                (i.forEach(function (t) {
                    if (t && t.data.closeOnClickOutside && t !== that) {
                        t.close();
                    }
                }),
                this.toggleItem(n));
        }
    },
    watch: {
        activeColor: {
            handler: function () {
                this.children.forEach(function (t) {
                    t.updateDataFromParent();
                });
            },

            immediate: true
        },

        overlay: {
            handler: function () {
                this.children.forEach(function (t) {
                    t.updateDataFromParent();
                });
            },

            immediate: true
        },

        duration: {
            handler: function () {
                this.children.forEach(function (t) {
                    t.updateDataFromParent();
                });
            },

            immediate: true
        },

        direction: {
            handler: function () {
                this.children.forEach(function (t) {
                    t.updateDataFromParent();
                });
            },

            immediate: true
        },

        closeOnClickOverlay: {
            handler: function () {
                this.children.forEach(function (t) {
                    t.updateDataFromParent();
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
