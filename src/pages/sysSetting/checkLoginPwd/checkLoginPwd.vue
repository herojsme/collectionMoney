<template>
    <view style="height: 100%">
        <view class="title">安全校验</view>
        <view class="password_input">
            <input @input="inputLoginPwd" placeholder="请输入账号登录密码" placeholderClass="placeholder_customer_input" type="password" :value="loginPwd" />
        </view>
        <van-button round @click="checkLoginPwd" customClass="confirm_button" :disabled="loginPwd == ''" type="info">下一步</van-button>
    </view>
</template>

<script>
var n = require('@api/api').API;
var o = require('@u/md5');
export default {
    data() {
        return {
            loginPwd: ''
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
        inputLoginPwd: function (n) {
            this.setData({
                loginPwd: n.detail.value
            });
        },

        checkLoginPwd: function () {
            var that = this;
            n.checkPassword({
                password: o.hexMD5(this.loginPwd)
            }).then(function (n) {
                console.log(n);
                if (200 == n.code) {
                    uni.navigateTo({
                        url: '/sysSetting/setPayPwd/setPayPwd?loginPwd='.concat(that.loginPwd)
                    });
                } else {
                    uni.showToast({
                        title: '请输入正确的登录密码',
                        icon: 'none'
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './checkLoginPwd.css';
</style>
