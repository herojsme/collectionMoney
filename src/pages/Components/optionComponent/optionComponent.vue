<template>
    <view class="class_optionBox">
        <view @tap="clickLeft" class="classIdBox">
            <view>
                <van-image fit="contain" height="192rpx" :src="leftbgImageVClone" width="300rpx"></van-image>
            </view>
            <view>
                <text>{{ leftDescTitle }}</text>
            </view>
        </view>
        <view @tap="clickRight" class="classIdBox" v-if="rightbgImageVClone != ''">
            <view>
                <van-image fit="contain" height="192rpx" :src="rightbgImageVClone" width="300rpx"></van-image>
            </view>
            <view>
                <text>{{ rightDescTitle }}</text>
            </view>
        </view>
        <van-dialog
            showConfirmButton
            useSlot
            @confirm="clickMarktrue($event, { item: 'left' })"
            confirmButtonColor="#EF4034"
            confirmButtonText="知道了"
            data-item="left"
            :show="leftMarkCardPopShow"
            title="证件上传示例"
        >
            <view v-if="isiOS">
                <image :src="leftPopImageUrl" style="width: 540rpx; height: 382rpx; margin-left: 50rpx; margin-top: 50rpx"></image>
            </view>
            <view v-else>
                <image mode="widthFix" :src="leftPopImageUrl" style="width: 540rpx; height: 382rpx; margin-left: 25rpx; margin-right: 25rpx; margin-top: 50rpx"></image>
            </view>
        </van-dialog>
        <van-dialog
            showConfirmButton
            useSlot
            @confirm="clickMarktrue($event, { item: 'right' })"
            confirmButtonColor="#EF4034"
            confirmButtonText="知道了"
            data-item="right"
            :show="rightMarkCardPopShow"
            title="证件上传示例"
        >
            <view v-if="isiOS">
                <image :src="rightPopimageUrl" style="width: 540rpx; height: 382rpx; margin-left: 50rpx; margin-top: 50rpx"></image>
            </view>
            <view v-else>
                <image mode="widthFix" :src="rightPopimageUrl" style="width: 540rpx; height: 382rpx; margin-left: 25rpx; margin-right: 25rpx; margin-top: 50rpx"></image>
            </view>
        </van-dialog>
    </view>
</template>

<script>
import vanImage from '@wc/vantWeapp/image/index';
import vanDialog from '@wc/vantWeapp/dialog/index';
export default {
    components: {
        vanImage,
        vanDialog
    },
    data() {
        return {
            leftMarkCardPopShow: false,
            rightMarkCardPopShow: false,
            selectImageUrl: '',
            selectParams: {},
            isiOS: true,
            lockTouch: true,
            leftbgImageVClone: '',
            rightbgImageVClone: ''
        };
    },
    options: {
        multipleSlots: true
    },
    props: {
        leftDescTitle: {
            type: String,
            default: '标题'
        },
        leftbgImageV: {
            type: String,
            default: '左边图片'
        },
        leftShowPop: {
            type: Boolean,
            default: false
        },
        leftPopImageUrl: {
            type: String,
            default: ''
        },
        rightDescTitle: {
            type: String,
            default: ''
        },
        rightbgImageV: {
            type: String,
            default: ''
        },
        rightShowPop: {
            type: Boolean,
            default: false
        },
        rightPopimageUrl: {
            type: String,
            default: ''
        }
    },
    methods: {
        optionDataChange: function () {
            console.log('数值改变');
            this.$emit('optionDataChange', {
                detail: {
                    leftDescTitle: this.leftDescTitle,
                    params: this.selectParams
                }
            });
        },
        clickLeft: function () {
            console.log('clickLeft 点击左边弹窗');
            var that = this;
            console.log('this.data.lockTouch = ', this.lockTouch);
            if (1 == this.lockTouch) {
                this.setData({
                    lockTouch: false
                });
                setTimeout(function () {
                    that.setData({
                        lockTouch: true
                    });
                }, 1500);
                if ('' != this.leftpopimageUrl && 1 == this.leftShowPop) {
                    console.log('leftpopimageUrl =', this.leftpopimageUrl);
                    this.checkIsiOS();
                    this.setData({
                        leftMarkCardPopShow: true
                    });
                } else {
                    this.wxSelectImage('left');
                }
            }
        },
        clickRight: function () {
            console.log('点击了右边弹窗xxxxx');
            console.log('this.data.lockTouch = ', this.lockTouch);
            var that = this;
            if (1 == this.lockTouch) {
                this.setData({
                    lockTouch: false
                });
                setTimeout(function () {
                    that.setData({
                        lockTouch: true
                    });
                }, 150);
                if ('' != this.rightPopimageUrl && 1 == this.rightShowPop) {
                    console.log('rightPopimageUrl =', this.rightPopimageUrl);
                    this.checkIsiOS();
                    this.setData({
                        rightMarkCardPopShow: true
                    });
                } else {
                    this.wxSelectImage('right');
                }
            }
        },
        checkIsiOS: function () {
            var t = uni.getSystemInfoSync();
            console.log('inf0 = ', t);
            if ('android' === t.platform) {
                this.setData({
                    isiOS: false
                });
            } else {
                if ('ios' === t.platform) {
                    this.setData({
                        isiOS: true
                    });
                } else {
                    this.setData({
                        isiOS: false
                    });
                }
            }
        },
        clickMarktrue: function (t, _dataset) {
            /* ---处理dataset begin--- */
            this.handleDataset(t, _dataset);
            /* ---处理dataset end--- */
            console.log('item = ', t);
            var e = t.target.dataset.item;
            console.log('type = ', e);
            this.wxSelectImage(e);
        },
        wxSelectImage: function (t) {
            var that = this;
            uni.chooseMedia({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function (o) {
                    var i = o.tempFiles[0].size;
                    var a = o.tempFiles[0].tempFilePath;
                    var s = i / 1024 / 1024;
                    console.log('size = ', s);
                    if (s > 1) {
                        console.log('压缩一下');
                        return void uni.showToast({
                            title: '图片大小不能超过1M',
                            icon: 'none'
                        });
                    }
                    var l = {
                        imgFormat: 'jpg',
                        base64pic: uni.getFileSystemManager().readFileSync(a, 'base64'),
                        picImage: a,
                        type: t
                    };
                    var c = a;
                    if ('left' == t) {
                        that.setData({
                            leftbgImageVClone: c,
                            selectParams: l
                        });
                    } else {
                        that.setData({
                            rightbgImageVClone: c,
                            selectParams: l
                        });
                    }
                    that.optionDataChange();
                }
            });
        }
    },
    created: function () {}
};
</script>
<style>
@import './optionComponent.css';
</style>
