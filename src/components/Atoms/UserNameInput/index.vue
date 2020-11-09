<template>
    <div class="form-group" v-bind:class="{ 'has-error': !validUserName }">
        <label>
            <span class="form-label">Your name</span>

            <input class="input-lg" type="text"
                    :value="userName"
                    @input="$emit('update:userName', $event.target.value)">
        </label>

        <FormGroupInvalid v-if="!validUserName" :text="invalidText"/>
    </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
