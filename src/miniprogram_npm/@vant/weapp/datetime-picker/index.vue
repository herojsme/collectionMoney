<template>
    <view style="height: 100%">
        <van-picker
            activeClass="active-class"
            @cancel="onCancel"
            @change="onChange"
            @confirm="onConfirm"
            :cancelButtonText="cancelButtonText"
            class="van-datetime-picker"
            columnClass="column-class"
            :columns="columns"
            :confirmButtonText="confirmButtonText"
            :itemHeight="itemHeight"
            :showToolbar="showToolbar"
            :title="title"
            toolbarClass="toolbar-class"
            :visibleItemCount="visibleItemCount"
        ></van-picker>
    </view>
</template>

<script>
import vanPicker from '../picker/index';
var e = function () {
    return (e =
        Object.assign ||
        function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
                for (var r in (t = arguments[n])) {
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                        e[r] = t[r];
                    }
                }
            }
            return e;
        }).apply(this, arguments);
};
var t = function (e, t, n) {
    if (n || 2 === arguments.length) {
        for (var a, r = 0, u = t.length; r < u; r++) {
            (!a && r in t) || (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
        }
    }
    return e.concat(a || Array.prototype.slice.call(t));
};
Object.defineProperty(exports, '__esModule', {
    value: true
});
var n = require('../common/component');
var a = require('../common/validator');
var r = require('../picker/shared');
var u = new Date().getFullYear();
function i(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function o(e) {
    return '00'.concat(e).slice(-2);
}
function s(e) {
    for (void 0 === e && (e = '1'); isNaN(parseInt(e, 10)); ) {
        e = e.slice(1);
    }
    return parseInt(e, 10);
}
function l(e, t) {
    return 32 - new Date(e, t - 1, 32).getDate();
}
var c = function (e, t) {
    return t;
};
export default {
    components: {
        vanPicker
    },
    data() {
        return {
            innerValue: Date.now(),
            columns: [],
            cancelButtonText: '',
            confirmButtonText: '',
            showToolbar: '',
            title: '',
            visibleItemCount: ''
        };
    },
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: e(e({}, r.pickerProps), {
        value: {
            type: null,
            observer: 'updateValue'
        },
        filter: null,
        type: {
            type: String,
            value: 'datetime',
            observer: 'updateValue'
        },
        showToolbar: {
            type: Boolean,
            value: true
        },
        formatter: {
            type: null,
            value: c
        },
        minDate: {
            type: Number,
            value: new Date(u - 10, 0, 1).getTime(),
            observer: 'updateValue'
        },
        maxDate: {
            type: Number,
            value: new Date(u + 10, 11, 31).getTime(),
            observer: 'updateValue'
        },
        minHour: {
            type: Number,
            value: 0,
            observer: 'updateValue'
        },
        maxHour: {
            type: Number,
            value: 23,
            observer: 'updateValue'
        },
        minMinute: {
            type: Number,
            value: 0,
            observer: 'updateValue'
        },
        maxMinute: {
            type: Number,
            value: 59,
            observer: 'updateValue'
        }
    }),
    methods: {
        updateValue: function () {
            var that = this;
            var t = this;
            var n = this.correctValue(t.value);
            var a = n === t.innerValue;
            this.updateColumnValue(n).then(function () {
                a || that.$emit('input', n);
            });
        },
        getPicker: function () {
            if (null == this.picker) {
                this.picker = this.selectComponent('.van-datetime-picker');
                var e = this.picker;
                var n = e.setColumnValues;
                e.setColumnValues = function () {
                    for (var a = [], r = 0; r < arguments.length; r++) {
                        a[r] = arguments[r];
                    }
                    return n.apply(e, t(t([], a, true), [false], false));
                };
            }
            return this.picker;
        },
        updateColumns: function () {
            var e = this.formatter;
            var t = void 0 === e ? c : e;
            var n = this.getOriginColumns().map(function (e) {
                return {
                    values: e.values.map(function (n) {
                        return t(e.type, n);
                    })
                };
            });
            return this.set({
                columns: n
            });
        },
        getOriginColumns: function () {
            var e = this.filter;
            return this.getRanges().map(function (t) {
                var n = t.type;
                var a = t.range;
                var r = (function (e, t) {
                    for (var n = -1, a = Array(e < 0 ? 0 : e); ++n < e; ) {
                        a[n] = t(n);
                    }
                    return a;
                })(a[1] - a[0] + 1, function (e) {
                    var t = a[0] + e;
                    return 'year' === n ? ''.concat(t) : o(t);
                });
                if (e) {
                    r = e(n, r);
                }
                return {
                    type: n,
                    values: r
                };
            });
        },
        getRanges: function () {
            var e = this;
            if ('time' === e.type) {
                return [
                    {
                        type: 'hour',
                        range: [e.minHour, e.maxHour]
                    },
                    {
                        type: 'minute',
                        range: [e.minMinute, e.maxMinute]
                    }
                ];
            }
            var t = this.getBoundary('max', e.innerValue);
            var n = t.maxYear;
            var a = t.maxDate;
            var r = t.maxMonth;
            var u = t.maxHour;
            var i = t.maxMinute;
            var o = this.getBoundary('min', e.innerValue);
            var s = o.minYear;
            var l = o.minDate;
            var c = [
                {
                    type: 'year',
                    range: [s, n]
                },
                {
                    type: 'month',
                    range: [o.minMonth, r]
                },
                {
                    type: 'day',
                    range: [l, a]
                },
                {
                    type: 'hour',
                    range: [o.minHour, u]
                },
                {
                    type: 'minute',
                    range: [o.minMinute, i]
                }
            ];
            if ('date' === e.type) {
                c.splice(3, 2);
            }
            if ('year-month' === e.type) {
                c.splice(2, 3);
            }
            return c;
        },
        correctValue: function (e) {
            var t;
            var n = this;
            var r = 'time' !== n.type;
            if (r && ((t = e), !(0, a.isDef)(t) || isNaN(new Date(t).getTime()))) e = n.minDate;
            else if (!r && !e) {
                var u = n.minHour;
                e = ''.concat(o(u), ':00');
            }
            if (!r) {
                var s = e.split(':');
                var l = s[0];
                var c = s[1];
                l = o(i(l, n.minHour, n.maxHour));
                c = o(i(c, n.minMinute, n.maxMinute));
                return ''.concat(l, ':').concat(c);
            }
            e = Math.max(e, n.minDate);
            return (e = Math.min(e, n.maxDate));
        },
        getBoundary: function (e, t) {
            var n;
            var a = new Date(t);
            var r = new Date(this[''.concat(e, 'Date')]);
            var u = r.getFullYear();
            var i = 1;
            var o = 1;
            var s = 0;
            var c = 0;
            if ('max' === e) {
                i = 12;
                o = l(a.getFullYear(), a.getMonth() + 1);
                s = 23;
                c = 59;
            }
            if (a.getFullYear() === u) {
                i = r.getMonth() + 1;
                if (a.getMonth() + 1 === i) {
                    o = r.getDate();
                    if (a.getDate() === o) {
                        s = r.getHours();
                        if (a.getHours() === s) {
                            c = r.getMinutes();
                        }
                    }
                }
            }
            (n = {})[''.concat(e, 'Year')] = u;
            n[''.concat(e, 'Month')] = i;
            n[''.concat(e, 'Date')] = o;
            n[''.concat(e, 'Hour')] = s;
            n[''.concat(e, 'Minute')] = c;
            return n;
        },
        onCancel: function () {
            this.$emit('cancel');
        },
        onConfirm: function () {
            this.$emit('confirm', this.innerValue);
        },
        onChange: function () {
            var e;
            var that = this;
            var n = this;
            var a = this.getPicker();
            var r = this.getOriginColumns();
            if ('time' === n.type) {
                var u = a.getIndexes();
                e = ''.concat(+r[0].values[u[0]], ':').concat(+r[1].values[u[1]]);
            } else {
                var i = (u = a.getIndexes()).map(function (e, t) {
                    return r[t].values[e];
                });
                var o = s(i[0]);
                var c = s(i[1]);
                var m = l(o, c);
                var p = s(i[2]);
                if ('year-month' === n.type) {
                    p = 1;
                }
                if (p > m) {
                    p = m;
                } else {
                    p = p;
                }
                var h = 0;
                var v = 0;
                if ('datetime' === n.type) {
                    h = s(i[3]);
                    v = s(i[4]);
                }
                e = new Date(o, c - 1, p, h, v);
            }
            e = this.correctValue(e);
            this.updateColumnValue(e).then(function () {
                that.$emit('input', e);
                that.$emit('change', a);
            });
        },
        updateColumnValue: function (e) {
            var that = this;
            var n = [];
            var a = this.type;
            var r = this.formatter || c;
            var u = this.getPicker();
            if ('time' === a) {
                var i = e.split(':');
                n = [r('hour', i[0]), r('minute', i[1])];
            } else {
                var s = new Date(e);
                n = [r('year', ''.concat(s.getFullYear())), r('month', o(s.getMonth() + 1))];
                if ('date' === a) {
                    n.push(r('day', o(s.getDate())));
                }
                if ('datetime' === a) {
                    n.push(r('day', o(s.getDate())), r('hour', o(s.getHours())), r('minute', o(s.getMinutes())));
                }
            }
            return this.set({
                innerValue: e
            })
                .then(function () {
                    return that.updateColumns();
                })
                .then(function () {
                    return u.setValues(n);
                });
        }
    },
    created: function () {
        var that = this;
        var t = this.correctValue(this.value);
        this.updateColumnValue(t).then(function () {
            that.$emit('input', t);
        });
    }
};
</script>
<style>
@import './index.css';
</style>
