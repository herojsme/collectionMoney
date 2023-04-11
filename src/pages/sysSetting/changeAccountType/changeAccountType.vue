<template>
    <view style="height: 100%">
        <view @tap="changeAccount" class="setting_cell" :data-index="index" v-for="(item, index) in accountTypeList" :key="index">
            <view class="main">
                <view class="lb">
                    <view class="setting_title">{{ item.name }}</view>
                </view>
                <view class="rb">
                    <van-icon name="checked" size="35rpx" v-if="item.status == true"></van-icon>
                    <van-icon name="circle" size="35rpx" v-else></van-icon>
                </view>
            </view>
        </view>
        <view class="tip">
            * 每日仅可修改
            <text style="color: #ef4034">1</text>
            次，请慎重修改；
        </view>
        <view class="tip">
            说明：合并到账需要商户手动对结算单进行合并并提交结算打款申请（需用户手动操作）；自动到账，则是按照用 户交易进行正常的自动到账打款（无需用户手动操作）；
        </view>
        <van-button round @click="confirm" customClass="confirm_button" type="info">确认保存</van-button>
    </view>
</template>

<script>
export default {
    data() {
        return {
            accountTypeList: [
                {
                    name: '自动到账',
                    status: true
                },
                {
                    name: '合并到账',
                    status: false
                }
            ]
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
        changeAccount: function (n) {
            var t = n.currentTarget.dataset.index;
            var o = this.accountTypeList;
            o.forEach(function (n, o) {
                n.status = o == t;
            });
            this.setData({
                accountTypeList: o
            });
        },

        confirm: function () {
            uni.showModal({
                title: '温馨提示',
                content: '注意:选择合并到账后,您的交易不会再进行自动到账打款,待您选择进行结算时,可进行一笔结算打款',
                cancelColor: 'cancelColor',
                confirmColor: '#EF4034'
            });
        }
    }
};
</script>
<style>
@import './changeAccountType.css';
</style>
