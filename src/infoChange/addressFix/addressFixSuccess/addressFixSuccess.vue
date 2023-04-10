<template>
    <view>
        <view class="login_container">
            <view class="class_successBox">
                <van-image height="167rpx" :src="defaultImage" style="margin-left: 30rpx" width="250rpx"></van-image>
            </view>
            <view class="class_descBox">{{ message }}</view>
            <view class="login_btnBox">
                <van-button round @click="clickConfirmGohome" customClass="yellow_button" type="info">{{ gobackBtnTitle }}</van-button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            message: '成功',
            navigationTitle: '修改成功',
            gobackBtnTitle: '返回首页',
            defaultImage: 'https://www.krppay.com/skb_assets/bg_success_icon.png'
        };
    },
    onLoad: function (t) {
        console.log(t);
        var o = t.message;
        var e = t.navigationTitle;
        var n = t.gobackBtnTitle;
        var a = t.defaultImage;
        console.log('temp_message =', o);
        if ('' != o) {
            this.setData({
                message: o
            });
        }
        if ('' != e) {
            uni.setNavigationBarTitle({
                title: e
            });
        }
        if ('' != n) {
            this.setData({
                gobackBtnTitle: n
            });
        }
        if ('' != a) {
            this.setData({
                defaultImage: a
            });
        }
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        clickConfirmGohome: function () {
            console.log('返回首页');
        }
    }
};
</script>
<style>
@import './addressFixSuccess.css';
</style>
