<template>
  <view>
    <view class="login_container">
      <scroll-view
        @scroll="scroll"
        @scrolltolower="lower"
        @scrolltoupper="upper"
        :scrollIntoView="toView"
        :scrollTop="scrollTop"
        :scrollY="true"
        :style="'height: ' + scrollHeight + 'px;'"
      >
        <view class="top_descViewBox">
          <text>法人信息</text>
        </view>
        <view>
          <view style="height: 36rpx"></view>
          <view class="class_idTitleBox">
            <text>请上传本人有效期内的身份证照片，进行实名认证</text>
          </view>
          <optionComponent
            @dataChange="dataChange($event, { tagId: 'idCardZm' })"
            id="idCardZm"
            leftDescTitle="正确示例：文字清晰可见"
            :leftbgImageV="idCardImageV"
            :popimageUrl="popidzmUrl"
            rightDescTitle="点击上传身份证正面照片"
            :rightbgImageV="cameraImageV"
          ></optionComponent>
          <optionComponent
            @dataChange="dataChange($event, { tagId: 'idCardZm' })"
            id="idCardZm"
            leftDescTitle="正确示例：文字清晰可见"
            :leftbgImageV="idCardFanMianV"
            :popimageUrl="popidFmUrl"
            rightDescTitle="点击上传身份证反面照片"
            :rightbgImageV="cameraImageV"
          ></optionComponent>
          <view style="height: 36rpx"></view>
        </view>
        <view class="classLineBox"></view>
        <view>
          <van-cell-group>
            <van-field
              :border="false"
              inputAlign="right"
              label="姓名"
              :value="value"
              placeholder="请输入真实姓名"
            ></van-field>
            <van-field
              :border="false"
              inputAlign="right"
              label="身份证号"
              :value="value"
              placeholder="请输入身份证号"
            ></van-field>
            <van-cell :border="false" title="有效期">
              <van-radio-group
                @change="onChange"
                slot="right-icon"
                :value="radio"
              >
                <view class="changeDate_box">
                  <van-radio useIconSlot customClass="radio_custom" name="1">
                    有效期
                    <image
                      slot="icon"
                      :src="radio == 1 ? selectIcon : unselectIcon"
                      style="width: 30rpx; height: 30rpx"
                    ></image>
                  </van-radio>
                  <van-radio useIconSlot customClass="rm" name="2">
                    长期
                    <image
                      slot="icon"
                      :src="radio == 2 ? selectIcon : unselectIcon"
                      style="width: 30rpx; height: 30rpx"
                    ></image>
                  </van-radio>
                </view>
              </van-radio-group>
            </van-cell>
            <van-cell title="">
              <view class="class_timeBox">
                <view @tap="showidCardDateSelect" class="class_stattTime">
                  <text>{{ personStartTimeValue }}</text>
                  <van-icon name="arrow-down"></van-icon>
                </view>
                <text class="class_timeBoxtext">至</text>
                <view @tap="showidCardDateEndSelect" class="class_endTime">
                  <text>{{ personEndTimeValue }}</text>
                  <van-icon name="arrow-down"></van-icon>
                </view>
              </view>
            </van-cell>
          </van-cell-group>
        </view>
      </scroll-view>
      <van-popup
        @close="onClose"
        :closeOnClickOverlay="true"
        position="bottom"
        :show="showStartTime"
      >
        <van-datetime-picker
          @cancel="cancelStartTime"
          @confirm="confirmStartTime"
          :formatter="formatter"
          :minDate="minDate"
          type="date"
          :value="personStartTime"
        ></van-datetime-picker>
      </van-popup>
      <van-popup
        @close="onClose"
        :closeOnClickOverlay="true"
        position="bottom"
        :show="showEndTime"
      >
        <van-datetime-picker
          @cancel="cancelEndTime"
          @confirm="confirmEndTime"
          :formatter="formatter"
          :minDate="minDate"
          type="date"
          :value="personEndTime"
        ></van-datetime-picker>
      </van-popup>
      <van-dialog
        useSlot
        cancelButtonText="取消"
        confirmButtonColor="#EF4034"
        confirmButtonText="继续认证"
        :show="idCardRenzhengShow"
        :showCancelButton="true"
        :showConfirmButton="true"
        title="温馨提示"
      >
        <view style="margin: 80rpx">
          <text style="color: #666666; text-align: center"
            >您的身份证已注册过，是否继续认证？</text
          >
        </view>
      </van-dialog>
      <view class="login_btnBox">
        <view class="loginBindBtn">
          <van-button
            round
            @tap.native="clickCommit"
            customClass="confirm_button"
            type="info"
            >提交</van-button
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
var e;
if ((e = require("@wc/vantWeapp/dialog/dialog"))) {
  e.__esModule;
}
var app = getApp();
export default {
  data() {
    return {
      idCardImageV: "https://www.krppay.com/login_module_idCard.png",
      idCardFanMianV: "https://www.krppay.com/login_module_idCardFanMian.png",
      cameraImageV: "https://www.krppay.com/login_module_camera.png",
      bankCardImageV: "https://www.krppay.com/login_module_bgbank.png",
      selectIcon: "/static/assets/image/login/select.png",
      unselectIcon: "/static/assets/image/login/unselect.png",
      popidFmUrl: "https://www.krppay.com/login_module_popidfm.png",
      popidzmUrl: "https://www.krppay.com/login_module_popidzm.png",
      radio: "1",
      personStartTimeValue: "开始时间",
      personEndTimeValue: "结束时间",
      personStartTime: new Date(1970, 0, 1).getTime(),
      personEndTime: new Date(1770, 0, 1).getTime(),
      minDate: new Date(1970, 0, 1).getTime(),

      formatter: function (e, t) {
        return "year" === e
          ? "".concat(t, "年")
          : "month" === e
          ? "".concat(t, "月")
          : t;
      },

      showStartTime: false,
      showEndTime: false,
      bankCardnumber: "xx",
      scrollHeight:
        app.globalData.windowHeight - app.globalData.navhegiht - 100,
      idCardRenzhengShow: false,
      toView: "",
      scrollTop: 0,
      value: "",
    };
  },
  onLoad: function (e) {},
  onReady: function () {},
  onShow: function () {
    console.log(" app.globalData.customheight = ", app.globalData.windowHeight);
    console.log(" app.globalData.navhegiht = ", app.globalData.navhegiht);
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  methods: {
    dataChange: function (e, _dataset) {
      /* ---处理dataset begin--- */
      this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      console.log("监听xxx");
      console.log("点击了相机xxxxx", e);
    },

    onChange: function (e) {
      console.log(e);
      this.setData({
        radio: e.detail,
      });
    },

    clickRow: function (e) {
      var t = e.target.dataset.rowtitle;
      console.log(t);
    },

    showidCardDateSelect: function () {
      this.setData({
        showStartTime: true,
        showEndTime: false,
      });
      console.log("弹出身份证开始时间弹窗");
    },

    showidCardDateEndSelect: function () {
      this.setData({
        showStartTime: false,
        showEndTime: true,
      });
      console.log("弹出身份证到期时间弹窗");
    },

    confirmStartTime: function (e) {
      console.log("开始时间点击了确定 =", e.detail);
      var t = this.getDateString(e.detail);
      console.log("开始selectTime = ", t);
      this.setData({
        showStartTime: false,
        personStartTimeValue: t,
      });
    },

    cancelStartTime: function () {
      this.setData({
        showStartTime: false,
      });
    },

    confirmEndTime: function (e) {
      console.log("截止时间点击了确定 =", e.detail);
      var t = this.getDateString(e.detail);
      console.log("selectTime = ", t);
      this.setData({
        showEndTime: false,
        personEndTimeValue: t,
      });
    },

    cancelEndTime: function () {
      this.setData({
        showEndTime: false,
      });
    },

    clickCommit: function () {
      this.setData({
        idCardRenzhengShow: true,
      });
      uni.navigateTo({
        url: "/infoChange/userInfoChange/userLiving/userLiving",
      });
    },

    getDateString: function (e) {
      if ("开始时间" == e || "结束时间" == e || "长期" == e) {
        return e;
      }
      console.log("stamp", parseInt(e));
      var t = new Date(parseInt(e));
      var n =
        t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1;
      var o = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
      return t.getFullYear() + "-" + n + "-" + o;
    },

    scroll() {
      console.log("占位：函数 scroll 未声明");
    },

    lower() {
      console.log("占位：函数 lower 未声明");
    },

    upper() {
      console.log("占位：函数 upper 未声明");
    },

    onClose() {
      console.log("占位：函数 onClose 未声明");
    },
  },
};
</script>
<style>
@import "./index.css";
</style>
