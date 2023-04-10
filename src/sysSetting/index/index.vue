<template>
    <view style="height: 100%">
        <view class="setting_list">
            <view @tap="fixPassword" class="setting_cell">
                <view class="main not_last">
                    <view class="lb">
                        <view class="setting_title">修改登录密码</view>
                    </view>
                    <view class="rb">
                        <van-icon color="#C1C1C1" name="arrow"></van-icon>
                    </view>
                </view>
            </view>
            <view @tap="clickForgetPassword" class="setting_cell">
                <view class="main not_last">
                    <view class="lb">
                        <view class="setting_title">忘记支付密码</view>
                    </view>
                    <view class="rb">
                        <van-icon color="#C1C1C1" name="arrow"></van-icon>
                    </view>
                </view>
            </view>
            <view @tap="unbindWechat" class="setting_cell">
                <view class="main not_last">
                    <view class="lb">
                        <view class="setting_title">账号绑定管理</view>
                    </view>
                    <view class="rb">
                        <van-icon color="#C1C1C1" name="arrow"></van-icon>
                    </view>
                </view>
            </view>
            <view @tap="fixPhoneNum" class="setting_cell">
                <view class="main not_last">
                    <view class="lb">
                        <view class="setting_title">修改手机号码</view>
                    </view>
                    <view class="rb">
                        <view class="telephone" v-if="custInfo.phoneNo">{{ custInfo.phoneNo }}</view>
                        <view class="telephone" v-else></view>
                        <van-icon color="#C1C1C1" name="arrow"></van-icon>
                    </view>
                </view>
            </view>
            <view @tap="clickAccontChange" class="setting_cell">
                <view class="main">
                    <view class="lb">
                        <view class="setting_title">切换账号</view>
                    </view>
                    <view class="rb">
                        <van-icon color="#C1C1C1" name="arrow"></van-icon>
                    </view>
                </view>
            </view>
        </view>
        <view @tap="logout" class="setting_cell" style="margin-top: 32rpx" v-if="islogin">
            <view class="main" style="justify-content: center">
                <view class="lb">
                    <view class="setting_title">退出登录</view>
                </view>
                <view class="rb"></view>
            </view>
        </view>
    </view>
</template>

<script>
var n = require('../../api/api').API;
var o = require('../../api/center').centerAPI;
export default {
    data() {
        return {
            custInfo: [],
            islogin: false
        };
    },
    onLoad: function (n) {
        console.log('options =', n);
        this.setData({
            islogin: JSON.parse(n.isLoginStatus)
        });
    },
    onShow: function () {
        console.log('onShow');
        if (1 == this.islogin) {
            this.custIncrInfoQuery();
        }
    },
    methods: {
        unbindWechat: function () {
            if (0 != this.islogin) {
                uni.showModal({
                    title: '确定解除微信绑定?',
                    content: '确定解除微信绑定后,将跳转收款呗登录页面',
                    cancelColor: '#EF4034',
                    confirmColor: '#45464E',
                    confirmText: '取消',
                    cancelText: '解除绑定',
                    success: function (o) {
                        if (o.confirm) {
                            console.log('用户点击确定');
                        } else {
                            if (o.cancel) {
                                n.unbindWx().then(function (n) {
                                    console.log(n);
                                    if (200 === n.code) {
                                        uni.reLaunch({
                                            url: '/pages/myself/myself'
                                        });
                                    } else {
                                        uni.showToast({
                                            title: n.message,
                                            icon: 'none'
                                        });
                                    }
                                });
                            }
                        }
                    }
                });
            } else {
                uni.navigateTo({
                    url: '/login/index/index'
                });
            }
        },

        aboutUs: function () {
            uni.navigateTo({
                url: '/sysSetting/aboutus/aboutus'
            });
        },

        custIncrInfoQuery: function () {
            var that = this;
            o.custIncrInfoQuery().then(function (o) {
                console.log(o);
                if (200 == o.code) {
                    that.setData({
                        custInfo: o.object
                    });
                } else {
                    uni.showToast({
                        title: o.message,
                        icon: 'none'
                    });
                }
            });
        },

        judgeLogin: function () {
            return (
                0 != this.islogin ||
                (uni.navigateTo({
                    url: '/login/index/index'
                }),
                false)
            );
        },

        fixPassword: function () {
            if (this.judgeLogin()) {
                uni.navigateTo({
                    url: '/sysSetting/changeLoginPwd/changeLoginPwd'
                });
            }
        },

        clickForgetPassword: function () {
            if (this.judgeLogin()) {
                uni.navigateTo({
                    url: '/sysSetting/checkLoginPwd/checkLoginPwd'
                });
            }
        },

        fixPhoneNum: function () {
            if (this.judgeLogin()) {
                uni.navigateTo({
                    url: '/sysSetting/changetTelephone/changetTelephone'
                });
            }
        },

        clickAccontChange: function () {
            if (this.judgeLogin()) {
                uni.navigateTo({
                    url: '/sysSetting/changeAccount/changeAccount'
                });
            }
        },

        logout: function () {
            uni.showModal({
                title: '温馨提示',
                content: '是否确认退出',
                cancelColor: '#999999',
                confirmColor: '#EF4034',
                showCancel: true
            }).then(function (o) {
                if (o.confirm) {
                    console.log('用户点击确定');
                    n.logout().then(function (n) {
                        if (200 == n.code) {
                            uni.reLaunch({
                                url: '/pages/myself/myself'
                            });
                        }
                    });
                } else {
                    if (o.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
