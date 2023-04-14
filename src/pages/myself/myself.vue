<template>
    <view class="main">
        <view class="main_bg">
            <view class="top_bg" :style="'background-image: url(' + topBgUrl + ')'">
                <view @tap="jumpUrl" class="user_box" data-url="/custInfo/custInfo/custInfo">
                    <view class="lf_box" v-if="isLoginStatus">
                        <view class="user_head_box">
                            <image
                                class="user_icon"
                                mode="scaleToFill"
                                :src="custInfo.customerLevel == 2 ? 'https://www.krppay.com/skb_assets/user_head_auth.png' : 'https://www.krppay.com/skb_assets/user_head.png'"
                            ></image>
                            <image class="debt_icon" mode="scaleToFill" src="https://www.krppay.com/skb_assets/debt_head_icon.png" v-if="showIcon"></image>
                        </view>
                        <view class="cust_info">
                            <view class="cust_name">{{ custInfo.customerName }}</view>
                            <view class="cust_no">{{ custInfo.customerNo }}</view>
                        </view>
                    </view>
                    <view class="lf_box" v-else>
                        <view class="user_head_box">
                            <image
                                class="user_icon"
                                mode="scaleToFill"
                                :src="custInfo.customerLevel == 2 ? 'https://www.krppay.com/skb_assets/user_head_auth.png' : 'https://www.krppay.com/skb_assets/user_head.png'"
                            ></image>
                        </view>
                        <view class="cust_info">
                            <view class="cust_name">{{ custInfo.customerName == null ? '立即登录' : custInfo.customerName }}</view>
                            <view class="cust_no">{{ custInfo.customerNo == null ? '登陆解锁更多功能' : custInfo.customerNo }}</view>
                        </view>
                    </view>
                    <image class="right_box" mode="scaleToFill" src="https://www.krppay.com/skb_assets/user_more_icon.png"></image>
                </view>
                <view style="height: 30rpx; width: 100%; color: white" v-if="!isLoginStatus"></view>
                <view class="customer_level_box" v-if="isLoginStatus">
                    <block v-if="custInfo.customerLevel == 1">
                        <image class="level_icon" src="https://www.krppay.com/skb_assets/auth_icon.png"></image>
                        <view class="customer_level_box_center">
                            <view class="customer_level_now">基础商户</view>
                            <view class="customer_level_now_hint">立即认证，享受更高商户额度</view>
                        </view>
                        <view @tap.stop.prevent="jumpUrl" class="increase_limit" data-url="/sysSetting/increaseLimit/increaseLimit">
                            <view class="text">提额认证</view>
                            <view class="arrow"></view>
                        </view>
                    </block>
                    <block v-else-if="activeCoupon">
                        <image class="level_icon" src="https://www.krppay.com/skb_assets/conpon_icon.png"></image>
                        <view class="customer_level_box_center">
                            <view class="customer_level_now" style="color: #fff">优惠券正在使用中</view>
                            <view class="customer_level_now_hint" style="color: #fff">优惠券到期时间:{{ activeCoupon.loseEfficacyTime || '' }}</view>
                        </view>
                        <view @tap.stop.prevent="jumpUrl" class="increase_limit" data-url="../../infoChange/custYhq/custYhq">
                            <view class="text" style="color: #bc531b ;">立即查看</view>
                            <view class="arrow" style="border-color: transparent transparent transparent #bc531b"></view>
                        </view>
                    </block>
                    <block v-else>
                        <image class="level_icon" src="https://www.krppay.com/skb_assets/auth_icon.png"></image>
                        <view class="customer_level_box_center">
                            <view class="customer_level_now" style="color: #1f1b27">认证商户</view>
                            <view class="customer_level_now_hint" style="color: #1f1b27">恭喜您，已经完成提额认证</view>
                        </view>
                    </block>
                </view>
            </view>
            <view class="common_tools">
                <view class="common_title">基础设置</view>
                <view class="tools_box">
                    <view @tap.stop.prevent="jumpUrl" class="tools_cell" :data-url="item.url" v-for="(item, index) in toolsList" :key="index">
                        <view>
                            <view class="tools_name_row">
                                <view class="tools_name">{{ item.name }}</view>
                                <van-icon class="arrow_icon" color="#A1A1A1" name="arrow" size="24rpx"></van-icon>
                            </view>
                            <text class="tools_hint">{{ item.hint }}</text>
                        </view>

                        <image class="tools_icon" mode="heightFix" :src="item.iconUrl"></image>
                    </view>
                </view>
            </view>
        </view>
        <view class="setting_box">
            <view class="setting_main">
                <view class="setting_title">其他功能</view>
                <view class="setting_list">
                    <view @tap="toSetting" class="setting_cell" :data-item="item" v-for="(item, index) in settingList" :key="index">
                        <block v-if="item.name == '在线客服'">
                            <button @contact="handleContact" class="setting_cell" openType="contact" sessionFrom="sessionFrom">
                                <image class="cell_icon" :src="item.icon" style="width: 60rpx; height: 60rpx"></image>
                            </button>
                            <view class="cell_name">{{ item.name }}</view>
                        </block>

                        <block v-else>
                            <image class="cell_icon" :src="item.icon" style="width: 60rpx; height: 60rpx"></image>
                            <view class="cell_name">{{ item.name }}</view>
                        </block>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
// import vanIcon from '@wc/vantWeapp/icon/index';
// import vanCell from '@wc/vantWeapp/cell/index';
// import vanCellGroup from '@wc/vantWeapp/cell-group/index';
var t = require('@api/api').API;
var e = require('@api/center').centerAPI;
var n = require('@api/api').API;
export default {
    // components: {
    //     vanIcon,
    //     vanCell,
    //     vanCellGroup
    // },
    data() {
        return {
            custInfo: {
                customerLevel: 0,
                customerName: '',
                customerNo: ''
            },
            toolsList: [
                {
                    iconUrl: 'https://www.krppay.com/skb_assets/pos_icon.png',
                    name: '我的终端',
                    url: '/pages/pos/posList/posList',
                    hint: '绑定机具享便捷\n支付体验'
                },
                {
                    iconUrl: 'https://www.krppay.com/skb_assets/limit_icon.png',
                    name: '我的额度',
                    url: '/toolsBox/limit/limit',
                    hint: '高额度满足您的\n交易所需'
                },
                {
                    iconUrl: 'https://www.krppay.com/skb_assets/rate_icon.png',
                    name: '我的费率',
                    url: '/toolsBox/rate/rate',
                    hint: '享受超低T0/T1\n交易费率'
                },
                {
                    iconUrl: 'https://www.krppay.com/skb_assets/ic_my_wallet.png',
                    name: '我的钱包',
                    url: '/toolsBox/wallet/wallet',
                    hint: '安全无忧的资金\n收支管理'
                }
            ],
            settingList: [
                {
                    name: '在线客服',
                    icon: 'https://www.krppay.com/skb_assets/ic_my_other_service.png'
                },
                {
                    name: '客服电话',
                    icon: 'https://www.krppay.com/skb_assets/telephone_icon.png'
                },
                {
                    name: '常见问题',
                    icon: 'https://www.krppay.com/skb_assets/ic_my_gray_ques.png',
                    url: '/pages/baseSetting/newQues/newQues'
                },
                {
                    name: '意见反馈',
                    icon: 'https://www.krppay.com/skb_assets/ic_my_feedback.png',
                    url: '/pages/baseSetting/feedback/feedback'
                },
                {
                    name: '关于我们',
                    icon: 'https://www.krppay.com/skb_assets/aboutUS.png',
                    url: '/pages/sysSetting/aboutus/aboutus'
                },
                {
                    name: '系统设置',
                    icon: 'https://www.krppay.com/skb_assets/sys_icon.png',
                    url: '/pages/sysSetting/index/index'
                }
            ],
            isLoginStatus: false,
            activeCoupon: null,
            bindFlag: false,
            chargeFlag: false,
            topBgUrl: 'https://www.krppay.com/skb_assets/my_head.png',
            showIcon: false
        };
    },
    onLoad: function (t) {},
    onReady: function () {},
    onShow: function () {
        var that = this;
        e.custIncrInfoQuery().then(function (e) {
            var n = e.isLoginStatus;
            if (1 == n) {
                that.findCustExpandSwitch();
                that.custIncrInfoQuery();
                that.queryMiniPremissions();
                that.getHotlinePhone();
                that.queryEntrance();
            } else {
                console.log('未登录不做处理');
            }
            that.setData({
                isLoginStatus: n
            });
        });
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        toSetting: function (t) {
            console.log(t.currentTarget.dataset.item);
            var e = t.currentTarget.dataset.item;
            if ('/sysSetting/index/index' != e.url) {
                if ('客服电话' != e.name) {
                    if ('在线客服' != e.name) {
                        if (e.name && '关于我们' != e.name) {
                            if (0 != this.isLoginStatus) {
                                ('/pos/commitmentletter/commitmentletter' != e.url && this.isLimitNextStep()) ||
                                    uni.navigateTo({
                                        url: e.url
                                    });
                            } else {
                                uni.navigateTo({
                                    url: '/pages/login/index/index'
                                });
                            }
                        } else {
                            uni.navigateTo({
                                url: e.url + '?isLoginStatus='.concat(this.isLoginStatus)
                            });
                        }
                    }
                } else {
                    if (getApp().globalData.hotlinePhone) {
                        uni.makePhoneCall({
                            phoneNumber: getApp().globalData.hotlinePhone
                        });
                    } else {
                        this.getHotlinePhone();
                    }
                }
            } else {
                uni.navigateTo({
                    url: e.url + '?isLoginStatus='.concat(this.isLoginStatus)
                });
            }
        },

        findCustExpandSwitch: function () {
            var that = this;
            e.findCustExpandSwitch().then(function (e) {
                console.log(e);
                if (200 == e.code) {
                    var n = [];
                    if (1 == e.object) {
                        n.push({
                            name: '拓展人信息',
                            icon: 'https://www.krppay.com/skb_assets/develop_icon.png',
                            url: '/pages/baseSetting/expands/expands'
                        });
                    }
                    that.setData({
                        settingList: n.concat([
                            {
                                name: '在线客服',
                                icon: 'https://www.krppay.com/skb_assets/ic_my_other_service.png'
                            },
                            {
                                name: '客服电话',
                                icon: 'https://www.krppay.com/skb_assets/telephone_icon.png'
                            },
                            {
                                name: '常见问题',
                                icon: 'https://www.krppay.com/skb_assets/ic_my_gray_ques.png',
                                url: '/pages/baseSetting/newQues/newQues'
                            },
                            {
                                name: '意见反馈',
                                icon: 'https://www.krppay.com/skb_assets/ic_my_feedback.png',
                                url: '/pages/baseSetting/feedback/feedback'
                            },
                            {
                                name: '关于我们',
                                icon: 'https://www.krppay.com/skb_assets/aboutUS.png',
                                url: '/pages/sysSetting/aboutus/aboutus'
                            },
                            {
                                name: '系统设置',
                                icon: 'https://www.krppay.com/skb_assets/sys_icon.png',
                                url: '/pages/sysSetting/index/index'
                            }
                        ])
                    });
                    that.queryDoubleRecordInfo();
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        queryEntrance: function () {
            var that = this;
            n.queryEntrance().then(function (e) {
                if (200 == e.code) {
                    that.setData({
                        showIcon: 'TRUE' == e.object.debitCardT0Status
                    });
                }
            });
        },

        jumpUrl: function (t) {
            var e = t.currentTarget.dataset.url;
            console.log(e);
            if (0 != this.isLoginStatus) {
                ('/pos/posList/posList' != e && this.isLimitNextStep()) ||
                    uni.navigateTo({
                        url: e
                    });
            } else {
                uni.navigateTo({
                    url: '/pages/login/index/index'
                });
            }
        },

        custIncrInfoQuery: function () {
            var that = this;
            e.custIncrInfoQuery().then(function (e) {
                console.log(e);
                if (200 == e.code) {
                    that.setData({
                        custInfo: e.object,
                        topBgUrl: that.getBgUrl(e.object)
                    });
                    that.queryShowYhq();
                } else {
                    uni.showToast({
                        title: e.message,
                        icon: 'none'
                    });
                }
            });
        },

        getHotlinePhone: function () {
            t.queryHotline().then(function (t) {
                if (200 == t.code) {
                    getApp().globalData.hotlinePhone = t.object;
                }
            });
        },

        queryDoubleRecordInfo: function () {
            var that = this;
            t.checkDoubleRecord().then(function (t) {
                if (200 == t.code) {
                    var n = that.settingList.findIndex(function (t) {
                        return '双录验证' == t.name;
                    });
                    if (1 != t.object.isBind || 1 != t.object.isDeposit || (0 != t.object.isSign && 0 != t.object.isDoubleRecord)) {
                        if (-1 != n) {
                            that.settingList.splice(n, 1);
                            that.setData({
                                settingList: that.settingList
                            });
                        }
                    } else {
                        if (-1 == n) {
                            that.settingList.unshift({
                                name: '双录验证',
                                icon: 'https://www.krppay.com/skb_assets/ic_my_double_record.png',
                                url: '/pages/pos/commitmentletter/commitmentletter'
                            });
                            that.setData({
                                settingList: that.settingList
                            });
                        }
                    }
                }
            });
        },

        queryMiniPremissions: function () {
            var that = this;
            t.queryMiniPremissions().then(function (t) {
                if (200 == t.code) {
                    that.setData({
                        bindFlag: t.object.bindFlag || false,
                        chargeFlag: t.object.chargeFlag || false
                    });
                }
            });
        },

        isLimitNextStep: function () {
            return this.bindFlag
                ? !this.chargeFlag &&
                      (uni.showToast({
                          title: '请先完成服务费交易',
                          icon: 'none'
                      }),
                      true)
                : (uni.showToast({
                      title: '请先绑定终端',
                      icon: 'none'
                  }),
                  true);
        },

        getBgUrl: function (t) {
            return 1 == t.customerLevel
                ? 'https://www.krppay.com/skb_assets/my_head.png'
                : 0 == t.customerLevel
                ? 'https://www.krppay.com/skb_assets/my_head_coupon.png'
                : 'https://www.krppay.com/skb_assets/my_head_auth.png';
        },

        queryShowYhq: function () {
            var that = this;
            t.queryCustShowYhq({
                customerNo: that.custInfo.customerNo
            }).then(function (t) {
                var n;
                if (200 == t.code && null !== (n = t.object) && void 0 !== n && n.exist) {
                    that.queryActiveCoupon();
                }
            });
        },

        queryActiveCoupon: function () {
            var that = this;
            t.getYhqEffect({}).then(function (t) {
                var n;
                console.log('yhq_res =', t);
                if (null !== (n = t.object) && void 0 !== n && n.list) {
                    that.setData({
                        activeCoupon: t.object.list.length > 0 ? t.object.list[0] : null
                    });
                }
            });
        },

        handleContact() {
            console.log('占位：函数 handleContact 未声明');
        }
    }
};
</script>
<style>
@import './myself.css';
</style>
