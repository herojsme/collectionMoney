<template>
    <view class="merge_container">
        <view
            @tap="onClickRowAuto"
            class="class_rowBox"
            :style="
                'background-image: ' +
                (isAuto == false ? 'url(https://www.krppay.com/skb_assets/bg_mergin_unselect_img.png)' : 'url(https://www.krppay.com/skb_assets/bg_mergin_select_img.png)') +
                ';'
            "
        >
            <view>
                <view :class="isAuto == true ? 'class_Selectmergetitle' : 'class_mergetitle'">自动到账</view>
                <view :class="isAuto == true ? 'class_SelectmergeDesc' : 'class_mergeDesc'">每笔交易自动打款到结算卡</view>
            </view>
            <view class="class_imageBox">
                <image :src="isAuto == true ? '/static/assets/image/login/selelct_red_icon.png' : '/static/assets/image/login/unselect.png'"></image>
            </view>
        </view>
        <view
            @tap="onClickRowMerge"
            class="class_rowBox"
            :style="
                'background-image: ' +
                (isAuto == false ? 'url(https://www.krppay.com/skb_assets/bg_auto_select_img.png)' : 'url(https://www.krppay.com/skb_assets/bg_auto_unselect_img.png)') +
                ';'
            "
        >
            <view>
                <view :class="isAuto == false ? 'class_titleSelectDesx' : 'class_titleDesx'">合并到账</view>
                <view :class="isAuto == false ? 'class_SelectautoDesc' : 'class_autoDesc'">多笔交易合并结算到钱包账户，自行提现</view>
            </view>
            <view class="class_imageBox">
                <image :src="isAuto == false ? '/static/assets/image/login/auto_select.png' : '/static/assets/image/login/unselect.png'"></image>
            </view>
        </view>
        <view class="bottom_btnBox">
            <van-button round @click="clickConfirmFix" customClass="confirm_button" type="info">确认修改</van-button>
        </view>
        <van-dialog
            useSlot
            @confirm="clickPopConfirm"
            cancelButtonText="取消"
            confirmButtonColor="#EF4034"
            confirmButtonText="确认"
            :show="isShowMarkPop"
            :showCancelButton="true"
            :showConfirmButton="true"
            title="温馨提示"
        >
            <view style="margin: 80rpx">
                <view style="color: #666666; text-align: center">{{ isAuto == true ? autoMarkTitie : mergeMarkTitle }}</view>
            </view>
        </van-dialog>
    </view>
</template>

<script>
var o = require('../../../api/api').API;
getApp();
export default {
    data() {
        return {
            isAuto: true,
            isShowMarkPop: false,
            autoMarkTitie: '注意：选择自动到账后，会根据您的每笔交易类型进行正常的自动到账请您确认是否选择自动到账',
            mergeMarkTitle: '注意：选择合并到账后，您的交易不再会进行自动到账打款，待您选择进行结算时，可进行一笔结算打款'
        };
    },
    onLoad: function (o) {
        var t = getApp().globalData.custInfo;
        var e = 'AUTO' == t.arrivalMethod;
        console.log('custInfo = ', t);
        this.setData({
            isAuto: e
        });
        this.queryCustAllInfo();
    },
    methods: {
        queryCustAllInfo: function () {
            var that = this;
            o.queryCustAllInfo().then(function (o) {
                console.log('res = ', o);
                getApp().globalData.custInfo = o.object;
                var e = 'AUTO' == o.object.arrivalMethod;
                console.log('custInfo = ', o.object);
                that.setData({
                    isAuto: e
                });
            });
        },

        clickConfirmFix: function () {
            this.setData({
                isShowMarkPop: true
            });
        },

        clickPopConfirm: function () {
            console.log('弹窗确认按钮');
            this.requestChange();
        },

        onClickRowAuto: function () {
            this.setData({
                isAuto: true
            });
        },

        onClickRowMerge: function () {
            this.setData({
                isAuto: false
            });
        },

        requestChange: function () {
            var that = this;
            var e = this.isAuto ? 'AUTO' : 'MERGE';
            o.updateArrivalMethodConfig({
                arrivalMethod: e
            }).then(function (o) {
                if (200 == o.code) {
                    if (1 == that.isAuto) {
                        uni.showToast({
                            title: '修改到账方式成功',
                            icon: 'none',
                            duration: 2000,
                            success: function (o) {
                                setTimeout(function () {
                                    uni.navigateBack({
                                        delta: 1
                                    });
                                }, 2000);
                            }
                        });
                    } else {
                        uni.showModal({
                            title: '变更成功',
                            content: '1：您的结算订单将多笔合并入账到您的结算账户；\n 2：您可以在结算账户中自由提现；\n 3：结算账户在您的个人中心——我的钱包查看 \n',
                            showCancel: true,
                            confirmText: '确定',
                            confirmColor: '#EF4034',
                            cancelText: '去看看',
                            cancelColor: '#333333',
                            success: function (o) {
                                if (o.confirm) {
                                    console.log('用户点击确定');
                                    uni.navigateBack();
                                } else {
                                    if (o.cancel) {
                                        console.log('用户点击去看看,进入钱包');
                                        uni.navigateTo({
                                            url: '/toolsBox/wallet/wallet'
                                        });
                                    }
                                }
                            }
                        });
                    }
                } else {
                    uni.showToast({
                        title: o.message,
                        icon: 'none'
                    });
                }
            });
        },

        callBackSelect: function () {
            var o = getCurrentPages();
            console.log('arr = ', o);
            var t = o.length >= 2 ? o[o.length - 2] : void 0;
            console.log('lastPage = ', t);
            if (t && 'infoChange/changeList/changeList' == t.route) {
                console.log('进入了逻辑判断');
                t.updataAccontType(this.isAuto ? '自动到账' : '合并到账');
                uni.navigateBack();
            }
        }
    }
};
</script>
<style>
@import './mergeAccontFix.css';
</style>
