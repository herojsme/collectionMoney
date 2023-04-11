<template>
    <view class="use_box">
        <view class="use_list">
            <view class="use_cell" v-for="(item, index) in list" :key="index">
                <view class="order_id">终端SN：{{ item.posTusn }}</view>

                <view class="tran_time">{{ item.createTime }}</view>

                <view class="trans_price">{{ item.operateType == 'UNBIND' ? '解绑终端' : '绑定终端' }}</view>
            </view>
        </view>
    </view>
</template>

<script>
var t = require('@api/center').centerAPI;
export default {
    data() {
        return {
            pageNo: 1,
            pageSize: 10,
            list: [],
            total: 10,
            pageNum: 0
        };
    },
    onLoad: function (t) {},
    onReady: function () {},
    onShow: function () {
        this.getData();
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {
        console.log(1);
        this.setData({
            pageNo: 1
        });
        this.getData();
    },
    onReachBottom: function () {
        console.log(2);
        if (!(this.list.length >= this.total)) {
            var t = this.pageNo + 1;
            this.setData({
                pageNo: t
            });
            this.getData();
        }
    },
    methods: {
        getData: function () {
            var that = this;
            t.findPage({
                pageNo: this.pageNo,
                pageSize: this.pageSize
            }).then(function (t) {
                console.log(t);
                that.setData({
                    list: that.list.concat(t.object.list),
                    total: t.object.total,
                    pageNum: t.object.pageNum
                });
            });
        }
    }
};
</script>
<style>
@import './historyList.css';
</style>
