<template>
   <BaseStep>
       <StepTitle :text="stepTitle" className="mb-30"/>

       <StaticListWithText />

       <ItemCenter>
           <ButtonWithIconNext :text="buttonContinueText" type="button" variant="primary" @click="handleSubmitStep"/>
       </ItemCenter>
   </BaseStep>
</template>

<script lang="ts" src="./index.ts"/>
