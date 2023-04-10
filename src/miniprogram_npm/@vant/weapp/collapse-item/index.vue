<template>
    <view :class="'van-collapse-item custom-class ' + (index !== 0 ? 'van-hairline--top' : '')">
        <van-cell
            @click="onClick"
            :border="border && expanded"
            :class="utils.bem('collapse-item__title', { disabled: disabled, expanded: expanded })"
            :clickable="clickable"
            customClass="van-cell"
            hoverClass="van-cell--hover"
            :icon="icon"
            :isLink="isLink"
            :label="label"
            rightIconClass="van-cell__right-icon"
            :size="size"
            :title="title"
            titleClass="title-class"
            :value="value"
        >
            <slot name="title" slot="title"></slot>
            <slot name="icon" slot="icon"></slot>
            <slot name="value"></slot>
            <slot name="right-icon" slot="right-icon"></slot>
        </van-cell>
        <view :animation="animation" :class="utils.bem('collapse-item__wrapper')" style="height: 0">
            <view class="van-collapse-item__content content-class">
                <slot></slot>
            </view>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
import vanCell from '../cell/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/component');
var t = require('../common/relation');
var n = require('./animate');
export default {
    components: {
        vanCell
    },
    data() {
        return {
            expanded: false,
            animation: ''
        };
    },
    classes: ['title-class', 'content-class'],
    relation: (0, t.useParent)('collapse'),
    props: {
        size: String,
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            default: true
        },
        isLink: {
            type: Boolean,
            default: true
        }
    },
    mounted: function () {
        this.updateExpanded();
        this.mounted = true;
    },
    methods: {
        updateExpanded: function () {
            if (this.parent) {
                var e = this.parent.data;
                var t = e.value;
                var a = e.accordion;
                var i = this.parent.children;
                var o = void 0 === i ? [] : i;
                var s = this.name;
                var d = o.indexOf(this);
                var l = null == s ? d : s;
                var r = a
                    ? t === l
                    : (t || []).some(function (e) {
                          return e === l;
                      });
                if (r !== this.expanded) {
                    (0, n.setContentAnimate)(this, r, this.mounted);
                }
                this.setData({
                    index: d,
                    expanded: r
                });
            }
        },
        onClick: function () {
            if (!this.disabled) {
                var e = this;
                var t = e.name;
                var n = e.expanded;
                var a = this.parent.children.indexOf(this);
                var i = null == t ? a : t;
                this.parent.switch(i, !n);
            }
        }
    }
};
</script>
<style>
@import './index.css';
</style>
