<template>
    <BaseStep>
       <StepTitle :text="stepSecondTitle"/>

        <BaseForm @submit="handlerSubmit" action="/">
            <div v-bind:class="{ 'is-loading': isLoading }">
                  <UserNameInput v-model:user-name="userName" v-model:valid-user-name="validUserName"
                                 invalidText="Invalid data"/>

                  <UserPhoneNumber v-model:prefix="prefix" v-model:phone="phone"
                                   v-model:valid-prefix="validPrefix"
                                   v-model:valid-phone="validPhone"
                                   invalidText="Invalid data"/>

                  <YesOrNoQuestion :fieldTitle="'Can you play chess?'"
                                   v-model:question="question" v-model:valid-question="validQuestion"
                                    invalidText="Invalid data"/>

                  <DayOfBirth v-model:birth-day="birthDay"
                              v-model:birth-month="birthMonth"
                              v-model:birth-year="birthYear"
                              v-model:valid-birth="validBirth"
                              invalidText="Invalid data"/>
            </div>

            <div class="xs-center">
                <ButtonWithIconNext type="submit" :text="buttonContinueText" variant="primary"/>
            </div>
        </BaseForm>
   </BaseStep>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
