<template>
    <view style="height: 100%">
        <view class="posList">
            <view class="scan_box">
                <view class="input_cell">
                    <view class="label">终端SN</view>
                    <input
                        @input="posSnInput"
                        class="scan_num_input"
                        placeholder="请输入终端SN号或扫终端条形码"
                        placeholderClass="placeholder_customer"
                        type="number"
                        :value="posSn"
                    />
                    <image @tap="getPosSn" class="scan_icon" mode="widthFix" src="https://www.krppay.com/skb_assets/pos_scan.png"></image>
                </view>
                <view class="scan_button">
                    <van-button round @click="bind" :customClass="posSn == '' ? 'confirm_button_disable' : 'confirm_button'" type="info">立即绑定</van-button>
                </view>
            </view>
            <view class="bind_list" v-if="list.length != 0">
                <view class="total_bind_number">
                    <view class="left">
                        已绑定终端：
                        <text style="color: #1f1b27">{{ total }}台</text>
                    </view>
                    <view @tap="toHistory" class="right">
                        终端记录
                        <van-icon name="arrow"></van-icon>
                    </view>
                </view>
                <view class="bind_cell_box" v-for="(item, index) in list" :key="index">
                    <view class="bind_pos_cell">
                        <view class="lf_cell">
                            <image class="pos_icon" src="https://www.krppay.com/skb_assets/pos_little_icon.png"></image>
                            <view class="pos_sn_detail">
                                <view class="pos_sn">{{ item.posTusn }}</view>
                                <view :class="item.activateFlag == 'Y' ? 'active_status active' : 'active_status'">{{ item.activateFlag == 'Y' ? '已激活' : '未激活' }}</view>
                            </view>
                        </view>
                        <view class="rt_cell">
                            <van-button
                                round
                                @click="showReason($event, { sn: item.posTusn })"
                                customClass="pos_operate"
                                :data-sn="item.posTusn"
                                type="info"
                                v-if="item.auditStatus != 'CHECKING'"
                            >
                                解绑
                            </van-button>
                            <view @tap="doingTap" class="pending" v-if="item.auditStatus == 'CHECKING'">审核中</view>
                        </view>
                    </view>

                    <view class="bind_audit_status" v-if="item.reason !== null && item.reason !== ''">{{ item.reason }}</view>
                </view>
            </view>
            <view class="bind_list" v-else>
                <image class="pos_list_none" src="https://www.krppay.com/skb_assets/bg_empty_record.png"></image>
            </view>
        </view>
        <van-dialog showCancelButton useSlot @close="areaCLose" @confirm="unbind" confirmButtonColor="#EF4034" :show="show" title="申请解绑">
            <view class="unBindTips">解除绑定后，终端将无法进行交易</view>
            <view class="text_area_box">
                <view class="area_title">请填写解绑原因（选填）</view>
                <textarea @input="reasonInput" class="area_box" cols="30" id="area_box" name="area_box" rows="10" :value="reason"></textarea>
            </view>
        </van-dialog>
    </view>
</template>

<script>
var t = require('../../api/center').centerAPI;
export default {
    data() {
        return {
            posSn: '',
            list: [],
            total: 0,
            show: false,
            reason: '',
            nowSn: ''
        };
    },
    onLoad: function (t) {},
    onReady: function () {},
    onShow: function () {
        this.getData();
    },
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    methods: {
        areaCLose: function () {
            this.setData({
                show: false
            });
        },

        reasonInput: function (t) {
            this.setData({
                reason: t.detail.value
            });
        },

        posSnInput: function (t) {
            console.log(t);
            console.log(this.posSn);
            this.setData({
                posSn: t.detail.value
            });
        },

        getPosSn: function (t) {
            var that = this;
            uni.scanCode({
                onlyFromCamera: true,
                success: function (t) {
                    console.log(t);
                    that.setData({
                        posSn: t.result
                    });
                }
            });
        },

        getData: function () {
            var that = this;
            t.findBindAuditPage({}).then(function (t) {
                console.log(t);
                if (200 == t.code) {
                    that.setData({
                        list: t.object.list,
                        total: t.object.total
                    });
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        toHistory: function () {
            uni.navigateTo({
                url: '/pos/historyList/historyList'
            });
        },

        showReason: function (t, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(t, _dataset);
            /* ---处理dataset end--- */
            var that = this;
            uni.requestSubscribeMessage({
                tmplIds: ['j7FvDKVP6ICf6TWnIg0TQTtM1ISJKev-Cr05w6iAU1c'],
                complete: function (o) {
                    var e = t.currentTarget.dataset.sn;
                    that.setData({
                        nowSn: e,
                        show: true,
                        reason: ''
                    });
                }
            });
        },

        test: function () {
            uni.getSetting({
                withSubscriptions: true,
                success: function (t) {
                    console.log(t.authSetting);
                    uni.requestSubscribeMessage({
                        tmplIds: ['j7FvDKVP6ICf6TWnIg0TQTtM1ISJKev-Cr05w6iAU1c'],
                        complete: function (t) {}
                    });
                }
            });
        },

        unbind: function () {
            var that = this;
            var n = this.nowSn;
            uni.showModal({
                title: '温馨提示',
                content: '注：提交解绑申请后，需要您的直属服务商审核，审核成功后解绑，解绑后您将无法进行交易，请慎重考虑',
                cancelText: '确认提交',
                cancelColor: '#EF4034',
                confirmText: '取消',
                confirmColor: '#45464E'
            }).then(function (o) {
                if (o.confirm) {
                    console.log('用户点击确定');
                } else {
                    if (o.cancel) {
                        console.log('用户点击取消');
                        uni.getSetting({
                            withSubscriptions: true,
                            success: function (o) {
                                console.log(o.authSetting);
                                that.unbindRequest(n);
                            }
                        });
                    }
                }
            });
        },

        doingTap: function () {
            uni.showToast({
                title: '您的解绑申请正在审核中，请耐心等待',
                icon: 'none'
            });
        },

        unbindRequest: function (n) {
            var that = this;
            t.unbindApply({
                posTusn: n,
                reason: this.reason
            }).then(function (t) {
                if (200 == t.code) {
                    uni.showToast({
                        title: '解绑审核提交成功',
                        icon: 'none',
                        duration: 3000
                    }).then(function (t) {
                        setTimeout(function () {
                            that.getData();
                        }, 1000);
                    });
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        bind: function () {
            var that = this;
            console.log('this.data.posSn = ', this.posSn);
            if (this.posSn) {
                t.bind({
                    posTusn: this.posSn
                }).then(function (t) {
                    if (200 == t.code) {
                        uni.showToast({
                            title: '绑定成功',
                            icon: 'success',
                            duration: 3000
                        }).then(function (t) {
                            setTimeout(function () {
                                that.getData();
                            }, 1000);
                        });
                    } else {
                        uni.showToast({
                            title: t.message,
                            icon: 'none'
                        });
                    }
                });
            } else {
                uni.showToast({
                    title: '请输入终端SN',
                    icon: 'none'
                });
            }
        }
    }
};
</script>
<style>
@import './posList.css';
</style>
