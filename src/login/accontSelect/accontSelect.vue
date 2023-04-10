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
                    <view class="list_item" :data-index="index" :data-item="item" v-for="(item, idx) in accontArr" :key="item.customerNo">
                        <view v-if="item.status == 'TRUE'">
                            <view @tap="clickAccont" :class="'loginAccontBox ' + (selectIndex == idx ? 'loginSelectAccontBox' : '')" :data-index="idx" :data-item="item">
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
                    </view>
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
var e = require('../../api/api').API;
export default {
    data() {
        return {
            isEnable: true,
            selectIndex: -1,
            selectUsername: '',
            seucrCode: '',
            isShowRightIcon: false,
            scrollHeight: 520,
            accontArr: [],
            toView: '',
            scrollTop: 0
        };
    },
    onLoad: function (e) {
        var that = this;
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
            var o;
            var t;
            var n;
            console.log('e = =====', e);
            var c;
            var s;
            var i;
            var a = e.currentTarget.dataset.index;
            var l = null === (o = e.currentTarget) || void 0 === o || null === (t = o.dataset) || void 0 === t || null === (n = t.item) || void 0 === n ? void 0 : n.username;
            if (e.currentTarget.dataset) {
                c = 'TRUE' === (null === (s = e.currentTarget.dataset) || void 0 === s || null === (i = s.item) || void 0 === i ? void 0 : i.status);
            }
            this.setData({
                selectIndex: a,
                selectUsername: c ? l : '',
                isShowRightIcon: c
            });
        },

        clickBindLogin: function () {
            if ('' != this.selectUsername) {
                this.singleAccontLogin(this.seucrCode, this.selectUsername);
            } else {
                uni.showToast({
                    title: '请选择账号',
                    icon: 'none'
                });
            }
        },

        singleAccontLogin: function (o, t) {
            e.queryCodeLogin({
                loginSecurityCode: o,
                username: t,
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
                            uni.switchTab({
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
@import './accontSelect.css';
</style>
