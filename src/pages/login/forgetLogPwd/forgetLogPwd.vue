<template>
    <view style="height: 100%">
        <view class="title">忘记登录密码</view>
        <view class="password_input">
            <input @input="oldPwdInput" placeholder="请输入账号原密码" type="password" :value="oldPwd" />
            <view class="forget_pwd">忘记密码？</view>
        </view>
        <input @input="newPwdInput" class="password_input_second" placeholder="请输入6-18位字母数字组合密码" type="password" :value="newPwd" />
        <input @input="newPwdAgainInput" class="password_input_second" placeholder="请再次确认密码" type="password" :value="newPwdAgain" />
        <van-button round @click="toSetPayPwd" :customClass="oldPwd.length < 6 || newPwd.length < 6 || newPwdAgain.length < 6 ? 'cancle_button' : 'confirm_button'" type="info">
            确认
        </van-button>
        <view>{{ num }}</view>
    </view>
</template>

<script>
var t = false;
export default {
    data() {
        return {
            oldPwd: '',
            newPwd: '',
            newPwdAgain: '',
            showDownTime: false,
            num: 60
        };
    },
    onLoad: function (t) {},
    methods: {
        toSetPayPwd: function () {
            this.start();
        },

        start: function () {
            this.setData({
                num: num--
            });
            this.timer();
            console.log(num);
        },

        stop: function () {
            t = true;
            console.log(t);
        },

        timer: function () {
            if (num > 0 && 0 == t) {
                setTimeout(this.start, 1000);
            } else {
                this.setData({
                    num: 0
                });
            }
        },

        oldPwdInput() {
            console.log('占位：函数 oldPwdInput 未声明');
        },

        newPwdInput() {
            console.log('占位：函数 newPwdInput 未声明');
        },

        newPwdAgainInput() {
            console.log('占位：函数 newPwdAgainInput 未声明');
        }
    }
};
</script>
<style>
@import './forgetLogPwd.css';
</style>
