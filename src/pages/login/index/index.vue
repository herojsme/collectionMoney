<template>
    <view class="login_container">
        <view class="login_top">
            <view class="login_logoBox">
                <van-image src="https://www.krppay.com/skb_assets/login_login_icon.png"></van-image>
                <view class="login_appNameBox">
                    <text>欢迎使用收款呗</text>
                </view>
            </view>
        </view>
        <view class="login_bottom">
            <view class="login_bottomBox">
                <van-button round @getphonenumber="getPhoneNumber" customClass="confirm_button" openType="getPhoneNumber" type="info">授权登录</van-button>
                <van-button round @click="clickAccontLogin" customClass="xcancle_button" type="info">账户登录</van-button>
                <view class="class_xiyiBox">
                    <image @tap="clickSelectImg" :src="isAgree == true ? '/static/assets/image/login/selelct_red_icon.png' : '/static/assets/image/login/unselect.png'"></image>
                    <view class="class_xiyiTextBox">
                        <text @tap="clickSelectImg" style="color: #45464e">我已阅读并同意</text>
                        <text @tap="clickYinSiXiyi">《隐私政策》</text>
                        <text @tap="clickUserXiyi">《用户协议》</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
var o;
var e =
    (o = require('../../@babel/runtime/regenerator')) && o.__esModule
        ? o
        : {
              default: o
          };
var n = require('../../@babel/runtime/helpers/asyncToGenerator');
var t = require('@api/api').API;
var app = getApp();
var c = require('@api/request').WEB_BASE_URL;
export default {
    data() {
        return {
            isAgree: false,
            phoneCode: ''
        };
    },
    onLoad: function (o) {
        console.log('options = ', o);
    },
    onShow: function () {
        this.checkIdAndRegister();
    },
    methods: {
        clickYinSiXiyi: function () {
            uni.navigateTo({
                url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(c + 'Policy'))
            });
        },

        clickUserXiyi: function () {
            uni.navigateTo({
                url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(c + 'Agreement'))
            });
        },

        clickSelectImg: function () {
            this.setData({
                isAgree: !this.isAgree
            });
        },

        getPhoneNumber: function (o) {
            console.log('x0x0xx-x--x-x e = ', o);
            if (this.isAgree) {
                var that = this;
                if ('getPhoneNumber:ok' == o.detail.errMsg) {
                    console.log('xxxxxxe = ', o);
                    var n = o.detail.encryptedData;
                    var t = o.detail.iv;
                    var i = o.detail.code;
                    console.log('phoneCode = ', i);
                    that.requestWxLogin(n, t, i).then(function (o) {
                        console.log('x-x- res = ', o);
                        if (1 == o.bindAccountCount) {
                            that.singleAccontLogin(o.loginSecurityCode, o.username);
                        } else {
                            if (o.bindAccountCount > 1) {
                                uni.navigateTo({
                                    url: '/login/accontSelect/accontSelect'
                                });
                            } else {
                                if (o.bindAccountCount < 1) {
                                    uni.showModal({
                                        showCancel: false,
                                        title: '温馨提示',
                                        content: '您还没有绑定账号无法使用快捷登录，请通过账户登录绑定',
                                        confirmColor: '#EF4034'
                                    }).then(function (o) {
                                        if (1 == getApp().globalData.showIdCardLogin) {
                                            uni.navigateTo({
                                                url: '/login/idCardLogin/idCardLogin?code=1'
                                            });
                                        } else {
                                            uni.navigateTo({
                                                url: '/login/accontLogin/accontLogin'
                                            });
                                        }
                                    });
                                }
                            }
                        }
                    });
                } else {
                    console.log('getApp().globalData.showIdCardLogin =', getApp().globalData.showIdCardLogin);
                    if (1 == getApp().globalData.showIdCardLogin) {
                        uni.navigateTo({
                            url: '/login/idCardLogin/idCardLogin?code=1'
                        });
                    } else {
                        uni.navigateTo({
                            url: '/login/accontLogin/accontLogin'
                        });
                    }
                }
            } else {
                uni.showToast({
                    title: '请先同意隐私政策和用户协议',
                    icon: 'none'
                });
            }
        },

        clickAccontLogin: function () {
            if (this.isAgree) {
                uni.navigateTo({
                    url: '/login/accontLogin/accontLogin?from=accontLogin'
                });
            } else {
                uni.showToast({
                    title: '请先同意隐私政策和用户协议',
                    icon: 'none'
                });
            }
        },

        requestWxLogin: function (o, e, n) {
            return new Promise(function (i, c) {
                uni.login({
                    success: function (c) {
                        console.log('result =', c);
                        t.queryWxLogin({
                            code: c.code,
                            encryptedData: o,
                            iv: e,
                            phoneCode: n
                        }).then(function (o) {
                            console.log('res = ', o);
                            if (200 == o.code) {
                                i(o.object);
                            } else {
                                uni.showToast({
                                    title: o.message
                                });
                            }
                        });
                    },
                    fail: function (o) {
                        console.log('fail .res =', o);
                    },
                    complete: function (o) {
                        console.log('回调 res =', o);
                    }
                });
            });
        },

        singleAccontLogin: function (o, c) {
            var that = this;
            return n(
                e.default.mark(function n() {
                    return e.default.wrap(function (e) {
                        for (;;) {
                            switch ((e.prev = e.next)) {
                                case 0:
                                    that;
                                    uni.login({
                                        success: function (e) {
                                            t.queryCodeLogin({
                                                loginSecurityCode: o,
                                                username: c,
                                                noPswSource: 'USERNAME',
                                                code: e.code
                                            }).then(function (o) {
                                                console.log('code登录res = ', o);
                                                app.globalData.custInfo = o.object;
                                                if (200 == o.code) {
                                                    var e = o.object.token;
                                                    console.log('token = ', e);
                                                    uni.setBackgroundFetchToken({
                                                        token: e,
                                                        success: function () {
                                                            uni.switchTab({
                                                                url: '/pages/home/home'
                                                            });
                                                        }
                                                    });
                                                } else {
                                                    uni.showToast({
                                                        title: o.message,
                                                        icon: 'none'
                                                    });
                                                }
                                            });
                                        },
                                        fail: function (o) {
                                            console.log('fail .res =', o);
                                        },
                                        complete: function (o) {
                                            console.log('回调 res =', o);
                                        }
                                    });
                                case 2:
                                case 'end':
                                    return e.stop();
                            }
                        }
                    }, n);
                })
            )();
        },

        getPhoneNumberTest: function (o) {
            console.log(o.detail);
            uni.navigateTo({
                url: '/login/idCardLogin/idCardLogin?code=1'
            });
        },

        checkIdAndRegister: function () {
            t.checkShowIdCardAndRegister().then(function (o) {
                console.log('x-x-x- ', o);
                getApp().globalData.showIdCardLogin = JSON.parse(o.object.idCardLogin);
                getApp().globalData.showRegister = JSON.parse(o.object.register);
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
