<template>
    <view style="height: 100%">
        <view></view>
        <canvas
            @error="error"
            @touchend="end"
            @touchmove="move"
            @touchstart="start"
            :disableScroll="true"
            id="canvas"
            :style="'width:' + width + 'px;height:' + height + 'px;'"
            type="2d"
        ></canvas>
        <view class="template" :style="'height:' + height + 'px;line-height: ' + height + 'px;'">{{ customerName }}</view>
        <view class="btn">
            <view class="box">
                <view class="tips">请本人进行签名，按照字迹填写更容易通过哦</view>
                <button @tap="clearClick">重签</button>
                <button @tap="saveClick" style="color: #fff">确认</button>
            </view>
        </view>
    </view>
</template>

<script>
getApp();
export default {
    data() {
        return {
            canvas: '',
            ctx: '',
            pr: 0,
            width: 0,
            height: 0,
            first: true,
            total: 0,
            customerName: ''
        };
    },
    onLoad: function (t) {
        this.getSystemInfo();
        this.createCanvas();
        this.setData({
            customerName: t.customerName
        });
    },
    methods: {
        start: function (t) {
            if (this.first) {
                this.clearClick();
                this.setData({
                    first: false
                });
            }
            this.ctx.beginPath();
            this.ctx.moveTo(t.changedTouches[0].x, t.changedTouches[0].y);
        },

        move: function (t) {
            this.ctx.lineTo(t.changedTouches[0].x, t.changedTouches[0].y);
            this.ctx.stroke();
        },

        end: function (t) {
            this.setData({
                total: this.total + 1
            });
            console.log(this.total);
        },

        error: function (t) {
            console.log('画布触摸错误' + t);
        },

        createCanvas: function () {
            var that = this;
            var a = this.pr;
            uni.createSelectorQuery()
                .in(uni)
                .select('#canvas')
                .fields({
                    node: true,
                    size: true
                })
                .exec(function (e) {
                    var i = e[0].node;
                    var s = i.getContext('2d');
                    i.width = that.width * a;
                    i.height = that.height * a;
                    s.scale(a, a);
                    s.lineGap = 'round';
                    s.lineJoin = 'round';
                    s.lineWidth = 8;
                    s.font = '100px Arial';
                    s.fillStyle = '#ecf0ef';
                    that.setData({
                        ctx: s,
                        canvas: i
                    });
                });
        },

        getSystemInfo: function () {
            var that = this;
            uni.getSystemInfo({
                success: function (a) {
                    that.setData({
                        pr: a.pixelRatio,
                        width: a.windowWidth,
                        height: a.windowHeight - 68
                    });
                }
            });
        },

        clearClick: function () {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.setData({
                total: 0
            });
        },

        saveClick: function () {
            if (0 != this.total) {
                if (this.total < 2) {
                    uni.showToast({
                        title: '签名失败，请按字迹重新书写',
                        icon: 'none'
                    });
                } else {
                    uni.canvasToTempFilePath({
                        x: 0,
                        y: 0,
                        width: this.width,
                        height: this.height,
                        destWidth: this.width * this.pr,
                        destHeight: this.height * this.pr,
                        canvasId: 'canvas',
                        canvas: this.canvas,
                        fileType: 'png',
                        success: function (t) {
                            uni.redirectTo({
                                url: 'pages/pos/commitmentletter/commitmentletter?base64Path='.concat(
                                    encodeURIComponent(uni.getFileSystemManager().readFileSync(t.tempFilePath, 'base64'))
                                )
                            });
                        }
                    });
                }
            } else {
                uni.showToast({
                    title: '请按字迹书写签名',
                    icon: 'none'
                });
            }
        }
    }
};
</script>
<style>
@import './canvas.css';
</style>
