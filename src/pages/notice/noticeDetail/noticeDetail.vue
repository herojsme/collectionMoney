<template>
    <view class="container">
        <view class="notice_title">{{ title }}</view>
        <view class="update_time">{{ time }}</view>
        <image mode="widthFix" :src="imgUrl" v-if="imgUrl"></image>
        <text class="notice_content" v-else>{{ noticeContent }}</text>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            time: '',
            imgUrl: '',
            noticeContent: ''
        };
    },
    onLoad: function (n) {
        console.log(n);
        this.setData({
            title: n.title,
            time: n.time,
            imgUrl: decodeURIComponent(n.imgUrl),
            noticeContent: n.content
        });
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {}
};
</script>
<style>
@import './noticeDetail.css';
</style>
