<template>
    <view style="height: 100%">
        <textarea
            :adjustPosition="adjustPosition"
            :autoFocus="autoFocus"
            :autoHeight="!!autosize"
            @blur="onBlur"
            @confirm="onConfirm"
            @focus="onFocus"
            @input="onInput"
            @keyboardheightchange="onKeyboardHeightChange"
            @linechange="onLineChange"
            @tap="onClickInput"
            :class="utils.bem('field__control', [inputAlign, type, { disabled: disabled, error: error }]) + ' input-class'"
            :cursor="cursor"
            :cursorSpacing="cursorSpacing"
            :disableDefaultPadding="disableDefaultPadding"
            :disabled="disabled || readonly"
            :fixed="fixed"
            :focus="focus"
            :holdKeyboard="holdKeyboard"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :placeholderClass="utils.bem('field__placeholder', { error: error, disabled: disabled })"
            :placeholderStyle="placeholderStyle"
            :selectionEnd="selectionEnd"
            :selectionStart="selectionStart"
            :showConfirmBar="showConfirmBar"
            :style="computed.inputStyle(autosize)"
            :value="innerValue"
        ></textarea>
    </view>
</template>

<style>
@import './textarea.css';
</style>
