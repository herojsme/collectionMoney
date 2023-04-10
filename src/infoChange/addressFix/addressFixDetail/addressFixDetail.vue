<template>
    <view class="merge_container">
        <view class="class_header">修改后地址</view>
        <view class="class_bottomLine"></view>
        <view @tap="clickRow" class="class_rowBox" data-item="item">
            <view class="title">所属地区</view>
            <view class="rightvalue">{{ item.dataNew.orgName }}</view>
        </view>
        <view class="class_bottomLine"></view>
        <view @tap="clickRow" class="class_rowBox" data-item="item">
            <view class="title">详细地区</view>
            <view class="rightvalue">{{ item.dataNew.address }}</view>
        </view>
        <view class="class_header">修改前地址</view>
        <view class="class_bottomLine"></view>
        <view @tap="clickRow" class="class_rowBox" data-item="item">
            <view class="title">所属地区</view>
            <view class="rightvalue">{{ item.dataOld.orgName }}</view>
        </view>
        <view class="class_bottomLine"></view>
        <view @tap="clickRow" class="class_rowBox" data-item="item">
            <view class="title">详细地区</view>
            <view class="rightvalue">{{ item.dataOld.address }}</view>
        </view>
        <view v-if="keyList.length == 0">
            <van-empty class="custom-image" description="您还没有相关记录哦" image="https://www.krppay.com/skb_assets/bg_empty_record.png" mode="widthFix"></van-empty>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            item: {},
            keyList: []
        };
    },
    onLoad: function (t) {
        var n = uni.getStorageSync('addressDetail') || {};
        console.log('detail =', n);
        this.setData({
            item: n.currentTarget.dataset.item
        });
        console.log('item = ', this.item);
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        clickRow() {
            console.log('占位：函数 clickRow 未声明');
        }
    }
};
</script>
<style>
@import './addressFixDetail.css';
</style>
