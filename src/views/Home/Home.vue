<template>
    <hero-section-vue></hero-section-vue>
    <services-links-vue id="servicesSection"></services-links-vue>
    <weekly-services-vue></weekly-services-vue>
    <location-vue></location-vue>
    <faq-section-vue id="faqsSection"></faq-section-vue>
    <social-media-section-vue></social-media-section-vue>

</template>

<script>
import HeroSectionVue from "./HeroSection/HeroSection.vue";
import ServicesLinksVue from "./ServicesLinksSection/ServicesLinks.vue";
import WeeklyServicesVue from "./WeeklyServices/WeeklyServices.vue";
import LocationVue from "./Location/Location.vue";
import FaqSectionVue from "./FaqSection/FaqSection.vue";
import SocialMediaSectionVue from "./SocialMediaSection/SocialMediaSection.vue";

export default {
    components: {
        HeroSectionVue,
        ServicesLinksVue,
        WeeklyServicesVue,
        LocationVue,
        FaqSectionVue,
        SocialMediaSectionVue
    }
};
</script>

<style lang="scss"></style>
