<template>
    <view style="height: 100%">
        <view class="title">设置密码</view>
        <view class="tip">请输入新的支付密码</view>
        <ul class="password_box">
            <li class="password_cell" v-for="(item, i) in 6" :key="i">
                <view class="point" v-if="pwdVal.length > i"></view>
            </li>
        </ul>
        <view class="password_input_box">
            <ul class="NumberKeyboard">
                <li @tap.native.stop.prevent="inputPwd($event, { number: index + 1 })" class="NumberKeyboard_cell" :data-number="index + 1" v-for="(item, index) in 9" :key="index">
                    {{ index + 1 }}
                </li>
                <li class="NumberKeyboard_cell gray"></li>
                <li @tap.native.stop.prevent="inputPwd($event, { number: '0' })" class="NumberKeyboard_cell" data-number="0">0</li>
                <li @tap.native.stop.prevent="deletePwdnum" class="NumberKeyboard_cell gray">
                    <image class="delete_icon" src="https://www.krppay.com/delete_icon.png"></image>
                </li>
            </ul>
        </view>
    </view>
</template>

<script>
var t = require('@api/api').API;
var a = require('@u/md5');
export default {
    data() {
        return {
            showPop: true,
            showConfirm: false,
            pwdVal: '',
            loginPwd: '',

            watch: {
                pwdVal: function (t) {
                    console.log(t);
                }
            },

            firstPwdVal: '',
            i: ''
        };
    },
    onLoad: function (t) {
        console.log(t);
        this.setData({
            firstPwdVal: t.pwdval,
            loginPwd: t.loginPwd
        });
        getApp().globalData.setWatcher(this);
    },
    onReady: function () {},
    onShow: function () {
        this.setData({
            pwdVal: ''
        });
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        inputPwd: function (o, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(o, _dataset);
            /* ---处理dataset end--- */
            var that = this;
            if (!(this.pwdVal.length >= 6)) {
                this.setData({
                    pwdVal: this.pwdVal + o.currentTarget.dataset.number
                });
                return this.pwdVal.length >= 6
                    ? (console.log('输入的支付密码', this.pwdVal),
                      void (this.pwdVal !== this.firstPwdVal
                          ? (console.log('两次输入结果不一致'),
                            uni.showModal({
                                title: '提示',
                                content: '两次密码不一致，请重新设置',
                                showCancel: false,
                                success: function (t) {
                                    if (t.confirm) {
                                        uni.redirectTo({
                                            url: 'pages/sysSetting/setPayPwd/setPayPwd?loginPwd='.concat(that.loginPwd)
                                        });
                                    }
                                }
                            }))
                          : this.pwdVal == this.firstPwdVal &&
                            t
                                .settPayPwdByLoginPassword({
                                    payPw: a.hexMD5(this.pwdVal),
                                    password: a.hexMD5(this.loginPwd)
                                })
                                .then(function (t) {
                                    if (200 == t.code) {
                                        uni.showToast({
                                            title: '修改支付密码成功',
                                            icon: 'none',
                                            duration: 3000
                                        }).then(function (t) {
                                            setTimeout(function () {
                                                uni.switchTab({
                                                    url: '/pages/myself/myself'
                                                });
                                            }, 3000);
                                        });
                                    } else {
                                        uni.showToast({
                                            title: t.message,
                                            icon: 'none'
                                        });
                                    }
                                })))
                    : void 0;
            }
        },

        deletePwdnum: function () {
            console.log('this.data.pwdVal ', this.pwdVal);
            if (this.pwdVal.length > 1) {
                var t = this.pwdVal.substring(0, this.pwdVal.length - 1);
                this.setData({
                    pwdVal: t
                });
                console.log('subPwd = ', t);
            } else {
                this.setData({
                    pwdVal: '',
                    firstPwdVal: ''
                });
            }
        }
    }
};
</script>
<style>
@import './setPayPwdAgain.css';
</style>
