<template>
    <section id="locationSection" class="container">
        <section-title-vue title="Location" icon="fa6-solid:location-dot"></section-title-vue>
        <description-vue></description-vue>
        <footer id="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.219437077023!2d39.651986360549934!3d-4.0601684293078915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ee16726b3bbeb6d!2sFEM%20Family%20Church%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1650147027609!5m2!1sen!2ske"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </footer>
    </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import DescriptionVue from "./Description.vue";
import SectionTitleVue from "../../../components/ui/SectionTitle.vue";

export default {
    components: {
        Icon,
        DescriptionVue,
        SectionTitleVue
    }
};
</script>

<style lang="scss" scoped>
section.container {
    margin-bottom: 3rem;
    footer#map {
        height: 400px;
        background-color: config.color("light-2");
        overflow: hidden;
        border-radius: 1rem;

        iframe {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
