<template>
    <view>
        <view class="login_container">
            <view class="top_lineviewBox"></view>
            <view class="login_appTopBox">
                <text class="login_nhtext">E证通认证</text>
            </view>
            <view class="login_desc">
                <text>为保障您的资金安全，需要通过E证通校验是否本人操作，请根据提示进行</text>
            </view>
            <view class="login_headerBox">
                <van-image src="https://www.krppay.com/skb_assets/face_scan_icon.png"></van-image>
            </view>
            <view class="login_btnBox">
                <van-button
                    round
                    @click="parseEventDynamicCode($event, !isLoadingFaceResult ? 'clickFaceScan' : '')"
                    :customClass="!isLoadingFaceResult ? 'confirm_button' : 'cancle_button'"
                    type="info"
                >
                    开始录入
                </van-button>
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
            isLoadingFaceResult: false,
            userCode: ''
        };
    },
    onLoad: function (e) {},
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    methods: {
        userLogin: function () {
            var that = this;
            uni.login({
                success: function (o) {
                    console.log('xresult =', o);
                    if ('login:ok' === o.errMsg) {
                        that.setData({
                            userCode: o.code
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

        clickFaceScan: function () {
            this.getEdiToken();
        },

        getEdiToken: function () {
            var that = this;
            o.getETokenParams({
                doubleRecordType: 'SERVICE_FEE'
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

        goSDK: function (o) {
            var that = this;
            (0, e.startEid)({
                data: {
                    token: o
                },
                verifyDoneCallback: function (e) {
                    console.log(e);
                    that.queryFaceCheckResult(e.token);
                }
            });
        },

        queryFaceCheckResult: function (e) {
            var that = this;
            this.setData({
                isLoadingFaceResult: true
            });
            o.saveCheckFace({
                etoken: e
            }).then(function (e) {
                that.setData({
                    isLoadingFaceResult: false
                });
                if (200 == e.code) {
                    uni.showModal({
                        title: '温馨提示',
                        content: '人身核验成功',
                        showCancel: false,
                        confirmColor: '#EF4034',
                        confirmText: '返回首页',
                        success: function (e) {
                            if (e.confirm) {
                                uni.switchTab({
                                    url: '/pages/home/home'
                                });
                            }
                        }
                    });
                } else {
                    uni.showToast({
                        title: e.message || '人脸数据未能保存成功，请重试！',
                        icon: 'none'
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './faceCheck.css';
</style>
