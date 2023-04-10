<template>
    <view class="time_selelct_box">
        <van-popup round @close="onClose" :closeOnClickOverlay="true" position="bottom" :show="show">
            <view class="container">
                <view class="page-body">
                    <picker-view immediateChange @change="bindChange" indicatorStyle="height: 50px;" style="width: 100%; height: 300px" :value="valueClone">
                        <picker-view-column v-if="showYear">
                            <view style="line-height: 50px; text-align: center" v-for="(item, index) in years" :key="index">{{ item }}年</view>
                        </picker-view-column>
                        <picker-view-column v-if="showMoneth">
                            <view style="line-height: 50px; text-align: center" v-for="(item, index) in months" :key="index">{{ item }}月</view>
                        </picker-view-column>
                        <picker-view-column v-if="showDay">
                            <view style="line-height: 50px; text-align: center" v-for="(item, index) in daysClone" :key="index">{{ item }}日</view>
                        </picker-view-column>
                    </picker-view>
                </view>
            </view>
            <view class="time_pick_bottom_box">
                <van-button round @tap.native="cancelAction" customClass="small_cancle_button">取消</van-button>
                <van-button round @tap.native="emitAction" customClass="small_confirm_button">确定</van-button>
            </view>
        </van-popup>
    </view>
</template>

<script>
import vanButton from '../../miniprogram_npm/@vant/weapp/button/index';
import vanDatetimePicker from '../../miniprogram_npm/@vant/weapp/datetime-picker/index';
import vanPopup from '../../miniprogram_npm/@vant/weapp/popup/index';
new Date();
for (var t = [], e = [], a = [], i = [], s = 1940; s <= 2100; s++) {
    t.push(s);
}
t.forEach(function (t, e) {
    if (t == new Date().getFullYear()) {
        console.log(e);
        i[0] = e;
        i[1] = new Date().getMonth();
        i[2] = new Date().getDay();
    }
});
for (var o = 1; o <= 12; o++) {
    e.push(o);
}
for (var n = 1; n <= 31; n++) {
    a.push(n);
}
require('../../utils/util.js');
export default {
    components: {
        vanButton,
        vanDatetimePicker,
        vanPopup
    },
    data() {
        return {
            timeInterval: '',

            formatter: function (t, e) {
                return 'year' === t ? ''.concat(e, '年') : 'month' === t ? ''.concat(e, '月') : 'day' === t ? ''.concat(e, '日') : e;
            },

            year: '',
            month: '',
            day: '',
            selectTime: '',
            tempSelectTime: '',
            selectDate: '',
            selectYMDTime: '',
            selectlineYMDTime: '',
            valueClone: [],
            daysClone: []
        };
    },
    onShareAppMessage: function () {
        return {
            title: 'picker-view',
            path: 'page/component/pages/picker-view/picker-view'
        };
    },
    created: function () {
        this.setData({
            year: new Date().getFullYear(),
            month: this.months[new Date().getMonth()],
            day: this.daysClone[new Date().getDay()],
            valueClone: i
        });
        var t = this.year + '/' + this.fillA(this.month) + '/' + this.fillA(this.day);
        this.setData({
            tempSelectTime: t
        });
    },
    options: {
        multipleSlots: true
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        years: {
            type: Array,
            default: t
        },
        months: {
            type: Array,
            default: e
        },
        days: {
            type: Array,
            default: a
        },
        value: {
            type: Array,
            default: i
        },
        showYear: {
            type: Boolean,
            default: true
        },
        showMoneth: {
            type: Boolean,
            default: true
        },
        showDay: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        getDays: function (t, e) {
            var a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            t % 4 != 0 || (t % 100 == 0 && t % 400 != 0) || (a[1] = 29);
            return a[e - 1];
        },

        bindChange: function (t) {
            var e = t.detail.value;
            console.log('e =', t);
            console.log('val = ', e);
            this.setData({
                year: this.years[e[0]],
                month: this.months[e[1]]
            });
            for (var a = this.getDays(this.year, this.month), i = [], s = 1; s <= a; s++) {
                i.push(s);
            }
            this.setData({
                daysClone: i
            });
            this.setData({
                day: this.daysClone[e[2]]
            });
            var o = [this.year, this.fillA(this.month), ''.concat(this.day ? this.fillA(this.day) : '01')].join('/');
            console.log('tempTime = ', o);
            this.setData({
                tempSelectTime: o
            });
        },

        cancelAction: function () {
            console.log('取消');
            this.dismissPop();
        },

        emitAction: function (t) {
            console.log('event = ', t);
            console.log('确定');
            this.tempSelectTime ||
                this.setData({
                    tempSelectTime: [this.years[0], this.months[0], this.daysClone[0]].join('/')
                });
            this.setData({
                selectTime: this.tempSelectTime,
                selectDate: new Date(this.tempSelectTime).getTime(),
                selectYMDTime: this.formatDate(new Date(this.tempSelectTime).getTime()),
                selectlineYMDTime: this.formatDateLine(new Date(this.tempSelectTime).getTime())
            });
            console.log('this.data.tempSelectTime =', this.tempSelectTime);
            console.log('this.data.selectDate =', this.selectDate);
            console.log('this.data.selectYMDTime =', this.selectYMDTime);
            console.log('this.data.selectlineYMDTime =', this.selectlineYMDTime);
            this.timeDataChange();
        },

        formatDate: function (t) {
            var e = (t = new Date(t)).getFullYear();
            return this.showDay
                ? ''
                      .concat(e, '年')
                      .concat(this.fillA(t.getMonth() + 1), '月')
                      .concat(this.fillA(t.getDate()), '日')
                : ''.concat(e, '年').concat(this.fillA(t.getMonth() + 1), '月');
        },

        formatDateLine: function (t) {
            var e = (t = new Date(t)).getFullYear();
            return this.showDay
                ? ''
                      .concat(e, '-')
                      .concat(this.fillA(t.getMonth() + 1), '-')
                      .concat(this.fillA(t.getDate()))
                : ''.concat(e, '-').concat(this.fillA(t.getMonth() + 1));
        },

        formatTimeReplace: function (t) {
            return t.replace(/\./g, '/');
        },

        fillA: function (t) {
            console.log('this.data.showDay = ', this.showDay);
            console.log('string = ', t);
            return null == t || '' == t ? '' : t.toString().padStart(2, '0');
        },

        timeDataChange: function () {
            console.log('数值改变');
            this.$emit('timeDataChange', {
                detail: {
                    selectTime: this.selectTime,
                    selectDate: this.selectDate,
                    selectYMDTime: this.selectYMDTime,
                    selectlineYMDTime: this.selectlineYMDTime
                }
            });
        },

        dismissPop: function () {
            this.$emit('dismissPop', {
                detail: {
                    show: false
                }
            });
        },

        onClose() {
            console.log('占位：函数 onClose 未声明');
        }
    }
};
</script>
<style>
@import './native_pick_time.css';
</style>
