<template>
    <view class="containers">
        <van-search useActionSlot @cancel="onClear" @change="onChange" @search="onSearch" customClass="searchCustom" :value="value" placeholder="请输入搜索关键词">
            <view @tap="onClick" slot="action">搜索</view>
        </van-search>
        <scroll-view class="bank_scroll" :scrollY="true">
            <view class="bank">
                <view @tap="selectHyType" class="bank_item" :data-code="item.code" :data-name="item.name" v-for="(item, index) in typeList" :key="index">
                    <label>{{ item.name }}</label>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
var a = require('../../../api/api').API;
export default {
    data() {
        return {
            value: '',
            typeList: [],
            areaCode: '',
            keyWord: '',
            hyTypeCode: '',
            hyTypeNmae: ''
        };
    },
    onLoad: function (e) {
        console.log('options = ', e);
        this.setData({
            areaCode: e.areaCode,
            keyWord: this.value
        });
        this.findByNewLikeHeadBankName();
    },
    methods: {
        onChange: function () {
            this.setData({
                value: e.detail
            });
        },

        onClear: function () {
            this.setData({
                value: ''
            });
        },

        onSearch: function () {
            this.findByNewLikeHeadBankName();
        },

        onClick: function () {
            this.findByNewLikeHeadBankName();
        },

        findByNewLikeHeadBankName: function () {
            var that = this;
            var t = {
                areaCode: this.areaCode,
                keyWord: this.value
            };
            console.log('params =', t);
            a.POSTCustMcctype(t).then(function (a) {
                console.log('res = ', a);
                if (200 == a.code) {
                    var t = a.object;
                    that.setData({
                        typeList: t
                    });
                }
            });
        },

        selectHyType: function (e) {
            var a = e.currentTarget.dataset.name;
            var t = e.currentTarget.dataset.code;
            var n = getCurrentPages();
            console.log(n);
            var o = n[n.length - 2];
            if (o) {
                o.setData({
                    hyTypeCode: t,
                    hyTypeNmae: a
                });
                uni.navigateBack({
                    delta: 1
                });
            }
        }
    }
};
</script>
<style>
@import './hyTypeChangeList.css';
</style>
