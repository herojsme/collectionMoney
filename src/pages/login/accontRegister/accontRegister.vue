<template>
    <view>
        <view class="login_container">
            <view style="height: 32rpx; background-color: #f4f6f8"></view>
            <view class="top_descViewBox">
                <text>证件信息</text>
            </view>
            <view>
                <optionComponent
                    @optionDataChange="optionDataChange($event, { tagId: 'idCard' })"
                    id="idCard"
                    leftDescTitle="点击上传身份证正面照"
                    :leftPopImageUrl="zmIdCardpopimageUrl"
                    :leftShowPop="true"
                    :leftbgImageV="idCardImageV"
                    rightDescTitle="点击上传身份证背面照"
                    :rightPopimageUrl="fmIdCardpopidFmUrl"
                    :rightShowPop="true"
                    :rightbgImageV="idCardFanMianV"
                ></optionComponent>
                <optionComponent
                    @optionDataChange="optionDataChange($event, { tagId: 'bankCard' })"
                    id="bankCard"
                    leftDescTitle="银行卡正面"
                    :leftbgImageV="bankCardImageV"
                ></optionComponent>
                <view style="background-color: white; height: 70rpx; width: 100%"></view>
            </view>
            <view class="classLineBox"></view>
            <view>
                <view class="top_descViewBox">
                    <text>身份信息</text>
                </view>
                <van-cell-group>
                    <van-field :border="true" inputAlign="right" label="姓名" :value="idcardName" placeholder="请输入真实姓名"></van-field>
                    <van-field :border="true" inputAlign="right" label="身份证号" :value="idCardNumber" placeholder="请输入身份证号"></van-field>
                    <van-cell :border="false" title="有效期">
                        <van-radio-group @change="onChange" slot="right-icon" :value="radio">
                            <view class="changeDate_box">
                                <van-radio useIconSlot customClass="radio_custom" name="1">
                                    有效期
                                    <image slot="icon" :src="radio == 1 ? selectIcon : unselectIcon" style="width: 30rpx; height: 30rpx"></image>
                                </van-radio>
                                <van-radio useIconSlot customClass="rm" name="2">
                                    长期
                                    <image slot="icon" :src="radio == 2 ? selectIcon : unselectIcon" style="width: 30rpx; height: 30rpx"></image>
                                </van-radio>
                            </view>
                        </van-radio-group>
                    </van-cell>
                    <van-cell title="">
                        <view class="class_timeBox">
                            <view @tap="showidCardDateSelect" :class="personStartTimeValue == '开始时间' ? 'class_stattTime' : 'class_selectTime'">
                                <text>{{ personStartTimeValue }}</text>
                                <van-icon name="arrow-down"></van-icon>
                            </view>
                            <text class="class_timeBoxtext">至</text>
                            <view @tap="showidCardDateEndSelect" :class="personEndTimeValue == '结束时间' ? 'class_endTime' : 'class_selectTime'">
                                <text>{{ personEndTimeValue }}</text>
                                <van-icon name="arrow-down"></van-icon>
                            </view>
                        </view>
                    </van-cell>
                </van-cell-group>
            </view>
            <view class="classLineBox"></view>
            <view class="top_descViewBox">
                <text>结算信息</text>
            </view>
            <view>
                <van-cell-group>
                    <van-field :border="false" inputAlign="right" label="银行卡号" :value="bankCardnumber" placeholder="请输入银行卡号"></van-field>
                </van-cell-group>
                <van-cell
                    isLink
                    @tap.native="clickRow($event, { rowtitle: '开户行' })"
                    data-rowtitle="开户行"
                    title="开户行"
                    :value="bankName"
                    :valueClass="bankName == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
                ></van-cell>
                <van-cell
                    isLink
                    @tap.native="clickRow($event, { rowtitle: '开户行所在地' })"
                    data-rowtitle="开户行所在地"
                    title="开户行所在地"
                    :value="areaNmae"
                    :valueClass="areaNmae == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
                ></van-cell>
                <van-cell
                    isLink
                    @tap.native="clickRow($event, { rowtitle: '开户支行' })"
                    data-rowtitle="开户支行"
                    title="开户支行"
                    :value="alliedBankName"
                    :valueClass="alliedBankName == '请选择' ? 'class_cell_value_default' : 'class_cell_value_select'"
                ></van-cell>
            </view>
            <view class="classLineBox"></view>
            <view class="top_descViewBox">
                <text>基本信息</text>
            </view>
            <view>
                <van-cell-group>
                    <van-cell
                        isLink
                        @tap.native="clickRow($event, { rowtitle: '经营地区' })"
                        data-rowtitle="经营地区"
                        title="经营地区"
                        :value="jyareaName"
                        :valueClass="jyareaName == '省/市/区' ? 'class_cell_value_default' : 'class_cell_value_select'"
                    ></van-cell>
                </van-cell-group>
                <van-field :border="true" inputAlign="right" label="经营地址" :value="jyAddress" placeholder="请输入详细地址"></van-field>
                <view @tap.stop.prevent="onClickHyYtypeRow" class="class_hyrowBox">
                    <view class="title">行业类型</view>
                    <view class="valueBox">
                        <view :class="hangyeName == '若不输入则执行智能账单' ? 'hytype' : 'selelctHytype'">{{ hangyeName }}</view>
                        <van-icon
                            @tap.native.stop.prevent="clearSelect"
                            :name="hangyeName == '若不输入则执行智能账单' ? 'arrow' : 'close'"
                            :style="'width: ' + (hangyeName == '若不输入则执行智能账单' ? '40' : '80') + 'rpx; color:rgb(137, 137, 137); margin-right: 18rpx;'"
                        ></van-icon>
                    </view>
                </view>
            </view>
            <view class="login_btnBox">
                <view class="class_bottom_desc_box">*请确认以上信息，如若有误请点击图片重新上传</view>
                <view class="loginBindBtn">
                    <van-button round @click="clickCommit" customClass="confirm_button" type="info">立即注册</van-button>
                </view>
            </view>
            <native_pick_time
                @dismissPop="dismissPop($event, { tagId: 'start' })"
                @timeDataChange="timeDataChange($event, { tagId: 'start' })"
                id="start"
                :show="showStartTime"
            ></native_pick_time>
            <native_pick_time
                @dismissPop="dismissPop($event, { tagId: 'end' })"
                @timeDataChange="timeDataChange($event, { tagId: 'end' })"
                id="end"
                :show="showEndTime"
            ></native_pick_time>
            <van-dialog
                useSlot
                @confirm="bindConfirmAction"
                cancelButtonText="取消"
                confirmButtonColor="#EF4034"
                confirmButtonText="继续注册"
                :show="idCardRenzhengShow"
                :showCancelButton="true"
                :showConfirmButton="true"
                title="温馨提示"
            >
                <view style="margin: 80rpx">
                    <text style="color: #666666; text-align: center">您的身份证已注册过，是否继续注册？</text>
                </view>
            </van-dialog>
            <address_pick @addressDataChange="addressDataChange($event, { tagId: 'bankaddress' })" id="bankaddress" :show="showAreaPop" :showAreaCode="false"></address_pick>
            <address_pick @addressDataChange="addressDataChange($event, { tagId: 'jyaddress' })" id="jyaddress" :show="showJYAreaPop" :showAreaCode="true"></address_pick>
        </view>
    </view>
</template>

<script>
var e;
var a;
var t = require('../../@babel/runtime/helpers/defineProperty');
if ((e = require('@wc/vantWeapp/dialog/dialog'))) {
    e.__esModule;
}
var app = getApp();
var i = require('@api/api').API;
export default {
    data() {
        return {
            currentTimeString: '',
            inviterCode: '',
            source: '',
            userCode: '',
            openId: '',
            idcardName: '',
            idCardNumber: '',
            idCardZmImagurl: '',
            personStartTimeValue: '',
            personEndTimeValue: '',
            idCardFmImagurl: '',
            bankCardnumber: '',
            bankCardImgUrl: '',
            idCardImageV: '',
            idCardFanMianV: '',
            bankCardImageV: '',
            showAreaPop: false,
            showJYAreaPop: false,
            areaCode: '',
            provinceCode: '',
            areaNmae: '',
            alliedBankCode: '',
            alliedBankName: '',
            jyareaDiquCode: '',
            jycityCode: '',
            jyprovinceCode: '',
            jyareaName: '',
            jyAddress: '',
            radio: '',
            hangyeCode: '',
            hangyeName: '',
            showStartTime: false,
            showEndTime: false,
            idCardRenzhengShow: '',
            areaList: '',
            zmIdCardpopimageUrl: '',
            fmIdCardpopidFmUrl: '',
            selectIcon: '',
            unselectIcon: '',
            bankName: ''
        };
    },
    data() {
        return (
            (a = {
                idCardImageV: 'https://www.krppay.com/skb_assets/login_idcard_zm.png',
                idCardFanMianV: 'https://www.krppay.com/skb_assets/login_idcard_fm.png',
                bankCardImageV: 'https://www.krppay.com/skb_assets/login_bankcard_zm.png',
                selectIcon: '/static/assets/image/login/select.png',
                unselectIcon: '/static/assets/image/login/unselect.png',
                fmIdCardpopidFmUrl: 'https://www.krppay.com/skb_assets/skb_bg_idCard_fm.png',
                zmIdCardpopimageUrl: 'https://www.krppay.com/skb_assets/skb_bg_idCard_zm.png',
                personStartTimeValue: '开始时间',
                personEndTimeValue: '结束时间',
                currentTime: new Date().getTime(),
                currentTimeString: '',
                showStartTime: false,
                showEndTime: false,
                radio: '1',
                scrollHeight: app.globalData.windowHeight - app.globalData.navhegiht - 0,
                bankCode: '',
                bankName: '请选择',
                alliedBankCode: '',
                alliedBankName: '请选择',
                showAreaPop: false,
                showJYAreaPop: false,
                areaNmae: '请选择',
                areaCode: '',
                provinceCode: '',
                bankCardImgUrl: '',
                bankCardnumber: '',
                jyprovinceCode: '',
                jycityCode: '',
                jyareaDiquCode: '',
                jyareaName: '省/市/区',
                jyAddress: '',
                idName: '',
                idCardNumber: '',
                idCardZmImagurl: '',
                idCardFmImagurl: ''
            }),
            t(a, 'idCardNumber', ''),
            t(a, 'idcardName', ''),
            t(a, 'hangyeCode', ''),
            t(a, 'hangyeName', '若不输入则执行智能账单'),
            t(a, 'idCardRenzhengShow', false),
            t(a, 'inviterCode', ''),
            t(a, 'source', ''),
            t(a, 'tip', ''),
            t(a, 'openId', ''),
            a
        );
    },
    onLoad: function (e) {
        console.log('自主注册，options->', e);
        this.userLogin();
        this.getOpenid();
        this.setData({
            currentTimeString: this.formatDate(this.currentTime)
        });
        if (e.q) {
            var a = decodeURIComponent(e.q).split('inviterCode=');
            var t = a[a.length - 1];
            if (t && 'undefined' != t && '' != t) {
                t = t;
            } else {
                t = '';
            }
            this.setData({
                inviterCode: decodeURIComponent(t),
                source: 'AGENT_QRCODE_INV'
            });
        } else {
            if (e.inviterCode) {
                this.setData({
                    inviterCode: e.inviterCode,
                    source: 'CUSTOMER_QRCODE_INV'
                });
            } else {
                this.setData({
                    source: 'CUST_MINI',
                    inviterCode: ''
                });
            }
        }
        this.getAllareaInfo();
        console.log('自主注册，source->'.concat(this.source, '\tinviterCode->').concat(this.inviterCode));
    },
    methods: {
        userLogin: function () {
            var that = this;
            uni.login({
                success: function (a) {
                    console.log('xresult =', a);
                    if ('login:ok' === a.errMsg) {
                        that.setData({
                            userCode: a.code
                        });
                    }
                },
                fail: function (e) {
                    console.log('fail .res =', e);
                },
                complete: function (e) {
                    console.log('回调 res =', e);
                }
            });
        },

        getOpenid: function () {
            var that = this;
            uni.login({
                success: function (a) {
                    console.log('xresult =', a);
                    if ('login:ok' === a.errMsg) {
                        i.getWxOpenId({
                            code: a.code
                        }).then(function (a) {
                            console.log('res = ', a);
                            if (200 == a.code) {
                                var t = a.object.openid;
                                that.setData({
                                    openId: t
                                });
                            }
                        });
                    }
                },
                fail: function (e) {
                    console.log('fail .res =', e);
                },
                complete: function (e) {
                    console.log('回调 res =', e);
                }
            });
        },

        optionDataChange: function (e) {
            if ('' != this.openId) {
                console.log('event = ', e);
                var a = e.detail.params;
                var t = (a.base64pic, a.picImage);
                var o = a.type;
                var s = e.target.id;
                console.log('id = ', s);
                var that = this;
                var r = {
                    imgType: '2',
                    imgFormat: 'JPG',
                    customerNo: this.openId
                };
                if ('idCard' == s && 'left' == o) {
                    r = {
                        imgType: '2',
                        imgFormat: 'JPG',
                        customerNo: this.openId
                    };
                } else {
                    if ('idCard' == s && 'right' == o) {
                        r = {
                            imgType: '1',
                            imgFormat: 'JPG',
                            customerNo: this.openId
                        };
                    } else {
                        if ('bankCard' == s && 'left' == o) {
                            r = {
                                imgType: '3',
                                imgFormat: 'JPG',
                                customerNo: this.openId
                            };
                        }
                    }
                }
                console.log('上传图片入参 dicData = ', r);
                uni.showLoading({
                    title: '加载中',
                    mask: true
                });
                uni.uploadFile({
                    url: i.POSTBaseUrl() + 'pub/img/uploadImg',
                    filePath: t,
                    name: 'pic',
                    formData: r,
                    header: {
                        'content-type': 'multipart/form-data'
                    },
                    success: function (e) {
                        var a = e.data;
                        var t = JSON.parse(a);
                        console.log('jsonData = ', t);
                        if (200 == t.code) {
                            if ('idCard' == s && 'left' == o) {
                                that.setData({
                                    idcardName: t.object.name,
                                    idCardNumber: t.object.idcard,
                                    idCardZmImagurl: t.object.imgUrl
                                });
                            } else {
                                if ('idCard' == s && 'right' == o) {
                                    that.setData({
                                        personStartTimeValue: that.changeStartTime(t.object.validDate),
                                        personEndTimeValue: that.changeEndTime(t.object.validDate),
                                        idCardFmImagurl: t.object.imgUrl
                                    });
                                } else {
                                    if ('bankCard' == s && 'left' == o) {
                                        that.setData({
                                            bankCardnumber: t.object.bankCard,
                                            bankCardImgUrl: t.object.imgUrl
                                        });
                                    }
                                }
                            }
                        } else {
                            if ('idCard' == s && 'left' == o) {
                                that.setData({
                                    idCardImageV: 'https://www.krppay.com/skb_assets/login_idcard_zm.png'
                                });
                            } else {
                                if ('idCard' == s && 'right' == o) {
                                    that.setData({
                                        idCardFanMianV: 'https://www.krppay.com/skb_assets/login_idcard_fm.png'
                                    });
                                } else {
                                    'bankCard' == s &&
                                        'left' == o &&
                                        that.setData({
                                            bankCardImageV: 'https://www.krppay.com/skb_assets/login_bankcard_zm.png'
                                        });
                                }
                            }
                            setTimeout(function () {
                                uni.showToast({
                                    title: t.message,
                                    icon: 'none'
                                });
                            }, 300);
                        }
                    },
                    fail: function (e) {
                        if ('idCard' == s && 'left' == o) {
                            that.setData({
                                idCardImageV: 'https://www.krppay.com/skb_assets/login_idcard_zm.png'
                            });
                        } else {
                            if ('idCard' == s && 'right' == o) {
                                that.setData({
                                    idCardFanMianV: 'https://www.krppay.com/skb_assets/login_idcard_fm.png'
                                });
                            } else {
                                if ('bankCard' == s && 'left' == o) {
                                    that.setData({
                                        bankCardImageV: 'https://www.krppay.com/skb_assets/login_bankcard_zm.png'
                                    });
                                }
                            }
                        }
                    },
                    complete: function (e) {
                        uni.hideLoading();
                    }
                });
            } else {
                this.getOpenid();
            }
        },

        onCloseArea: function () {
            console.log('地址弹窗取消');
            this.setData({
                showAreaPop: false,
                showJYAreaPop: false
            });
        },

        onConfirmArea: function (e) {
            console.log('event', e);
            this.setData({
                areaCode: e.detail.values[1].code,
                provinceCode: e.detail.values[0].code,
                areaNmae: e.detail.values[0].name + '/' + e.detail.values[1].name,
                alliedBankCode: '',
                showAreaPop: false,
                alliedBankName: '请选择'
            });
        },

        addressDataChange: function (e) {
            console.log('event = ', e);
            var a = e.target.id;
            console.log('id = ', a);
            if ('bankaddress' == a) {
                this.setData({
                    areaCode: e.detail.cityCode,
                    provinceCode: e.detail.provinceCode,
                    areaNmae: e.detail.addressString,
                    alliedBankCode: '',
                    showAreaPop: false,
                    alliedBankName: '请选择'
                });
            } else {
                if ('jyaddress' == a) {
                    this.setData({
                        jyareaDiquCode: e.detail.areaCode,
                        jycityCode: e.detail.cityCode,
                        jyprovinceCode: e.detail.provinceCode,
                        jyareaName: e.detail.addressString,
                        jyAddress: '',
                        showJYAreaPop: false
                    });
                }
            }
        },

        onChange: function (e) {
            console.log(e);
            if ('1' != this.radio) {
                this.setData({
                    radio: e.detail
                });
            }
        },

        clickRow: function (e) {
            var a = e.target.dataset.rowtitle;
            if ('开户行' == a)
                uni.navigateTo({
                    url: '/login/accontRegister/bank/bank'
                });
            else if ('开户支行' == a) {
                if ('' == this.bankCode.length) {
                    return void uni.showToast({
                        title: '请选择总行',
                        icon: 'none'
                    });
                }
                if ('' == this.areaCode.length) {
                    return void uni.showToast({
                        title: '请选择开户行所在地',
                        icon: 'none'
                    });
                }
                uni.navigateTo({
                    url: '/login/accontRegister/alliedBank/alliedBank?bankCode=' + this.bankCode + '&areaCode=' + this.areaCode
                });
            } else {
                if ('开户行所在地' == a) {
                    console.log('开户所在地');
                    this.setData({
                        showAreaPop: true
                    });
                } else {
                    if ('经营地区' == a) {
                        console.log('经营地区');
                        this.setData({
                            showJYAreaPop: true
                        });
                    }
                }
            }
        },

        onClickHyYtypeRow: function () {
            if ('' != this.jyareaDiquCode) {
                uni.navigateTo({
                    url: '/login/accontRegister/hangyetype/hangyetype?area=' + this.jyareaDiquCode
                });
            } else {
                uni.showToast({
                    title: '请先选择经营地区',
                    icon: 'none'
                });
            }
        },

        clearSelect: function () {
            console.log('点击了清除选择');
            this.setData({
                hangyeCode: '',
                hangyeName: '若不输入则执行智能账单'
            });
        },

        showidCardDateSelect: function () {
            this.setData({
                showStartTime: true
            });
            console.log('弹出身份证开始时间弹窗');
        },

        showidCardDateEndSelect: function () {
            this.setData({
                showEndTime: true
            });
            console.log('弹出身份证结束时间弹窗');
        },

        timeDataChange: function (e) {
            var a = e.detail.selectYMDTime;
            console.log('x-xx-x---x-x--x-x-', a);
            console.log('点击了时间选择确定按钮 event = ', e);
            this.dismissPop();
            if ('start' == e.target.id) {
                this.setData({
                    personStartTimeValue: a
                });
            } else {
                this.setData({
                    personEndTimeValue: a
                });
            }
        },

        dismissPop: function () {
            console.log('dismiss');
            this.setData({
                showStartTime: false,
                showEndTime: false
            });
        },

        clickCommit: function () {
            if (this.comparetime(this.personEndTimeValue, this.currentTimeString))
                uni.showToast({
                    title: '身份证有效期截止时间不能小于当前时间',
                    icon: 'none'
                });
            else if ('' != this.idCardZmImagurl) {
                if ('' != this.idCardFmImagurl) {
                    if ('' != this.bankCardImgUrl) {
                        if ('' != this.idcardName) {
                            if ('' != this.idCardNumber) {
                                if ('' != this.bankCode) {
                                    if ('' != this.alliedBankCode) {
                                        if ('' != this.jyareaDiquCode) {
                                            if ('' != this.jyAddress) {
                                                if (this.jyAddress.length < 6) {
                                                    uni.showToast({
                                                        title: '经营地址不能小于6位',
                                                        icon: 'none'
                                                    });
                                                } else {
                                                    var e = RegExp(/\号/);
                                                    if (this.jyAddress.match(e)) {
                                                        if (this.comparetime(this.personStartTimeValue, this.personEndTimeValue)) {
                                                            this.requestIdCardRegisterNumber();
                                                        } else {
                                                            uni.showToast({
                                                                title: '身份证有效期开始时间不能大于结束时间',
                                                                icon: 'none'
                                                            });
                                                        }
                                                    } else {
                                                        uni.showToast({
                                                            title: '经营地址请精确到门牌号',
                                                            icon: 'none'
                                                        });
                                                    }
                                                }
                                            } else {
                                                uni.showToast({
                                                    title: '请输入经营地址',
                                                    icon: 'none'
                                                });
                                            }
                                        } else {
                                            uni.showToast({
                                                title: '请选择经营地区',
                                                icon: 'none'
                                            });
                                        }
                                    } else {
                                        uni.showToast({
                                            title: '请选择开户支行',
                                            icon: 'none'
                                        });
                                    }
                                } else {
                                    uni.showToast({
                                        title: '请选择开户行',
                                        icon: 'none'
                                    });
                                }
                            } else {
                                uni.showToast({
                                    title: '请输入身份证号',
                                    icon: 'none'
                                });
                            }
                        } else {
                            uni.showToast({
                                title: '请输入完姓名',
                                icon: 'none'
                            });
                        }
                    } else {
                        uni.showToast({
                            title: '请上传银行卡照片',
                            icon: 'none'
                        });
                    }
                } else {
                    uni.showToast({
                        title: '请上传身份证反面照片',
                        icon: 'none'
                    });
                }
            } else {
                uni.showToast({
                    title: '请上传身份证正面照片',
                    icon: 'none'
                });
            }
        },

        requestIdCardRegisterNumber: function () {
            var that = this;
            var a = this;
            i.queryCustomerCount({
                identityNo: this.idCardNumber
            }).then(function (t) {
                if (200 == t.code) {
                    if (parseInt(t.object.count) > 0) {
                        that.setData({
                            idCardRenzhengShow: true
                        });
                    } else {
                        a.requestRegisterAccont();
                    }
                } else {
                    uni.showToast({
                        title: t.message,
                        icon: 'none'
                    });
                }
            });
        },

        requestRegisterAccont: function () {
            var that = this;
            var a = this.replade(this.personStartTimeValue) + this.replade(this.personEndTimeValue);
            var t = {
                identityNo: this.idCardNumber,
                idCaedRsUrl: this.idCardZmImagurl,
                idCaedWsUrl: this.idCardFmImagurl,
                legalPerson: this.idcardName,
                validity: a,
                bankAccountNo: this.bankCardnumber,
                bankCode: this.bankCode,
                alliedBankCode: this.alliedBankCode,
                areaCode: this.areaCode,
                bankCardImgUrl: this.bankCardImgUrl,
                bankAccountName: this.bankName,
                organCode: this.jyareaDiquCode,
                address: this.jyAddress,
                source: this.source,
                businessType: this.hangyeCode,
                inviterCode: this.inviterCode,
                code: this.userCode
            };
            console.log('params = ', t);
            i.queryRegisterCust(t).then(function (a) {
                console.log('res = ', a);
                if (200 == a.code) {
                    uni.navigateTo({
                        url:
                            '/login/registerSuccess/registerSuccess?customerName=' +
                            a.object.customerName +
                            '&customerNo=' +
                            a.object.customerNo +
                            '&username=' +
                            a.object.username +
                            '&password=' +
                            a.object.password +
                            '&idCardnumber=' +
                            that.idCardNumber +
                            '&idcardName=' +
                            that.idcardName
                    });
                } else {
                    that.userLogin();
                    uni.showModal({
                        title: '温馨提示',
                        content: a.message,
                        confirmColor: '#EF4034',
                        showCancel: false
                    }).then(function (e) {});
                }
            });
        },

        bindConfirmAction: function () {
            this.requestRegisterAccont();
        },

        getAllareaInfo: function () {
            var that = this;
            i.POSTAllareaInfo({
                queryType: 3
            }).then(function (a) {
                var t = that;
                console.log('x-x- res = ', a);
                if (200 == a.code) {
                    var o = {};
                    var i = {};
                    var s = {};
                    a.object.forEach(function (e) {
                        var a = e.areaCode;
                        var t = e.label;
                        o[a] = t;
                        var n = e.children;
                        if (n) {
                            n.forEach(function (e) {
                                var a = e.areaCode;
                                var t = e.label;
                                i[a] = t;
                                var o = e.children;
                                if (o) {
                                    o.forEach(function (e) {
                                        var a = e.areaCode;
                                        var t = e.label;
                                        s[a] = t;
                                    });
                                }
                            });
                        }
                    });
                }
                var n = {
                    province_list: o,
                    city_list: i,
                    county_list: s
                };
                t.setData({
                    areaList: n
                });
            });
        },

        changeStartTime: function (e) {
            return (e = (e = e.substring(0, 8)).slice(0, 4) + '年' + e.slice(4, 6) + '月' + e.slice(6) + '日');
        },

        changeEndTime: function (e) {
            var a = RegExp(/\长期/);
            return e.match(a)
                ? (this.setData({
                      radio: 2
                  }),
                  '长期')
                : (e = (e = e.substring(e.length - 8)).slice(0, 4) + '年' + e.slice(4, 6) + '月' + e.slice(6) + '日');
        },

        replade: function (e) {
            var a = e.replace('年', '');
            return (a = (a = a.replace('月', '')).replace('日', ''));
        },

        comparetime: function (e, a) {
            if ('长期' == a) {
                return true;
            }
            var t = e.replace('年', '/');
            t = (t = t.replace('月', '/')).replace('日', '');
            var o = a.replace('年', '/');
            o = (o = o.replace('月', '/')).replace('日', '');
            t = t.replace(/-/g, '/');
            o = o.replace(/-/g, '/');
            var i = new Date(t).getTime() <= new Date(o).getTime();
            console.log('tempStart =', t, o);
            console.log('expired =', i);
            return i;
        },

        formatDate: function (e) {
            var a = (e = new Date(e)).getFullYear();
            var t = parseInt(e.getMonth() + 1);
            var o = e.getDate();
            if (t < 10) {
                t = '0' + t;
            }
            if (o < 10) {
                o = '0' + o;
            }
            return ''.concat(a, '-').concat(t, '-').concat(o);
        }
    }
};
</script>
<style>
@import './accontRegister.css';
</style>
