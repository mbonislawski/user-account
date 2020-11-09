<template>
   <BaseStep>
       <StepTitle :text="stepTitle" className="mb-30"/>

       <StaticListWithText />

       <ItemCenter>
           <ButtonWithIconNext :text="buttonContinueText" type="button" variant="primary" @click="handleSubmitStep"/>
       </ItemCenter>
   </BaseStep>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
