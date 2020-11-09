<template>
    <BaseButton :variant="variant" :type="type">
        <span>{{ text }}</span>

        <span class="btn__icon">
            <img :src="arrowIconUrl" :alt="text">
        </span>
    </BaseButton>
</template>

<style lang="scss" scoped src="./index.scss"/>

<script lang="ts" src="./index.ts"/>
