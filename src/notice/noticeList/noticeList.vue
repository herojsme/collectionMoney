<template>
    <view class="notice_containers">
        <van-tabs
            sticky
            swipeable
            :active="active"
            @change="onChange"
            class="notice_tabs_box"
            color="#EF4034"
            lineHeight="8rpx"
            lineWidth="40rpx"
            titleActiveColor="#1F1B27"
            titleInactiveColor="#9292A0"
        >
            <van-tab title="系统公告">
                <view class="notice_tab_sroll" id="tab_box">
                    <block v-if="noticeDataList.length > 0">
                        <view @tap="noticeEvent" class="notice_item_box" :data-item="item" v-for="(item, index) in noticeDataList" :key="index">
                            <view class="notice_item_title_time">
                                <view class="title_read_box">
                                    <view class="notice_item_read_stauts" v-if="item.isRead == 'unread'"></view>
                                    <view class="notice_item_title">{{ item.title }}</view>
                                </view>
                                <text class="notice_item_time">{{ item.createTime }}</text>
                            </view>

                            <text class="notice_item_content" style="height: 32rpx" v-if="item.contentType == 'AORDS'">{{ item.content }}</text>

                            <text @tap.stop.prevent="eventNoticeUrl" class="notice_item_bot_txt" :data-item="item" v-if="item.jumpType == 2 && item.jumpUrl">查看更多></text>

                            <view class="notice_item_bot" v-else></view>
                        </view>
                    </block>
                    <view class="empty_box" v-else>
                        <image
                            class="empty"
                            mode="widthFix"
                            src="https://www.krppay.com/skb_assets/bg_nodata_empty.png"
                            style="width: 352rpx; height: 428rpx; margin-top: 100rpx"
                        ></image>
                        <view style="margin-top: 12rpx; font-size: 30rpx; font-weight: 400; color: #9292a0"></view>
                    </view>
                </view>
            </van-tab>
            <van-tab title="个人公告">
                <view class="notice_tab_sroll" :scrollY="true">
                    <block v-if="noticePersonalList.length > 0">
                        <view @tap="noticeEvent" class="notice_item_box" :data-item="item" v-for="(item, index) in noticePersonalList" :key="index">
                            <view class="notice_item_title_time">
                                <view class="title_read_box">
                                    <view class="notice_item_read_stauts" v-if="item.readStatus == 0"></view>
                                    <text class="notice_item_title">{{ item.title }}</text>
                                </view>
                                <text class="notice_item_time">{{ item.createTime }}</text>
                            </view>

                            <text class="notice_item_content">{{ item.content }}</text>

                            <view class="notice_item_line" v-if="item.jumpType == 2 && item.jumpUrl"></view>

                            <view class="notice_item_line" style="margin-top: 40rpx" v-else></view>

                            <view class="notice_item_bot_box" v-if="item.jumpType == 2 && item.jumpUrl">
                                <text @tap.stop.prevent="eventNoticeUrl" class="notice_item_bot_txt">立即查看></text>
                            </view>
                        </view>
                    </block>
                    <view class="empty_box" v-else>
                        <image
                            class="empty"
                            mode="widthFix"
                            src="https://www.krppay.com/skb_assets/bg_nodata_empty.png"
                            style="width: 352rpx; height: 428rpx; margin-top: 100rpx"
                        ></image>
                        <view style="margin-top: 12rpx; font-size: 30rpx; font-weight: 400; color: #9292a0"></view>
                    </view>
                </view>
            </van-tab>
        </van-tabs>
    </view>
</template>

<script>
var t = require('../../api/api').API;
export default {
    data() {
        return {
            active: 0,
            pageSize: 20,
            currentPageSys: 1,
            currentPagePer: 1,
            noticeDataList: [],
            noticePersonalList: []
        };
    },
    onLoad: function (t) {},
    onReady: function () {
        this.setData({
            currentPageSys: 1,
            currentPagePer: 1,
            noticeDataList: [],
            noticePersonalList: []
        });
        this.queryCustSysNotice();
        this.queryCustPerNotice();
    },
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {
        uni.showNavigationBarLoading();
        if (0 == this.active) {
            this.setData({
                currentPageSys: 1,
                noticeDataList: []
            });
            this.queryCustSysNotice();
        }
        if (1 == this.active) {
            this.setData({
                currentPagePer: 1,
                noticePersonalList: []
            });
            this.queryCustPerNotice();
        }
    },
    onReachBottom: function () {
        if (0 == this.active && this.currentPageSys * this.pageSize <= this.noticeDataList.length) {
            this.setData({
                currentPageSys: this.currentPageSys + 1
            });
            this.queryCustSysNotice();
        }
        if (1 == this.active && this.currentPagePer * this.pageSize <= this.noticePersonalList.length) {
            this.setData({
                currentPagePer: this.currentPagePer + 1
            });
            this.queryCustPerNotice();
        }
    },
    methods: {
        noticeEvent: function (t) {
            console.log(t);
            var e = t.currentTarget.dataset.item;
            if (0 == this.active) {
                var a = this.noticeDataList.findIndex(function (t) {
                    return t.id == e.id;
                });
                this.reqReadNoticeStatus(e);
                if (a >= 0) {
                    e.isRead = 'read';
                    this.noticeDataList[a] = e;
                }
                this.setData({
                    noticeDataList: this.noticeDataList
                });
            }
            if (1 == this.active) {
                var i = this.noticePersonalList.findIndex(function (t) {
                    return t.id == e.id;
                });
                this.reqReadPersonalNoticeStatus(e);
                if (i >= 0) {
                    e.readStatus = 1;
                    this.noticePersonalList[i] = e;
                }
                this.setData({
                    noticePersonalList: this.noticePersonalList
                });
            }
            var n = 'IMG' == e.contentType ? encodeURIComponent(e.imagURl) : '';
            uni.navigateTo({
                url: '/notice/noticeDetail/noticeDetail?title='
                    .concat(e.title, '&content=')
                    .concat(e.content ? e.content : '', '&time=')
                    .concat(e.createTime, '&noticeId=')
                    .concat(e.id, '&imgUrl=')
                    .concat(n || '')
            });
        },

        eventNoticeUrl: function (t) {
            console.log(t);
            var e = t.currentTarget.dataset.item;
            if (2 == e.jumpType && e.jumpUrl) {
                uni.navigateTo({
                    url: '/toolsBox/webview/webview?url='.concat(encodeURIComponent(e.jumpUrl))
                });
            }
        },

        onChange: function (t) {
            this.setData({
                active: t.detail.index
            });
        },

        queryCustSysNotice: function () {
            var that = this;
            t.queryCustSysNotice({
                pageNo: this.currentPageSys,
                pageSize: this.pageSize
            }).then(function (t) {
                uni.hideLoading();
                uni.hideNavigationBarLoading();
                uni.stopPullDownRefresh();
                if (200 == t.code) {
                    if (t.object.totalCount > 0) {
                        that.setData({
                            noticeDataList: that.noticeDataList.concat(t.object.list)
                        });
                    }
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        queryCustPerNotice: function () {
            var that = this;
            t.queryCustPerNotice({
                pageNo: this.currentPageSys,
                pageSize: this.pageSize
            }).then(function (t) {
                uni.hideLoading();
                uni.hideNavigationBarLoading();
                uni.stopPullDownRefresh();
                if (200 == t.code) {
                    that.setData({
                        noticePersonalList: that.noticePersonalList.concat(t.object.list)
                    });
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        reqReadNoticeStatus: function (e) {
            if (!e.isRead || 'read' != e.isRead) {
                var a = {
                    noticeCodes: [e.noticeCode]
                };
                t.readAppNotice(a).then(function (t) {
                    console.log(t);
                });
            }
        },

        reqReadPersonalNoticeStatus: function (e) {
            if (!e.readStatus || 1 != e.readStatus) {
                var a = {
                    ids: [e.id]
                };
                t.readPerNotice(a).then(function (t) {
                    console.log(t);
                });
            }
        }
    }
};
</script>
<style>
@import './noticeList.css';
</style>
