<template>
    <view style="height: 100%">
        <van-popup
            @after-enter="onOpened"
            @after-leave="onClosed"
            @close="onClose"
            @enter="onOpen"
            closeIconClass="van-calendar__close-icon"
            :closeOnClickOverlay="closeOnClickOverlay"
            :closeable="showTitle || showSubtitle"
            :customClass="'van-calendar__popup--' + position"
            :position="position"
            :round="round"
            :show="show"
            v-if="poppable"
        >
            <!-- parse <include src="./calendar.wxml"></include> -->
            <template>
                <view class="van-calendar">
                    <header
                        @click-subtitle="onClickSubtitle"
                        :firstDayOfWeek="firstDayOfWeek"
                        :showSubtitle="showSubtitle"
                        :showTitle="showTitle"
                        :subtitle="subtitle"
                        :title="title"
                    >
                        <slot name="title" slot="title"></slot>
                    </header>
                    <scroll-view scrollY class="van-calendar__body" :scrollIntoView="scrollIntoView">
                        <month
                            :allowSameDay="allowSameDay"
                            @click="onClickDay($event, { date: item, tagId: 'month' + index })"
                            class="month"
                            :color="color"
                            :currentDate="currentDate"
                            :data-date="item"
                            :date="item"
                            :firstDayOfWeek="firstDayOfWeek"
                            :formatter="formatter"
                            :id="'month' + index"
                            :maxDate="maxDate"
                            :minDate="minDate"
                            :rowHeight="rowHeight"
                            :showMark="showMark"
                            :showMonthTitle="index !== 0 || !showSubtitle"
                            :showSubtitle="showSubtitle"
                            :type="type"
                            v-for="(item, index) in computed.getMonths(minDate, maxDate)"
                            :key="index"
                        ></month>
                    </scroll-view>
                    <view :class="utils.bem('calendar__footer', { safeAreaInsetBottom: safeAreaInsetBottom })">
                        <slot name="footer"></slot>
                    </view>
                    <view :class="utils.bem('calendar__footer', { safeAreaInsetBottom: safeAreaInsetBottom })">
                        <van-button
                            block
                            round
                            @click="onConfirm"
                            :color="color"
                            customClass="van-calendar__confirm"
                            :disabled="computed.getButtonDisabled(type, currentDate)"
                            nativeType="text"
                            type="danger"
                            v-if="showConfirm"
                        >
                            {{ computed.getButtonDisabled(type, currentDate) ? confirmDisabledText : confirmText }}
                        </van-button>
                    </view>
                </view>
            </template>
        </van-popup>
        <!-- parse <include src="./calendar.wxml" v-else></include> -->
        <template v-else>
            <view class="van-calendar">
                <header @click-subtitle="onClickSubtitle" :firstDayOfWeek="firstDayOfWeek" :showSubtitle="showSubtitle" :showTitle="showTitle" :subtitle="subtitle" :title="title">
                    <slot name="title" slot="title"></slot>
                </header>
                <scroll-view scrollY class="van-calendar__body" :scrollIntoView="scrollIntoView">
                    <month
                        :allowSameDay="allowSameDay"
                        @click="onClickDay($event, { date: item, tagId: 'month' + index })"
                        class="month"
                        :color="color"
                        :currentDate="currentDate"
                        :data-date="item"
                        :date="item"
                        :firstDayOfWeek="firstDayOfWeek"
                        :formatter="formatter"
                        :id="'month' + index"
                        :maxDate="maxDate"
                        :minDate="minDate"
                        :rowHeight="rowHeight"
                        :showMark="showMark"
                        :showMonthTitle="index !== 0 || !showSubtitle"
                        :showSubtitle="showSubtitle"
                        :type="type"
                        v-for="(item, index) in computed.getMonths(minDate, maxDate)"
                        :key="index"
                    ></month>
                </scroll-view>
                <view :class="utils.bem('calendar__footer', { safeAreaInsetBottom: safeAreaInsetBottom })">
                    <slot name="footer"></slot>
                </view>
                <view :class="utils.bem('calendar__footer', { safeAreaInsetBottom: safeAreaInsetBottom })">
                    <van-button
                        block
                        round
                        @click="onConfirm"
                        :color="color"
                        customClass="van-calendar__confirm"
                        :disabled="computed.getButtonDisabled(type, currentDate)"
                        nativeType="text"
                        type="danger"
                        v-if="showConfirm"
                    >
                        {{ computed.getButtonDisabled(type, currentDate) ? confirmDisabledText : confirmText }}
                    </van-button>
                </view>
            </view>
        </template>
        <van-toast id="van-toast"></van-toast>
    </view>
</template>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/calendar/index.wxs"></script>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
import header from './components/header/index';
import month from './components/month/index';
import vanButton from '../button/index';
import vanPopup from '../popup/index';
import vanToast from '../toast/index';
var t = function (t, e, a) {
    if (a || 2 === arguments.length) {
        for (var n, i = 0, o = e.length; i < o; i++) {
            (!n && i in e) || (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
        }
    }
    return t.concat(n || Array.prototype.slice.call(e));
};
var e = function (t) {
    return t && t.__esModule
        ? t
        : {
              default: t
          };
};
Object.defineProperty(exports, '__esModule', {
    value: true
});
var a;
var n = require('../common/component');
var i = require('./utils');
var o = e(require('../toast/toast'));
var r = require('../common/utils');
var s = (0, i.getToday)().getTime();
var l = ((a = (0, i.getToday)()), new Date(a.getFullYear(), a.getMonth() + 6, a.getDate()).getTime());
var c = function (t) {
    return t instanceof Date ? t.getTime() : t;
};
export default {
    components: {
        header,
        month,
        vanButton,
        vanPopup,
        vanToast
    },
    data() {
        return {
            subtitle: '',
            currentDate: null,
            scrollIntoView: ''
        };
    },
    props: {
        title: {
            type: String,
            default: '日期选择'
        },
        color: String,
        show: {
            type: Boolean
        },
        formatter: null,
        confirmText: {
            type: String,
            default: '确定'
        },
        confirmDisabledText: {
            type: String,
            default: '确定'
        },
        rangePrompt: String,
        showRangePrompt: {
            type: Boolean,
            default: true
        },
        defaultDate: {
            type: null
        },
        allowSameDay: Boolean,
        type: {
            type: String,
            default: 'single'
        },
        minDate: {
            type: Number,
            default: s
        },
        maxDate: {
            type: Number,
            default: l
        },
        position: {
            type: String,
            default: 'bottom'
        },
        rowHeight: {
            type: null,
            default: i.ROW_HEIGHT
        },
        round: {
            type: Boolean,
            default: true
        },
        poppable: {
            type: Boolean,
            default: true
        },
        showMark: {
            type: Boolean,
            default: true
        },
        showTitle: {
            type: Boolean,
            default: true
        },
        showConfirm: {
            type: Boolean,
            default: true
        },
        showSubtitle: {
            type: Boolean,
            default: true
        },
        safeAreaInsetBottom: {
            type: Boolean,
            default: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        maxRange: {
            type: null,
            default: null
        },
        firstDayOfWeek: {
            type: Number,
            default: 0
        },
        readonly: Boolean
    },
    created: function () {
        this.setData({
            currentDate: this.getInitialDate(this.defaultDate)
        });
    },
    mounted: function () {
        (!this.show && this.poppable) || (this.initRect(), this.scrollIntoViewFun());
    },
    methods: {
        reset: function () {
            this.setData({
                currentDate: this.getInitialDate()
            });
            this.scrollIntoViewFun();
        },
        initRect: function () {
            var that = this;
            if (null != this.contentObserver) {
                this.contentObserver.disconnect();
            }
            var e = this.createIntersectionObserver({
                thresholds: [0, 0.1, 0.9, 1],
                observeAll: true
            });
            this.contentObserver = e;
            e.relativeTo('.van-calendar__body');
            e.observe('.month', function (e) {
                if (e.boundingClientRect.top <= e.relativeRect.top) {
                    that.setData({
                        subtitle: (0, i.formatMonthTitle)(e.dataset.date)
                    });
                }
            });
        },
        limitDateRange: function (t, e, a) {
            if (void 0 === e) {
                e = null;
            }
            if (void 0 === a) {
                a = null;
            }
            e = e || this.minDate;
            a = a || this.maxDate;
            return -1 === (0, i.compareDay)(t, e) ? e : 1 === (0, i.compareDay)(t, a) ? a : t;
        },
        getInitialDate: function (t) {
            var that = this;
            if (void 0 === t) {
                t = null;
            }
            var a = this;
            var n = a.type;
            var o = a.minDate;
            var r = a.maxDate;
            var s = (0, i.getToday)().getTime();
            if ('range' === n) {
                Array.isArray(t) || (t = []);
                var l = t || [];
                var c = l[0];
                var u = l[1];
                return [this.limitDateRange(c || s, o, (0, i.getPrevDay)(new Date(r)).getTime()), this.limitDateRange(u || s, (0, i.getNextDay)(new Date(o)).getTime())];
            }
            return 'multiple' === n
                ? Array.isArray(t)
                    ? t.map(function (t) {
                          return that.limitDateRange(t);
                      })
                    : [this.limitDateRange(s)]
                : ((t && !Array.isArray(t)) || (t = s), this.limitDateRange(t));
        },
        scrollIntoViewFun: function () {
            var that = this;
            (0, r.requestAnimationFrame)(function () {
                var e = that;
                var a = e.currentDate;
                var n = e.type;
                var o = e.show;
                var r = e.poppable;
                var s = e.minDate;
                var l = e.maxDate;
                var c = 'single' === n ? a : a[0];
                !c ||
                    (!o && r) ||
                    (0, i.getMonths)(s, l).some(function (e, a) {
                        return (
                            0 === (0, i.compareMonth)(e, c) &&
                            (that.setData({
                                scrollIntoView: 'month'.concat(a)
                            }),
                            true)
                        );
                    });
            });
        },
        onOpen: function () {
            this.$emit('open');
        },
        onOpened: function () {
            this.$emit('opened');
        },
        onClose: function () {
            this.$emit('close');
        },
        onClosed: function () {
            this.$emit('closed');
        },
        onClickDay: function (e, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(e, _dataset);
            /* ---处理dataset end--- */
            if (!this.readonly) {
                var a = e.detail.date;
                var n = this;
                var o = n.type;
                var r = n.currentDate;
                var s = n.allowSameDay;
                if ('range' === o) {
                    var l = r[0];
                    var u = r[1];
                    if (l && !u) {
                        var h = (0, i.compareDay)(a, l);
                        if (1 === h) {
                            var m = this.selectComponent('.month').data.days;
                            m.some(function (t, e) {
                                var n = 'disabled' === t.type && c(l) < c(t.date) && c(t.date) < c(a);
                                if (n) {
                                    a = m[e - 1].date;
                                }
                                return n;
                            });
                            this.select([l, a], true);
                        } else {
                            if (-1 === h) {
                                this.select([a, null]);
                            } else {
                                if (s) {
                                    this.select([a, a]);
                                }
                            }
                        }
                    } else {
                        this.select([a, null]);
                    }
                } else if ('multiple' === o) {
                    var p;
                    if (
                        r.some(function (t, e) {
                            var n = 0 === (0, i.compareDay)(t, a);
                            if (n) {
                                p = e;
                            }
                            return n;
                        })
                    ) {
                        var y = r.splice(p, 1);
                        this.setData({
                            currentDate: r
                        });
                        this.unselect(y);
                    } else {
                        this.select(t(t([], r, true), [a], false));
                    }
                } else {
                    this.select(a, true);
                }
            }
        },
        unselect: function (t) {
            var e = t[0];
            if (e) {
                this.$emit('unselect', (0, i.copyDates)(e));
            }
        },
        select: function (t, e) {
            if (e && 'range' === this.type && !this.checkRange(t)) {
                return void (this.showConfirm ? this.emit([t[0], (0, i.getDayByOffset)(t[0], this.maxRange - 1)]) : this.emit(t));
            }
            this.emit(t);
            if (e && !this.showConfirm) {
                this.onConfirm();
            }
        },
        emit: function (t) {
            this.setData({
                currentDate: Array.isArray(t) ? t.map(c) : c(t)
            });
            this.$emit('select', (0, i.copyDates)(t));
        },
        checkRange: function (t) {
            var e = this;
            var a = e.maxRange;
            var n = e.rangePrompt;
            var r = e.showRangePrompt;
            return (
                !(a && (0, i.calcDateNum)(t) > a) ||
                (r &&
                    (0, o.default)({
                        context: this,
                        message: n || '选择天数不能超过 '.concat(a, ' 天')
                    }),
                this.$emit('over-range'),
                false)
            );
        },
        onConfirm: function () {
            var that = this;
            if ('range' !== this.type || this.checkRange(this.currentDate)) {
                uni.nextTick(function () {
                    that.$emit('confirm', (0, i.copyDates)(that.currentDate));
                });
            }
        },
        onClickSubtitle: function (t) {
            this.$emit('click-subtitle', t);
        }
    },
    watch: {
        show: {
            handler: function (t) {
                if (t) {
                    this.initRect();
                    this.scrollIntoViewFun();
                }
            },

            immediate: true
        },

        defaultDate: {
            handler: function (t) {
                this.setData({
                    currentDate: t
                });
                this.scrollIntoViewFun();
            },

            immediate: true
        },

        type: {
            handler: function () {
                this.setData({
                    currentDate: this.getInitialDate()
                });
                this.scrollIntoViewFun();
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
