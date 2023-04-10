<template>
    <view class="container">
        <view class="logoBox">
            <van-image src="https://www.krppay.com/skb_assets/fenshi_jiesuan_icon.png"></van-image>
        </view>
        <view class="titleBox">分时结算说明</view>
        <view class="descBox">1、开通分时结算功能后，每日0-16点之前的T1交 易将会提前D0到账（预计18点之前到账）</view>
        <view class="descBox">2、开通/关闭分时结算功能，均于次日0点生效</view>
        <view class="descBox">3、开通分时结算功能，需满足交易权限正常、无 待处理工单、无调单退单记录才允许开通</view>
        <view v-if="!isOpen">
            <view class="login_btnBox">
                <van-button round @click="clickConfirmFix" customClass="confirm_button" type="info">立即开通</van-button>
            </view>
        </view>
        <view v-if="isOpen">
            <view class="login_btnBox">
                <van-button round @click="clickConfirmFix" customClass="close_btn" type="info">我要关闭</van-button>
            </view>
        </view>
        <van-toast id="van-toast"></van-toast>
    </view>
</template>

<script>
var t;
var e =
    (t = require('@vant/weapp/toast/toast')) && t.__esModule
        ? t
        : {
              default: t
          };
var a = require('../../api/api').API;
export default {
    data() {
        return {
            isOpen: false
        };
    },
    onLoad: function (t) {
        var e = getApp().globalData.custInfo;
        console.log('res.object.settleTimeStatus = ', e.settleTimeStatus);
        var a = 'FALSE' != e.settleTimeStatus;
        console.log('settleTimeStatus = ', a);
        this.setData({
            isOpen: a
        });
    },
    methods: {
        clickConfirmFix: function () {
            console.log('点击了修改');
            this.queryFixSettle();
        },

        queryFixSettle: function () {
            var that = this;
            var s = 1 == this.isOpen ? 'FALSE' : 'TRUE';
            a.queryFixSettleTime({
                settleTimeStatus: s
            }).then(function (a) {
                var s;
                console.log('商户macc  =', a);
                if (200 == a.code) {
                    if (that.isOpen) {
                        s = '关闭申请已提交，次日生效';
                    } else {
                        s = '开通申请已提交，次日生效';
                    }
                    uni.showToast({
                        title: s,
                        icon: 'none',
                        duration: 2000,
                        success: function (t) {
                            setTimeout(function () {
                                uni.navigateBack({
                                    delta: 1
                                });
                            }, 2000);
                        }
                    });
                } else {
                    (0, e.default)(a.message);
                }
            });
        }
    }
};
</script>
<style>
@import './timeSettlement.css';
</style>
