<template>
    <view style="height: 100%">
        <van-picker
            activeClass="active-class"
            @cancel="onCancel"
            @change="onChange"
            @confirm="onConfirm"
            :cancelButtonText="cancelButtonText"
            class="van-area__picker"
            columnClass="column-class"
            :columns="computed.displayColumns(columns, columnsNum)"
            :confirmButtonText="confirmButtonText"
            :itemHeight="itemHeight"
            :loading="loading"
            :showToolbar="showToolbar"
            :title="title"
            toolbarClass="toolbar-class"
            valueKey="name"
            :visibleItemCount="visibleItemCount"
        ></van-picker>
    </view>
</template>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/area/index.wxs"></script>
<script>
import vanPicker from '../picker/index';
var e = function () {
    return (e =
        Object.assign ||
        function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
                for (var s in (t = arguments[n])) {
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        e[s] = t[s];
                    }
                }
            }
            return e;
        }).apply(this, arguments);
};
Object.defineProperty(exports, '__esModule', {
    value: true
});
var t = require('../common/component');
var n = require('../picker/shared');
var i = require('../common/utils');
export default {
    components: {
        vanPicker
    },
    data() {
        return {
            columns: [
                {
                    values: []
                },
                {
                    values: []
                },
                {
                    values: []
                }
            ],

            typeToColumnsPlaceholder: {},
            cancelButtonText: '',
            confirmButtonText: '',
            loading: '',
            showToolbar: '',
            title: '',
            visibleItemCount: ''
        };
    },
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: e(e({}, n.pickerProps), {
        showToolbar: {
            type: Boolean,
            value: true
        },
        value: {
            type: String,
            observer: function (e) {
                this.code = e;
                this.setValues();
            }
        },
        areaList: {
            type: Object,
            value: {},
            observer: 'setValues'
        },
        columnsNum: {
            type: null,
            value: 3
        },
        columnsPlaceholder: {
            type: Array,
            observer: function (e) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: e[0] || '',
                        city: e[1] || '',
                        county: e[2] || ''
                    }
                });
            }
        }
    }),
    mounted: function () {
        var that = this;
        (0, i.requestAnimationFrame)(function () {
            that.setValues();
        });
    },
    methods: {
        getPicker: function () {
            if (null == this.picker) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
        onCancel: function (e) {
            this.emit('cancel', e.detail);
        },
        onConfirm: function (e) {
            var t = e.detail.index;
            var n = e.detail.value;
            n = this.parseValues(n);
            this.emit('confirm', {
                value: n,
                index: t
            });
        },
        emit: function (e, t) {
            t.values = t.value;
            delete t.value;
            this.$emit(e, t);
        },
        parseValues: function (t) {
            var n = this.columnsPlaceholder;
            return t.map(function (t, i) {
                return !t || (t.code && t.name !== n[i])
                    ? t
                    : e(e({}, t), {
                          code: '',
                          name: ''
                      });
            });
        },
        onChange: function (e) {
            var t;
            var that = this;
            var i = e.detail;
            var s = i.index;
            var r = i.picker;
            var c = i.value;
            this.code = c[s].code;
            null === (t = this.setValues()) ||
                void 0 === t ||
                t.then(function () {
                    that.$emit('change', {
                        picker: r,
                        values: that.parseValues(r.getValues()),
                        index: s
                    });
                });
        },
        getConfig: function (e) {
            var t = this.areaList;
            return (t && t[''.concat(e, '_list')]) || {};
        },
        getList: function (e, t) {
            if ('province' !== e && !t) {
                return [];
            }
            var n = this.typeToColumnsPlaceholder;
            var i = this.getConfig(e);
            var s = Object.keys(i).map(function (e) {
                return {
                    code: e,
                    name: i[e]
                };
            });
            if (null != t) {
                if ('9' === t[0] && 'city' === e) {
                    t = '9';
                }
                s = s.filter(function (e) {
                    return 0 === e.code.indexOf(t);
                });
            }
            if (n[e] && s.length) {
                var r = 'province' === e ? '' : 'city' === e ? '000000'.slice(2, 4) : '000000'.slice(4, 6);
                s.unshift({
                    code: ''.concat(t).concat(r),
                    name: n[e]
                });
            }
            return s;
        },
        getIndex: function (e, t) {
            var n = 'province' === e ? 2 : 'city' === e ? 4 : 6;
            var i = this.getList(e, t.slice(0, n - 2));
            if ('9' === t[0] && 'province' === e) {
                n = 1;
            }
            t = t.slice(0, n);
            for (var s = 0; s < i.length; s++) {
                if (i[s].code.slice(0, n) === t) {
                    return s;
                }
            }
            return 0;
        },
        setValues: function () {
            var e = this.getPicker();
            if (e) {
                var t = this.code || this.getDefaultCode();
                var n = this.getList('province');
                var i = this.getList('city', t.slice(0, 2));
                var s = [];
                var r = [];
                var c = this.columnsNum;
                if (c >= 1) {
                    s.push(e.setColumnValues(0, n, false));
                    r.push(this.getIndex('province', t));
                }
                if (c >= 2) {
                    s.push(e.setColumnValues(1, i, false));
                    r.push(this.getIndex('city', t));
                    if (i.length && '00' === t.slice(2, 4)) {
                        t = i[0].code;
                    }
                }
                if (3 === c) {
                    s.push(e.setColumnValues(2, this.getList('county', t.slice(0, 4)), false));
                    r.push(this.getIndex('county', t));
                }
                return Promise.all(s)
                    .catch(function () {})
                    .then(function () {
                        return e.setIndexes(r);
                    })
                    .catch(function () {});
            }
        },
        getDefaultCode: function () {
            if (this.columnsPlaceholder.length) {
                return '000000';
            }
            var e = Object.keys(this.getConfig('county'));
            if (e[0]) {
                return e[0];
            }
            var t = Object.keys(this.getConfig('city'));
            return t[0] ? t[0] : '';
        },
        getValues: function () {
            var e = this.getPicker();
            return e
                ? this.parseValues(
                      e.getValues().filter(function (e) {
                          return !!e;
                      })
                  )
                : [];
        },
        getDetail: function () {
            var e = this.getValues();
            var t = {
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!e.length) {
                return t;
            }
            var n = e.map(function (e) {
                return e.name;
            });
            t.code = e[e.length - 1].code;
            if ('9' === t.code[0]) {
                t.country = n[1] || '';
                t.province = n[2] || '';
            } else {
                t.province = n[0] || '';
                t.city = n[1] || '';
                t.county = n[2] || '';
            }
            return t;
        },
        reset: function (e) {
            this.code = e || '';
            return this.setValues();
        }
    }
};
</script>
<style>
@import './index.css';
</style>
