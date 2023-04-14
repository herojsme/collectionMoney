<template>
    <view class="info_container">
        <view class="class_line_box"></view>
        <view class="class_bankInfo">
            <van-image :src="bankIcon"></van-image>
            <view class="class_bankName">
                <view class="class_bank_title">{{ bankName }}</view>
                <view class="class_bank_desc">{{ bankNumber }}</view>
            </view>
            <view class="class_bank_numberBox">
                <view @tap="clickFix" class="class_bank_desc">修改</view>
            </view>
        </view>
        <view class="class_contentBox">
            <van-cell customClass="classRow" size="large" title="姓名" titleClass="cell__title" :value="userName" valueClass="rowValue"></van-cell>
            <van-cell customClass="classRow" size="large" title="身份证号" titleClass="cell__title" :value="idCardnumber" valueClass="rowValue"></van-cell>
        </view>
    </view>
</template>

<script>
require('@api/api').API;
export default {
    data() {
        return {
            userName: '',
            idCardnumber: '',
            bankName: '',
            bankNumber: '',
            bankIcon: ''
        };
    },
    onLoad: function (n) {
        var a = getApp().globalData.custInfo;
        this.setData({
            bankName: a.bankName,
            userName: this.hideCode(a.legalPerson, 1, 1),
            bankNumber: '**** **** **** ' + a.bankAccountNo.substring(a.bankAccountNo.length, a.bankAccountNo.length - 4),
            idCardnumber: this.hideCode(a.identityNo, 6, 4),
            bankIcon: a.bankIconUrl
        });
    },
    onReady: function () {},
    onShow: function () {},
    methods: {
        clickFix: function () {
            console.log('修改');
            uni.navigateTo({
                url: '/pages/infoChange/jieSuanFixList/jieSuanFixList?bankInfo'
            });
        },

        hideCode: function (n, a, e) {
            for (var t = n.length - a - e, i = '', o = 0; o < t; o++) {
                i += '*';
            }
            return 2 == n.length ? n.substring(0, 1) + '*' : n.substring(0, a) + i + n.substring(n.length - e);
        }
    }
};
</script>
<style>
@import './jieSuanChange.css';
</style>
