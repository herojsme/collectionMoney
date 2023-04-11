<template>
    <view class="container">
        <view @tap="eventItem" class="title_icon" :data-pathurl="serviceAgreementUrl">
            <view class="title">特约商户协议</view>
            <van-icon name="arrow"></van-icon>
        </view>
        <view @tap="eventItem" class="title_icon" :data-pathurl="polictyAgreementUrl">
            <view class="title">隐私政策</view>
            <van-icon name="arrow"></van-icon>
        </view>
    </view>
</template>

<script>
var e = require('@api/request').WEB_BASE_URL;
var t = require('@api/center').centerAPI;
export default {
    data() {
        return {
            serviceAgreementUrl: '',
            polictyAgreementUrl: '',
            isLoginStatus: false
        };
    },
    onLoad: function (e) {},
    onReady: function () {
        this.setData({
            polictyAgreementUrl: ''.concat(e, 'Policy')
        });
    },
    onShow: function () {
        var that = this;
        t.custIncrInfoQuery().then(function (t) {
            that.setData({
                isLoginStatus: t.isLoginStatus
            });
            if (t.isLoginStatus) {
                uni.getBackgroundFetchToken({
                    complete: function (t) {
                        that.setData({
                            serviceAgreementUrl: ''.concat(e, 'AgreementSwitch?token=').concat(t.token, '&source=WLP')
                        });
                    }
                });
            } else {
                that.setData({
                    serviceAgreementUrl: ''.concat(e, 'Agreement?source=WLP')
                });
            }
        });
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        eventItem: function (e) {
            console.log(e);
            var t = e.currentTarget.dataset.pathurl;
            uni.navigateTo({
                url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(t))
            });
        }
    }
};
</script>
<style>
@import './userAgreement.css';
</style>
