<template>
    <navbar></navbar>

    <router-view></router-view>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/layout/Navbar.vue";

export default {
    components: {
        RouterView,
        Navbar
    }
};
</script>

<style lang="scss">
body,
html {
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: config.color("dark-1");

    * {
        font-family: config.$font-family;
    }
}

.container {
    width: calc(100% - 2rem);
    max-width: 1300px;
    margin: auto;
}

a {
    text-decoration: none;
    color: config.color("magenta");
    cursor: pointer;

    &:hover {
        color: darken(config.color("magenta"), 10%);
    }
}

</style>
