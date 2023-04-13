<template>
    <view class="info_container">
        <view class="class_contentBox">
            <view @tap.stop.prevent="onClickHyYtypeRow" class="class_hyrowBox">
                <view class="title">行业类型</view>
                <view class="valueBox">
                    <view :class="hyTypeNmae == '若不输入则执行智能账单' ? 'hytype' : 'selecyhytype'">{{ hyTypeNmae }}</view>
                    <van-icon
                        @tap.native.stop.prevent="clearSelect"
                        :name="hyTypeNmae == '若不输入则执行智能账单' ? 'arrow' : 'close'"
                        style="width: 40rpx; color: #666666; margin-left: 5rpx"
                    ></van-icon>
                </view>
            </view>
        </view>
        <view class="class_descBox">{{ tip }}</view>
        <view class="login_btnBox">
            <van-button round @click="clickConfirmFix" customClass="confirm_button" type="info">确认修改</van-button>
        </view>
        <view @tap="clickChageList" class="changeList">———— 变更记录 ————</view>
        <van-dialog
            showCancelButton
            useSlot
            @confirm="clickPopConfirm"
            confirmButtonColor="#EF4034"
            confirmButtonText="好的"
            :show="showageinPop"
            :showConfirmButton="true"
            title="确认修改"
        >
            <view style="margin: 80rpx">
                <view style="color: #666666; text-align: center">每日修改次数有限，请谨慎核实 信息是否无误</view>
            </view>
        </van-dialog>
        <van-dialog useSlot @confirm="clickPopTipConfirm" confirmButtonColor="#EF4034" confirmButtonText="确认" :show="showTip" :showConfirmButton="true" title="温馨提示">
            <view style="margin: 80rpx">
                <view style="color: #666666; text-align: center">当月剩余{{ fixNumber < 0 ? 0 : fixNumber }}次修改机会,您无法修改</view>
            </view>
        </van-dialog>
    </view>
</template>

<script>
var e = require('@api/api').API;
export default {
    data() {
        return {
            hyTypeNmae: '若不输入则执行智能账单',
            hyTypeCode: '',
            showageinPop: false,
            showTip: false,
            jyAreaCode: '',
            customerNo: '',
            configCount: 0,
            cacheCount: 0,
            fixNumber: 0,
            flag: true,
            tip: ''
        };
    },
    onLoad: function (e) {
        var t = getApp().globalData.custInfo;
        console.log('custInfo = ', t);
        this.setData({
            hyTypeNmae: null == t.businessTypeName ? '若不输入则执行智能账单' : t.businessTypeName,
            hyTypeCode: t.businessType,
            customerNo: t.customerNo,
            jyAreaCode: t.organCode
        });
    },
    onShow: function () {
        this.queryEditMccNum();
    },
    methods: {
        clickConfirmFix: function () {
            console.log('修改');
            if (this.fixNumber <= 0) {
                this.setData({
                    showTip: true
                });
            } else {
                if (1 == this.flag) {
                    this.requestUpdataMcc();
                }
            }
        },

        onClickHyYtypeRow: function () {
            uni.navigateTo({
                url: 'pages/infoChange/industryType/hyTypeChangeList/hyTypeChangeList?areaCode=' + this.jyAreaCode
            });
        },

        clickChageList: function () {
            uni.navigateTo({
                url: 'pages/infoChange/industryType/industrylist/industrylist?areaCode=' + this.hyTypeCode
            });
        },

        clearSelect: function () {
            console.log('点击了清除选择');
            this.setData({
                hyTypeCode: '',
                hyTypeNmae: '若不输入则执行智能账单'
            });
        },

        clickPopConfirm: function () {
            console.log('点击了弹窗');
            this.requestUpdataMcc();
        },

        clickPopTipConfirm: function () {
            this.setData({
                showTip: false
            });
        },

        requestUpdataMcc: function () {
            var that = this;
            return new Promise(function (o, n) {
                e.queryFixMccInfo({
                    businessType: that.hyTypeCode,
                    changeType: 'MCC_CATEGORY'
                }).then(function (e) {
                    if (200 == e.code) {
                        uni.showToast({
                            title: '行业变更成功',
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
            });
        },

        queryEditMccNum: function () {
            var that = this;
            e.queryCustEditMccInfo({}).then(function (e) {
                console.log('商户macc  =', e);
                if (200 == e.code) {
                    that.setData({
                        cacheCount: e.object.cacheCount,
                        configCount: e.object.configCount,
                        flag: e.object.flag,
                        tip: e.object.tip,
                        fixNumber: e.object.configCount - e.object.cacheCount
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
