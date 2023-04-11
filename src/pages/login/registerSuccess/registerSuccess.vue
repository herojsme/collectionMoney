<template>
    <view>
        <view class="login_container">
            <view class="class_successBox">
                <van-image height="136rpx" src="https://www.krppay.com/skb_assets/bg_success_icon.png" style="margin-left: 30rpx" width="136rpx"></van-image>
                <text>恭喜您，商户注册成功</text>
            </view>
            <view class="class_contentRowBox">
                <van-cell-group>
                    <van-cell :border="true" title="商户名称" :value="customerName"></van-cell>
                    <van-cell @longpress.native="copyText" :border="true" title="商户编号" :value="customerNo"></van-cell>
                    <van-cell @longpress.native="copyText" :border="true" title="登录账号" :value="username"></van-cell>
                    <van-cell :border="true" title="默认密码" :value="password"></van-cell>
                </van-cell-group>
            </view>
            <view class="login_btnBox">
                <view class="loginBindBtn">
                    <van-button round @tap.native="clickBindGohome" customClass="confirm_button" type="info">去登录</van-button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
require('@api/api').API;
export default {
    data() {
        return {
            customerName: '',
            customerNo: '',
            username: '',
            password: '',
            idcardUserName: '',
            idcardNumber: '',
            accont: '',
            idCardnumber: '',
            idCardName: ''
        };
    },
    onLoad: function (a) {
        console.log('options = ', a);
        this.setData({
            customerName: a.customerName,
            customerNo: a.customerNo,
            username: a.username,
            password: a.password,
            idcardNumber: a.idCardnumber,
            idcardUserName: a.idcardName
        });
    },
    methods: {
        copyText: function (a) {
            console.log(this.username);
            uni.setClipboardData({
                data: this.username,
                success: function (a) {
                    uni.getClipboardData({
                        success: function (a) {
                            console.log(a.data);
                        }
                    });
                }
            });
        },

        clickBindGohome: function () {
            var a = getCurrentPages();
            console.log('pages.lengt =', a);
            var e = a[a.length - 3];
            if (2 != a.length) {
                if (e) {
                    e.setData({
                        accont: this.username,
                        password: this.password,
                        idCardnumber: this.idcardNumber,
                        idCardName: this.idcardUserName
                    });
                    uni.navigateBack({
                        delta: 2
                    });
                }
            } else {
                uni.redirectTo({
                    url: '/login/idCardLogin/idCardLogin?idCardnumber=' + this.idcardNumber + '&idCardName=' + this.idcardUserName
                });
            }
        }
    }
};
</script>
<style>
@import './registerSuccess.css';
</style>
