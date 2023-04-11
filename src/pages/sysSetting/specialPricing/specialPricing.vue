<template>
    <view class="container">
        <view class="n_s_box">
            <view class="title">智慧服务费</view>
            <van-switch activeColor="#EF4034" @change="onChangeMer" :checked="merManageSwitch" inactiveColor="#E7E7E7" size="40rpx"></van-switch>
        </view>
        <view class="n_s_box">
            <view class="title">夜间服务费</view>
            <van-switch activeColor="#EF4034" @change="onChangeNight" :checked="nightSercviceSwitch" inactiveColor="#E7E7E7" size="40rpx"></van-switch>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            confirmShowStatus: false,
            merManageSwitch: false,
            nightSercviceSwitch: false
        };
    },
    onLoad: function (n) {},
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        onChangeMer: function (n) {
            var that = this;
            var c = n.detail;
            if (c) {
                this.setData({
                    merManageSwitch: c
                });
            } else {
                uni.showModal({
                    title: '温馨提示',
                    content: '关闭开关将影响您的交易到账时间，请您谨慎操作',
                    cancelText: '确认关闭',
                    cancelColor: '#45464E',
                    confirmText: '我在想想',
                    confirmColor: '#EF4034',
                    success: function (n) {
                        if (n.cancel) {
                            that.setData({
                                merManageSwitch: c
                            });
                        }
                    }
                });
            }
        },

        onChangeNight: function (n) {
            var that = this;
            var c = n.detail;
            if (c) {
                this.setData({
                    nightSercviceSwitch: c
                });
            } else {
                uni.showModal({
                    title: '温馨提示',
                    content: '关闭开关将影响您的交易到账时间，请您谨慎操作',
                    cancelText: '确认关闭',
                    cancelColor: '#45464E',
                    confirmText: '我在想想',
                    confirmColor: '#EF4034',
                    success: function (n) {
                        if (n.cancel) {
                            that.setData({
                                nightSercviceSwitch: c
                            });
                        }
                    }
                });
            }
        }
    }
};
</script>
<style>
@import './specialPricing.css';
</style>
