<template>
  <view style="height: 100%">
    <view class="container">
      <view class="header_box">
        <view class="home_header">
          <view class="header_txt">
            <view class="txt_desc">
              <image
                class="img_rmb"
                src="/static/assets/image/home_rmb_icon.png"
              ></image>
              邀您快乐刷刷刷 无忧支付
            </view>
            <view class="txt_title">
              <text>收款呗</text>
              ·支付
            </view>
          </view>
        </view>
      </view>
      <view class="home_notice">
        <view class="messge">
          <swiper
            :autoplay="true"
            :duration="500"
            :indicatorDots="false"
            :interval="5000"
            style="height: 120rpx; width: auto"
            :vertical="true"
          >
            <view v-if="messgeArr.length > 0">
              <swiper-item v-for="(item, index) in messgeArr" :key="index">
                <view class="messgeTitle">
                  <view
                    class="notice_read_stauts"
                    v-if="item.isRead == 'unread'"
                  ></view>
                  {{ item.title }}
                </view>

                <view class="messgeTitleBox">
                  <view class="swiper-item">{{ item.content }}</view>
                </view>
              </swiper-item>
            </view>
            <view v-else>
              <swiper-item>
                <view class="messgeTitle">消息标题</view>
                <view class="messgeTitleBox">
                  <view class="swiper-item">暂无消息</view>
                </view>
              </swiper-item>
            </view>
          </swiper>
        </view>
        <view @tap="clickMassge" class="look">查看</view>
      </view>
      <view class="cust_box">
        <view class="cust_title">商户管理</view>
        <view class="shareBox" v-if="singShare">
          <view @tap="clickYhq" class="yhqbox">
            <view>
              <view class="youhui">
                领·优惠
                <van-icon
                  class="arrow_icon"
                  color="#A1A1A1"
                  name="arrow"
                  size="24rpx"
                ></van-icon>
              </view>
              <view class="desc">提现免提现费 名额放送中</view>
            </view>
            <view class="rightImg">
              <view class="desc">优惠入口</view>
            </view>
          </view>
          <view @tap="eventShareHint" class="yhqbox">
            <view>
              <view class="youhui">
                趣·分享
                <van-icon
                  class="arrow_icon"
                  color="#A1A1A1"
                  name="arrow"
                  size="24rpx"
                ></van-icon>
              </view>
              <view class="desc">邀请好友 一起加入收款呗</view>
            </view>
            <view
              class="rightImg"
              style="
                background-image: url(https://www.krppay.com/skb_assets/home_icon_share.png);
              "
            >
              <view class="desc">分享入口</view>
            </view>
            <button
              openType="share"
              style="
                width: 100%;
                height: 120rpx;
                position: absolute;
                top: 0;
                background-color: transparent;
              "
              v-if="bindFlag && chargeFlag"
            ></button>
          </view>
        </view>
        <view @tap="eventShareHint" class="singeshare" v-if="!singShare">
          <image
            mode="aspectFill"
            src="https://www.krppay.com/skb_assets/home_icon_singeshare.png"
          ></image>
          <button
            openType="share"
            style="
              width: 100%;
              height: 120rpx;
              position: absolute;
              top: 0;
              background-color: transparent;
            "
            v-if="bindFlag && chargeFlag"
          ></button>
        </view>
        <scroll-view
          @scroll="scroll"
          @scrolltolower="scrollright"
          @scrolltoupper="scrollowLeft"
          class="scroll-view_H"
          :scrollX="true"
          :showScrollbar="false"
          style="width: 100%"
        >
          <view
            class="optionList"
            :style="
              'width: ' + (optionList2.length > 4 ? '200%' : '100%') + ';'
            "
          >
            <view
              @tap="clickOption"
              class="option"
              :data-item="item"
              :style="'width: ' + scrollWidth + 'px;'"
              v-for="(item, index) in optionList2"
              :key="index"
            >
              <view class="optionimg">
                <image :src="item.img"></image>
              </view>

              {{ item.desc }}
            </view>
          </view>
        </scroll-view>
        <view class="page" v-if="optionList2.length > 4">
          <image
            :src="
              optionFirstPage == true
                ? '/static/assets/image/home_icon_left.png'
                : '/static/assets/image/home_icon_right.png'
            "
          ></image>
        </view>
      </view>
      <view class="hot_box">
        <view class="cust_title" style="margin-top: 70rpx">热门活动</view>
        <swiper
          :autoplay="true"
          class="index_banner_swiper"
          :indicatorDots="true"
          v-if="activityDataList.length > 0"
        >
          <swiper-item
            v-for="(bannerItem, index) in activityDataList"
            :key="index"
          >
            <van-image
              @tap.native="bannerItemEvent($event, { url: bannerItem.path })"
              class="index_banner_item_img"
              :data-url="bannerItem.path"
              fit="cover"
              height="169rpx"
              radius="12rpx"
              :src="bannerItem.ossImgUrl"
              width="100%"
            ></van-image>
          </swiper-item>
        </swiper>
        <view class="adimg" v-else>
          <image
            src="https://www.krppay.com/skb_assets/home_ad_icon.png"
          ></image>
        </view>
      </view>
      <view
        style="background-color: rgb(255, 238, 237); height: 40rpx; width: 100%"
      ></view>
    </view>
    <van-popup
      customStyle="background-color: transparent;"
      :show="showNoticeImgDialog"
    >
      <view class="pop_box">
        <image
          @tap="closeImgPop"
          mode="aspectFit"
          src="https://www.krppay.com/skb_assets/home_bgsyste_close.png"
          style="width: 60rpx; height: 60rpx; align-self: flex-end"
        ></image>
        <image
          mode="widthFix"
          :src="alertNoticeBean.imagURl"
          style="padding: 20rpx; width: 600rpx"
        ></image>
        <van-checkbox
          @change="onCheckImgPop"
          checkedColor="#222124"
          customClass="img_check"
          iconSize="38rpx"
          :value="notPopPrompt"
          >不再提示</van-checkbox
        >
      </view>
    </van-popup>
    <van-popup
      customStyle="background-color: transparent;"
      :show="showNoticeContentDialog"
    >
      <view class="pop_box">
        <view class="pop_content_box">
          <image
            @tap="closeContentPop"
            mode="aspectFit"
            src="https://www.krppay.com/skb_assets/home_bgsyste_close.png"
            style="width: 60rpx; height: 60rpx; align-self: flex-end"
          ></image>
          <image
            mode="aspectFit"
            src="https://www.krppay.com/skb_assets/home_bgsystem_messge.png"
            style="align-items: center; width: 272rpx; height: 198rpx"
          ></image>
          <view class="box_title">{{ alertNoticeBean.title }}</view>
          <scroll-view :scrollY="true" :style="'height: ' + 200 + 'px;'">
            <view class="box_content">{{ alertNoticeBean.content }}</view>
          </scroll-view>
          <view @tap="closeContentPop" class="box_know">知道啦</view>
        </view>
        <van-checkbox
          @change="onCheckContentPop"
          checkedColor="#222124"
          customClass="img_check"
          iconSize="38rpx"
          :value="notPopContentPrompt"
          >不再提示</van-checkbox
        >
      </view>
    </van-popup>
  </view>
</template>

<script>
// import vanIcon from '@wc/vantWeapp/icon/index';
// import vanPopup from '@wc/vantWeapp/popup/index';
// import vanCheckbox from '@wc/vantWeapp/checkbox/index';
// import vanImage from '@wc/vantWeapp/image/index';
var t = require("@api/api").API;
import { API } from "@api/api";

console.log("API", API);
var app = getApp();
var o = require("@api/request").WEB_BASE_URL;
export default {
  // components: {
  //     vanIcon,
  //     vanPopup,
  //     vanCheckbox,
  //     vanImage
  // },
  data() {
    return {
      scrollWidth: 0.25 * app.globalData.windowWidth,
      optionFirstPage: true,
      messgeArr: [],
      activityDataList: [],
      showNoticeContentDialog: false,
      showNoticeImgDialog: false,
      bindFlag: false,
      chargeFlag: false,
      singShare: false,
      isLoginStatus: false,
      custInfo: {},

      optionList: [
        {
          img: "https://www.krppay.com/skb_assets/fast_arrival_icon.png",
          desc: "快速到账",
          show: false,
          url: "pages/infoChange/debitCard/commit/commit",
        },
        {
          img: "https://www.krppay.com/skb_assets/home_option_jiesuan.png",
          desc: "结算信息",
          show: true,
          url: "pages/infoChange/jieSuanChange/jieSuanChange",
        },
        {
          img: "https://www.krppay.com/skb_assets/home_option_hangye.png",
          desc: "行业信息",
          show: true,
          url: "pages/infoChange/industryType/index/index",
        },
        {
          img: "https://www.krppay.com/skb_assets/home_option_address.png",
          desc: "地址信息",
          show: true,
          url: "pages/infoChange/addressFix/address/address",
        },
        {
          img: "https://www.krppay.com/skb_assets/home_icon_acconttype.png",
          desc: "到账方式",
          show: false,
          url: "pages/infoChange/mergeAccont/mergeAccontFix/mergeAccontFix",
        },
        {
          img: "https://www.krppay.com/skb_assets/home_option_fenshi.png",
          desc: "分时结算",
          show: false,
          url: "pages/infoChange/timeSettlement/timeSettlement",
        },
      ],

      optionList2: [],
      notPopPrompt: "",
      notPopContentPrompt: "",

      alertNoticeBean: {
        imagURl: "",
        title: "",
        content: "",
      },

      isShowsettleType: "",
      isShowArrivalMethodStatus: "",

      bannerItem: {
        path: "",
        ossImgUrl: "",
      },
    };
  },
  onLoad: function (t) {
    this.updateListState("", false);
    uni.hideShareMenu({
      menus: ["shareAppMessage", "shareTimeline"],
    });
  },
  onReady: function () {},
  onShow: function () {
    var that = this;
    t.queryCustAllInfo().then(function (t) {
      var o = t.isLoginStatus;
      console.log("islogin =", o);
      if (1 == o) {
        that.queryCustAllInfo();
        that.queryCustHomeNotice();
        that.queryCustHomeBanner();
        that.queryMiniPremissions();
        that.queryEntrance();
      } else {
        console.log("未登录不做处理");
      }
      that.setData({
        isLoginStatus: o,
      });
    });
  },
  onShareAppMessage: function () {
    console.log(this.custInfo);
    return {
      title: "收款呗邀请您开启便捷收款",
      path: "pages/login/accontRegister/accontRegister?inviterCode=".concat(
        this.custInfo.inviterCode
      ),
      imageUrl: "/static/assets/image/invite_cust.png",
      success: function (t) {
        console.log(t);
        console.log("小程序转发成功");
      },
      fail: function (t) {
        console.log(t);
        console.log("小程序转发失败");
      },
    };
  },
  methods: {
    scrollowLeft: function () {
      console.log("触发左边");
      this.setData({
        optionFirstPage: true,
      });
    },

    scrollright: function () {
      console.log("触发右边");
      this.setData({
        optionFirstPage: false,
      });
    },

    clickOption: function (t) {
      if (0 == this.isLoginStatus) {
        uni.navigateTo({
          url: "pages/login/index/index",
        });
        return true;
      }
      this.isLimitNextStep() ||
        uni.navigateTo({
          url: t.currentTarget.dataset.item.url,
        });
    },

    clickMassge: function () {
      if (0 == this.isLoginStatus) {
        uni.navigateTo({
          url: "pages/login/index/index",
        });
        return true;
      }
      uni.navigateTo({
        url: "pages/notice/noticeList/noticeList",
      });
    },

    clickYhq: function () {
      if (0 == this.isLoginStatus) {
        uni.navigateTo({
          url: "pages/login/index/index",
        });
        return true;
      }
      this.isLimitNextStep() ||
        uni.getBackgroundFetchToken({
          complete: function (t) {
            console.log("登录的账号 = ", t.token);
            var e = t.token;
            uni.navigateTo({
              url: "/toolsBox/webview/webview?url=".concat(
                encodeURIComponent(
                  o + "withdrawalFeeCoupon?token=" + e + "&source=WLP"
                )
              ),
            });
          },
        });
    },

    eventShareHint: function () {
      if (0 == this.isLoginStatus) {
        uni.navigateTo({
          url: "pages/login/index/index",
        });
        return true;
      }
      this.isLimitNextStep();
    },

    closeImgPop: function () {
      this.setData({
        showNoticeImgDialog: false,
      });
    },

    onCheckImgPop: function (t) {
      this.setData({
        notPopPrompt: t.detail,
      });
    },

    closeContentPop: function () {
      this.setData({
        showNoticeContentDialog: false,
      });
    },

    onCheckContentPop: function (t) {
      this.setData({
        notPopContentPrompt: t.detail,
      });
    },

    queryEntrance: function () {
      var that = this;
      t.queryEntrance().then(function (t) {
        if (200 == t.code) {
          that.updateListState(
            "快速到账",
            "TRUE" == t.object.debitCardT0Privilege
          );
        }
      });
    },

    isLimitNextStep: function () {
      return false;
    },

    bannerItemEvent: function (t, _dataset) {
      /* ---处理dataset begin--- */
      this.handleDataset(t, _dataset);
      /* ---处理dataset end--- */
      if (0 == this.isLoginStatus) {
        uni.navigateTo({
          url: "pages/login/index/index",
        });
        return true;
      }
      var e = t.currentTarget.dataset.url;
      console.log("热门活动轮播图跳转地址->" + e);
      this.isLimitNextStep() ||
        (e &&
          uni.navigateTo({
            url: "/toolsBox/webview/webview?url=".concat(encodeURIComponent(e)),
          }));
    },

    queryCustHomeNotice: function () {
      var that = this;
      var o = this;
      t.queryCustHomeNotice({
        pageNo: 1,
        pageSize: 10,
      }).then(function (t) {
        if (200 == t.code) {
          var i = t.object.list.find(function (t) {
            return "1" === t.isPop;
          });
          if (i && i.id != uni.getStorageSync("noticeId")) {
            if ("IMG" == i.contentType) {
              o.setData({
                showNoticeImgDialog: true,
              });
            } else {
              o.setData({
                showNoticeContentDialog: true,
              });
            }
            o.setData({
              alertNoticeBean: i,
            });
            uni.setStorage({
              key: "noticeId",
              data: i.id,
            });
          }
          if (t.object.length > 3) {
            that.setData({
              messgeArr: t.object.list.slice(0, 3),
            });
          } else {
            that.setData({
              messgeArr: t.object.list,
            });
          }
        } else {
          uni.showToast({
            title: t.message,
            icon: "none",
          });
        }
      });
    },

    queryMiniPremissions: function () {
      var that = this;
      t.queryMiniPremissions().then(function (t) {
        if (200 == t.code) {
          that.setData({
            bindFlag: t.object.bindFlag || false,
            chargeFlag: t.object.chargeFlag || false,
          });
        }
      });
    },

    queryShowYhq: function () {
      var that = this;
      t.queryCustShowYhq({
        customerNo: this.custInfo.customerNo,
      }).then(function (t) {
        console.log("yhq = res =", t);
        if (200 == t.code) {
          that.setData({
            singShare: t.object.exist,
          });
        }
      });
    },

    queryCustAllInfo: function () {
      var that = this;
      t.queryCustAllInfo().then(function (t) {
        console.log("custInfo = ", t.object);
        if (200 == t.code) {
          getApp().globalData.custInfo = t.object;
          var o = "TRUE" == t.object.arrivalMethodStatus;
          var i = "TRUE" == t.object.settleType;
          that.updateListState("到账方式", o);
          that.updateListState("分时结算", i);
          that.setData({
            isShowsettleType: i,
            isShowArrivalMethodStatus: o,
            custInfo: t.object,
          });
          that.queryShowYhq();
        }
      });
    },

    updateListState: function (t, e) {
      var o = this.optionList.filter(function (e) {
        return e.desc == t;
      });
      if (o.length > 0) {
        o[0].show = e;
      }
      var i = this.optionList.filter(function (t) {
        return 1 == t.show;
      });
      this.setData({
        optionList2: i,
      });
    },

    queryCustHomeBanner: function () {
      var that = this;
      t.queryCustHomeBanner({
        pageNo: 1,
        pageSize: 10,
        position: "RMHD",
        status: true,
      }).then(function (t) {
        if (200 == t.code) {
          var o = [];
          t.object.forEach(function (t) {
            if (t.imgUrl) {
              o.push(t);
            }
          });
          that.setData({
            activityDataList: o,
          });
        } else {
          uni.showToast({
            title: t.message,
            icon: "none",
          });
        }
      });
    },

    scroll() {
      console.log("占位：函数 scroll 未声明");
    },
  },
};
</script>
<style>
@import "./home.css";
</style>
