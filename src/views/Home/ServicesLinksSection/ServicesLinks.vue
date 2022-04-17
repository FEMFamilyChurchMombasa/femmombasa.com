<template>
    <section class="container">
        <!-- <h2 class="heading-1">
            <icon class="text-magenta" icon="bx:bible" />
            <span>Weekly Services</span>
        </h2> -->

        <section-title-vue title="Weekly Service" icon="bx:bible"></section-title-vue>

        <div id="service-links">
            <service-link-vue
                serviceName="Worship Service"
                serviceTime="Sun 9:30 AM"
            ></service-link-vue>

            <service-link-vue
                serviceName="Zoom Prayer Service"
                serviceTime="Tue 7:45 PM"
            ></service-link-vue>

            <service-link-vue
                serviceName="Take-Off Lunch Hour Service"
                serviceTime="Wed 12:45 PM"
            ></service-link-vue>

            <service-link-vue
                serviceName="Open Heavens Prayer Service"
                serviceTime="Fri 5:30 PM"
            ></service-link-vue>
        </div>
    </section>
</template>

<script>
import ServiceLinkVue from "./ServiceLink.vue";
import { Icon } from "@iconify/vue";
import SectionTitleVue from "../../../components/ui/SectionTitle.vue";

export default {
    components: {
        ServiceLinkVue,
        Icon,
        SectionTitleVue
    }
};
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 3rem;
    
    h2 {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        @include config.breakpoint("sm") {
            margin-bottom: 2rem;
        }
    }
}
</style>
