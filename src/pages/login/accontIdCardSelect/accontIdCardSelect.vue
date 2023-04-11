<template>
    <view>
        <view class="login_container">
            <view class="login_appNameBox">请选择要登录的账号</view>
            <view class="login_descBox">检测到当前手机号下有多个账号，请选择需要登录的账号</view>
            <view class="classScrollBox">
                <scroll-view
                    @scroll="scroll"
                    @scrolltolower="lower"
                    @scrolltoupper="upper"
                    :scrollIntoView="toView"
                    :scrollTop="scrollTop"
                    :scrollY="true"
                    :style="'height: ' + scrollHeight + 'rpx;'"
                >
                    <block v-for="(item, idx) in accontArr" :key="item.customerNo">
                        <view v-if="item.status == 'TRUE'">
                            <view @tap="clickAccont" class="loginAccontBox" :data-index="idx" :data-item="item">
                                <view class="leftContentBox">
                                    <van-image height="80rpx" src="/static/assets/image/login/login_moudle_rowHeader.png" width="80rpx"></van-image>
                                    <view class="class_acccont_box">
                                        <view class="title">{{ item.customerName }}</view>
                                        <view class="desc">账号:{{ item.customerNo }}</view>
                                    </view>
                                </view>
                                <view class="rightStatusBox">
                                    <text class="rightTextClass"></text>
                                    <view v-if="isShowRightIcon && selectIndex == idx">
                                        <image class="right_icon" src="/static/assets/image/login/selelct_red_icon.png"></image>
                                    </view>
                                    <view v-else>
                                        <image class="right_icon" src="/static/assets/image/login/unselect.png"></image>
                                    </view>
                                </view>
                            </view>
                        </view>

                        <view v-else>
                            <view class="loginUnAccontBox">
                                <view class="content">
                                    <van-image height="80rpx" src="/static/assets/image/login/login_unheader.png" width="80rpx"></van-image>
                                    <view class="class_acccont_box">账号:{{ item.customerNo }}</view>
                                </view>
                            </view>
                        </view>
                    </block>
                </scroll-view>
            </view>
            <view class="login_btnBox">
                <view class="loginBindBtn">
                    <van-button round @tap.native="clickBindLogin" customClass="confirm_button" type="info">登录</van-button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
var e;
var t =
    (e = require('@wc/vantWeapp/toast/toast')) && e.__esModule
        ? e
        : {
              default: e
          };
var o = require('@api/api').API;
export default {
    data() {
        return {
            isEnable: false,
            accontArr: [],
            selectIndex: -1,
            selectUsername: '',
            seucrCode: '',
            userCode: '',
            isShowRightIcon: false,
            scrollHeight: 520,
            toView: '',
            scrollTop: 0
        };
    },
    onLoad: function (e) {
        var t = uni.getStorageSync('accountList') || [];
        var o = e.userCode;
        console.log('accountList = ', t);
        this.setData({
            accontArr: t,
            seucrCode: o
        });
    },
    onShow: function () {
        var that = this;
        uni.getSystemInfo({
            success: function (t) {
                console.log(t.windowHeight);
                that.setData({
                    scrollHeight: t.windowHeight + 100
                });
            }
        });
    },
    methods: {
        getCheckwxrAccountExist: function () {
            var that = this;
            uni.login({
                success: function (c) {
                    console.log('xresult =', c);
                    if ('login:ok' === c.errMsg) {
                        o.checkwxrAccountExist({
                            code: c.code,
                            username: that.selectUsername,
                            loginSecurityCode: that.seucrCode
                        }).then(function (e) {
                            if (200 === e.code) {
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
                                if (1011 === e.code || 1012 === e.code) {
                                    uni.showModal({
                                        title: '温馨提示',
                                        content: e.message,
                                        showCancel: false,
                                        success: function (e) {
                                            e.confirm;
                                        }
                                    });
                                } else {
                                    (0, t.default)(e.message);
                                }
                            }
                        });
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

        clickAccont: function (e) {
            var t;
            var o;
            var c;
            console.log('e = ', e);
            var n;
            var s;
            var a;
            var i = e.currentTarget.dataset.index;
            var r = null === (t = e.currentTarget) || void 0 === t || null === (o = t.dataset) || void 0 === o || null === (c = o.item) || void 0 === c ? void 0 : c.username;
            if (e.currentTarget.dataset) {
                n = 'TRUE' === (null === (s = e.currentTarget.dataset) || void 0 === s || null === (a = s.item) || void 0 === a ? void 0 : a.status);
            }
            this.setData({
                selectIndex: i,
                selectUsername: n ? r : '',
                isShowRightIcon: n
            });
        },

        clickBindLogin: function () {
            if ('' !== this.selectUsername) {
                this.getCheckwxrAccountExist();
            } else {
                uni.showToast({
                    title: '请选择账号',
                    icon: 'none'
                });
            }
        },

        scroll() {
            console.log('占位：函数 scroll 未声明');
        },

        lower() {
            console.log('占位：函数 lower 未声明');
        },

        upper() {
            console.log('占位：函数 upper 未声明');
        }
    }
};
</script>
<style>
@import './accontIdCardSelect.css';
</style>
