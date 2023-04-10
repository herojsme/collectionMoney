<template>
    <view class="van-picker__toolbar toolbar-class" v-if="showToolbar">
        <view @tap="emit" class="van-picker__cancel" data-type="cancel" hoverClass="van-picker__cancel--hover" hoverStayTime="70">{{ cancelButtonText }}</view>
        <view class="van-picker__title van-ellipsis" v-if="title">{{ title }}</view>
        <view @tap="emit" class="van-picker__confirm" data-type="confirm" hoverClass="van-picker__confirm--hover" hoverStayTime="70">{{ confirmButtonText }}</view>
    </view>
</template>

<style>
@import './toolbar.css';
</style>
