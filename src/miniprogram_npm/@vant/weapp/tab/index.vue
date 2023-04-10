<template>
    <view :class="'custom-class ' + utils.bem('tab__pane', { active: active, inactive: !active })" :style="shouldShow ? '' : 'display: none;'">
        <slot v-if="shouldRender"></slot>
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
            active: false,
            shouldRender: '',
            shouldShow: ''
        };
    },
    relation: (0, e.useParent)('tabs'),
    props: {
        dot: {
            type: Boolean
        },
        info: {
            type: null
        },
        title: {
            type: String
        },
        disabled: {
            type: Boolean
        },
        titleStyle: {
            type: String
        },
        name: {
            type: null,
            default: ''
        }
    },
    methods: {
        getComputedName: function () {
            return '' !== this.name ? this.name : this.index;
        },
        updateRender: function (e, t) {
            var a = t.data;
            this.inited = this.inited || e;
            this.setData({
                active: e,
                shouldRender: this.inited || !a.lazyRender,
                shouldShow: e || a.animated
            });
        },
        update: function () {
            if (this.parent) {
                this.parent.updateTabs();
            }
        }
    },
    watch: {
        dot: {
            handler: function () {
                if (this.parent) {
                    this.parent.updateTabs();
                }
            },

            immediate: true
        },

        info: {
            handler: function () {
                if (this.parent) {
                    this.parent.updateTabs();
                }
            },

            immediate: true
        },

        title: {
            handler: function () {
                if (this.parent) {
                    this.parent.updateTabs();
                }
            },

            immediate: true
        },

        disabled: {
            handler: function () {
                if (this.parent) {
                    this.parent.updateTabs();
                }
            },

            immediate: true
        },

        titleStyle: {
            handler: function () {
                if (this.parent) {
                    this.parent.updateTabs();
                }
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
