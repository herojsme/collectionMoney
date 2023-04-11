<template>
    <view style="height: 100%">
        <view class="top_box">
            <view class="title">申请注销账号</view>
            <view class="cust_info">商户名称（登录账号）</view>
        </view>
        <view class="something_need">
            <view class="main">
                <view class="title">注：申请注销后会有工作人员核实是否为本人操作；注销成功后账户无法恢复，账户数据同样无法恢复，请慎重选择。</view>
            </view>
            <van-button round customClass="confirm_button" type="info">确认注销</van-button>
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
@import './confirmCancle.css';
</style>
