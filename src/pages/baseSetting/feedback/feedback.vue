<template>
    <view class="container">
        <van-cell
            isLink
            @click="eventOptions"
            customClass="cell_box"
            title="请选择问题类型"
            titleClass="sel_ques_title"
            :value="selQuesTypeDesc"
            valueClass="sel_ques_desc"
        ></van-cell>
        <textarea
            @input="setInputContent"
            :border="false"
            class="fb_conten_input"
            :disableDefaultPadding="true"
            maxlength="-1"
            placeholder="请输入您遇到的问题"
            placeholderClass="placeholder_style"
            type="textarea"
        ></textarea>
        <van-field
            :border="false"
            maxlength="30"
            :value="contactWay"
            placeholder="手机号/邮箱/QQ（选填，方便我们联系您）"
            placeholderStyle="placeholder_style"
            type="textarea"
        ></van-field>
        <van-button round @click="eventCommit" customClass="confirm_button" type="info">提交</van-button>
        <view @tap="skipMyFeedback" class="my_feedback">我的反馈</view>
        <van-action-sheet :actions="quesOptions" @click-overlay="closePop" @select="onSelect" :show="showOptionsPop"></van-action-sheet>
    </view>
</template>

<script>
var t = require('@api/api').API;
export default {
    data() {
        return {
            inputContent: '',
            contactWay: '',
            selQuesType: '',
            selQuesTypeDesc: '',
            quesOptions: [],
            showOptionsPop: false,
            isLoginStatus: false
        };
    },
    onLoad: function (t) {
        console.log('options =', t);
        this.setData({
            isLoginStatus: JSON.parse(t.isLoginStatus)
        });
    },
    onReady: function () {
        this.queryFeedbackOptions();
    },
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        eventOptions: function () {
            this.setData({
                showOptionsPop: true
            });
        },

        onSelect: function (t) {
            console.log(t);
            this.setData({
                selQuesTypeDesc: t.detail.name,
                selQuesType: t.detail.type,
                showOptionsPop: false
            });
        },

        eventCommit: function () {
            if (0 != this.isLoginStatus) {
                var e = this;
                var n = e.inputContent;
                var o = e.contactWay;
                var s = e.selQuesType;
                if (n) {
                    if (s) {
                        uni.getSetting({
                            withSubscriptions: true,
                            success: function (e) {
                                console.log(e.authSetting);
                                uni.requestSubscribeMessage({
                                    tmplIds: ['0kIWeh42OMBite2Lk94VMRyGtGmF4W5aMLfg3i0PRN0'],
                                    complete: function (e) {
                                        var i = {
                                            suggestionContent: n,
                                            contactInfo: o,
                                            suggestionType: s
                                        };
                                        t.commitFeedbackData(i).then(function (t) {
                                            if (200 == t.code) {
                                                uni.showToast({
                                                    title: t.message,
                                                    icon: 'none'
                                                });
                                                uni.redirectTo({
                                                    url: '/pages/baseSetting/myFeedback/myFeedback'
                                                });
                                            } else {
                                                uni.showToast({
                                                    title: t.message,
                                                    icon: 'none'
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    } else {
                        uni.showToast({
                            title: '请选择问题类型',
                            icon: 'none'
                        });
                    }
                } else {
                    uni.showToast({
                        title: '请输入您遇到的问题',
                        icon: 'none'
                    });
                }
            } else {
                uni.navigateTo({
                    url: '/pages/login/index/index'
                });
            }
        },

        closePop: function () {
            this.setData({
                showOptionsPop: false
            });
        },

        skipMyFeedback: function () {
            if (0 != this.isLoginStatus) {
                uni.navigateTo({
                    url: '/pages/baseSetting/myFeedback/myFeedback'
                });
            } else {
                uni.navigateTo({
                    url: '/pages/login/index/index'
                });
            }
        },

        queryFeedbackOptions: function () {
            var that = this;
            var n = [];
            t.queryFeedbackOptions().then(function (t) {
                if (200 == t.code) {
                    t.object.forEach(function (t) {
                        n.push({
                            name: t.desc,
                            type: t.value
                        });
                    });
                    that.setData({
                        quesOptions: n
                    });
                }
            });
        },

        setInputContent: function (t) {
            this.setData({
                inputContent: t.detail.value
            });
        }
    }
};
</script>
<style>
@import './feedback.css';
</style>
