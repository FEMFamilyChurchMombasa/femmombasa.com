<template>
    <header class="container">
        <logo-vue></logo-vue>
        <links-vue></links-vue>
    </header>
</template>

<script>
import LogoVue from "./Logo.vue";
import LinksVue from "./Links.vue";

export default {
    name: "Navbar",
    components: {
        LogoVue,
        LinksVue
    }
};
</script>

<style lang="scss" scoped>
header {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
