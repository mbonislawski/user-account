<template>
    <button class="btn" :type="type" v-bind:class="variantClassName">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped src="./index.scss"/>

<script lang="ts" src="./index.ts"/>
