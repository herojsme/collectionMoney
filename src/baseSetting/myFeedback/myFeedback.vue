<template>
    <view class="container">
        <van-tabs sticky swipeable @change="onTabChange" color="#EF4034" lineHeight="8rpx" lineWidth="40rpx" titleActiveColor="#1F1B27" titleInactiveColor="#9292A0">
            <van-tab name="processing" :title="'处理中(' + processCount + ')'">
                <view class="process_box">
                    <block v-if="processingList.length > 0">
                        <view class="process_item_box" v-for="(item, index) in processingList" :key="index">
                            <view class="content">{{ item.suggestionContent }}</view>

                            <view class="time">{{ item.createTime }}</view>
                        </view>
                    </block>
                    <view class="empty_box" v-else>
                        <image
                            class="empty"
                            mode="widthFix"
                            src="https://www.krppay.com/skb_assets/list_null.png"
                            style="width: 413rpx; height: 271rpx; margin-top: 100rpx"
                        ></image>
                    </view>
                </view>
            </van-tab>
            <van-tab name="completed" :title="'已完成(' + completeCount + ')'">
                <view class="completed_box">
                    <block v-if="completedList.length > 0">
                        <block v-for="(item, index) in completedList" :key="index">
                            <view class="update_time">{{ item.updateTime }}</view>

                            <view class="completed_item_box">
                                <view class="content">{{ item.suggestionContent }}</view>
                                <view class="desc">{{ item.replyContent }}</view>
                                <view class="label_content_box">
                                    <view class="label">问题类型</view>
                                    <view class="content" v-if="item.suggestionType == 'LOGIN'">登录问题</view>
                                    <view class="content" v-else-if="item.suggestionType == 'REGISTER'">注册问题</view>
                                    <view class="content" v-else-if="item.suggestionType == 'TRANS'">交易问题</view>
                                    <view class="content" v-else-if="item.suggestionType == 'POSCONNECT'">机具连接问题</view>
                                    <view class="content" v-else-if="item.suggestionType == 'ACCOUNT'">到账问题</view>
                                    <view class="content" v-else>其它问题</view>
                                </view>
                                <view class="label_content_box">
                                    <view class="label">提交时间</view>
                                    <view class="content">{{ item.createTime }}</view>
                                </view>
                            </view>
                        </block>
                    </block>
                    <view class="empty_box" v-else>
                        <image
                            class="empty"
                            mode="widthFix"
                            src="https://www.krppay.com/skb_assets/bg_empty_info.png"
                            style="width: 413rpx; height: 271rpx; margin-top: 100rpx"
                        ></image>
                    </view>
                </view>
            </van-tab>
        </van-tabs>
    </view>
</template>

<script>
var e = require('../../api/api').API;
export default {
    data() {
        return {
            pageSize: 20,
            proCurrentPage: 1,
            processCount: 0,
            processingList: [],
            completeCount: 0,
            compCurrentPage: 1,
            completedList: [],
            curTabName: 'processing'
        };
    },
    onLoad: function (e) {},
    onReady: function () {
        this.setData({
            proCurrentPage: 1,
            compCurrentPage: 1,
            processingList: [],
            completedList: []
        });
        this.queryProcessFeedback();
        this.queryCompleteFeedback();
    },
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {
        if (this.isProcessing()) {
            this.setData({
                proCurrentPage: 1,
                processingList: []
            });
            this.queryProcessFeedback();
        } else {
            this.setData({
                compCurrentPage: 1,
                completedList: []
            });
            this.queryCompleteFeedback();
        }
    },
    onReachBottom: function () {
        if (this.isProcessing()) {
            if (this.proCurrentPage * this.pageSize <= this.processingList.length) {
                this.setData({
                    proCurrentPage: this.proCurrentPage + 1
                });
                this.queryProcessFeedback();
            }
        } else {
            if (this.compCurrentPage * this.pageSize <= this.completedList.length) {
                this.setData({
                    compCurrentPage: this.compCurrentPage + 1
                });
                this.queryCompleteFeedback();
            }
        }
    },
    methods: {
        isProcessing: function () {
            return 'processing' == this.curTabName;
        },

        onTabChange: function (e) {
            var t = e.detail.name;
            this.setData({
                curTabName: t
            });
        },

        queryProcessFeedback: function () {
            var that = this;
            var a = this;
            e.myFeedbackData({
                pageNo: this.proCurrentPage,
                pageSize: this.pageSize,
                replyStatus: 'DOING'
            }).then(function (e) {
                uni.stopPullDownRefresh();
                if (200 == e.code) {
                    if (1 == that.proCurrentPage) {
                        a.setData({
                            processingList: [],
                            processCount: e.object.totalCount
                        });
                    }
                    a.setData({
                        processingList: a.processingList.concat(e.object.list)
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        queryCompleteFeedback: function () {
            var that = this;
            var a = this;
            e.myFeedbackData({
                pageNo: this.compCurrentPage,
                pageSize: this.pageSize,
                replyStatus: 'DOWN'
            }).then(function (e) {
                uni.stopPullDownRefresh();
                if (200 == e.code) {
                    if (1 == that.compCurrentPage) {
                        a.setData({
                            completedList: [],
                            completeCount: e.object.totalCount
                        });
                    }
                    a.setData({
                        completedList: a.completedList.concat(e.object.list)
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './myFeedback.css';
</style>
