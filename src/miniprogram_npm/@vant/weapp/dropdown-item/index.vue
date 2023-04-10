<template>
    <view :class="utils.bem('dropdown-item', direction)" :style="wrapperStyle" v-if="showWrapper">
        <van-popup
            @after-enter="onOpened"
            @after-leave="onClosed"
            @close="toggle"
            @enter="onOpen"
            @leave="onClose"
            :closeOnClickOverlay="closeOnClickOverlay"
            :customStyle="'position: absolute;' + popupStyle"
            :duration="transition ? duration : 0"
            :overlay="overlay"
            overlayStyle="position: absolute;"
            :position="direction === 'down' ? 'top' : 'bottom'"
            :show="showPopup"
        >
            <van-cell
                clickable
                @tap.native="onOptionTap($event, { option: item })"
                :class="utils.bem('dropdown-item__option', { active: item.value === valueClone })"
                :data-option="item"
                :icon="item.icon"
                v-for="(item, index) in options"
                :key="index"
            >
                <view class="van-dropdown-item__title" slot="title" :style="item.value === valueClone ? 'color:' + activeColor : ''">{{ item.text }}</view>

                <van-icon class="van-dropdown-item__icon" :color="activeColor" name="success" v-if="item.value === valueClone"></van-icon>
            </van-cell>
            <slot></slot>
        </van-popup>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
import vanPopup from '../popup/index';
import vanCell from '../cell/index';
import vanIcon from '../icon/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/relation');
export default {
    components: {
        vanPopup,
        vanCell,
        vanIcon
    },
    data() {
        return {
            transition: true,
            showPopup: false,
            showWrapper: false,
            displayTitle: '',
            overlay: '',
            duration: '',
            activeColor: '',
            closeOnClickOverlay: '',
            direction: '',
            wrapperStyle: '',
            valueClone: ''
        };
    },
    field: true,
    relation: (0, e.useParent)('dropdown-menu', function () {
        this.updateDataFromParent();
    }),
    props: {
        value: {
            type: null
        },
        title: {
            type: String
        },
        disabled: Boolean,
        titleClass: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        },
        popupStyle: String
    },
    methods: {
        rerender: function () {
            this.valueClone = this.clone(this.value);
            var that = this;
            uni.nextTick(function () {
                var t;
                null === (t = that.parent) || void 0 === t || t.updateItemListData();
            });
        },
        updateDataFromParent: function () {
            if (this.parent) {
                var e = this.parent.data;
                var t = e.overlay;
                var r = e.duration;
                var o = e.activeColor;
                var n = e.closeOnClickOverlay;
                var i = e.direction;
                this.setData({
                    overlay: t,
                    duration: r,
                    activeColor: o,
                    closeOnClickOverlay: n,
                    direction: i
                });
            }
        },
        onOpen: function () {
            this.$emit('open');
        },
        onOpened: function () {
            this.$emit('opened');
        },
        onClose: function () {
            this.$emit('close');
        },
        onClosed: function () {
            this.$emit('closed');
            this.setData({
                showWrapper: false
            });
        },
        onOptionTap: function (e, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(e, _dataset);
            /* ---处理dataset end--- */
            var t = e.currentTarget.dataset.option.value;
            var r = this.valueClone !== t;
            this.setData({
                showPopup: false,
                valueClone: t
            });
            this.$emit('close');
            this.rerender();
            if (r) {
                this.$emit('change', t);
            }
        },
        toggle: function (e, t) {
            var r;
            var that = this;
            if (void 0 === t) {
                t = {};
            }
            var n = this.showPopup;
            if ('boolean' != typeof e) {
                e = !n;
            }
            if (e !== n) {
                this.setData({
                    transition: !t.immediate,
                    showPopup: e
                });
                if (e) {
                    null === (r = this.parent) ||
                        void 0 === r ||
                        r.getChildWrapperStyle().then(function (e) {
                            that.setData({
                                wrapperStyle: e,
                                showWrapper: true
                            });
                            that.rerender();
                        });
                } else {
                    this.rerender();
                }
            }
        }
    },
    watch: {
        value: {
            handler: function () {
                this.valueClone = this.clone(this.value);
                var that = this;
                uni.nextTick(function () {
                    var t;
                    null === (t = that.parent) || void 0 === t || t.updateItemListData();
                });
            },

            immediate: true
        },

        title: {
            handler: function () {
                this.valueClone = this.clone(this.value);
                var that = this;
                uni.nextTick(function () {
                    var t;
                    null === (t = that.parent) || void 0 === t || t.updateItemListData();
                });
            },

            immediate: true
        },

        titleClass: {
            handler: function () {
                this.valueClone = this.clone(this.value);
                var that = this;
                uni.nextTick(function () {
                    var t;
                    null === (t = that.parent) || void 0 === t || t.updateItemListData();
                });
            },

            immediate: true
        },

        options: {
            handler: function () {
                this.valueClone = this.clone(this.value);
                var that = this;
                uni.nextTick(function () {
                    var t;
                    null === (t = that.parent) || void 0 === t || t.updateItemListData();
                });
            },

            immediate: true,
            deep: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
