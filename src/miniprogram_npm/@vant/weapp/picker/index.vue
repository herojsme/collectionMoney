<template>
    <view class="van-picker custom-class">
        <!-- parse <include src="./toolbar.wxml" v-if="toolbarPosition==='top'"></include> -->
        <template v-if="toolbarPosition === 'top'">
            <view class="van-picker__toolbar toolbar-class" v-if="showToolbar">
                <view @tap="emit" class="van-picker__cancel" data-type="cancel" hoverClass="van-picker__cancel--hover" hoverStayTime="70">{{ cancelButtonText }}</view>
                <view class="van-picker__title van-ellipsis" v-if="title">{{ title }}</view>
                <view @tap="emit" class="van-picker__confirm" data-type="confirm" hoverClass="van-picker__confirm--hover" hoverStayTime="70">{{ confirmButtonText }}</view>
            </view>
        </template>
        <view class="van-picker__loading" v-if="loading">
            <loading color="#1989fa"></loading>
        </view>
        <view @touchmove.stop.prevent="noop" class="van-picker__columns" :style="computed.columnsStyle({ itemHeight: itemHeight, visibleItemCount: visibleItemCount })">
            <picker-column
                activeClass="active-class"
                @change="onChange($event, { index })"
                class="van-picker__column"
                customClass="column-class"
                :data-index="index"
                :defaultIndex="item.defaultIndex || defaultIndex"
                :initialOptions="item.values"
                :itemHeight="itemHeight"
                :valueKey="valueKey"
                :visibleItemCount="visibleItemCount"
                v-for="(item, index) in computed.columns(columns)"
                :key="index"
            ></picker-column>
            <view class="van-picker__mask" :style="computed.maskStyle({ itemHeight: itemHeight, visibleItemCount: visibleItemCount })"></view>
            <view class="van-picker__frame van-hairline--top-bottom" :style="computed.frameStyle({ itemHeight: itemHeight })"></view>
        </view>
        <!-- parse <include src="./toolbar.wxml" v-if="toolbarPosition==='bottom'"></include> -->
        <template v-if="toolbarPosition === 'bottom'">
            <view class="van-picker__toolbar toolbar-class" v-if="showToolbar">
                <view @tap="emit" class="van-picker__cancel" data-type="cancel" hoverClass="van-picker__cancel--hover" hoverStayTime="70">{{ cancelButtonText }}</view>
                <view class="van-picker__title van-ellipsis" v-if="title">{{ title }}</view>
                <view @tap="emit" class="van-picker__confirm" data-type="confirm" hoverClass="van-picker__confirm--hover" hoverStayTime="70">{{ confirmButtonText }}</view>
            </view>
        </template>
    </view>
</template>
<script module="computed" lang="wxs" src="@/miniprogram_npm/@vant/weapp/picker/index.wxs"></script>
<script>
import pickerColumn from '../picker-column/index';
import loading from '../loading/index';
var e = function () {
    return (e =
        Object.assign ||
        function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                for (var i in (t = arguments[n])) {
                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                        e[i] = t[i];
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
var n = require('./shared');
export default {
    components: {
        pickerColumn,
        loading
    },
    data() {
        return {
            toolbarPosition: '',
            showToolbar: '',
            cancelButtonText: '',
            title: '',
            confirmButtonText: '',
            loading: '',
            defaultIndex: '',
            valueKey: '',
            visibleItemCount: ''
        };
    },
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: e(e({}, n.pickerProps), {
        valueKey: {
            type: String,
            value: 'text'
        },
        toolbarPosition: {
            type: String,
            value: 'top'
        },
        defaultIndex: {
            type: Number,
            value: 0
        },
        columns: {
            type: Array,
            value: [],
            observer: function (e) {
                if (void 0 === e) {
                    e = [];
                }
                this.simple = e.length && !e[0].values;
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        }
    }),
    beforeCreate: function () {
        var that = this;
        Object.defineProperty(this, 'children', {
            get: function () {
                return that.selectAllComponents('.van-picker__column') || [];
            }
        });
    },
    methods: {
        noop: function () {},
        setColumns: function () {
            var that = this;
            var t = this;
            var n = (
                this.simple
                    ? [
                          {
                              values: t.columns
                          }
                      ]
                    : t.columns
            ).map(function (t, n) {
                return that.setColumnValues(n, t.values);
            });
            return Promise.all(n);
        },
        emit: function (e) {
            var t = e.currentTarget.dataset.type;
            if (this.simple) {
                this.$emit(t, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(t, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function (e) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: e.currentTarget.dataset.index
                });
            }
        },
        getColumn: function (e) {
            return this.children[e];
        },
        getColumnValue: function (e) {
            var t = this.getColumn(e);
            return t && t.getValue();
        },
        setColumnValue: function (e, t) {
            var n = this.getColumn(e);
            return null == n ? Promise.reject(new Error('setColumnValue: 对应列不存在')) : n.setValue(t);
        },
        getColumnIndex: function (e) {
            return (this.getColumn(e) || {}).data.currentIndex;
        },
        setColumnIndex: function (e, t) {
            var n = this.getColumn(e);
            return null == n ? Promise.reject(new Error('setColumnIndex: 对应列不存在')) : n.setIndex(t);
        },
        getColumnValues: function (e) {
            return (this.children[e] || {}).data.options;
        },
        setColumnValues: function (e, t, n) {
            if (void 0 === n) {
                n = true;
            }
            var r = this.children[e];
            return null == r
                ? Promise.reject(new Error('setColumnValues: 对应列不存在'))
                : JSON.stringify(r.data.options) === JSON.stringify(t)
                ? Promise.resolve()
                : r
                      .set({
                          options: t
                      })
                      .then(function () {
                          if (n) {
                              r.setIndex(0);
                          }
                      });
        },
        getValues: function () {
            return this.children.map(function (e) {
                return e.getValue();
            });
        },
        setValues: function (e) {
            var that = this;
            var n = e.map(function (e, n) {
                return that.setColumnValue(n, e);
            });
            return Promise.all(n);
        },
        getIndexes: function () {
            return this.children.map(function (e) {
                return e.data.currentIndex;
            });
        },
        setIndexes: function (e) {
            var that = this;
            var n = e.map(function (e, n) {
                return that.setColumnIndex(n, e);
            });
            return Promise.all(n);
        }
    }
};
</script>
<style>
@import './index.css';
</style>
