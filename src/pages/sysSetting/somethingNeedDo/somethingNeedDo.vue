<template>
    <view style="height: 100%">
        <view class="top_box">
            <view class="title">申请注销账号</view>
            <view class="cust_info">商户名称（登录账号）</view>
        </view>
        <view class="something_need">
            <view class="main">
                <view class="title">请处理完以下事项再注销</view>
                <view class="cell first_cell">
                    <view class="lb">未到账结算单</view>
                    <view class="rb">
                        <view class="tip">去处理</view>
                        <van-icon name="arrow" size="30rpx"></van-icon>
                    </view>
                </view>
                <navigator class="cell" url="/sysSetting/toUnbind/toUnbind">
                    <view class="lb">解绑终端</view>
                    <view class="rb">
                        <view class="tip">去处理</view>
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
@import './somethingNeedDo.css';
</style>
