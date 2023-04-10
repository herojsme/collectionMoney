<template>
    <view class="container">
        <block v-if="expandsName || expandPhone">
            <view class="expands_header">
                <image
                    mode="widthFix"
                    src="https://www.krppay.com/skb_assets/expands_user_icon.png"
                    style="width: 128rpx; height: 128rpx; align-self: center; margin-top: 80rpx; margin-bottom: 64rpx"
                ></image>
            </view>
            <view class="expands_info">
                <van-cell title="姓名" :value="expandsName"></van-cell>
                <van-cell :border="false" title="联系电话" :value="expandDesensitizationPhone"></van-cell>
            </view>
            <van-button
                round
                @tap.native="callPhone($event, { phonenum: expandPhone })"
                customClass="confirm_button"
                :data-phonenum="expandPhone"
                style="margin-top: 60rpx; align-self: center"
                type="info"
            >
                呼叫
            </van-button>
        </block>
        <view
            style="
                display: flex;
                align-self: center;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                margin-top: 30rpx;
                width: 100%;
                height: 600rpx;
                background-color: white;
            "
            v-else
        >
            <image class="empty" mode="widthFix" src="https://www.krppay.com/skb_assets/bg_empty_info.png" style="width: 353rpx; height: 430rpx"></image>
        </view>
    </view>
</template>

<script>
var n = require('../../api/api').API;
export default {
    data() {
        return {
            expandsName: '',
            expandPhone: '',
            expandDesensitizationPhone: ''
        };
    },
    onLoad: function (n) {},
    onReady: function () {
        this.findAgentByCust();
    },
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        findAgentByCust: function () {
            var that = this;
            n.findAgentByCust().then(function (n) {
                console.log(n);
                var o = n.object.phoneNo;
                that.setData({
                    expandsName: n.object.agentName || '',
                    expandPhone: o || ''
                });
                if (o) {
                    that.setData({
                        expandDesensitizationPhone: ''.concat(o.substring(0, 4), '****').concat(o.substring(o.length - 3))
                    });
                }
            });
        },

        callPhone: function (n, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(n, _dataset);
            /* ---处理dataset end--- */
            console.log(n);
            var e = n.currentTarget.dataset.phonenum;
            if (e) {
                uni.makePhoneCall({
                    phoneNumber: e
                });
            } else {
                uni.showToast({
                    title: '手机号不存在',
                    icon: 'none'
                });
            }
        }
    }
};
</script>
<style>
@import './expands.css';
</style>
