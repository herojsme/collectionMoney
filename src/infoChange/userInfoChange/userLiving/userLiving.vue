<template>
    <view>
        <view class="login_container">
            <view class="top_lineviewBox"></view>
            <view class="login_appTopBox">
                <text class="login_nhtext">E证通认证</text>
            </view>
            <view class="login_desc">
                <text>为保障您的资金安全，需要通过E证通校验是否本人操作，请根据提示进行</text>
            </view>
            <view class="login_headerBox">
                <van-image src="https://www.krppay.com/skb_assets/face_scan_icon.png"></van-image>
            </view>
            <view class="login_btnBox">
                <van-button round @click="clickFaceScan" customClass="confirm_button" type="info">开始录入</van-button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    onLoad: function (n) {},
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        clickFaceScan: function () {
            uni.navigateTo({
                url: '/infoChange/addressFix/addressFixSuccess/addressFixSuccess?message=信息提交完成，等待运营人员审核&navigationTitle=活体验证'
            });
        }
    }
};
</script>
<style>
@import './userLiving.css';
</style>
