<template>
    <view :class="utils.bem('checkbox-group', [{ horizontal: directionClone === 'horizontal' }])">
        <slot></slot>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../common/relation');
export default {
    data() {
        return {
            parentDisabled: '',
            valueClone: [],
            directionClone: ''
        };
    },
    field: true,
    relation: (0, e.useChildren)('checkbox', function (e) {
        this.updateChild(e);
    }),
    props: {
        max: Number,
        value: {
            type: Array
        },
        disabled: {
            type: Boolean
        },
        direction: {
            type: String,
            default: 'vertical'
        }
    },
    methods: {
        updateChildren: function () {
            var that = this;
            this.children.forEach(function (t) {
                return that.updateChild(t);
            });
        },
        updateChild: function (e) {
            var t = this;
            var i = t.value;
            var r = t.disabled;
            var a = t.direction;
            e.setData({
                valueClone: -1 !== i.indexOf(e.data.name),
                parentDisabled: r,
                directionClone: a
            });
        }
    },
    watch: {
        value: {
            handler: function () {
                var that = this;
                this.children.forEach(function (t) {
                    return that.updateChild(t);
                });
            },

            immediate: true,
            deep: true
        },

        disabled: {
            handler: function () {
                var that = this;
                this.children.forEach(function (t) {
                    return that.updateChild(t);
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
