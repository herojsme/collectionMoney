<template>
    <view style="height: 100%">
        <view class="title">修改登录密码</view>
        <view class="password_input">
            <input @input="oldPwdInput" maxlength="16" placeholder="请输入账号原密码" placeholderClass="placeholder_customer_input" type="password" :value="oldPwd" />
        </view>
        <input
            @input="newPwdInput"
            class="password_input_second"
            maxlength="16"
            placeholder="请输入8-16位字母数字组合密码"
            placeholderClass="placeholder_customer_input"
            type="password"
            :value="newPwd"
        />
        <input
            @input="newPwdAgainInput"
            class="password_input_second"
            maxlength="16"
            placeholder="请再次确认密码"
            placeholderClass="placeholder_customer_input"
            type="password"
            :value="newPwdAgain"
        />
        <van-button round @click="modifyLoginPassword" :customClass="'confirm_button'" :disabled="oldPwd.length < 8 || newPwd.length < 8 || newPwdAgain.length < 8" type="info">
            确认
        </van-button>
    </view>
</template>

<script>
var n = require('../../api/api').API;
var t = require('../../utils/md5');
export default {
    data() {
        return {
            oldPwd: '',
            newPwd: '',
            newPwdAgain: ''
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
        oldPwdInput: function (n) {
            this.setData({
                oldPwd: n.detail.value.replace(
                    new RegExp(
                        '[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\\',\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]',
                        'gm'
                    ),
                    ''
                )
            });
        },

        newPwdInput: function (n) {
            this.setData({
                newPwd: n.detail.value.replace(
                    new RegExp(
                        '[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\\',\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]',
                        'gm'
                    ),
                    ''
                )
            });
        },

        newPwdAgainInput: function (n) {
            this.setData({
                newPwdAgain: n.detail.value.replace(
                    new RegExp(
                        '[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\\',\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]',
                        'gm'
                    ),
                    ''
                )
            });
        },

        modifyLoginPassword: function () {
            console.log(this.oldPwd);
            if (0 != this.oldPwd.length) {
                var e = new RegExp('^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)');
                console.log(e.test(this.oldPwd));
                if (0 != e.test(this.oldPwd)) {
                    if (0 != e.test(this.newPwd)) {
                        if (this.newPwd != this.oldPwd) {
                            if (this.newPwd === this.newPwdAgain) {
                                n.modifyLoginPassword({
                                    newPassword: t.hexMD5(this.newPwd),
                                    oldPassword: t.hexMD5(this.oldPwd)
                                }).then(function (n) {
                                    if (200 == n.code) {
                                        uni.showModal({
                                            title: '温馨提示',
                                            content: '新密码设置成功,请您重新登录',
                                            showCancel: false,
                                            success: function (n) {
                                                if (n.confirm || n.cancel) {
                                                    uni.navigateTo({
                                                        url: '/pages/myself/myself'
                                                    });
                                                }
                                            }
                                        });
                                    } else {
                                        uni.showToast({
                                            title: n.message,
                                            icon: 'none'
                                        });
                                    }
                                });
                            } else {
                                uni.showToast({
                                    title: '两次输入密码不一致',
                                    icon: 'none'
                                });
                            }
                        } else {
                            uni.showToast({
                                title: '新密码不能与旧密码相同',
                                icon: 'none'
                            });
                        }
                    } else {
                        uni.showToast({
                            title: '新密码必须包含大小写字母和数字',
                            icon: 'none'
                        });
                    }
                } else {
                    uni.showToast({
                        title: '旧密码必须包含大小写字母和数字',
                        icon: 'none'
                    });
                }
            } else {
                uni.showToast({
                    title: '请输入原密码',
                    icon: 'none'
                });
            }
        }
    }
};
</script>
<style>
@import './changeLoginPwd.css';
</style>
