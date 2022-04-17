<template>
    <div class="container">
        <logo-vue></logo-vue>
        <links-vue></links-vue>
    </div>
</template>

<script>
import LogoVue from "./Logo.vue";
import LinksVue from "./Links.vue";

export default {
    components: {
        LogoVue,
        LinksVue
    }
};
</script>

<style lang="scss" scoped>
div {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
