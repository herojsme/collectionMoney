<template>
    <view style="height: 100%">
        <view class="tip_title">
            <view class="increase_tip">请绑定商户本人的信用卡</view>
        </view>
        <view class="cell">
            <view class="main">
                <view class="lb">
                    <view class="title">商户姓名</view>
                </view>
                <view class="rb">
                    <view class="name">{{ custInfo.bankAccountName }}</view>
                </view>
            </view>
        </view>
        <view class="cell">
            <view class="main second">
                <view class="lb">
                    <view class="title" style="width: 200rpx">信用卡号</view>
                </view>
                <view class="rb">
                    <input @input="inuputCardNo" class="input_card" placeholder="拍照自动识别卡号" placeholderClass="placeholder_customer" :value="cardNo" />
                    <van-icon @tap.native="imgDataChange" name="https://www.krppay.com/skb_assets/scan_icon.png" size="36rpx"></van-icon>
                </view>
            </view>
        </view>
        <view class="tips">*使用商户本人信用卡认证，额度将提升到最高等级</view>
        <van-button round @click="confirm" customClass="confirm_button" type="info">立即提额</van-button>
        <view class="last_tips">该信息已加密处理，仅用于银行验证</view>
    </view>
</template>

<script>
var t = require('../../api/center').centerAPI;
var e = require('../../api/api').API;
export default {
    data() {
        return {
            custInfo: {
                bankAccountName: ''
            },
            cardNo: ''
        };
    },
    onLoad: function (t) {},
    onReady: function () {},
    onShow: function () {
        this.custIncrInfoQuery();
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        custIncrInfoQuery: function () {
            var that = this;
            t.custIncrInfoQuery().then(function (t) {
                console.log(t);
                if (200 == t.code) {
                    that.setData({
                        custInfo: t.object
                    });
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        inuputCardNo: function (t) {
            console.log(t.detail.value);
            this.setData({
                cardNo: t.detail.value
            });
        },

        imgDataChange: function (t) {
            var that = this;
            uni.chooseMedia({
                count: 9,
                mediaType: ['image'],
                sourceType: ['album', 'camera'],
                camera: 'back'
            }).then(function (t) {
                console.log(t);
                var a = {
                    imgFormat: 'jpg',
                    base64pic: uni.getFileSystemManager().readFileSync(t.tempFiles[0].tempFilePath, 'base64'),
                    picImage: t.tempFiles[0].tempFilePath
                };
                uni.showLoading({
                    title: '请等待'
                });
                uni.uploadFile({
                    url: e.POSTBaseUrl() + 'pub/img/uploadImg',
                    filePath: a.picImage,
                    name: 'pic',
                    formData: {
                        imgType: '3',
                        imgFormat: 'JPG'
                    },
                    header: {
                        'content-type': 'multipart/form-data',
                        brandType: 'WLP',
                        appCode: 'CUST_MINI'
                    },
                    success: function (t) {
                        console.log('提额认证，bank回调结果res =', t);
                        var e = JSON.parse(t.data);
                        console.log('提额认证，bank回调结果result =', e);
                        if (200 == e.code) {
                            that.setData({
                                cardNo: JSON.parse(t.data).object.bankCard
                            });
                        } else {
                            uni.showToast({
                                title: e.message,
                                icon: 'none'
                            });
                        }
                    },
                    complete: function () {}
                });
            });
        },

        saveCustPromoteQuota: function () {
            t.saveCustPromoteQuota({
                cardNo: this.cardNo,
                customerName: this.custInfo.customerName,
                customerNo: this.custInfo.customerNo,
                identityNo: this.custInfo.identityNo,
                phoneNo: this.custInfo.phoneNo
            }).then(function (t) {
                if (200 == t.code) {
                    uni.showToast({
                        title: '提额认证成功',
                        icon: 'success',
                        duration: 1000
                    });
                    setTimeout(function () {
                        uni.navigateBack({
                            delta: 1
                        });
                    }, 1000);
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        confirm: function () {
            this.saveCustPromoteQuota();
        }
    }
};
</script>
<style>
@import './increaseLimit.css';
</style>
