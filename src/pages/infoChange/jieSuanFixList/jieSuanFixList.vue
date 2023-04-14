<template>
    <view class="info_container">
        <view class="class_headerTitleBox"></view>
        <view class="class_topBox">
            <van-cell customClass="topCellClass" size="large" title="姓名" titleClass="cell__title" :value="userName" valueClass="class_cell_value_select"></van-cell>
            <van-cell customClass="topCellClass" size="large" title="身份证号" titleClass="cell__title" :value="idCardnumber" valueClass="class_cell_value_select"></van-cell>
        </view>
        <view class="class_headerTitleBox"></view>
        <view class="class_inputBox">
            <van-field
                center
                clearable
                :border="true"
                inputAlign="right"
                inputClass="inputClass"
                label="卡片上传"
                labelClass="titleInputClass"
                :value="bankNumber"
                placeholder="请输入银行卡卡号"
            >
                <van-icon @click="clickCamera" customClass="copy_custom" name="/assets/image/login/icon_qrcode_btn.png" size="30rpx" slot="right-icon"></van-icon>
            </van-field>
        </view>
        <view class="class_contentBox">
            <van-cell
                isLink
                @tap.native="clickRow($event, { title: '开户银行' })"
                customClass="topCellClass"
                data-title="开户银行"
                size="large"
                title="开户银行"
                titleClass="cell__title"
                :value="bankName"
                :valueClass="bankName == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
            ></van-cell>
            <van-cell
                isLink
                @tap.native="clickRow($event, { title: '开户所在地' })"
                customClass="topCellClass"
                data-title="开户所在地"
                size="large"
                title="开户所在地"
                titleClass="cell__title"
                :value="areaNmae"
                :valueClass="areaNmae == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
            ></van-cell>
            <van-cell
                isLink
                @tap.native="clickRow($event, { title: '开户支行' })"
                customClass="topCellClass"
                data-title="开户支行"
                size="large"
                title="开户支行"
                titleClass="cell__title"
                :value="alliedBankName"
                :valueClass="alliedBankName == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
            ></van-cell>
        </view>
        <van-toast id="van-toast"></van-toast>
        <view class="class_headerTitleBox">*拍照上传结算卡正面，若不上传将无法提交，若信息识别有误 请重新上传</view>
        <view class="login_btnBox">
            <van-button round @click="clickConfirmFix" customClass="confirm_button" type="info">提交审核</van-button>
        </view>
        <van-dialog
            useSlot
            @confirm="clickPopConfirm"
            cancelButtonText="重新输入"
            confirmButtonColor="#EF4034"
            confirmButtonText="好的"
            :show="showageinPop"
            :showCancelButton="true"
            :showConfirmButton="true"
            title="确认修改"
        >
            <view style="margin: 80rpx">
                <view style="color: #666666; text-align: center">每日修改次数有限，请谨慎核实 信息是否无误</view>
            </view>
        </van-dialog>
        <address_pick @addressDataChange="addressDataChange" :show="showArea" :showAreaCode="false"></address_pick>
    </view>
</template>

<script>
var e;
var a =
    (e = require('@wc/vantWeapp/toast/toast')) && e.__esModule
        ? e
        : {
              default: e
          };
var o = require('@api/api').API;
export default {
    data() {
        return {
            showageinPop: false,
            cityCode: '',
            provinceCode: '',
            alliedBankCode: '',
            alliedBankName: '请选择',
            bankCode: '',
            bankName: '请选择',
            bankNumber: '',
            bankImgUrl: '',
            areaCode: '',
            areaNmae: '请选择',
            idCardnumber: '',
            userName: '',
            showArea: false,
            areaList: {
                province_list: {},
                city_list: {}
            }
        };
    },
    onLoad: function (e) {
        console.log('options = ', e);
        this.requestSetAccontInfo();
        this.addCallBackMessgeTip();
    },
    onUnload: function () {
        uni.disableAlertBeforeUnload();
    },
    methods: {
        addCallBackMessgeTip: function () {
            uni.enableAlertBeforeUnload({
                title: '温馨提示',
                message: '退出后，您的修改将不会被保存，请您慎重选择',
                success: function (e) {
                    console.log('成功：', e);
                },
                fail: function (e) {
                    console.log('失败：', e);
                }
            });
        },

        onCloseArea: function () {
            this.setData({
                showArea: false
            });
        },

        onConfirmArea: function (e) {
            console.log('event', e);
            this.setData({
                areaCode: e.detail.values[1].code,
                provinceCode: e.detail.values[0].code,
                showArea: false,
                areaNmae: e.detail.values[0].name + '/' + e.detail.values[1].name,
                alliedBankCode: '',
                alliedBankName: '请选择'
            });
        },

        addressDataChange: function (e) {
            console.log('event = ', e);
            this.setData({
                areaCode: e.detail.cityCode,
                provinceCode: e.detail.provinceCode,
                showArea: false,
                areaNmae: e.detail.addressString,
                alliedBankCode: '',
                alliedBankName: '请选择'
            });
        },

        hideCode: function (e, a, o) {
            for (var n = e.length - a - o, t = '', i = 0; i < n; i++) {
                t += '*';
            }
            return 2 == e.length ? e.substring(0, 1) + '*' : e.substring(0, a) + t + e.substring(e.length - o);
        },

        clickConfirmFix: function () {
            console.log('点击确认修改,弹窗提示');
            this.setData({
                showageinPop: true
            });
        },

        clickPopConfirm: function () {
            console.log('点击了弹窗的确认按钮');
            this.requestFixSet();
        },

        clickCamera: function () {
            this.wxSelectImage();
        },

        clickRow: function (e, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(e, _dataset);
            /* ---处理dataset end--- */
            var a = e.currentTarget.dataset.title;
            console.log(a);
            if ('开户银行' == a) {
                uni.navigateTo({
                    url: '/pages/infoChange/bank/bank'
                });
            } else {
                if ('开户所在地' == a) {
                    this.setData({
                        showArea: true
                    });
                } else {
                    if ('开户支行' == a) {
                        uni.navigateTo({
                            url: '/pages/infoChange/alliedBank/alliedBank?areaCode='.concat(this.areaCode, '&bankCode=').concat(this.bankCode)
                        });
                    }
                }
            }
        },

        requestFixSet: function () {
            var e = RegExp(/\*/);
            if (this.bankNumber.match(e)) {
                uni.showToast({
                    title: '请输入完整的银行卡号',
                    icon: 'none'
                });
            } else {
                var n = {
                    bankAccountNo: this.bankNumber,
                    bankCode: this.bankCode,
                    areaCode: this.areaCode,
                    alliedBankCode: this.alliedBankCode,
                    bankCardImgUrl: this.bankImgUrl
                };
                console.log('params =', n);
                o.querySettleChange(n).then(function (e) {
                    console.log('res = ', e);
                    if (200 == e.code) {
                        uni.disableAlertBeforeUnload();
                        uni.showToast({
                            title: '修改结算卡成功',
                            icon: 'none',
                            duration: 2000,
                            success: function (e) {
                                setTimeout(function () {
                                    uni.navigateBack({
                                        delta: 2
                                    });
                                }, 2000);
                            }
                        });
                    } else {
                        var o = e.message;
                        (0, a.default)(o);
                    }
                });
            }
        },

        requestSetAccontInfo: function () {
            var e = getApp().globalData.custInfo;
            console.log('custInfo = ', e);
            this.setData({
                bankName: e.bankName,
                userName: this.hideCode(e.legalPerson, 1, 1),
                bankNumber: this.hideCode(e.bankAccountNo, 6, 4),
                idCardnumber: this.hideCode(e.identityNo, 6, 4),
                bankCode: e.bankCode,
                alliedBankName: e.alliedBankName,
                alliedBankCode: e.alliedBankCode,
                areaNmae: e.areaName,
                areaCode: e.areaCode
            });
        },

        wxSelectImage: function () {
            var that = this;
            uni.chooseMedia({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function (a) {
                    var n = a.tempFiles[0].tempFilePath;
                    uni.showLoading({
                        title: '加载中',
                        mask: true
                    });
                    uni.uploadFile({
                        url: o.POSTBaseUrl() + '/pub/img/uploadImg',
                        filePath: n,
                        name: 'pic',
                        formData: {
                            imgType: '3',
                            imgFormat: 'JPG'
                        },
                        header: {
                            'content-type': 'multipart/form-data'
                        },
                        success: function (a) {
                            var o = a.data;
                            var n = JSON.parse(o);
                            console.log('jsonData = ', n);
                            that.setData({
                                bankNumber: n.object.bankCard,
                                bankImgUrl: n.object.imgUrl,
                                alliedBankCode: '',
                                alliedBankName: '请选择',
                                areaCode: '',
                                areaNmae: '请选择',
                                bankCode: '',
                                bankName: '请选择'
                            });
                        },
                        complete: function (e) {
                            uni.hideLoading();
                        }
                    });
                }
            });
        }
    }
};
</script>
<style>
@import './jieSuanFixList.css';
</style>
