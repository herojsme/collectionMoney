<template>
    <view class="merge_container">
        <scroll-view
            enableFlex
            @refresherrefresh="refresh"
            @scrolltolower="scrollToLower"
            :refresherEnabled="true"
            :refresherTriggered="loading"
            :scrollY="true"
            :style="'height: ' + scrollHeight + 'px;'"
        >
            <view @tap="clickTimeSelect" class="class_header_time_box">
                {{ selectTime == '' ? '全部' : selectTime }}
                <image
                    class="arrow_icon"
                    src="https://www.krppay.com/skb_assets/ic_solid_arrow_down.png"
                    :style="show ? 'transform:rotate(-180deg);' : 'transform:rotate(0deg);'"
                ></image>
            </view>
            <view data-item="item" v-for="(item, index) in keyList" :key="index">
                <view @tap="clickRow" class="class_rowBox" data-item="item">
                    <view class="class_titleBox">
                        <view class="title">变更后:{{ item.dataNew.mccName == undefined ? '智能账单' : item.dataNew.mccName }}</view>
                        <view class="time">{{ item.ymTime }}</view>
                    </view>
                    <view class="class_rowDescBox">变更前:{{ item.dataOld.mccName == undefined ? '智能账单' : item.dataOld.mccName }}</view>
                    <view class="class_bottomLine"></view>
                </view>
            </view>
        </scroll-view>
        <view v-if="keyList.length == 0">
            <van-empty class="custom-image" description="" image="https://www.krppay.com/skb_assets/bg_nodata_empty.png" mode="widthFix"></van-empty>
        </view>
        <native_pick_time @dismissPop="dismissPop" @timeDataChange="timeDataChange" :show="show" :showDay="false"></native_pick_time>
    </view>
</template>

<script>
var e = require('@api/api').API;
getApp();
export default {
    data() {
        return {
            keyList: [],
            selectTime: '',
            loading: false,
            show: false,
            scrollHeight: '',
            undefined: ''
        };
    },
    onLoad: function (e) {
        this.requestAddressChangeList();
    },
    methods: {
        requestAddressChangeList: function () {
            var that = this;
            e.queryChangeList({
                customerNo: this.customerNo,
                pageSize: 10,
                pageNo: 1,
                monthStr: this.selectTime,
                changeType: 'MCC_CATEGORY'
            }).then(function (e) {
                console.log('res =', e);
                if (200 == e.code) {
                    e.object.list.forEach(function (e) {
                        e.dataNew = JSON.parse(e.dataNewJson) || {};
                        e.dataOld = JSON.parse(e.dataOldJson) || {};
                        e.ymTime = e.updateTime.substring(5, e.updateTime.length);
                        console.log('行业变更记录 - item.mccName', e.mccName);
                    });
                    that.setData({
                        keyList: e.object.list
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        refresh: function () {
            this.setData({
                loading: false
            });
        },

        clickTimeSelect: function () {
            this.setData({
                show: true
            });
        },

        timeDataChange: function (e) {
            console.log('选择的时间 = ', e.detail.selectlineYMDTime);
            this.setData({
                show: false,
                selectTime: e.detail.selectlineYMDTime
            });
            this.requestAddressChangeList();
        },

        dismissPop: function () {
            this.setData({
                show: false
            });
        },

        clickRow: function () {},

        scrollToLower() {
            console.log('占位：函数 scrollToLower 未声明');
        }
    }
};
</script>
<style>
@import './industrylist.css';
</style>
