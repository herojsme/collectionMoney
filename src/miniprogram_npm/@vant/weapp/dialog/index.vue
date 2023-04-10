<template>
    <view style="height: 100%">
        <van-popup
            @close="onClickOverlay"
            :closeOnClickOverlay="closeOnClickOverlay"
            :customClass="'van-dialog van-dialog--' + theme + ' ' + className"
            :customStyle="'width: ' + utils.addUnit(width) + ';' + customStyle"
            :overlay="overlay"
            :overlayStyle="overlayStyle"
            :show="showClone"
            :transition="transition"
            :zIndex="zIndex"
        >
            <view :class="utils.bem('dialog__header', { isolated: !(message || useSlot) })" v-if="title || useTitleSlot">
                <slot name="title" v-if="useTitleSlot"></slot>
                <block v-else-if="title">{{ title }}</block>
            </view>
            <slot v-if="useSlot"></slot>
            <view :class="utils.bem('dialog__message', [theme, messageAlign, { hasTitle: title }])" v-else-if="message">
                <text class="van-dialog__message-text">{{ message }}</text>
            </view>
            <van-goods-action customClass="van-dialog__footer--round-button" v-if="theme === 'round-button'">
                <van-goods-action-button
                    @click="onCancel"
                    class="van-dialog__button van-hairline--right"
                    customClass="van-dialog__cancel"
                    :customStyle="'color: ' + cancelButtonColor"
                    :loading="loading.cancel"
                    size="large"
                    v-if="showCancelButton"
                >
                    {{ cancelButtonText }}
                </van-goods-action-button>
                <van-goods-action-button
                    :appParameter="appParameter"
                    @click="onConfirm"
                    @contact="onContact"
                    @error="onError"
                    @getphonenumber="onGetPhoneNumber"
                    @getuserinfo="onGetUserInfo"
                    @launchapp="onLaunchApp"
                    @opensetting="onOpenSetting"
                    :businessId="businessId"
                    class="van-dialog__button"
                    customClass="van-dialog__confirm"
                    :customStyle="'color: ' + confirmButtonColor"
                    :lang="lang"
                    :loading="loading.confirm"
                    :openType="confirmButtonOpenType"
                    :sendMessageImg="sendMessageImg"
                    :sendMessagePath="sendMessagePath"
                    :sendMessageTitle="sendMessageTitle"
                    :sessionFrom="sessionFrom"
                    :showMessageCard="showMessageCard"
                    size="large"
                    v-if="showConfirmButton"
                >
                    {{ confirmButtonText }}
                </van-goods-action-button>
            </van-goods-action>
            <view class="van-hairline--top van-dialog__footer" v-else>
                <van-button
                    @click="onCancel"
                    class="van-dialog__button van-hairline--right"
                    customClass="van-dialog__cancel"
                    :customStyle="'color: ' + cancelButtonColor"
                    :loading="loading.cancel"
                    size="large"
                    v-if="showCancelButton"
                >
                    {{ cancelButtonText }}
                </van-button>
                <van-button
                    :appParameter="appParameter"
                    @click="onConfirm"
                    @contact="onContact"
                    @error="onError"
                    @getphonenumber="onGetPhoneNumber"
                    @getuserinfo="onGetUserInfo"
                    @launchapp="onLaunchApp"
                    @opensetting="onOpenSetting"
                    :businessId="businessId"
                    class="van-dialog__button"
                    customClass="van-dialog__confirm"
                    :customStyle="'color: ' + confirmButtonColor"
                    :lang="lang"
                    :loading="loading.confirm"
                    :openType="confirmButtonOpenType"
                    :sendMessageImg="sendMessageImg"
                    :sendMessagePath="sendMessagePath"
                    :sendMessageTitle="sendMessageTitle"
                    :sessionFrom="sessionFrom"
                    :showMessageCard="showMessageCard"
                    size="large"
                    v-if="showConfirmButton"
                >
                    {{ confirmButtonText }}
                </van-button>
            </view>
        </van-popup>
    </view>
</template>
<script module="utils" lang="wxs" src="@/miniprogram_npm/@vant/weapp/wxs/utils.wxs"></script>
<script>
import vanPopup from '../popup/index';
import vanButton from '../button/index';
import vanGoodsAction from '../goods-action/index';
import vanGoodsActionButton from '../goods-action-button/index';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var t = require('../common/component');
var e = require('../mixins/button');
var o = require('../common/color');
var n = require('../common/utils');
export default {
    components: {
        vanPopup,
        vanButton,
        vanGoodsAction,
        vanGoodsActionButton
    },
    data() {
        return {
            loading: {
                confirm: false,
                cancel: false
            },

            callback: function () {},
            appParameter: '',
            businessId: '',
            lang: '',
            sendMessageImg: '',
            sendMessagePath: '',
            sendMessageTitle: '',
            sessionFrom: '',
            showMessageCard: '',
            showClone: false
        };
    },
    mixins: [e.button],
    props: {
        show: {
            type: Boolean
        },
        title: String,
        message: String,
        theme: {
            type: String,
            default: 'default'
        },
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        beforeClose: null,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            default: 2000
        },
        confirmButtonText: {
            type: String,
            default: '确认'
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        confirmButtonColor: {
            type: String,
            default: o.RED
        },
        cancelButtonColor: {
            type: String,
            default: o.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            default: true
        },
        overlay: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: 'scale'
        }
    },
    methods: {
        onConfirm: function () {
            this.handleAction('confirm');
        },

        onCancel: function () {
            this.handleAction('cancel');
        },

        onClickOverlay: function () {
            this.close('overlay');
        },

        close: function (t) {
            var that = this;
            this.setData({
                showClone: false
            });
            uni.nextTick(function () {
                that.$emit('close', t);
                var o = that.callback;
                if (o) {
                    o(t, that);
                }
            });
        },

        stopLoading: function () {
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },

        handleAction: function (t) {
            var e;
            var that = this;
            this.$emit(t, {
                dialog: this
            });
            var i = this;
            var a = i.asyncClose;
            var l = i.beforeClose;
            if (a || l) {
                this.setData({});
                if (l) {
                    (0, n.toPromise)(l(t)).then(function (e) {
                        if (e) {
                            that.close(t);
                        } else {
                            that.stopLoading();
                        }
                    });
                }
            } else {
                this.close(t);
            }
        },

        onContact() {
            console.log('占位：函数 onContact 未声明');
        },

        onError() {
            console.log('占位：函数 onError 未声明');
        },

        onGetPhoneNumber() {
            console.log('占位：函数 onGetPhoneNumber 未声明');
        },

        onGetUserInfo() {
            console.log('占位：函数 onGetUserInfo 未声明');
        },

        onLaunchApp() {
            console.log('占位：函数 onLaunchApp 未声明');
        },

        onOpenSetting() {
            console.log('占位：函数 onOpenSetting 未声明');
        }
    },
    watch: {
        show: {
            handler: function (t) {
                this.showClone = this.clone(this.show);
                if (!t) {
                    this.stopLoading();
                }
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
