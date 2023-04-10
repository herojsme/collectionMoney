<template>
    <view style="height: 100%">
        <input
            :adjustPosition="adjustPosition"
            :alwaysEmbed="alwaysEmbed"
            :autoFocus="autoFocus"
            @blur="onBlur"
            @confirm="onConfirm"
            @focus="onFocus"
            @input="onInput"
            @keyboardheightchange="onKeyboardHeightChange"
            @tap="onClickInput"
            :class="utils.bem('field__control', [inputAlign, { disabled: disabled, error: error }]) + ' input-class'"
            :confirmHold="confirmHold"
            :confirmType="confirmType"
            :cursor="cursor"
            :cursorSpacing="cursorSpacing"
            :disabled="disabled || readonly"
            :focus="focus"
            :holdKeyboard="holdKeyboard"
            :maxlength="maxlength"
            :password="password || type === 'password'"
            :placeholder="placeholder"
            :placeholderClass="utils.bem('field__placeholder', { error: error })"
            :placeholderStyle="placeholderStyle"
            :selectionEnd="selectionEnd"
            :selectionStart="selectionStart"
            :type="type"
            :value="innerValue"
        />
    </view>
</template>

<style>
@import './input.css';
</style>
