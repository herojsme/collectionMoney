<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
      <van-image
        width="10rem"
        height="10rem"
        fit="contain"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </view>
  </view>
</template>

<script>
// import vanButton from "../../wxcomponents/vantWeapp/button/index";
export default {
  components: {
    // vanButton,
  },
  data() {
    return {
      title: "真的好人",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
