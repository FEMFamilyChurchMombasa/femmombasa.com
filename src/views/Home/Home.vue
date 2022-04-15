<template>
<hero-section-vue></hero-section-vue>
<services-links-vue></services-links-vue>
</template>

<script>
import HeroSectionVue from "./HeroSection/HeroSection.vue";
import ServicesLinksVue from "./ServicesLinks/ServicesLinks.vue";

export default {
    components: {
        HeroSectionVue,
        ServicesLinksVue
    }
};
</script>

<style lang="scss">
</style>
