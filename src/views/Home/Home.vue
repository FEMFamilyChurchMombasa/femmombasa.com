<template>
    <hero-section-vue></hero-section-vue>
    <services-links-vue></services-links-vue>
    <weekly-services-vue></weekly-services-vue>
    <location-vue></location-vue>
</template>

<script>
import HeroSectionVue from "./HeroSection/HeroSection.vue";
import ServicesLinksVue from "./ServicesLinksSection/ServicesLinks.vue";
import WeeklyServicesVue from "./WeeklyServices/WeeklyServices.vue";
import LocationVue from "./Location/Location.vue";

export default {
    components: {
        HeroSectionVue,
        ServicesLinksVue,
        WeeklyServicesVue,
        LocationVue
    }
};
</script>

<style lang="scss"></style>
