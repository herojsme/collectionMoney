<template>
    <view>
        <view class="topLine"></view>
        <view class="login_container">
            <view class="title">您好,</view>
            <view class="titleDec">收款呗邀您授权登录</view>
            <view class="class_inputBox">
                <view class="idNameTitleClass">登录账号</view>
                <van-field
                    :border="false"
                    clearTrigger="always"
                    :clearable="true"
                    :inputClass="accont.length > 0 ? 'placeholderInputStyle' : 'placeholderNormalStyle'"
                    :value="accont"
                    placeholder="请输入登录账号"
                ></van-field>
                <view class="class_Grayline"></view>
                <view class="idCardNumberTitleClass">登录密码</view>
                <van-field
                    :border="false"
                    clearTrigger="always"
                    :clearable="true"
                    :inputClass="password.length > 0 ? 'placeholderInputStyle' : 'placeholderNormalStyle'"
                    :value="password"
                    placeholder="请输入登录密码"
                    type="password"
                ></van-field>
                <view class="class_Grayline"></view>
            </view>
            <view class="class_accont_box">
                <view @tap="onChange" class="login_xiyiBox">
                    <image slot="icon" :src="checked ? selectIcon : unselectIcon" style="height: 28rpx; width: 28rpx"></image>
                    <text class="login_gray">记住账号</text>
                </view>
                <view @tap="clickAccontLogin" class="class_idBox" v-if="showIdcardLogin">身份证登录</view>
            </view>
            <van-toast id="van-toast"></van-toast>
            <view class="login_btnBox">
                <view class="loginBindBtn">
                    <van-button round @tap.native="clickBindLogin" customClass="confirm_button" type="info">立即登录</van-button>
                </view>
            </view>
            <view class="login_bottomBox">
                <view @tap="clickRegisterAccont">
                    <view class="class_bottonLoginText" v-if="showRegister">
                        还没有账号？
                        <text>立即注册</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
var o;
var e =
    (o = require('@wc/vantWeapp/toast/toast')) && o.__esModule
        ? o
        : {
              default: o
          };
var t = require('@api/api').API;
var c = (getApp(), require('@u/md5'));
export default {
    data() {
        return {
            checked: false,
            selectIcon: '/static/assets/image/login/selelct_red_icon.png',
            unselectIcon: '/static/assets/image/login/unselect.png',
            accont: '',
            password: '',
            userCode: '',
            showIdcardLogin: false,
            showRegister: false,
            fromAccont: ''
        };
    },
    onLoad: function (o) {
        console.log('accontLogin_options =', o);
        var e = uni.getStorageSync('cacheAccont');
        console.log('cacheAccont = ', e);
        console.log('getApp().globalData.showRegister = ', getApp().globalData.showRegister);
        this.setData({
            accont: e,
            showIdcardLogin: getApp().globalData.showIdCardLogin,
            showRegister: getApp().globalData.showRegister,
            fromAccont: o.from
        });
    },
    methods: {
        clickBindLogin: function () {
            console.log('绑定并登录');
            if ('' != this.accont) {
                if ('' != this.password) {
                    this.requesrLogin();
                } else {
                    uni.showToast({
                        title: '请输入您的密码',
                        icon: 'none'
                    });
                }
            } else {
                uni.showToast({
                    title: '请输入您的用户名',
                    icon: 'none'
                });
            }
        },

        clickAccontLogin: function () {
            console.log('账号登录');
            if ('accontLogin' == this.fromAccont) {
                uni.navigateTo({
                    url: '/pages/login/idCardLogin/idCardLogin'
                });
            } else {
                uni.navigateBack();
            }
        },

        clickRegisterAccont: function () {
            console.log('注册');
            uni.navigateTo({
                url: '/pages/login/accontRegister/accontRegister'
            });
        },

        onChange: function () {
            console.log('点击了单选');
            this.setData({
                checked: !this.checked
            });
        },

        clickForget: function () {
            console.log('忘记密码');
            uni.navigateTo({
                url: '/pages/login/forgetLogPwd/forgetLogPwd'
            });
        },

        requesrLogin: function () {
            var that = this;
            uni.login({
                success: function (n) {
                    console.log('xresult =', n);
                    if ('login:ok' === n.errMsg) {
                        t.loginAndBind4wx({
                            code: n.code,
                            username: that.accont,
                            password: c.hexMD5(that.password)
                        }).then(function (t) {
                            console.log('res = ', t);
                            if (1 == that.checked) {
                                uni.setStorageSync('cacheAccont', that.accont);
                            } else {
                                uni.setStorageSync('cacheAccont', '');
                            }
                            getApp().globalData.custInfo = t.object;
                            if (200 == t.code) {
                                var c = t.object.token;
                                console.log('token = ', c);
                                uni.setStorageSync('token', c);
                                uni.setBackgroundFetchToken({
                                    token: c,
                                    success: function () {
                                        uni.switchTab({
                                            url: '/pages/home/home'
                                        });
                                    }
                                });
                            } else {
                                console.log(t.message);
                                (0, e.default)(t.message || '登录失败！');
                            }
                        });
                    }
                }
            });
        }
    }
};
</script>
<style>
@import './accontLogin.css';
</style>
