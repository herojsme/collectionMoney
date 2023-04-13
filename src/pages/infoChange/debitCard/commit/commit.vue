<template>
    <view class="com_letter_container">
        <block v-if="!signaturePath && !signatureUrl">
            <view class="applyfor_conner">
                <view class="center_func_box">
                    <view class="txt_title">温馨提示</view>
                    <view class="class_line"></view>
                    <view class="txt_title2">1、如何开通借记卡快速到账</view>
                    <view class="txt_desc">借记卡快速到账服务，需要用户进行意愿核身成功后才可正常使用，借记卡交易，若未认证成功将默认进行T1结算；</view>
                    <view class="txt_title2">2、借记卡快速到账服务规则</view>
                    <view class="txt_desc">借记卡快速到账服务开通后，使用借记卡进行刷卡交易，默认将按照最快的结算时间，为您结算。</view>
                </view>
            </view>
            <view class="applyfor_conner">
                <view class="center_func_box">
                    <view class="txt_title">承诺函</view>
                    <view class="class_line"></view>
                    <view class="txt_desc2">{{ content }}</view>
                    <view class="txt_title3">日期：{{ timeStr }}</view>
                </view>
            </view>
            <view class="btn_box">
                <van-button round @click="eventConfirmNextStep" customClass="confirm_button" type="info">申请开通</van-button>
            </view>
        </block>
        <view class="auth_container" v-if="signaturePath || signatureUrl">
            <block v-if="doubleRecordBol && content">
                <view>{{ content }}</view>
                <view style="margin-top: 32rpx">日期：{{ timeStr }}</view>
                <block v-if="doubleRecordBol && (signaturePath || signatureUrl)">
                    <view style="margin-top: 24rpx">承诺人：</view>
                    <image class="sign_image" mode="widthFix" :src="signaturePath ? 'data:image/png;base64,' + signaturePath : signatureUrl"></image>
                    <view class="com_letter_hint">本人确认填写及提交的所有内容均为本人真实合法有效的个人信息。</view>
                </block>
                <van-button round @click="eventConfirmNextStep" customClass="confirm_button" type="info">立即认证</van-button>
                <view @tap="eventRewrite" class="rewrite" v-if="doubleRecordBol && (signaturePath || signatureUrl)">重新签名</view>
            </block>
            <view class="empty_box" v-else>
                <image mode="widthFix" src="https://www.krppay.com/skb_assets/bg_empty_info.png" style="width: 413rpx; height: 271rpx"></image>
                <view style="margin-top: 12rpx; font-size: 30rpx; font-weight: 400; color: #c1c1c1">暂无需双录</view>
            </view>
        </view>
    </view>
</template>

<script>
var t = require('@api/api').API;
getApp();
export default {
    data() {
        return {
            content: '',
            timeStr: '',
            signaturePath: '',
            signatureUrl: '',
            customerName: '',
            doubleRecordBol: false,
            signBol: false
        };
    },
    onLoad: function (t) {
        if (t.base64Path) {
            this.setData({
                signaturePath: decodeURIComponent(t.base64Path)
            });
        }
    },
    onReady: function () {},
    onShow: function () {
        this.queryAgreementSign();
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        eventConfirmNextStep: function () {
            if (this.doubleRecordBol) {
                if (this.signaturePath || this.signatureUrl) {
                    this.reqSaveSignData();
                } else {
                    this.jumpSignPage();
                }
            } else {
                uni.showToast({
                    title: '暂不需要进行双录！',
                    icon: 'none'
                });
            }
        },

        eventRewrite: function () {
            this.jumpSignPage();
        },

        queryAgreementSign: function () {
            var that = this;
            t.getSignAgreementData({
                doubleRecordType: 'DEBIT_CARD_T0'
            }).then(function (t) {
                if (200 == t.code) {
                    that.setData({
                        content: t.object.promise,
                        timeStr: t.object.signTime || '',
                        doubleRecordBol: t.object.isDoubleRecord || false,
                        signBol: t.object.success || false,
                        signatureUrl: t.object.signBase64,
                        customerName: t.object.customerName
                    });
                } else {
                    if (t.message) {
                        uni.showToast({
                            title: t.message,
                            icon: 'none'
                        });
                    }
                }
            });
        },

        jumpSignPage: function () {
            uni.reLaunch({
                url: 'pages/infoChange/debitCard/canvas/canvas?customerName='.concat(this.customerName)
            });
        },

        reqSaveSignData: function () {
            var that = this;
            if (uni.getFuzzyLocation) {
                uni.getSetting({
                    success: function (e) {
                        if (e.authSetting['scope.userFuzzyLocation']) {
                            uni.showModal({
                                title: '',
                                content: '为更好的服务，快速到账服务需要获取您的地理位置，请确认授权',
                                success: function (e) {
                                    if (e.cancel) {
                                        uni.showToast({
                                            title: '您已拒绝授权',
                                            icon: 'none'
                                        });
                                        setTimeout(function () {
                                            uni.navigateBack();
                                        }, 2000);
                                    } else {
                                        if (e.confirm) {
                                            uni.openSetting({
                                                success: function (e) {
                                                    if (1 == e.authSetting['scope.userFuzzyLocation']) {
                                                        that.getLocation(e);
                                                    } else {
                                                        uni.showToast({
                                                            title: '授权失败',
                                                            icon: 'none'
                                                        });
                                                        setTimeout(function () {
                                                            uni.navigateBack();
                                                        }, 1500);
                                                    }
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        } else {
                            if (null == e.authSetting['scope.userFuzzyLocation'] || e.authSetting['scope.userFuzzyLocation']) {
                                that.getLocation(e);
                            }
                        }
                    }
                });
            } else {
                uni.showModal({
                    title: '提示',
                    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                });
            }
        },

        getLocation: function () {
            var that = this;
            uni.authorize({
                scope: 'scope.userFuzzyLocation',
                success: function (n) {
                    if ('authorize:ok' == n.errMsg) {
                        uni.getFuzzyLocation({
                            type: 'wgs84',
                            success: function (n) {
                                var o = n.latitude;
                                var a = n.longitude;
                                console.log('longitude='.concat(a, ',latitude=').concat(o));
                                var i = {
                                    isLogin: true,
                                    authString: that.signaturePath || '',
                                    doubleRecordType: 'DEBIT_CARD_T0'
                                };
                                t.saveCheckSign(i).then(function (t) {
                                    if (200 == t.code) {
                                        that.setData({
                                            signaturePath: ''
                                        });
                                        uni.navigateTo({
                                            url: 'pages/infoChange/debitCard/faceCheck/faceCheck?latitude='.concat(o, '&longitude=').concat(a)
                                        });
                                        that.queryAgreementSign();
                                    } else {
                                        if (t.message) {
                                            uni.showToast({
                                                title: t.message,
                                                icon: 'none'
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
            });
        },

        compareVersion: function (t, e) {
            t = t.split('.');
            e = e.split('.');
            for (var n = Math.max(t.length, e.length); t.length < n; ) {
                t.push('0');
            }
            for (; e.length < n; ) {
                e.push('0');
            }
            for (var o = 0; o < n; o++) {
                var a = parseInt(t[o]);
                var i = parseInt(e[o]);
                if (a > i) {
                    return 1;
                }
                if (a < i) {
                    return -1;
                }
            }
            return 0;
        }
    }
};
</script>
<style>
@import './commit.css';
</style>
