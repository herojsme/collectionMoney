<template>
    <view :class="utils.bem('search', { withaction: showAction || useActionSlot }) + ' custom-class'" :style="'background: ' + background">
        <view :class="utils.bem('search__content', [shape])">
            <view class="van-search__label" v-if="label">{{ label }}</view>
            <slot name="label" v-else></slot>
            <van-field
                @blur="onBlur"
                @change="onChange"
                @clear="onClear"
                @click-input="onClickInput"
                @confirm="onSearch"
                @focus="onFocus"
                :border="false"
                class="van-search__field field-class"
                :clearIcon="clearIcon"
                :clearTrigger="clearTrigger"
                :clearable="clearable"
                confirmType="search"
                customStyle="padding: 5px 10px 5px 0; background-color: transparent;"
                :disabled="disabled"
                :error="error"
                :focus="focus"
                :inputAlign="inputAlign"
                inputClass="input-class"
                :leftIcon="!useLeftIconSlot ? leftIcon : ''"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :placeholderStyle="placeholderStyle"
                :readonly="readonly"
                :rightIcon="!useRightIconSlot ? rightIcon : ''"
                type="search"
                :value="value"
            >
                <slot name="left-icon" slot="left-icon" v-if="useLeftIconSlot"></slot>
                <slot name="right-icon" slot="right-icon" v-if="useRightIconSlot"></slot>
            </van-field>
        </view>
        <view class="van-search__action" hoverClass="van-search__action--hover" hoverStayTime="70" v-if="showAction || useActionSlot">
            <slot name="action" v-if="useActionSlot"></slot>
            <view @tap="onCancel" class="cancel-class" v-else>{{ actionText }}</view>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
import vanField from '../field/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/component');
var t = require('../common/version');
export default {
    components: {
        vanField
    },
    data() {
        return {
            value: ''
        };
    },
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        useLeftIconSlot: Boolean,
        useRightIconSlot: Boolean,
        leftIcon: {
            type: String,
            default: 'search'
        },
        rightIcon: String,
        placeholder: String,
        placeholderStyle: String,
        actionText: {
            type: String,
            default: '取消'
        },
        background: {
            type: String,
            default: '#ffffff'
        },
        maxlength: {
            type: Number,
            default: -1
        },
        shape: {
            type: String,
            default: 'square'
        },
        clearable: {
            type: Boolean,
            default: true
        },
        clearTrigger: {
            type: String,
            default: 'focus'
        },
        clearIcon: {
            type: String,
            default: 'clear'
        }
    },
    methods: {
        onChange: function (e) {
            if ((0, t.canIUseModel)()) {
                this.setData({
                    value: e.detail
                });
            }
            this.$emit('change', e.detail);
        },
        onCancel: function () {
            var that = this;
            setTimeout(function () {
                if ((0, t.canIUseModel)()) {
                    that.setData({
                        value: ''
                    });
                }
                that.$emit('cancel');
                that.$emit('change', '');
            }, 200);
        },
        onSearch: function (e) {
            this.$emit('search', e.detail);
        },
        onFocus: function (e) {
            this.$emit('focus', e.detail);
        },
        onBlur: function (e) {
            this.$emit('blur', e.detail);
        },
        onClear: function (e) {
            this.$emit('clear', e.detail);
        },
        onClickInput: function (e) {
            this.$emit('click-input', e.detail);
        }
    }
};
</script>
<style>
@import './index.css';
</style>
