<template>
    <view :class="utils.bem('radio', [direction]) + ' custom-class'">
        <view @tap="onClickLabel" :class="utils.bem('radio__label', [labelPosition, { disabled: disabled || parentDisabled }]) + ' label-class'" v-if="labelPosition === 'left'">
            <slot></slot>
        </view>
        <view @tap="onChange" class="van-radio__icon-wrap" :style="'font-size: ' + utils.addUnit(iconSize)">
            <slot name="icon" v-if="useIconSlot"></slot>
            <van-icon
                :class="utils.bem('radio__icon', [shape, { disabled: disabled || parentDisabled, checked: valueClone === name }])"
                customClass="icon-class"
                :customStyle="computed.iconCustomStyle({ iconSize: iconSize })"
                name="success"
                :style="
                    computed.iconStyle({ iconSize: iconSize, checkedColor: checkedColor, disabled: disabled, parentDisabled: parentDisabled, valueClone: valueClone, name: name })
                "
                v-else
            ></van-icon>
        </view>
        <view @tap="onClickLabel" :class="'label-class ' + utils.bem('radio__label', [labelPosition, { disabled: disabled || parentDisabled }])" v-if="labelPosition === 'right'">
            <slot></slot>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/radio/index.wxs"></script>
<script>
import vanIcon from '../icon/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/version');
var a = require('../common/component');
var t = require('../common/relation');
export default {
    components: {
        vanIcon
    },
    data() {
        return {
            direction: '',
            parentDisabled: false,
            valueClone: ''
        };
    },
    field: true,
    relation: (0, t.useParent)('radio-group', function () {
        this.updateFromParent();
    }),
    classes: ['icon-class', 'label-class'],
    props: {
        name: null,
        value: null,
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
        updateFromParent: function () {
            if (this.parent) {
                var e = this.parent.data;
                var a = e.value;
                var t = e.disabled;
                var n = e.direction;
                this.setData({
                    valueClone: a,
                    direction: n,
                    parentDisabled: t
                });
            }
        },
        emitChange: function (a) {
            var t = this.parent || this;
            t.$emit('input', a);
            t.$emit('change', a);
            if ((0, e.canIUseModel)()) {
                t.setData({
                    valueClone: a
                });
            }
        },
        onChange: function () {
            this.disabled || this.parentDisabled || this.emitChange(this.name);
        },
        onClickLabel: function () {
            var e = this;
            var a = e.disabled;
            var t = e.parentDisabled;
            var n = e.labelDisabled;
            var i = e.name;
            a || t || n || this.emitChange(i);
        }
    }
};
</script>
<style>
@import './index.css';
</style>
