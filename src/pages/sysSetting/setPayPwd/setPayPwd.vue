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

            i: ''
        };
    },
    onLoad: function (t) {
        getApp().globalData.setWatcher(this);
        console.log(t);
        this.setData({
            loginPwd: t.loginPwd
        });
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
        inputPwd: function (t, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(t, _dataset);
            /* ---处理dataset end--- */
            if (!(this.pwdVal.length >= 6)) {
                this.setData({
                    pwdVal: this.pwdVal + t.currentTarget.dataset.number
                });
                return this.pwdVal.length >= 6
                    ? (console.log('输入的支付密码', this.pwdVal),
                      void uni.navigateTo({
                          url: '/pages/sysSetting/setPayPwdAgain/setPayPwdAgain?pwdval='.concat(this.pwdVal, '&loginPwd=').concat(this.loginPwd)
                      }))
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
                    pwdVal: ''
                });
            }
        }
    }
};
</script>
<style>
@import './setPayPwd.css';
</style>
