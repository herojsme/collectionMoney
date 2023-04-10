<template>
    <view class="van-calendar__header">
        <block v-if="showTitle">
            <view class="van-calendar__header-title">
                <slot name="title"></slot>
            </view>
            <view class="van-calendar__header-title">{{ title }}</view>
        </block>
        <view @tap="onClickSubtitle" class="van-calendar__header-subtitle" v-if="showSubtitle">{{ subtitle }}</view>
        <view class="van-calendar__weekdays">
            <view class="van-calendar__weekday" v-for="(item, index) in weekdays" :key="index">{{ item }}</view>
        </view>
    </view>
</template>

<script>
var e = function (e, t, i) {
    if (i || 2 === arguments.length) {
        for (var o, n = 0, a = t.length; n < a; n++) {
            (!o && n in t) || (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
        }
    }
    return e.concat(o || Array.prototype.slice.call(t));
};
Object.defineProperty(exports, '__esModule', {
    value: true
});
export default {
    data() {
        return {
            weekdays: []
        };
    },
    props: {
        title: {
            type: String,
            default: '日期选择'
        },
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: {
            type: Number
        }
    },
    created: function () {
        this.initWeekDay();
    },
    methods: {
        initWeekDay: function () {
            var t = ['日', '一', '二', '三', '四', '五', '六'];
            var i = this.firstDayOfWeek || 0;
            this.setData({
                weekdays: e(e([], t.slice(i, 7), true), t.slice(0, i), true)
            });
        },
        onClickSubtitle: function (e) {
            this.$emit('click-subtitle', e);
        }
    },
    watch: {
        firstDayOfWeek: {
            handler: function () {
                var t = ['日', '一', '二', '三', '四', '五', '六'];
                var i = this.firstDayOfWeek || 0;
                this.setData({
                    weekdays: e(e([], t.slice(i, 7), true), t.slice(0, i), true)
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
