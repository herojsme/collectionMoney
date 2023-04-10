<template>
    <view class="account_container">
        <view class="account_box">
            <view class="account_select_title">请选择账号</view>
            <scroll-view class="scroll_account_box" :scrollY="true">
                <view
                    @tap="clickAccont"
                    :class="'account_item_box ' + (selectIndex == index ? 'account_select' : '')"
                    :data-index="index"
                    :data-item="item"
                    v-for="(item, index) in accontArr"
                    :key="item.customerNo"
                >
                    <image class="account_left_icon" :src="'/assets/image/login/' + (item.status == 'TRUE' ? 'login_moudle_rowHeader' : 'login_unheader') + '.png'"></image>

                    <view class="account_data_box">
                        <view class="customer_name" v-if="item.customerName && item.status == 'TRUE'">{{ item.customerName }}</view>
                        <view :class="'customer_account ' + (item.status != 'TRUE' ? 'account_forbidden' : '')" v-if="item.customerNo">账号{{ item.customerNo }}</view>
                    </view>

                    <view class="cur_account_txt" v-if="curCustomerNo == item.customerNo">当前使用</view>

                    <image class="account_right_icon" src="/static/assets/image/login/selelct_red_icon.png" v-else-if="selectIndex == index"></image>

                    <image class="account_right_icon" src="/static/assets/image/login/unselect.png" v-else-if="item.status == 'TRUE'"></image>
                </view>
            </scroll-view>
            <view @tap="eventLoginOtherAccount" class="login_other_box">
                <image src="/static/assets/image/login/ic_login_other.png" style="width: 72rpx; height: 72rpx"></image>
                <view class="account_other_txt">登录其它账号</view>
            </view>
            <van-button round @tap.native="eventChangeAccount" customClass="confirm_button" type="info">登录</van-button>
        </view>
    </view>
</template>

<script>
var e = require('../../api/api').API;
export default {
    data() {
        return {
            selectIndex: -1,
            selectUsername: '',
            selectAccountNo: '',
            selectAccountName: '',
            seucrCode: '',
            accontArr: [],
            curCustomerNo: ''
        };
    },
    onLoad: function (e) {
        var that = this;
        this.queryCustAllInfo();
        uni.login({
            success: function (e) {
                if ('login:ok' == e.errMsg) {
                    that.requestBindAccont(e.code);
                }
            },
            fail: function (e) {
                console.log('fail .res =', e);
            },
            complete: function (e) {
                console.log('回调 res =', e);
            }
        });
    },
    methods: {
        requestBindAccont: function (o) {
            var that = this;
            console.log('code = ', o);
            e.queryBindAccontLogin({
                code: o
            }).then(function (e) {
                console.log('xx res = ', e);
                if (200 == e.code) {
                    that.setData({
                        accontArr: e.object.accountList || [],
                        seucrCode: e.object.loginSecurityCode
                    });
                }
            });
        },

        clickAccont: function (e) {
            console.log('e = =====', e);
            var o = e.currentTarget.dataset.item;
            if (this.curCustomerNo != o.customerNo) {
                if ('TRUE' == o.status) {
                    this.setData({
                        selectIndex: e.currentTarget.dataset.index,
                        selectUsername: o.username,
                        selectAccountName: o.customerName,
                        selectAccountNo: o.customerNo
                    });
                } else {
                    uni.showToast({
                        title: '账号非正常状态，不能切换登录',
                        icon: 'none'
                    });
                }
            }
        },

        eventChangeAccount: function () {
            if (-1 != this.selectIndex) {
                if (this.selectUsername) {
                    var that = this;
                    uni.showModal({
                        title: '温馨提示',
                        content: '确认切换为：'.concat(that.selectAccountName || '', '(').concat(that.selectAccountNo, ')？'),
                        cancelText: '取消',
                        showCancel: true,
                        cancelColor: '#45464E',
                        confirmText: '确认切换',
                        confirmColor: '#EF4034',
                        success: function (o) {
                            if (o.confirm) {
                                that.singleAccontLogin();
                            }
                        }
                    });
                } else {
                    uni.showToast({
                        title: '当前选择账号不存在，请选择其它账号',
                        icon: 'none'
                    });
                }
            } else {
                uni.showToast({
                    title: '请选择账号',
                    icon: 'none'
                });
            }
        },

        singleAccontLogin: function () {
            e.queryCodeLogin({
                loginSecurityCode: this.seucrCode,
                username: this.selectUsername,
                noPswSource: 'USERNAME'
            }).then(function (e) {
                console.log('code登录res = ', e);
                if (200 == e.code) {
                    getApp().globalData.custInfo = e.object;
                    var o = e.object.token;
                    console.log('token = ', o);
                    uni.setBackgroundFetchToken({
                        token: o,
                        success: function () {
                            uni.reLaunch({
                                url: '/pages/home/home'
                            });
                        }
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        eventLoginOtherAccount: function () {
            uni.showModal({
                title: '温馨提示',
                content: '是否确认退出',
                cancelColor: '#45464E',
                confirmColor: '#EF4034',
                showCancel: true
            }).then(function (o) {
                if (o.confirm) {
                    e.logout().then(function (e) {
                        console.log('退出登录结果=>' + e);
                        uni.reLaunch({
                            url: '/pages/myself/myself'
                        });
                    });
                }
            });
        },

        queryCustAllInfo: function () {
            var that = this;
            e.queryCustAllInfo().then(function (e) {
                console.log('res = ', e);
                if (200 == e.code) {
                    console.log('商户信息=>' + e);
                    getApp().globalData.custInfo = e.object;
                    that.setData({
                        curCustomerNo: e.object.customerNo
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './changeAccount.css';
</style>
