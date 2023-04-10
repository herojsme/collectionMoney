<template>
    <view class="containers">
        <van-search useActionSlot @cancel="onClear" @change="onChange" @search="onSearch" customClass="searchCustom" :value="value" placeholder="请输入搜索关键词">
            <view @tap="onClick" slot="action">搜索</view>
        </van-search>
        <scroll-view class="bank_scroll" :scrollY="true">
            <view class="bank">
                <view @tap="selectBank" class="bank_item" :data-code="item.branchCode" :data-name="item.branchName" v-for="(item, index) in bankList" :key="index">
                    <label>{{ item.branchName }}</label>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
var a = require('../../api/api').API;
export default {
    data() {
        return {
            value: '',
            bankList: [],
            areaCode: '',
            bankCode: '',
            alliedBankCode: '',
            alliedBankName: ''
        };
    },
    onLoad: function (a) {
        console.log('options', a);
        this.setData({
            areaCode: a.areaCode,
            bankCode: a.bankCode
        });
    },
    onShow: function () {
        this.findNewSubBank();
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
            this.findNewSubBank();
        },

        onClick: function () {
            this.findNewSubBank();
        },

        findNewSubBank: function () {
            var that = this;
            var n = {
                areaCode: this.areaCode,
                bankCode: this.bankCode,
                branchName: this.value
            };
            console.log('params =', n);
            a.POSTbranchBankList(n).then(function (a) {
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
            var o = t[t.length - 2];
            if (o) {
                o.setData({
                    alliedBankCode: n,
                    alliedBankName: e
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
@import './alliedBank.css';
</style>
