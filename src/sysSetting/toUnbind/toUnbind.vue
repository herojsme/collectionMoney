<template>
    <view style="height: 100%">
        <view class="top_box">
            <view class="cust_info">您需要联系您所属的服务商进行终端的解绑操作，若无法联系服务商，可直接联系平台进行解绑申请（注意 需要核验信息）。</view>
        </view>
        <view class="something_need">
            <view class="main">
                <navigator class="cell first_cell" url="/pos/posList/posList">
                    <view class="lb">解绑终端</view>
                    <view class="rb">
                        <van-icon name="arrow" size="30rpx"></van-icon>
                    </view>
                </navigator>
                <navigator class="cell" url="/sysSetting/toUnbind/toUnbind">
                    <view class="lb">联系服务商</view>
                    <view class="rb">
                        <van-icon name="arrow" size="30rpx"></van-icon>
                    </view>
                </navigator>
                <navigator class="cell" url="/sysSetting/toUnbind/toUnbind">
                    <view class="lb">联系服务商</view>
                    <view class="rb">
                        <van-icon name="arrow" size="30rpx"></van-icon>
                    </view>
                </navigator>
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
    methods: {}
};
</script>
<style>
@import './toUnbind.css';
</style>
