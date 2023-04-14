<template>
    <view style="height: 100%">
        <page-meta :pageStyle="timeShowPickTime ? 'overflow: hidden;' : ''"></page-meta>
        <view class="trans_settle_containers">
            <van-tabs
                sticky
                swipeable
                :active="active"
                @change="onTabChange"
                color="#EF4034"
                lineHeight="8rpx"
                lineWidth="40rpx"
                titleActiveColor="#1F1B27"
                titleInactiveColor="#9292A0"
            >
                <van-tab name="trans" title="交易明细">
                    <view class="tranSroll">
                        <view class="header">
                            <view @tap="eventTimePick" class="trans_time">
                                <text class="month">{{ transMonth }}</text>
                                <text class="label_month">月</text>
                                <text class="year">/{{ transYear }}</text>
                                <image
                                    class="arrow_icon"
                                    src="https://www.krppay.com/skb_assets/ic_solid_arrow_down.png"
                                    :style="timeShowPickTime ? 'transform:rotate(-180deg);' : 'transform:rotate(0deg);'"
                                ></image>
                            </view>
                            <view class="trans_lable">交易金额(元)</view>
                            <view class="trans_amount">{{ filters.toFix2(monthTransAmountTotal) }}</view>
                        </view>
                        <block v-if="tranList.length > 0">
                            <view
                                @tap="tranDetail"
                                :class="index == tranList.length - 1 ? 'tranMain tranMain_last' : 'tranMain'"
                                :data-flowid="item.flowId"
                                v-for="(item, index) in tranList"
                                :key="index"
                            >
                                <view :class="'main_item_container ' + (index == 0 ? '' : 'main_item_bor')">
                                    <view class="main_item_box">
                                        <image class="pay_img" mode="widthFix" :src="payDataUtils.payTypeIcon(item.payType)"></image>
                                        <text class="pay_type">{{ payDataUtils.payTypeStr(item.payType) }}支付({{ item.transCycle || '' }})</text>
                                        <image
                                            class="fee_icon"
                                            mode="heightFix"
                                            src="https://www.krppay.com/skb_assets/ic_trans_fee_service.png"
                                            v-if="item.depositFlag == 'Y'"
                                        ></image>
                                        <image
                                            class="fee_icon"
                                            mode="heightFix"
                                            src="https://www.krppay.com/skb_assets/ic_trans_fee_flow_card.png"
                                            v-if="item.simFlag == 'Y'"
                                        ></image>
                                        <view class="amount">{{ filters.toFix2(item.amount) }}</view>
                                    </view>
                                    <view class="trans_time">{{ item.createTime }}</view>
                                </view>
                            </view>
                        </block>
                        <view style="display: flex; align-self: center; justify-content: center; flex-direction: column; align-items: center; margin-top: 50rpx" v-else>
                            <image class="empty" mode="widthFix" src="https://www.krppay.com/skb_assets/bg_empty_info.png" style="width: 350rpx; height: 390rpx"></image>
                        </view>
                    </view>
                </van-tab>
                <van-tab swipeable color="#1F1B27" lineHeight="8rpx" lineWidth="40rpx" name="settle" title="结算明细" titleInactiveColor="#9292A0">
                    <view class="settle_container">
                        <view class="header">
                            <view @tap="eventTimePick" class="trans_time">
                                <text class="month">{{ settleMonth }}</text>
                                <text class="label_month">月</text>
                                <text class="year">/{{ settleYear }}</text>
                                <image
                                    class="arrow_icon"
                                    src="https://www.krppay.com/skb_assets/ic_solid_arrow_down.png"
                                    :style="timeShowPickTime ? 'transform:rotate(-180deg);' : 'transform:rotate(0deg);'"
                                ></image>
                            </view>
                            <view class="trans_lable">结算金额(元)</view>
                            <view class="trans_amount">{{ filters.toFix2(monthSettleAmountTotal) }}</view>
                        </view>
                        <block v-if="settleList.length > 0">
                            <view
                                @tap="settlDetail"
                                :class="'settle_main_item ' + (index == 0 ? '' : 'main_item_bor')"
                                :data-settleno="item.settleNo"
                                v-for="(item, index) in settleList"
                                :key="index"
                            >
                                <view class="settle_item_status">
                                    <image class="settle_img" mode="widthFix" :src="payDataUtils.settleCycleTypeIcon(item.settleCycle)"></image>
                                    <view class="orderNo" v-if="item.itemResList.length > 1">共{{ item.itemResList.length }}笔</view>
                                    <view class="orderNo" v-else>结算单号{{ item.settleNo }}</view>
                                    <view class="total_settle">{{ filters.toFix2(item.settleAmount) }}</view>
                                </view>

                                <view class="item_settle_time_withdraw">
                                    <view class="time">{{ item.settleTime }}</view>
                                    <view class="manual_withdraw" v-if="item.settleType == '503'">合并到账</view>
                                </view>
                            </view>
                        </block>
                        <view style="display: flex; align-self: center; justify-content: center; flex-direction: column; align-items: center; margin-top: 50rpx" v-else>
                            <image class="empty" mode="widthFix" src="https://www.krppay.com/skb_assets/bg_empty_info.png" style="width: 350rpx; height: 390rpx"></image>
                        </view>
                    </view>
                </van-tab>
            </van-tabs>
        </view>
        <van-popup round @close="closeTimePop" customStyle="height: 600rpx;" position="bottom" :show="timeShowPickTime">
            <view class="time_container">
                <picker-view immediateChange @change="bindChange" indicatorStyle="height: 70rpx;" style="width: 100%; height: 350rpx" :value="selectTimeArrayIndex">
                    <picker-view-column>
                        <view style="height: 70rpx; display: flex; align-items: center; justify-content: center" v-for="(item, index) in years" :key="index">{{ item }}年</view>
                    </picker-view-column>
                    <picker-view-column>
                        <view style="height: 70rpx; display: flex; align-items: center; justify-content: center" v-for="(item, index) in months" :key="index">{{ item }}月</view>
                    </picker-view-column>
                </picker-view>
                <view class="time_pick_bottom_box">
                    <van-button round @tap.native="eventTimePickFinish($event, { seltype: 'cancel' })" customClass="small_cancel_button" data-seltype="cancel">取消</van-button>
                    <van-button round @tap.native="eventTimePickFinish($event, { seltype: 'confirm' })" customClass="small_confirm_button" data-seltype="confirm">确定</van-button>
                </view>
            </view>
        </van-popup>
    </view>
</template>
<script module="filters" lang="wxs" src="@/utils/numFix.wxs"></script>
<script module="payDataUtils" lang="wxs" src="@/utils/PayDataUtils.wxs"></script>
<script>
// import vanTab from '@wc/vantWeapp/tab/index';
// import vanTabs from '@wc/vantWeapp/tabs/index';
// import vanIcon from '@wc/vantWeapp/icon/index';
// import vanDatetimePicker from '@wc/vantWeapp/datetime-picker/index';
// import vanPopup from '@wc/vantWeapp/popup/index';
// import vanDropdownMenu from '@wc/vantWeapp/dropdown-menu/index';
// import vanDropdownItem from '@wc/vantWeapp/dropdown-item/index';
// import vanButton from '@wc/vantWeapp/button/index';
var t = require('@u/util.js');
var e = (require('./timeUtils'), require('@api/api').API);
export default {
    // components: {
    //     vanTab,
    //     vanTabs,
    //     vanIcon,
    //     vanDatetimePicker,
    //     vanPopup,
    //     vanDropdownMenu,
    //     vanDropdownItem,
    //     vanButton
    // },
    data() {
        return {
            active: 0,
            pageSize: 20,
            selectTimeArrayIndex: [],
            tempCurSelectTimeArrayIndex: [],
            tempLastSelectTimeArrayIndex: [],
            years: [],
            months: [],
            timeMonthArrayMap: new Map(),
            startTimeStr: '',
            endTimeStr: '',
            timeShowPickTime: false,
            lastTabShowPick: '',
            curTabName: 'trans',
            transMonth: '',
            transYear: '',
            transSelectTimeArrayIndex: [],
            transQueryStartTime: '',
            transQueryEndTime: '',
            transTimeStr: '',
            currentPageTran: 1,
            monthTransAmountTotal: 0,
            tranList: [],
            currentPageSettle: 1,
            settleMonth: '',
            settleYear: '',
            settleQueryStartTime: '',
            settleQueryEndTime: '',
            settleSelectTimeArrayIndex: [],
            settleTimeStr: '',
            monthSettleAmountTotal: 0,
            settleList: [],
            settleStatus: '1',
            token: '',
            isLoginStatus: false,
            monthSettleAmount: ''
        };
    },
    onLoad: function (t) {},
    onReady: function () {},
    onShow: function () {
        var that = this;
        e.queryCustAllInfo().then(function (e) {
            var a = e.isLoginStatus;
            if (1 == a) {
                if (that.token) {
                    uni.getBackgroundFetchToken({
                        success: function (e) {
                            if (that.token != e.token) {
                                that.setData({
                                    token: e.token
                                });
                                that.queryDateInterval();
                            }
                        }
                    });
                } else {
                    that.queryDateInterval();
                }
            } else {
                var r = new Date();
                that.setData({
                    transYear: r.getFullYear(),
                    transMonth: r.getMonth() + 1,
                    monthTransAmountTotal: 0,
                    settleYear: r.getFullYear(),
                    settleMonth: r.getMonth() + 1,
                    monthSettleAmountTotal: 0
                });
            }
            that.setData({
                isLoginStatus: a
            });
        });
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {
        if (!this.isLoginStatus) {
            uni.stopPullDownRefresh();
            return void uni.navigateTo({
                url: '/pages/login/index/index'
            });
        }
        if (this.startTimeStr && this.endTimeStr) {
            if (this.isPickTrans()) {
                this.setData({
                    currentPageTran: 1,
                    monthTransAmountTotal: '',
                    tranList: []
                });
                this.initTime();
                this.setTransTime();
                this.queryTransList();
            } else {
                this.setData({
                    currentPageSettle: 1,
                    monthSettleAmount: '',
                    settleList: []
                });
                this.initTime();
                this.setSettleTime();
                this.querySettleList();
            }
        } else {
            this.queryDateInterval();
        }
    },
    onReachBottom: function () {
        if (this.isPickTrans()) {
            if (this.currentPageTran * this.pageSize <= this.tranList.length) {
                this.setData({
                    currentPageTran: this.currentPageTran + 1
                });
                this.queryTransList();
            }
        } else {
            if (this.currentPageSettle * this.pageSize <= this.settleList.length) {
                this.setData({
                    currentPageSettle: this.currentPageSettle + 1
                });
                this.querySettleList();
            }
        }
    },
    methods: {
        isPickTrans: function () {
            return 'trans' == this.curTabName;
        },

        onTabChange: function (t) {
            var e = t.detail.name;
            this.setData({
                curTabName: e
            });
        },

        eventTimePick: function () {
            if (this.isLoginStatus) {
                this.setData({
                    selectTimeArrayIndex: [0, 0]
                });
                if (this.isPickTrans()) {
                    var t = this.transSelectTimeArrayIndex;
                    if (this.selectTimeArrayIndex[0] != t[0] || this.selectTimeArrayIndex[1] != t[1]) {
                        var e = this.timeMonthArrayMap.get(this.years[t[0]]);
                        this.setData({
                            months: e
                        });
                        this.setData({
                            tempCurSelectTimeArrayIndex: t,
                            tempLastSelectTimeArrayIndex: t,
                            selectTimeArrayIndex: t
                        });
                    }
                } else {
                    t = this.settleSelectTimeArrayIndex;
                    if (this.selectTimeArrayIndex[0] != t[0] || this.selectTimeArrayIndex[1] != t[1]) {
                        var a = this.timeMonthArrayMap.get(this.years[t[0]]);
                        this.setData({
                            months: a
                        });
                        this.setData({
                            tempCurSelectTimeArrayIndex: t,
                            tempLastSelectTimeArrayIndex: t,
                            selectTimeArrayIndex: t
                        });
                    }
                }
                this.setData({
                    timeShowPickTime: true
                });
            } else {
                uni.navigateTo({
                    url: '/pages/login/index/index'
                });
            }
        },

        closeTimePop: function () {
            this.setData({
                timeShowPickTime: false
            });
        },

        eventTimePickFinish: function (t, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(t, _dataset);
            /* ---处理dataset end--- */
            this.closeTimePop();
            if ('confirm' == t.currentTarget.dataset.seltype) {
                if (this.isPickTrans()) {
                    this.setData({
                        selectTimeArrayIndex: this.tempCurSelectTimeArrayIndex,
                        currentPageTran: 1,
                        monthTransAmountTotal: 0
                    });
                    this.setTransTime();
                    this.queryTransList();
                } else {
                    this.setData({
                        selectTimeArrayIndex: this.tempCurSelectTimeArrayIndex,
                        currentPageSettle: 1,
                        monthSettleAmountTotal: 0
                    });
                    this.setSettleTime();
                    this.querySettleList();
                }
            }
        },

        tranDetail: function (t) {
            uni.navigateTo({
                url: '/transAndSettle/transDetail/transDetail?flowId='.concat(t.currentTarget.dataset.flowid)
            });
        },

        settlDetail: function (t) {
            uni.navigateTo({
                url: '/transAndSettle/settleDetail/settleDetail?settleno='.concat(t.currentTarget.dataset.settleno)
            });
        },

        bindChange: function (t) {
            console.log(t);
            var e = t.detail.value;
            var a = e[0];
            var r = e[1];
            var n = this.timeMonthArrayMap.get(this.years[a]).length;
            if (r >= n) {
                r = n - 1;
            }
            this.setData({
                tempCurSelectTimeArrayIndex: [a, r]
            });
            if (this.tempCurSelectTimeArrayIndex[0] != this.tempLastSelectTimeArrayIndex[0]) {
                this.setData({
                    months: this.timeMonthArrayMap.get(this.years[this.tempCurSelectTimeArrayIndex[0]])
                });
            }
            this.setData({
                tempLastSelectTimeArrayIndex: this.tempCurSelectTimeArrayIndex
            });
        },

        queryDateInterval: function () {
            var that = this;
            e.queryTransSettleDateInterval().then(function (e) {
                uni.stopPullDownRefresh();
                if (200 == e.code) {
                    that.setData({
                        startTimeStr: e.object.startTime,
                        endTimeStr: e.object.endTime
                    });
                    that.initTime();
                    that.setTransTime();
                    that.setSettleTime();
                    that.queryTransList();
                    that.querySettleList();
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        initTime: function () {
            var t = new Date(this.startTimeStr.replace(/\-/g, '/'));
            var e = new Date(this.endTimeStr.replace(/\-/g, '/'));
            var a = t.getFullYear();
            var r = e.getFullYear();
            var n = t.getMonth() + 1;
            var s = e.getMonth() + 1;
            var i = new Map();
            if (a == r) {
                for (var o = [], l = n; l <= s; l++) {
                    o.push(l);
                }
                i.set(a, o);
                this.setData({
                    timeMonthArrayMap: i,
                    years: [a],
                    months: o
                });
                this.setData({
                    selectTimeArrayIndex: [0, o.length - 1]
                });
            } else {
                this.setData({
                    timeMonthArrayMap: new Map()
                });
                for (var h = [], m = a; m <= r; m++) {
                    h.push(m);
                    o = [];
                    var u = 1;
                    var T = 12;
                    if (m == a) {
                        u = n;
                        T = 12;
                    } else {
                        if (m == r) {
                            u = 1;
                            T = s;
                        } else {
                            u = 1;
                            T = 12;
                        }
                    }
                    for (var c = u; c <= T; c++) {
                        o.push(c);
                    }
                    i.set(m, o);
                    this.timeMonthArrayMap = i;
                }
                var d = this.timeMonthArrayMap.get(h[h.length - 1]);
                this.setData({
                    years: h,
                    months: d
                });
                this.setData({
                    selectTimeArrayIndex: [h.length - 1, d.length - 1]
                });
            }
        },

        queryTransList: function () {
            var that = this;
            var a = this;
            var r = {
                pageNo: a.currentPageTran,
                pageSize: a.pageSize,
                beginCreateTime: a.transQueryStartTime,
                endCreateTime: a.transQueryEndTime
            };
            if (1 == a.currentPageTran) {
                a.setData({
                    tranList: []
                });
                this.queryTransTotalAmount();
            }
            e.queryTransOrderListNew(r).then(function (e) {
                uni.stopPullDownRefresh();
                if (200 == e.code) {
                    that.setData({
                        tranList: a.tranList.concat(e.object.list)
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        querySettleList: function () {
            var that = this;
            var a = this;
            var r = {
                pageNo: a.currentPageSettle,
                pageSize: a.pageSize,
                beginCreateTime: a.settleQueryStartTime,
                endCreateTime: a.settleQueryEndTime
            };
            if (1 == a.currentPageSettle) {
                a.setData({
                    settleList: []
                });
                this.querySettleTotalAmount();
            }
            e.querySettleListNew(r).then(function (e) {
                uni.stopPullDownRefresh();
                if (200 == e.code) {
                    that.setData({
                        settleList: a.settleList.concat(e.object.list)
                    });
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        setTransTime: function () {
            var e = this.years[this.selectTimeArrayIndex[0]];
            var a = this.months[this.selectTimeArrayIndex[1]];
            this.setData({
                transSelectTimeArrayIndex: this.selectTimeArrayIndex,
                transYear: e,
                transMonth: a
            });
            var r = this.getCurMonthLastDay(e, a);
            this.setData({
                transQueryStartTime: ''.concat([e, a, 1].map(t.formatNumber).join('-'), ' 00:00:00'),
                transQueryEndTime: ''.concat([r.getFullYear(), r.getMonth() + 1, r.getDate()].map(t.formatNumber).join('-'), ' 23:59:59')
            });
        },

        setSettleTime: function () {
            var e = this.years[this.selectTimeArrayIndex[0]];
            var a = this.months[this.selectTimeArrayIndex[1]];
            this.setData({
                settleSelectTimeArrayIndex: this.selectTimeArrayIndex,
                settleYear: e,
                settleMonth: a
            });
            var r = this.getCurMonthLastDay(e, a);
            this.setData({
                settleQueryStartTime: ''.concat([e, a, 1].map(t.formatNumber).join('-'), ' 00:00:00'),
                settleQueryEndTime: ''.concat([r.getFullYear(), r.getMonth() + 1, r.getDate()].map(t.formatNumber).join('-'), ' 23:59:59')
            });
        },

        getCurMonthLastDay: function (e, a) {
            var r = ''.concat(a < 12 ? e : ++e, '/').concat(t.formatNumber(12 == a ? 1 : ++a), '/01 00:00');
            console.log(r);
            var n = new Date(r);
            return new Date(n.getTime() - 1);
        },

        queryTransTotalAmount: function () {
            var that = this;
            e.totalTransAmount({
                beginCreateTime: this.transQueryStartTime,
                endCreateTime: this.transQueryEndTime
            }).then(function (e) {
                if (200 == e.code) {
                    that.setData({
                        monthTransAmountTotal: e.object.transAmount || 0
                    });
                }
            });
        },

        querySettleTotalAmount: function () {
            var that = this;
            e.totalSettleAmount({
                beginCreateTime: this.settleQueryStartTime,
                endCreateTime: this.settleQueryEndTime
            }).then(function (e) {
                if (200 == e.code) {
                    that.setData({
                        monthSettleAmountTotal: e.object.settleAmount || 0
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './transAndSettle.css';
</style>
