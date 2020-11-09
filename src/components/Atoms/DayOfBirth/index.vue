<template>
    <div>
        <span class="form-label">Date of birth</span>

        <div class="form-group" v-bind:class="{ 'has-error': !validBirth }">
            <div class="form-group__inline pt-xs form-group__birth-date">
                <label>
                    <select class="select--box select-day"
                            :value="birthDay"
                            @change="onChangeBirthDay">
                        <option  v-for="day in days" :key="'selected-day-' + day.value" v-bind:value="day.value">
                            {{ day.value }}
                        </option>
                    </select>
                </label>

                <span class="form-group__separator"></span>

                <label>
                    <select class="select--box select--with-arrow select-month is-mobile"
                            :value="birthMonth"
                            @change="onChangeBirthMonth">
                        <option v-for="month in months" :key="'selected-month-' + month.value" v-bind:value="month.value">
                            {{ month.value }}
                        </option>
                    </select>

                    <select class="select--box select--with-arrow select-month is-desktop"
                            :value="birthMonth"
                            @change="onChangeBirthMonth">
                        <option v-for="month in months" :key="'selected-month-' + month.value" v-bind:value="month.value">
                            {{ month.text }}
                        </option>
                    </select>
                </label>

                <span class="form-group__separator"></span>

                <label>
                    <select class="select--box select-year"
                            :value="birthYear"
                            @change="onChangeBirthYear">
                        <option v-for="year in years" :key="'selected-year-' + year.value" v-bind:value="year.value">
                            {{ year.value }}
                        </option>
                    </select>
                </label>
            </div>

            <FormGroupInvalid v-if="!validBirth" :text="invalidText"/>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./index.scss"/>

<script lang="ts" src="./index.ts"/>
