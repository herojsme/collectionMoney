<template>
    <view class="info_container">
        <view class="class_contentBox">
            <van-cell
                isLink
                @tap.native="onClickAreaRow"
                customClass="class_row"
                title="所在地区"
                titleClass="cell__title"
                :value="areaNmae"
                :valueClass="areaNmae == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
            ></van-cell>
            <van-field
                @change="onChange"
                :border="false"
                inputAlign="right"
                inputClass="class_customInput"
                label="详细地址"
                labelClass="cell__title"
                :value="address"
                placeholder="请输入详细地址"
            ></van-field>
        </view>
        <view class="class_descBox">{{ tip }}</view>
        <address_pick @addressDataChange="addressDataChange" :currentProvinceCode="currentProvinceCode" :show="showArea" :showAreaCode="true"></address_pick>
        <view class="login_btnBox">
            <van-button round @click="clickConfirmFix" customClass="confirm_button" type="info">确认修改</van-button>
        </view>
        <view @tap="clickChageList" class="changeList">———— 变更记录 ————</view>
    </view>
</template>

<script>
var e = require('@api/api').API;
export default {
    data() {
        return {
            showArea: false,
            areaCode: '',
            provinceCode: '',
            diquCode: '',
            areaNmae: '请选择',
            address: '',
            areaList: {},
            configCount: '',
            cacheCount: '',
            flag: false,
            tip: '',
            fixNumber: 0,
            currentProvinceCode: ''
        };
    },
    onLoad: function (e) {
        var o = getApp().globalData.custInfo;
        var t = o.provinceCode;
        console.log('custInfo = ', o);
        this.setData({
            currentProvinceCode: t,
            areaNmae: o.organCodeName,
            diquCode: o.organCode,
            address: o.address
        });
    },
    onShow: function () {
        this.requestFixNumber();
    },
    methods: {
        clickChageList: function () {
            console.log('点击了变更记录');
            uni.navigateTo({
                url: '/infoChange/addressFix/addressFixList/addressFixList'
            });
        },

        requestFixNumber: function () {
            var that = this;
            e.queryCustEditAreaInfo({
                customerNo: this.customerNo
            }).then(function (e) {
                console.log('res =', e);
                if (200 == e.code) {
                    that.setData({
                        configCount: e.object.configCount,
                        cacheCount: e.object.cacheCount,
                        tip: e.object.tip,
                        flag: e.object.flag,
                        fixNumber: e.object.configCount - e.object.cacheCount
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        requestFixAddress: function () {
            e.queryFixCustDetailAddress({
                address: this.address,
                organCode: this.diquCode
            }).then(function (e) {
                console.log('res =', e);
                if (200 == e.code) {
                    uni.showToast({
                        title: '地址变更成功',
                        icon: 'none',
                        duration: 2000,
                        success: function (e) {
                            setTimeout(function () {
                                uni.navigateBack({
                                    delta: 1
                                });
                            }, 2000);
                        }
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        clickConfirmFix: function () {
            console.log('修改');
            if (this.address.length < 6) {
                uni.showToast({
                    title: '详细地址不能小于6位',
                    icon: 'none'
                });
            } else {
                var e = RegExp(/\号/);
                if (this.address.match(e)) {
                    this.reuqestCheckAddressMcc();
                } else {
                    uni.showToast({
                        title: '详细地址请精确到门牌号',
                        icon: 'none'
                    });
                }
            }
        },

        reuqestCheckAddressMcc: function () {
            var o = getApp().globalData.custInfo;
            var that = this;
            e.queryAreaIsContainMcc({
                customerNo: o.customerNo,
                organCode: this.diquCode
            }).then(function (e) {
                console.log('res =', e);
                if (200 == e.code) {
                    var o = e.object.flag;
                    var a = e.object.tip;
                    if (1 == o) {
                        that.checkFixNumber();
                    } else {
                        uni.showModal({
                            title: '温馨提示',
                            content: a,
                            showCancel: true,
                            cancelText: '取消',
                            cancelColor: '#999999',
                            confirmText: '确定',
                            confirmColor: '#EF4034',
                            success: function (e) {
                                if (e.confirm) {
                                    console.log('点击了确定');
                                    that.checkFixNumber();
                                } else {
                                    if (e.cancel) {
                                        console.log('点击了取消');
                                    }
                                }
                            }
                        });
                    }
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        checkFixNumber: function () {
            var that = this;
            if (1 == this.flag) {
                that.requestFixAddress();
            } else {
                console.log('fixNumber = ', that.fixNumber);
                if (that.fixNumber <= 0) {
                    uni.showModal({
                        title: '温馨提示',
                        content: '当月剩余0次修改机会,您无法修改',
                        confirmText: '确定',
                        showCancel: false,
                        confirmColor: '#EF4034'
                    });
                } else {
                    that.fixNumber > 0 &&
                        uni.showModal({
                            title: '温馨提示',
                            content: '当月剩余' + that.fixNumber + '次修改机会,请谨慎核实信息是否无误',
                            confirmText: '确定',
                            showCancel: true,
                            confirmColor: '#EF4034',
                            cancelColor: '#333333',
                            success: function (o) {
                                if (o.confirm) {
                                    that.requestFixAddress();
                                }
                            }
                        });
                }
            }
        },

        onClickAreaRow: function () {
            this.setData({
                showArea: true
            });
        },

        onConfirmArea: function (e) {
            console.log('event', e);
            this.setData({
                areaCode: e.detail.values[1].code,
                provinceCode: e.detail.values[0].code,
                diquCode: e.detail.values[2].code,
                showArea: false,
                areaNmae: e.detail.values[0].name + '/' + e.detail.values[1].name + '/' + e.detail.values[2].name
            });
        },

        addressDataChange: function (e) {
            console.log('event', e);
            this.setData({
                areaCode: e.detail.areaCode,
                provinceCode: e.detail.provinceCode,
                diquCode: e.detail.areaCode,
                showArea: false,
                areaNmae: e.detail.addressString
            });
        },

        onCloseArea: function () {
            this.setData({
                showArea: false
            });
        },

        onChange() {
            console.log('占位：函数 onChange 未声明');
        }
    }
};
</script>
<style>
@import './address.css';
</style>
