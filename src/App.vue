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
</style>
