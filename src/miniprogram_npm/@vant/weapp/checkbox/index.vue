<template>
    <view :class="utils.bem('checkbox', [{ horizontal: direction === 'horizontal' }]) + ' custom-class'">
        <view @tap="onClickLabel" :class="'label-class ' + utils.bem('checkbox__label', [labelPosition, { disabled: disabled || parentDisabled }])" v-if="labelPosition === 'left'">
            <slot></slot>
        </view>
        <view @tap="toggle" class="van-checkbox__icon-wrap">
            <slot name="icon" v-if="useIconSlot"></slot>
            <van-icon
                :class="utils.bem('checkbox__icon', [shape, { disabled: disabled || parentDisabled, checked: value }])"
                customClass="icon-class"
                customStyle="line-height: 1.25em;"
                name="success"
                size="0.8em"
                :style="computed.iconStyle(checkedColor, value, disabled, parentDisabled, iconSize)"
                v-else
            ></van-icon>
        </view>
        <view
            @tap="onClickLabel"
            :class="'label-class ' + utils.bem('checkbox__label', [labelPosition, { disabled: disabled || parentDisabled }])"
            v-if="labelPosition === 'right'"
        >
            <slot></slot>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/checkbox/index.wxs"></script>
<script>
import vanIcon from '../icon/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/relation');
function a(e, a) {
    e.$emit('input', a);
    e.$emit('change', a);
}
export default {
    components: {
        vanIcon
    },
    data() {
        return {
            parentDisabled: false,
            direction: 'vertical'
        };
    },
    field: true,
    relation: (0, e.useParent)('checkbox-group'),
    classes: ['icon-class', 'label-class'],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            default: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            default: 'round'
        },
        iconSize: {
            type: null,
            default: 20
        }
    },
    methods: {
        emitChange: function (e) {
            if (this.parent) {
                this.setParentValue(this.parent, e);
            } else {
                a(this, e);
            }
        },
        toggle: function () {
            var e = this;
            var a = e.parentDisabled;
            var t = e.disabled;
            var i = e.value;
            t || a || this.emitChange(!i);
        },
        onClickLabel: function () {
            var e = this;
            var a = e.labelDisabled;
            var t = e.parentDisabled;
            var i = e.disabled;
            var n = e.value;
            i || a || t || this.emitChange(!n);
        },
        setParentValue: function (e, t) {
            var i = e.data.value.slice();
            var n = this.name;
            var l = e.data.max;
            if (t) {
                if (l && i.length >= l) {
                    return;
                }
                if (-1 === i.indexOf(n)) {
                    i.push(n);
                    a(e, i);
                }
            } else {
                var o = i.indexOf(n);
                if (-1 !== o) {
                    i.splice(o, 1);
                    a(e, i);
                }
            }
        }
    }
};
</script>
<style>
@import './index.css';
</style>
