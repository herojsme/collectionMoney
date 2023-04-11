<template>
    <view style="height: 100%">
        <view class="auth" v-if="showAuth">
            <view class="auth-logo">
                <image src="/static/mp_ecard_sdk/img/logo.png"></image>
            </view>
            <view class="title">
                您正在授权
                <view class="merchant-name">{{ ' ' + appName }}</view>
            </view>
            <view class="sub-title">通过腾讯云E证通核验并获取您的身份信息</view>
            <view class="agreement">
                <checkbox-group @change="changeAgree">
                    <checkbox :checked="isAgree" value="agreement"></checkbox>
                </checkbox-group>
                <view>
                    <view>
                        <view @tap="changeAgree" style="display: inline">已阅读并同意</view>
                        <navigator url="/mp_ecard_sdk/protocol/service/index">《腾讯云E证通服务使用协议》</navigator>
                        和
                    </view>
                    <view>
                        <navigator url="/mp_ecard_sdk/protocol/eid/index">《eID数字身份小程序服务协议》</navigator>
                    </view>
                </view>
            </view>
            <view class="button-area">
                <button @tap="navigateToEid" :disabled="!isAgree || isNavigating">确认授权</button>
            </view>
        </view>
        <view v-if="showWebView">
            <web-view @error="handleWebViewError" @load="handleWebViewLoad" :src="redirectUri"></web-view>
        </view>
    </view>
</template>

<script>
var e = a(require('../utils/getParameterByName'));
var t = a(require('../constants/log'));
function a(e) {
    return e && e.__esModule
        ? e
        : {
              default: e
          };
}
export default {
    data() {
        return {
            token: '',
            appName: '',
            isAgree: !!uni.getStorageSync('isAgree'),
            showAuth: false,
            showWebView: false,
            redirectUri: '',
            isNavigating: false
        };
    },
    options: {
        styleIsolation: 'page-apply-shared'
    },
    methods: {
        onLoad: function (e) {
            var that = this;
            var a = e.token;
            this.setData(
                {
                    token: a,
                    isAgree: !!uni.getStorageSync('isAgree'),
                    redirectUri: ''.concat(uni.eidBaseUrl, '/api/v1/Redirect?token=').concat(a)
                },
                function () {
                    that.setData({
                        showWebView: true
                    });
                    that.getConfig(a);
                }
            );
        },
        getConfig: function (e) {
            var that = this;
            uni.request({
                url: ''.concat(uni.eidBaseUrl, '/api/v1/GetConfig?token=').concat(e),
                method: 'GET',
                success: function (o) {
                    uni.reportLogToEid({
                        token: e,
                        event: t.default.getConfig,
                        errCode: o.data ? o.data.ErrorCode : '',
                        errMsg: o.data ? o.data.ErrorMsg : ''
                    });
                    if (o.data && 0 === o.data.ErrorCode) {
                        var i = o.data.Data.AppName;
                        that.setData({
                            appName: i
                        });
                    } else {
                        var r = o.data.ErrorMsg;
                        uni.showModal({
                            title: '提示',
                            content: r,
                            showCancel: false,
                            success: function () {
                                uni.navigateBack();
                            }
                        });
                    }
                },
                fail: function (a) {
                    console.log('网络失败，请点击重新尝试', a);
                    uni.reportLogToEid({
                        token: e,
                        event: t.default.getConfigFail,
                        errCode: '',
                        errMsg: a.errMsg
                    });
                    uni.showModal({
                        title: '提示',
                        content: '网络失败，请点击重新尝试',
                        showCancel: false,
                        success: function () {
                            uni.navigateBack();
                        }
                    });
                }
            });
        },
        handleWebViewLoad: function (a) {
            console.log('webview load', a.detail.src);
            var o = this.token;
            var i = (0, e.default)('success', a.detail.src);
            if (i) {
                this.setData({
                    showWebView: false,
                    showAuth: true
                });
            }
            uni.reportLogToEid({
                token: o,
                event: t.default.webViewResult,
                errMsg: 'success参数为'.concat(i)
            });
        },
        handleWebViewError: function (e) {
            console.log('webview error', e);
            this.setData({
                showWebView: false,
                showAuth: true
            });
            var a = this.token;
            uni.reportLogToEid({
                token: a,
                event: t.default.webViewError,
                errMsg: e.detail.src
            });
        },
        changeAgree: function () {
            var e = !this.isAgree;
            this.setData(
                {
                    isAgree: e
                },
                function () {
                    uni.setStorageSync('isAgree', e);
                }
            );
        },
        navigateToEid: function () {
            var e = this.token;
            this.setData({
                isNavigating: true
            });
            var that = this;
            uni.navigateToMiniProgram({
                appId: 'wx0e2cb0b052a91c92',
                path: 'pages/huiyan/index',
                extraData: {
                    useHuiyan: true,
                    huiyanToken: e
                },
                success: function () {
                    uni.eidTokenToCallback = e;
                },
                complete: function (o) {
                    that.setData({
                        isNavigating: false
                    });
                    uni.reportLogToEid({
                        token: e,
                        event: t.default.navigateToEid,
                        errMsg: o.errMsg
                    });
                }
            });
        }
    },
    created: function () {}
};
</script>
<style>
@import './index.css';
</style>
