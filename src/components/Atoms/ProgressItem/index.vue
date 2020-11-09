<template>
   <div v-bind:class="{'active': isActive}" class="progress-item">

      <span>{{ stepValue }}</span>

      <span v-if="isActive">{{ item.text }}</span>
   </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
