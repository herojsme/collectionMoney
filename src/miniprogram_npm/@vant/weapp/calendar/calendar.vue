<template>
    <view class="van-calendar">
        <header @click-subtitle="onClickSubtitle" :firstDayOfWeek="firstDayOfWeek" :showSubtitle="showSubtitle" :showTitle="showTitle" :subtitle="subtitle" :title="title">
            <slot name="title" slot="title"></slot>
        </header>
        <scroll-view scrollY class="van-calendar__body" :scrollIntoView="scrollIntoView">
            <month
                :allowSameDay="allowSameDay"
                @click="onClickDay"
                class="month"
                :color="color"
                :currentDate="currentDate"
                :data-date="item"
                :date="item"
                :firstDayOfWeek="firstDayOfWeek"
                :formatter="formatter"
                :id="'month' + index"
                :maxDate="maxDate"
                :minDate="minDate"
                :rowHeight="rowHeight"
                :showMark="showMark"
                :showMonthTitle="index !== 0 || !showSubtitle"
                :showSubtitle="showSubtitle"
                :type="type"
                v-for="(item, index) in computed.getMonths(minDate, maxDate)"
                :key="index"
            ></month>
        </scroll-view>
        <view :class="utils.bem('calendar__footer', { safeAreaInsetBottom: safeAreaInsetBottom })">
            <slot name="footer"></slot>
        </view>
        <view :class="utils.bem('calendar__footer', { safeAreaInsetBottom: safeAreaInsetBottom })">
            <van-button
                block
                round
                @click="onConfirm"
                :color="color"
                customClass="van-calendar__confirm"
                :disabled="computed.getButtonDisabled(type, currentDate)"
                nativeType="text"
                type="danger"
                v-if="showConfirm"
            >
                {{ computed.getButtonDisabled(type, currentDate) ? confirmDisabledText : confirmText }}
            </van-button>
        </view>
    </view>
</template>

<style>
@import './calendar.css';
</style>
