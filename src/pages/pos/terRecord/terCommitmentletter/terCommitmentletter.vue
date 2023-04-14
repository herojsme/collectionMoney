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
var t = require('@api/request').POSTImageUrl;
export default {
    data() {
        return {
            content: '',
            timeStr: '',
            signaturePath: '',
            signatureUrl: '',
            customerName: '',
            customerNo: '',
            doubleRecordBol: false,
            signBol: false,
            legalKey: ''
        };
    },
    onLoad: function (e) {
        var that = this;
        console.log(e);
        if (e.base64Path) {
            this.setData({
                signaturePath: decodeURIComponent(e.base64Path)
            });
        }
        if (e.legalKey) {
            this.setData({
                legalKey: decodeURIComponent(e.legalKey)
            });
        }
        if (e && e.q) {
            var o = decodeURIComponent(e.q);
            console.log(o);
            var n = o.substring(o.indexOf('?') + 1);
            console.log(n);
            var a = n.split('&');
            console.log(a);
            a.forEach(function (e) {
                var o = e.indexOf('=');
                var n = e.substring(0, o);
                var a = e.substring(o + 1);
                console.log(e);
                console.log(n + '=>' + a);
                if ('legalKey' == n) {
                    that.setData({
                        legalKey: a
                    });
                }
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
            console.log(this.customerNo + '=>' + this.legalKey);
            e.getTerSignAgreementData({
                brandType: 'WLP',
                customerNo: this.customerNo,
                legalKey: this.legalKey
            }).then(function (e) {
                console.log(e);
                if (200 == e.code) {
                    that.setData({
                        content: e.object.promise,
                        timeStr: e.object.signTime || '',
                        doubleRecordBol: e.object.isDoubleRecord || false,
                        signBol: e.object.success || false,
                        signatureUrl: e.object.signBase64,
                        customerName: e.object.customerName,
                        customerNo: e.object.customerNo
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
                url: '/pages/pos/terRecord/terCanvas/terCanvas?legalKey='.concat(encodeURIComponent(this.legalKey), '&customerName=').concat(this.customerName)
            });
        },

        reqSaveSignData: function () {
            var that = this;
            var o = {
                isLogin: false,
                customerNo: this.customerNo,
                authString: this.signaturePath || ''
            };
            console.log(o);
            e.saveTerCheckSign(o).then(function (e) {
                console.log(e);
                if (200 == e.code) {
                    that.setData({
                        signaturePath: ''
                    });
                    uni.navigateTo({
                        url: '/pages/pos/terRecord/terFaceCheck/terFaceCheck?legalKey='.concat(encodeURIComponent(e.object), '&customerNo=').concat(that.customerNo)
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
        },

        getFullImgUrl: function (e) {
            return e ? t + e : '';
        }
    }
};
</script>
<style>
@import './terCommitmentletter.css';
</style>
