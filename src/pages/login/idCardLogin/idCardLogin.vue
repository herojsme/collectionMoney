<template>
    <view>
        <view class="topLine"></view>
        <view class="login_container">
            <view class="title">您好,</view>
            <view class="titleDec">收款呗邀您授权登录</view>
            <view class="class_inputBox">
                <view class="idNameTitleClass">输入身份证姓名</view>
                <van-field
                    @change="onChange"
                    :border="false"
                    clearTrigger="always"
                    :clearable="true"
                    :inputClass="idCardName.length > 0 ? 'placeholderInputStyle' : 'placeholderNormalStyle'"
                    :value="idCardName"
                    placeholder="请输入姓名"
                ></van-field>
                <view class="class_Grayline"></view>
                <view class="idCardNumberTitleClass">输入身份证号</view>
                <van-field
                    @change="onChange"
                    :border="false"
                    clearTrigger="always"
                    :clearable="true"
                    :inputClass="idCardnumber.length > 0 ? 'placeholderInputStyle' : 'placeholderNormalStyle'"
                    :value="idCardnumber"
                    placeholder="请输入身份证号"
                ></van-field>
                <view class="class_Grayline"></view>
            </view>
            <view class="login_btnBox">
                <van-button round @tap.native="clickFaceScan" customClass="confirm_button" type="info">立即登录</van-button>
            </view>
            <view class="login_bottomBox">
                <text @tap="clickAccontLogin" class="class_bottonLoginText">账号登录</text>
                <text @tap="clickRegisterAccont" class="class_bottonLoginText" v-if="showRegister">注册账号</text>
            </view>
        </view>
    </view>
</template>

<script>
require('@api/api').API;
export default {
    data() {
        return {
            idCardnumber: '',
            idCardName: '',
            showIdcardLogin: false,
            showRegister: false
        };
    },
    onLoad: function (a) {
        console.log('options =', a);
        if ('1' != a.from) {
            this.setData({
                idCardName: a.idCardName,
                idCardnumber: a.idCardnumber,
                showIdcardLogin: getApp().globalData.showIdCardLogin,
                showRegister: getApp().globalData.showRegister
            });
        } else {
            uni.navigateTo({
                url: 'pages/login/accontLogin/accontLogin'
            });
        }
    },
    onReady: function () {},
    methods: {
        clickFaceScan: function () {
            console.log('刷脸登录');
            if (this.idCardnumber) {
                if (this.idCardnumber.trim().length < 15 || this.idCardnumber.trim().length > 18) {
                    uni.showToast({
                        title: '请输入正确的身份证号',
                        icon: 'none'
                    });
                } else {
                    if (this.idCardName) {
                        uni.navigateTo({
                            url: 'pages/login/faceLogin/faceLogin?idcard=' + this.idCardnumber + '&idName=' + this.idCardName
                        });
                    } else {
                        uni.showToast({
                            title: '请输入姓名',
                            icon: 'none'
                        });
                    }
                }
            } else {
                uni.showToast({
                    title: '请输入身份证号',
                    icon: 'none'
                });
            }
        },

        clickAccontLogin: function () {
            console.log('账号登录');
            uni.navigateTo({
                url: 'pages/login/accontLogin/accontLogin'
            });
        },

        clickRegisterAccont: function () {
            console.log('注册');
            uni.navigateTo({
                url: 'pages/login/accontRegister/accontRegister'
            });
        },

        onChange() {
            console.log('占位：函数 onChange 未声明');
        }
    }
};
</script>
<style>
@import './idCardLogin.css';
</style>
