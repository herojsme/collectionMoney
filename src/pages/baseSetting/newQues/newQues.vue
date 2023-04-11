<template>
    <view class="container">
        <view class="customSearchBox">
            <van-icon name="search" style="color: #c1c1c1; font-size: 40rpx; margin-left: 24rpx"></van-icon>
            <input @input="inputChange" class="class_input" :data-item="item" placeholder="请输入关键词" :value="searchTitle" />
            <van-icon @tap.native="clearContent" name="cross" style="margin-right: 0rpx; width: 80rpx; font-size: 30rpx" v-if="searchTitle.length > 0"></van-icon>
            <view @tap="searchAction" class="searchLabel">搜索</view>
        </view>
        <view class="hot_ques">热门问题</view>
        <block v-if="quesData.length > 0">
            <van-collapse accordion @change="onChange" customClass="collapse" :value="activeNames" v-for="(item, index) in quesData" :key="index">
                <van-collapse-item :name="index" :title="item.title">{{ item.content }}</van-collapse-item>
            </van-collapse>
        </block>
    </view>
</template>

<script>
var t = require('@api/api').API;
export default {
    data() {
        return {
            activeNames: [],
            searchTitle: '',
            triggered: true,
            currentPage: 1,
            pageSize: 20,
            quesData: []
        };
    },
    onLoad: function (t) {},
    onReady: function () {},
    onShow: function () {
        uni.startPullDownRefresh();
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {
        uni.showNavigationBarLoading();
        this.setData({
            currentPage: 1,
            quesData: []
        });
        this.queryNetCustQuestion();
    },
    onReachBottom: function () {
        var t = this;
        if (t.currentPage * t.pageSize > t.quesData.length) {
            console.info('无更多数据');
        } else {
            this.setData({
                currentPage: t.currentPage + 1
            });
            this.queryNetCustQuestion();
        }
    },
    methods: {
        inputChange: function (t) {
            var e = t.detail.value;
            console.log('inputContent = ', e);
            this.setData({
                searchTitle: e
            });
        },

        clearContent: function () {
            console.log('clear清空数据');
            this.setData({
                searchTitle: ''
            });
        },

        onChange: function (t) {
            this.setData({
                activeNames: t.detail
            });
        },

        searchAction: function () {
            uni.startPullDownRefresh();
        },

        queryNetCustQuestion: function () {
            console.log('this.data,searchtitle = ', this.searchTitle);
            var that = this;
            var a = {
                pageNo: this.currentPage,
                pageSize: this.pageSize,
                title: this.searchTitle
            };
            t.queryCustQuestion(a).then(function (t) {
                uni.hideLoading();
                uni.hideNavigationBarLoading();
                uni.stopPullDownRefresh();
                if (200 == t.code) {
                    that.setData({
                        quesData: that.quesData.concat(t.object.list)
                    });
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './newQues.css';
</style>
