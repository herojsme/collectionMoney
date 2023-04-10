<template>
    <view :class="utils.bem('radio-group', [direction])">
        <slot></slot>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/component');
var r = require('../common/relation');
export default {
    data() {
        return {};
    },
    field: true,
    relation: (0, r.useChildren)('radio'),
    props: {
        value: {
            type: null
        },
        direction: String,
        disabled: {
            type: Boolean
        }
    },
    methods: {
        updateChildren: function () {
            this.children.forEach(function (e) {
                return e.updateFromParent();
            });
        }
    },
    watch: {
        value: {
            handler: function () {
                this.children.forEach(function (e) {
                    return e.updateFromParent();
                });
            },

            immediate: true
        },

        disabled: {
            handler: function () {
                this.children.forEach(function (e) {
                    return e.updateFromParent();
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
