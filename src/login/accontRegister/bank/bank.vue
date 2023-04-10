<template>
    <view class="containers">
        <van-search useActionSlot @cancel="onClear" @change="onChange" @search="onSearch" customClass="searchCustom" :value="value" placeholder="请输入搜索关键词">
            <view @tap="onClick" slot="action">搜索</view>
        </van-search>
        <scroll-view class="bank_scroll" :scrollY="true">
            <view class="bank">
                <view @tap="selectBank" class="bank_item" :data-code="item.bankCode" :data-name="item.bankName" v-for="(item, index) in bankList" :key="index">
                    <label>{{ item.bankName }}</label>
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
            bankList: [],
            bankCode: '',
            bankName: '',
            alliedBankCode: '',
            alliedBankName: ''
        };
    },
    onLoad: function () {
        this.findByNewLikeHeadBankName();
    },
    methods: {
        onChange: function () {},

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
            var n = {
                bankName: this.value
            };
            console.log('params =', n);
            a.POSTAllTopBank(n).then(function (a) {
                console.log('res = ', a);
                if (200 == a.code) {
                    that.setData({
                        bankList: a.object
                    });
                }
            });
        },

        selectBank: function (a) {
            var e = a.currentTarget.dataset.name;
            var n = a.currentTarget.dataset.code;
            var t = getCurrentPages();
            console.log(t);
            var i = t[t.length - 2];
            if (i) {
                i.setData({
                    bankCode: n,
                    bankName: e,
                    alliedBankCode: '',
                    alliedBankName: '请选择'
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
@import './bank.css';
</style>
