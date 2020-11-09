<template>
   <div class="box">
      <div class="box__left">
         <BoxLeft :imageBgUrl="boxLeftImageBgUrl" :imageTopUrl="boxLeftImageTopUrl"/>
      </div>

      <div class="box__content">
         <UserAccountStepFirst v-if="activeBoxFirst" @submit-step-first="onSubmitStepFirst"/>

         <UserAccountStepSecond v-if="activeBoxSecond" @submit-step-second="onSubmitStepSecond"/>

         <UserAccountStepThird v-if="activeBoxThird"/>

         <ProgressBar :steps="progressSteps" :activeStep="boxActiveStep"/>
      </div>
   </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
