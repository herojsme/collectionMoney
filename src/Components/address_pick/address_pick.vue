<template>
    <view style="height: 100%">
        <van-popup round @close="onClose" :closeOnClickOverlay="true" position="bottom" :show="showClone">
            <view style="display: flex; justify-content: space-between">
                <view @tap="dismissPop" style="margin: 40rpx 40rpx; color: #969799; font-size: 30rpx">取消</view>
                <view @tap="clickTrue" style="margin: 40rpx 40rpx; color: #586b94; font-size: 30rpx">确定</view>
            </view>
            <view class="container">
                <view class="page-body">
                    <picker-view immediateChange @change="bindChange" indicatorStyle="height: 50px;" style="width: 100%; height: 300px" :value="selectValueArr">
                        <picker-view-column>
                            <view style="line-height: 50px; text-align: center" v-for="(item, index) in addressList" :key="index">{{ item.label }}</view>
                        </picker-view-column>
                        <picker-view-column>
                            <view style="line-height: 50px; text-align: center" v-for="(item, index) in cityList" :key="index">{{ item.label }}</view>
                        </picker-view-column>
                        <picker-view-column v-if="showAreaCode">
                            <view style="line-height: 50px; text-align: center" v-for="(item, index) in areaList" :key="index">{{ item.label }}</view>
                        </picker-view-column>
                    </picker-view>
                </view>
            </view>
        </van-popup>
    </view>
</template>

<script>
import vanButton from '../../miniprogram_npm/@vant/weapp/button/index';
import vanDatetimePicker from '../../miniprogram_npm/@vant/weapp/datetime-picker/index';
import vanPopup from '../../miniprogram_npm/@vant/weapp/popup/index';
var e = require('../../api/api').API;
export default {
    components: {
        vanButton,
        vanDatetimePicker,
        vanPopup
    },
    data() {
        return {
            selectValueArr: [0, 0, 0],
            showClone: false,
            addressList: [],
            cityList: [],
            areaList: [],
            cityCode: '',
            provinceCode: '',
            areaCode: '',
            addressString: '',
            showClone: false
        };
    },
    onShareAppMessage: function () {
        return {
            title: 'picker-view',
            path: 'page/component/pages/picker-view/picker-view'
        };
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        currentProvinceCode: {
            type: String,
            default: ''
        },
        showAreaCode: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        // 处理小程序 attached 生命周期
        this.attached();
        // 处理小程序 ready 生命周期
        this.$nextTick(() => this.ready());
    },
    moved: function () {
        console.log('生命周期2');
    },
    destroyed: function () {
        console.log('生命周期3');
    },
    methods: {
        ready: function () {
            console.log('生命周期5');
        },

        attached: function () {
            console.log('生命周期4');
        },

        attached: function () {
            console.log('生命周期1');
            this.requestAddress();
        },

        requestAddress: function () {
            var that = this;
            console.log('this.properties.currentProvinceCode =', this.currentProvinceCode);
            e.POSTAllareaInfo({
                queryType: 3
            }).then(function (e) {
                console.log('组件 res = ', e);
                var a = e.object;
                var s = a[0].children;
                var o = s[0].children;
                if ('' == that.currentProvinceCode) {
                    that.setData({
                        addressList: a,
                        cityList: s,
                        areaList: o
                    });
                } else {
                    o = (s = (a = [
                        e.object.find(function (e) {
                            return e.areaCode === that.currentProvinceCode;
                        })
                    ])[0].children)[0].children;
                    that.setData({
                        addressList: a,
                        cityList: s,
                        areaList: o
                    });
                }
            });
        },

        bindChange: function (e) {
            console.log('e = ', e);
            var t = e.detail.value;
            console.log('value = ', t);
            var a = this.selectValueArr[0];
            var s = t[0];
            console.log('currentIndx =', a);
            if (a != s) {
                t = [s, 0, 0];
            }
            var o = this.selectValueArr[1];
            var r = t[1];
            console.log('currentTwoIndx =', r);
            if (o != r) {
                t = [s, r, 0];
            }
            this.setData({
                selectValueArr: t
            });
            console.log('selectValueArr =', this.selectValueArr);
            this.setData({
                cityList: this.addressList[t[0]].children
            });
            if (this.showAreaCode) {
                this.setData({
                    areaList: this.cityList[t[1]].children
                });
            }
        },

        dismissPop: function () {
            this.setData({
                showClone: false
            });
        },

        clickTrue: function () {
            var e = this.selectValueArr;
            var t = this.addressList[e[0]];
            var a = this.cityList[e[1]];
            var s = '';
            if (1 == this.showAreaCode) {
                s = this.areaList[e[2]];
            }
            console.log('pervoceInfo = ', t);
            var o = '';
            if (1 == this.showAreaCode) {
                o = t.label + '-' + a.label + '-' + s.label;
            } else {
                o = t.label + '-' + a.label;
            }
            this.setData({
                showClone: false,
                addressString: o,
                provinceCode: t.areaCode,
                cityCode: a.areaCode,
                areaCode: 1 == this.showAreaCode ? s.areaCode : ''
            });
            this.addressDataChange();
        },

        addressDataChange: function () {
            console.log('数值改变');
            this.$emit('addressDataChange', {
                detail: {
                    addressString: this.addressString,
                    provinceCode: this.provinceCode,
                    cityCode: this.cityCode,
                    areaCode: this.areaCode
                }
            });
        },

        showPop: function () {
            this.setData({
                showClone: true
            });
        },

        onClose() {
            console.log('占位：函数 onClose 未声明');
        }
    },
    created: function () {}
};
</script>
<style>
@import './address_pick.css';
</style>
