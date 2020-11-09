<template>
    <div>
        <span class="form-label">{{ fieldTitle }}</span>

        <div class="form-group" v-bind:class="{ 'has-error': !validQuestion }">
            <div class="form-group__inline pt-xs">
                <label class="form-group__radio form-group__radio--box"
                       v-bind:class="{'is-checked': question == '1'}">
                    <input @input="$emit('update:question', $event.target.value)"
                           type="radio"
                           name="yes_or_no_question" value="1"/>

                    <span class="label__value">Yes</span>

                    <span class="label__box">
                        <span class="box__dot"></span>
                    </span>
                </label>

                <label class="form-group__radio form-group__radio--box"
                       v-bind:class="{'is-checked': question == '0'}">
                    <input @input="$emit('update:question', $event.target.value)"
                           type="radio"
                           name="yes_or_no_question" value="0"/>

                    <span class="label__value">No</span>

                    <span class="label__box">
                        <span class="box__dot"></span>
                    </span>
                </label>
            </div>

            <FormGroupInvalid v-if="!validQuestion" :text="invalidText"/>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
