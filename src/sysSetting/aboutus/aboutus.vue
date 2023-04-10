<template>
    <view class="about_us_container">
        <image mode="widthFix" src="https://www.krppay.com/skb_assets/login_login_icon.png" style="width: 128rpx; height: 128rpx; margin-top: 76rpx; align-self: center"></image>
        <van-cell-group :border="false" style="margin-top: 87rpx">
            <van-cell @tap.native="callPhone" title="客服热线" :value="customeHotline"></van-cell>
            <van-cell title="微信公众号" :value="wxOfficialAccount"></van-cell>
            <van-cell title="当前版本" :value="miniVersion"></van-cell>
            <van-cell isLink linkType="navigateTo" title="政策协议" url="/sysSetting/userAgreement/userAgreement"></van-cell>
        </van-cell-group>
        <van-dialog
            closeOnClickOverlay
            showCancelButton
            useSlot
            @close="onClose"
            @confirm="onConfirm"
            cancelButtonColor="#45464E"
            cancelButtonText="取消"
            confirmButtonColor="#EF4034"
            confirmButtonText="关注"
            :show="showFollowDialog"
            title="关注公众号"
        >
            <view style="width: 100%; display: flex; justify-content: center; align-items: center">
                <image mode="widthFix" src="https://www.krppay.com/skb_assets/login_login_icon.png" style="width: 128rpx; height: 128rpx; margin: 30rpx"></image>
            </view>
        </van-dialog>
    </view>
</template>

<script>
var o = require('../../api/center').centerAPI;
export default {
    data() {
        return {
            customeHotline: '',
            wxOfficialAccount: '',
            miniVersion: '',
            showFollowDialog: false
        };
    },
    onLoad: function (o) {},
    onReady: function () {
        this.setData({
            miniVersion: this.getWxVersion()
        });
    },
    onShow: function () {
        this.getData();
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        getWxVersion: function () {
            return uni.getAccountInfoSync().miniProgram.version;
        },

        getData: function () {
            var that = this;
            o.aboutUsGetInfo({}).then(function (o) {
                console.log(o);
                if (200 == o.code) {
                    that.setData({
                        customeHotline: o.object.linePhone,
                        wxOfficialAccount: o.object.wechatName
                    });
                } else {
                    uni.showToast({
                        title: o.message,
                        icon: 'none'
                    });
                }
            });
        },

        callPhone: function () {
            uni.makePhoneCall({
                phoneNumber: this.customeHotline
            });
        },

        followWxAccount: function () {
            this.setData({
                showFollowDialog: true
            });
        },

        onClose: function () {
            this.setData({
                showFollowDialog: false
            });
        },

        onConfirm: function () {},

        queryVersionInfo: function () {
            var that = this;
            $apiAboutUs.queryAboutUs().then(function (n) {
                if (200 == n.code) {
                    that.setData({
                        customeHotline: n.object.linePhone,
                        wxOfficialAccount: n.object.wechatName
                    });
                    app.globalData.hotlinePhone = n.object.linePhone;
                }
            });
        }
    }
};
</script>
<style>
@import './aboutus.css';
</style>
