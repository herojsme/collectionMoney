<template>
    <view class="com_letter_container">
        <block v-if="doubleRecordBol && content">
            <view>{{ content }}</view>
            <view style="margin-top: 32rpx">日期：{{ timeStr }}</view>
            <block v-if="doubleRecordBol && (signaturePath || signatureUrl)">
                <view style="margin-top: 24rpx">承诺人：</view>
                <image class="sign_image" mode="widthFix" :src="signaturePath ? 'data:image/png;base64,' + signaturePath : signatureUrl"></image>
                <view class="com_letter_hint">本人确认填写及提交的所有内容均为本人真实合法有效的个人信息。</view>
            </block>
            <van-button round @click="eventConfirmNextStep" customClass="confirm_button" type="info">认证</van-button>
            <view @tap="eventRewrite" class="rewrite" v-if="doubleRecordBol && (signaturePath || signatureUrl)">重新签名</view>
        </block>
        <view class="empty_box" v-else>
            <image class="empty" mode="widthFix" src="https://www.krppay.com/skb_assets/bg_empty_info.png" style="width: 353rpx; height: 430rpx"></image>
        </view>
    </view>
</template>

<script>
require('@u/util.js');
var e = require('@api/api').API;
require('@api/request').POSTImageUrl;
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
    onLoad: function (e) {
        if (e.base64Path) {
            this.setData({
                signaturePath: decodeURIComponent(e.base64Path)
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
            e.getSignAgreementData({
                doubleRecordType: 'SERVICE_FEE'
            }).then(function (e) {
                if (200 == e.code) {
                    that.setData({
                        content: e.object.promise,
                        timeStr: e.object.signTime || '',
                        doubleRecordBol: e.object.isDoubleRecord || false,
                        signBol: e.object.success || false,
                        signatureUrl: e.object.signBase64,
                        customerName: e.object.customerName
                    });
                } else {
                    if (e.message) {
                        uni.showToast({
                            title: e.message,
                            icon: 'none'
                        });
                    }
                }
            });
        },

        jumpSignPage: function () {
            uni.reLaunch({
                url: 'pages/pos/canvas/canvas?customerName='.concat(this.customerName)
            });
        },

        reqSaveSignData: function () {
            var that = this;
            var n = {
                isLogin: true,
                authString: this.signaturePath || ''
            };
            e.saveCheckSign(n).then(function (e) {
                if (200 == e.code) {
                    that.setData({
                        signaturePath: ''
                    });
                    uni.navigateTo({
                        url: 'pages/pos/faceCheck/faceCheck'
                    });
                    that.queryAgreementSign();
                } else {
                    if (e.message) {
                        uni.showToast({
                            title: e.message,
                            icon: 'none'
                        });
                    }
                }
            });
        }
    }
};
</script>
<style>
@import './commitmentletter.css';
</style>
