<template>
    <view style="height: 100%">
        <view class="title">修改手机号码</view>
        <input @input="phoneInput" class="password_input" maxlength="11" placeholder="请输入新手机号" placeholderClass="placeholder_customer_input" type="text" :value="phone" />
        <view class="code_box">
            <input
                @input="codeInput"
                class="code_input"
                maxlength="6"
                placeholder="请输入6位验证码"
                placeholderClass="placeholder_customer_input"
                style="width: 50%"
                type="number"
                :value="code"
            />
            <view @tap="changePhoneSecurityCode" class="send_code">{{ codeText }}</view>
        </view>
        <van-button round @click="toSetPhone" :customClass="'confirm_button'" type="info">确认</van-button>
        <van-dialog showCancelButton useSlot @close="onClose" @confirm="onConfirm" confirmButtonColor="#EF4034" :show="show" title="标题">
            <view class="code_box">
                <input
                    @input="securityCodeInput"
                    class="code_input"
                    maxlength="4"
                    placeholder="请输入验证码"
                    placeholderClass="placeholder_customer_input"
                    type="text"
                    :value="securityCode"
                />
                <image @tap="getSecurityCode" class="security_code" :src="picBase64Str"></image>
            </view>
        </van-dialog>
    </view>
</template>

<script>
var e = require('@api/center').centerAPI;
var t = uni.getAccountInfoSync().miniProgram.envVersion;
export default {
    data() {
        return {
            phone: '',
            code: '',
            securityCode: '',
            codeText: '发送验证码',
            show: false,
            picBase64Str: ''
        };
    },
    onLoad: function (e) {},
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        onClose: function () {
            this.setData({
                picBase64Str: '',
                securityCode: ''
            });
        },

        securityCodeInput: function (e) {
            this.setData({
                securityCode: e.detail.value
            });
        },

        timeout: function () {
            var that = this;
            var o = null;
            var n = null;
            if ('develop' === t || 'trial' === t) {
                n = 30;
            } else {
                if ('release' === t) {
                    n = 60;
                }
            }
            o = setInterval(function () {
                n--;
                that.setData({
                    codeText: n + 's'
                });
                if (0 == n) {
                    that.setData({
                        codeText: '发送验证码'
                    });
                    clearInterval(o);
                }
            }, 1000);
        },

        onConfirm: function () {
            var that = this;
            e.changePhoneSecurityCode({
                captchaCode: this.securityCode,
                phone: this.phone
            }).then(function (e) {
                if (200 == e.code) {
                    uni.showToast({
                        title: e.object,
                        icon: 'none'
                    });
                    that.timeout();
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        changePhoneSecurityCode: function () {
            if ('' != this.phone) {
                this.getSecurityCode();
            } else {
                uni.showToast({
                    title: '请输入手机号',
                    icon: 'none'
                });
            }
        },

        getSecurityCode: function () {
            var that = this;
            e.getCaptcha({
                username: this.phone,
                moduleType: 3
            }).then(function (e) {
                console.log(e);
                if (200 == e.code) {
                    that.setData({
                        picBase64Str: 'data:image/jpeg;base64,' + e.object.picBase64Str
                    });
                    that.setData({
                        show: true
                    });
                }
            });
        },

        phoneInput: function (e) {
            this.setData({
                phone: e.detail.value
            });
        },

        codeInput: function (e) {
            this.setData({
                code: e.detail.value
            });
        },

        toSetPhone: function () {
            var t = new RegExp('^(1)\\d{10}$');
            console.log(t.test(this.phone));
            if (0 != t.test(this.phone)) {
                e.changeCustPhone({
                    phone: this.phone,
                    securityCode: this.code
                }).then(function (e) {
                    if (200 == e.code) {
                        uni.showModal({
                            title: '提示',
                            content: e.object,
                            showCancel: false,
                            confirmColor: '#1F1B27',
                            success: function (e) {
                                if (e.confirm) {
                                    uni.reLaunch({
                                        url: '/pages/myself/myself'
                                    });
                                } else {
                                    if (e.cancel) {
                                        console.log('用户点击取消');
                                    }
                                }
                            }
                        });
                    } else {
                        uni.showToast({
                            title: e.message,
                            icon: 'none'
                        });
                    }
                });
            } else {
                uni.showToast({
                    title: '手机号错误',
                    icon: 'none'
                });
            }
        }
    }
};
</script>
<style>
@import './changetTelephone.css';
</style>
