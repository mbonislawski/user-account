<template>
    <div>
        <span class="form-label">Mobile</span>

        <div class="form-inline">
            <div class="form-group form-group__prefix" v-bind:class="{ 'has-error': !validPrefix }">
                <label>
                    <select class="select--line select--with-arrow"
                            :value="prefix"
                            @change="$emit('update:prefix', $event.target.value)">
                        <option v-for="option in prefixesList" :key="option.value" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </label>

                <FormGroupInvalid v-if="!validPrefix" :text="invalidText"/>
            </div>

            <div class="form-group" v-bind:class="{ 'has-error': !validPhone }">
                <label>
                    <input :value="phone"
                           @input="$emit('update:phone', $event.target.value)"
                           type="number" class="input-lg" autocomplete="off"/>
                </label>

                <FormGroupInvalid v-if="!validPhone" :text="invalidText"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
