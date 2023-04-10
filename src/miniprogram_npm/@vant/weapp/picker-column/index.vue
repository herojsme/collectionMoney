<template>
    <view
        @touchcancel="onTouchEnd"
        @touchend="onTouchEnd"
        @touchstart="onTouchStart"
        @touchmove.stop.prevent="onTouchMove"
        class="van-picker-column custom-class"
        :style="computed.rootStyle({ itemHeight: itemHeight, visibleItemCount: visibleItemCount })"
    >
        <view :style="computed.wrapperStyle({ offset: offset, itemHeight: itemHeight, visibleItemCount: visibleItemCount, duration: duration })">
            <view
                @tap="onClickItem"
                :class="
                    'van-ellipsis ' +
                    utils.bem('picker-column__item', { disabled: option && option.disabled, selected: index === currentIndex }) +
                    ' ' +
                    (index === currentIndex ? 'active-class' : '')
                "
                :data-index="index"
                :style="'height: ' + itemHeight + 'px'"
                v-for="(option, index) in options"
                :key="index"
            >
                {{ computed.optionText(option, valueKey) }}
            </view>
        </view>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/picker-column/index.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var t = require('../common/component');
var e = require('../common/utils');
var n = require('../common/validator');
export default {
    data() {
        return {
            startY: 0,
            offset: 0,
            duration: 0,
            startOffset: 0,
            options: [],
            currentIndex: 0,

            option: {
                disabled: ''
            }
        };
    },
    classes: ['active-class'],
    props: {
        valueKey: String,
        className: String,
        itemHeight: Number,
        visibleItemCount: Number,
        initialOptions: {
            type: Array,
            default: () => []
        },
        defaultIndex: {
            type: Number,
            default: 0
        }
    },
    created: function () {
        var that = this;
        var e = this;
        var n = e.defaultIndex;
        var i = e.initialOptions;
        this.set({
            currentIndex: n,
            options: i
        }).then(function () {
            that.setIndex(n);
        });
    },
    methods: {
        getCount: function () {
            return this.options.length;
        },
        onTouchStart: function (t) {
            this.setData({
                startY: t.touches[0].clientY,
                startOffset: this.offset,
                duration: 0
            });
        },
        onTouchMove: function (t) {
            var n = this;
            var i = t.touches[0].clientY - n.startY;
            this.setData({
                offset: (0, e.range)(n.startOffset + i, -this.getCount() * n.itemHeight, n.itemHeight)
            });
        },
        onTouchEnd: function () {
            var t = this;
            if (t.offset !== t.startOffset) {
                this.setData({
                    duration: 200
                });
                var n = (0, e.range)(Math.round(-t.offset / t.itemHeight), 0, this.getCount() - 1);
                this.setIndex(n, true);
            }
        },
        onClickItem: function (t) {
            var e = t.currentTarget.dataset.index;
            this.setIndex(e, true);
        },
        adjustIndex: function (t) {
            for (var n = this, i = this.getCount(), s = (t = (0, e.range)(t, 0, i)); s < i; s++) {
                if (!this.isDisabled(n.options[s])) {
                    return s;
                }
            }
            for (s = t - 1; s >= 0; s--) {
                if (!this.isDisabled(n.options[s])) {
                    return s;
                }
            }
        },
        isDisabled: function (t) {
            return (0, n.isObj)(t) && t.disabled;
        },
        getOptionText: function (t) {
            var e = this;
            return (0, n.isObj)(t) && e.valueKey in t ? t[e.valueKey] : t;
        },
        setIndex: function (t, e) {
            var that = this;
            var i = this;
            var s = -(t = this.adjustIndex(t) || 0) * i.itemHeight;
            return t !== i.currentIndex
                ? this.set({
                      offset: s,
                      currentIndex: t
                  }).then(function () {
                      if (e) {
                          that.$emit('change', t);
                      }
                  })
                : this.set({
                      offset: s
                  });
        },
        setValue: function (t) {
            for (var e = this.options, n = 0; n < e.length; n++) {
                if (this.getOptionText(e[n]) === t) {
                    return this.setIndex(n);
                }
            }
            return Promise.resolve();
        },
        getValue: function () {
            var t = this;
            return t.options[t.currentIndex];
        }
    },
    watch: {
        defaultIndex: {
            handler: function (t) {
                this.setIndex(t);
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
