<template>
    <view class="container">
        <view class="class_topbox">
            <view class="title">{{ filter.filterYhqType(couponInfo.couponStatus) }}的优惠券</view>
            <view class="noempty" v-if="couponNo == ''">
                <image src="https://www.krppay.com/skb_assets/home_noyhq_img.png" style="width: 264rpx; height: 292rpx"></image>
            </view>
            <view class="sxyhq" v-if="couponNo != ''">
                <view class="yhqrow">
                    <view class="monybox"></view>
                    <view class="yhqdesc">
                        <view class="yhqtitle">提现费减免优惠券</view>
                        <view class="time">{{ couponInfo.takeEffectTime }}-{{ couponInfo.loseEfficacyTime }}</view>
                    </view>
                </view>
            </view>
        </view>
        <scroll-view
            enableFlex
            @refresherrefresh="refresh"
            @scrolltolower="scrollToLower"
            :refresherEnabled="true"
            :refresherTriggered="loading"
            :scrollY="true"
            :style="'height: ' + scrollheight + 'px;'"
        >
            <view class="content">
                <view class="spearLine"></view>
                <van-tabs :active="active" @change="onTabChange" titleActiveColor="#1F1B27" titleInactiveColor="#9292A0">
                    <view class="spearLine"></view>
                    <van-tab name="use" title="使用记录" titleStyle="font-size:30rpx">
                        <view v-if="useList.length == 0">
                            <van-empty class="custom-image" description="" image="https://www.krppay.com/skb_assets/bg_nodata_empty.png" mode="widthFix"></van-empty>
                        </view>
                        <view class="uselist" v-else>
                            <block v-for="(item, index) in useList" :key="index">
                                <view class="userow">
                                    <view class="orderbox">
                                        <view class="ordernum">订单号:{{ item.flowId }}</view>
                                        <view class="ordertime">{{ item.createTime }}</view>
                                    </view>
                                    <view class="ordermoneybox">
                                        <view class="moeny">{{ item.couponAmount }}</view>
                                        <view class="moneydesc">使用金额</view>
                                    </view>
                                </view>

                                <view class="line"></view>
                            </block>
                        </view>
                    </van-tab>
                    <van-tab name="history" title="历史优惠券" titleStyle="font-size:30rpx">
                        <view style="background-color: white" v-if="historyList.length == 0">
                            <van-empty class="custom-image" description="" image="https://www.krppay.com/skb_assets/bg_nodata_empty.png" mode="widthFix"></van-empty>
                        </view>
                        <view class="historylist" v-else>
                            <view class="title">
                                已失效优惠券:
                                <text>{{ totalCount }}张</text>
                            </view>
                            <view class="bgrowview" v-for="(item, index) in historyList" :key="index">
                                <view class="yhqrow">
                                    <view class="monybox"></view>
                                    <view class="yhqdesc">
                                        <view class="yhqtitle">固定提现费优惠券</view>
                                        <view class="time" v-if="item.takeEffectTime == null">未领取</view>
                                        <view class="time" v-else>{{ item.takeEffectTime }}--{{ item.loseEfficacyTime }}</view>
                                    </view>
                                </view>
                            </view>
                            <view style="height: 32rpx; background-color: white"></view>
                        </view>
                    </van-tab>
                    <van-tab disabled title=""></van-tab>
                    <van-tab disabled title=""></van-tab>
                </van-tabs>
            </view>
        </scroll-view>
    </view>
</template>
<script module="filter" lang="wxs" src="@/infoChange/custYhq/custYhq.wxs"></script>
<script>
var t = require('../../api/api').API;
var app = getApp();
export default {
    data() {
        return {
            active: 0,
            couponNo: '',
            couponInfo: {
                takeEffectTime: '',
                loseEfficacyTime: ''
            },
            loading: false,
            scrollheight: app.globalData.windowHeight - app.globalData.navhegiht - 200,
            type: 'use',
            useList: [],
            historyList: [],
            totalCount: 0,
            usePageNum: 1,
            historyPageNum: 1
        };
    },
    onLoad: function (t) {
        this.requestYhq();
    },
    onReady: function () {},
    onShow: function () {},
    methods: {
        onTabChange: function (t) {
            var e = t.detail.name;
            if ('use' == e) {
                this.setData({
                    type: 'use',
                    usePageNum: 1
                });
                this.requestUseRecord(this.couponNo);
            } else {
                if ('history' == e) {
                    this.setData({
                        type: 'history',
                        historyPageNum: 1
                    });
                    this.requestHistoryRecord();
                }
            }
        },

        requestYhq: function () {
            var that = this;
            var o = this;
            t.getYhqEffect({}).then(function (t) {
                console.log('res =', t);
                if (null == t.object.list) {
                    o.couponNo = '';
                } else {
                    var s = t.object.list[0];
                    o.setData({
                        couponInfo: s,
                        couponNo: s.couponNo
                    });
                    o.requestUseRecord(that.couponNo);
                }
            });
        },

        requestUseRecord: function (e) {
            var that = this;
            var s = this;
            t.getYhqUseRecord({
                couponNo: e,
                pageSize: 10,
                pageNo: this.usePageNum
            }).then(function (t) {
                console.log('res =', t);
                if (200 == t.code) {
                    if (null == t.object.list) {
                        s.setData({
                            loading: false
                        });
                    } else {
                        if (1 == that.usePageNum) {
                            s.setData({
                                loading: false,
                                useList: []
                            });
                        }
                        s.setData({
                            loading: false,
                            useList: s.useList.concat(t.object.list)
                        });
                    }
                } else {
                    s.setData({
                        loading: false
                    });
                }
            });
        },

        requestHistoryRecord: function () {
            var that = this;
            var o = this;
            t.getHistoryYhq({
                pageSize: 10,
                pageNo: this.historyPageNum
            }).then(function (t) {
                console.log('res =', t);
                if (200 == t.code) {
                    if (null == t.object.list) {
                        o.setData({
                            loading: false
                        });
                    } else {
                        if (1 == that.historyPageNum) {
                            o.setData({
                                loading: false,
                                historyList: []
                            });
                        }
                        o.setData({
                            loading: false,
                            historyList: o.historyList.concat(t.object.list),
                            totalCount: t.object.totalCount
                        });
                    }
                } else {
                    o.setData({
                        loading: false
                    });
                }
            });
        },

        refresh: function () {
            console.log('下拉刷新 active =', this.active);
            if ('use' == this.type) {
                this.setData({
                    usePageNum: 1
                });
                this.requestUseRecord(this.couponNo);
            } else {
                if ('history' == this.type) {
                    this.setData({
                        historyPageNum: 1
                    });
                    this.requestHistoryRecord();
                }
            }
        },

        scrollToLower: function () {
            console.log('上拉加载active =', this.active);
            if ('use' == this.type) {
                this.setData({
                    usePageNum: this.usePageNum + 1
                });
                this.requestYhq();
            } else {
                if ('history' == this.type) {
                    this.setData({
                        historyPageNum: this.historyPageNum + 1
                    });
                    this.requestHistoryRecord();
                }
            }
        }
    }
};
</script>
<style>
@import './custYhq.css';
</style>
