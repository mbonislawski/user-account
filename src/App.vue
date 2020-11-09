<template>
    <router-view />
</template>

<style lang="scss">
    @import "assets/styles/main";

    * {
        &,
        &::before,
        &::after {
            box-sizing: border-box;
        }
    }

    html,
    body {
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
        border: 0;
        font-size: 100%;
        margin: 0;
        outline: 0;
        padding: 0;
        vertical-align: baseline;
        line-height: normal;

        body {
            overflow-x: hidden;
            position: relative;
        }
    }
</style>
