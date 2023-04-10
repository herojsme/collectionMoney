<template>
    <view class="page_wrap">
        <view class="icon_wrap">
            <image class="success_icon" src="https://www.krppay.com/success.png"></image>
        </view>
        <view class="tip_txt">绑定成功，请前往POS机进行交易；</view>
        <view class="btn_wrap">
            <van-button round @click="goHome" customClass="confirm_button" type="info">返回首页</van-button>
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
        goHome: function () {
            uni.switchTab({
                url: '/pages/home/home'
            });
        }
    }
};
</script>
<style>
@import './posBindSuccess.css';
</style>
