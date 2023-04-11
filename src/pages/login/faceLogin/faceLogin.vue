<template>
    <view>
        <view class="login_container">
            <view class="login_headerBox">
                <van-image src="https://www.krppay.com/skb_assets/face_scan_icon.png"></van-image>
            </view>
            <view class="class_desc_centenr_box">
                <view class="class_desc_title_box">为账户安全需要验证本人身份</view>
                <view class="class_desc_box">本次验证仅用于身份核实，安全可靠</view>
            </view>
            <view class="login_btnBox">
                <van-button round @tap.native="clickFaceScan" customClass="confirm_button" type="info">同意授权并登录</van-button>
            </view>
        </view>
    </view>
</template>

<script>
var e = require('../../mp_ecard_sdk/main');
var o = require('@api/api').API;
export default {
    data() {
        return {
            idCard: '',
            idName: '',
            seucrCode: '',
            singleAccont: ''
        };
    },
    onLoad: function (e) {
        this.setData({
            idCard: e.idcard,
            idName: e.idName
        });
    },
    onUnload: function () {},
    methods: {
        clickFaceScan: function () {
            this.getEdiToken();
        },

        getEdiToken: function () {
            var that = this;
            o.POSTEdiToken({
                idNo: that.idCard.trim(),
                name: this.idName.trim()
            }).then(function (o) {
                console.log('获取token接口res = ', o);
                if (200 == o.code) {
                    var n = o.object;
                    console.log('token = ', n);
                    that.goSDK(n);
                } else {
                    uni.showToast({
                        title: o.message,
                        icon: 'none'
                    });
                }
            });
        },

        getCheckwxrAccountExist: function () {
            var that = this;
            uni.login({
                success: function (n) {
                    console.log('xresult =', n);
                    if ('login:ok' === n.errMsg) {
                        o.checkwxrAccountExist({
                            code: n.code,
                            username: that.singleAccont,
                            loginSecurityCode: that.seucrCode
                        }).then(function (o) {
                            if (200 === o.code) {
                                getApp().globalData.custInfo = o.object;
                                var n = o.object.token;
                                console.log('token = ', n);
                                uni.setBackgroundFetchToken({
                                    token: n,
                                    success: function () {
                                        uni.switchTab({
                                            url: '/pages/home/home'
                                        });
                                    }
                                });
                            } else {
                                if (1011 === o.code || 1012 === o.code) {
                                    that.userLogin();
                                    uni.showModal({
                                        title: '温馨提示',
                                        content: o.message,
                                        showCancel: false,
                                        success: function (e) {
                                            e.confirm;
                                        }
                                    });
                                } else {
                                    that.userLogin();
                                    uni.showToast({
                                        title: o.message,
                                        icon: 'none'
                                    });
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

        goSDK: function (n) {
            var that = this;
            (0, e.startEid)({
                data: {
                    token: n
                },
                verifyDoneCallback: function (e) {
                    var n = e.token;
                    e.verifyDone;
                    o.checkFaceAfterAuthentication({
                        etoken: n
                    }).then(function (e) {
                        if (200 == e.code) {
                            var o = e.object || {};
                            var n = o.loginSecurityCode;
                            var c = o.accountList;
                            if (c.length > 1) {
                                JSON.stringify(c);
                                uni.setStorageSync('accountList', c);
                                uni.navigateTo({
                                    url: '/login/accontIdCardSelect/accontIdCardSelect?userCode='.concat(n)
                                });
                            } else if (1 === c.length) {
                                var i = c[0].username;
                                console.log('username seucrCode', i, n);
                                that.setData({
                                    seucrCode: n,
                                    singleAccont: i
                                });
                                that.getCheckwxrAccountExist();
                            } else {
                                uni.navigateTo({
                                    url: '/login/accontRegister/accontRegister'
                                });
                            }
                        } else {
                            uni.showModal({
                                title: '温馨提示',
                                content: '人脸识别失败，您可以选择使用账号密码登录',
                                confirmText: '重新刷脸',
                                cancelText: '账号登录',
                                cancelColor: '#26CAD3',
                                confirmColor: '#26CAD3',
                                success: function (e) {
                                    e.confirm ||
                                        (e.cancel &&
                                            uni.navigateTo({
                                                url: '/login/accontLogin/accontLogin'
                                            }));
                                }
                            });
                        }
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './faceLogin.css';
</style>
