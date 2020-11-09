<template>
   <div class="progress-bar">
      <ProgressItem v-for="step in steps" :key="'step-'+ step.value" :item="step" :isActive="stepActive(step.value)"/>
   </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
