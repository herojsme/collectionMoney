<template>
    <view class="van-calendar__month" :style="computed.getMonthStyle(visible, date, rowHeight)">
        <view class="van-calendar__month-title" v-if="showMonthTitle">{{ computed.formatMonthTitle(date) }}</view>
        <view class="van-calendar__days" v-if="visible">
            <view class="van-calendar__month-mark" v-if="showMark">{{ computed.getMark(date) }}</view>
            <view
                @tap="onClick"
                :class="utils.bem('calendar__day', [item.type]) + ' ' + item.className"
                :data-index="index"
                :style="computed.getDayStyle(item.type, index, date, rowHeight, color, firstDayOfWeek)"
                v-for="(item, index) in days"
                :key="index"
            >
                <view class="van-calendar__selected-day" :style="'width: ' + rowHeight + 'px; height: ' + rowHeight + 'px; background: ' + color" v-if="item.type === 'selected'">
                    <view class="van-calendar__top-info" v-if="item.topInfo">{{ item.topInfo }}</view>
                    {{ item.text }}
                    <view class="van-calendar__bottom-info" v-if="item.bottomInfo">{{ item.bottomInfo }}</view>
                </view>

                <view v-else>
                    <view class="van-calendar__top-info" v-if="item.topInfo">{{ item.topInfo }}</view>
                    {{ item.text }}
                    <view class="van-calendar__bottom-info" v-if="item.bottomInfo">{{ item.bottomInfo }}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/calendar/components/month/index.wxs"></script>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
Object.defineProperty(exports, '__esModule', {
    value: true
});
var e = require('../../../common/component');
var t = require('../../utils');
export default {
    data() {
        return {
            visible: true,
            days: []
        };
    },
    props: {
        date: {
            type: null
        },
        type: {
            type: String
        },
        color: String,
        minDate: {
            type: null
        },
        maxDate: {
            type: null
        },
        showMark: Boolean,
        rowHeight: null,
        formatter: {
            type: null
        },
        currentDate: {
            type: null
        },
        firstDayOfWeek: {
            type: Number
        },
        allowSameDay: Boolean,
        showSubtitle: Boolean,
        showMonthTitle: Boolean
    },
    methods: {
        onClick: function (e) {
            var t = e.currentTarget.dataset.index;
            var a = this.days[t];
            if ('disabled' !== a.type) {
                this.$emit('click', a);
            }
        },
        setDays: function () {
            for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                var i = new Date(r, n, o);
                var y = this.getDayType(i);
                var l = {
                    date: i,
                    type: y,
                    text: o,
                    bottomInfo: this.getBottomInfo(y)
                };
                if (this.formatter) {
                    l = this.formatter(l);
                }
                e.push(l);
            }
            this.setData({
                days: e
            });
        },
        getMultipleDayType: function (e) {
            var a = this.currentDate;
            if (!Array.isArray(a)) {
                return '';
            }
            var r = function (e) {
                return a.some(function (a) {
                    return 0 === (0, t.compareDay)(a, e);
                });
            };
            if (r(e)) {
                var n = (0, t.getPrevDay)(e);
                var s = (0, t.getNextDay)(e);
                var o = r(n);
                var i = r(s);
                return o && i ? 'multiple-middle' : o ? 'end' : i ? 'start' : 'multiple-selected';
            }
            return '';
        },
        getRangeDayType: function (e) {
            var a = this;
            var r = a.currentDate;
            var n = a.allowSameDay;
            if (!Array.isArray(r)) {
                return '';
            }
            var s = r[0];
            var o = r[1];
            if (!s) {
                return '';
            }
            var i = (0, t.compareDay)(e, s);
            if (!o) {
                return 0 === i ? 'start' : '';
            }
            var y = (0, t.compareDay)(e, o);
            return 0 === i && 0 === y && n ? 'start-end' : 0 === i ? 'start' : 0 === y ? 'end' : i > 0 && y < 0 ? 'middle' : '';
        },
        getDayType: function (e) {
            var a = this;
            var r = a.type;
            var n = a.minDate;
            var s = a.maxDate;
            var o = a.currentDate;
            return (0, t.compareDay)(e, n) < 0 || (0, t.compareDay)(e, s) > 0
                ? 'disabled'
                : 'single' === r
                ? 0 === (0, t.compareDay)(e, o)
                    ? 'selected'
                    : ''
                : 'multiple' === r
                ? this.getMultipleDayType(e)
                : 'range' === r
                ? this.getRangeDayType(e)
                : '';
        },
        getBottomInfo: function (e) {
            if ('range' === this.type) {
                if ('start' === e) {
                    return '开始';
                }
                if ('end' === e) {
                    return '结束';
                }
                if ('start-end' === e) {
                    return '开始/结束';
                }
            }
        }
    },
    watch: {
        date: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
                });
            },

            immediate: true
        },

        type: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
                });
            },

            immediate: true
        },

        minDate: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
                });
            },

            immediate: true
        },

        maxDate: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
                });
            },

            immediate: true
        },

        formatter: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
                });
            },

            immediate: true
        },

        currentDate: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
                });
            },

            immediate: true
        },

        firstDayOfWeek: {
            handler: function () {
                for (var e = [], a = new Date(this.date), r = a.getFullYear(), n = a.getMonth(), s = (0, t.getMonthEndDay)(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                    var i = new Date(r, n, o);
                    var y = this.getDayType(i);
                    var l = {
                        date: i,
                        type: y,
                        text: o,
                        bottomInfo: this.getBottomInfo(y)
                    };
                    if (this.formatter) {
                        l = this.formatter(l);
                    }
                    e.push(l);
                }
                this.setData({
                    days: e
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
