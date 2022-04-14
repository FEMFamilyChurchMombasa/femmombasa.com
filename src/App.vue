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
    * {
        font-family: config.$font-family;
    }
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: config.color("dark-1");
}

.container {
    width: calc(100% - 2rem);
    max-width: 1300px;
    margin: auto;
}
</style>
