<template>
    <view class="main">
        <view class="inner_box">
            <view class="title">为保证您的账号安全，在您提交的注销申请生效前，需同时满足以下条件：</view>
            <view class="second_title">1.账号处于安全状态</view>
            <view class="content">账号处于正常使用状态，无被盗风险</view>
            <view class="second_title">2.账号财产已结清</view>
            <view class="content">没有资产、欠款、未结清的资金和虚拟权益，若账号余额;本账号7日内没有交易、以及未申请打款/打款未成功的结</view>
            <view class="second_title">3.绑定终端已解绑</view>
            <view class="content last_content">绑定终端已解绑，需联系代理商进行解绑终端操作后</view>
            <van-checkbox @change="onChange" checkedColor="#EF4034" :value="checked">
                <view class="check_tip">
                    我已阅读并同意
                    <text style="color: #ef4034">《收款呗注销须知》</text>
                </view>
            </van-checkbox>
            <van-button
                round
                @click="confirm"
                :customClass="checked == true ? 'confirm_button button_margin' : 'cancle_button button_margin'"
                :disabled="checked == false"
                type="info"
            >
                下一步
            </van-button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            checked: true
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
        onChange: function (n) {
            this.setData({
                checked: n.detail
            });
        },

        confirm() {
            console.log('占位：函数 confirm 未声明');
        }
    }
};
</script>
<style>
@import './logout.css';
</style>
