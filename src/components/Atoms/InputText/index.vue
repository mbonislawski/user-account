<template>
    <div class="form-group" v-bind:class="{ 'has-error': !isValid }">
        <label>
            <span class="form-label">{{ label }}</span>

            <input class="input-lg" :type="type"
                    :value="value"
                    @input="$emit('update:inputText', $event.target.value)">
        </label>

        <FormGroupInvalid v-if="!isValid" :text="invalidText"/>
    </div>
</template>

<style lang="scss" src="./index.scss" scoped/>

<script lang="ts" src="./index.ts"/>
