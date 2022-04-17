<template>
    <section class="container">
        <section-title-vue
            title="Weekly Service"
            icon="bx:bible"
        ></section-title-vue>

        <div id="service-links">
            <service-link-vue
                v-for="service in services"
                :serviceName="service.serviceName"
                :serviceTime="`${service.serviceTimes.weekday} ${service.serviceTimes.from}`"
                @click="goToService(service)"
            ></service-link-vue>
        </div>
    </section>
</template>

<script>
import ServiceLinkVue from "./ServiceLink.vue";
import { Icon } from "@iconify/vue";
import SectionTitleVue from "../../../components/ui/SectionTitle.vue";
import {
    worshipService,
    zoomPrayerService,
    takeOffService,
    openHeavensService
} from "../WeeklyServices/servicesData";

export default {
    components: {
        ServiceLinkVue,
        Icon,
        SectionTitleVue
    },
    data() {
        return {
            services: [
                worshipService,
                zoomPrayerService,
                takeOffService,
                openHeavensService
            ]
        };
    },
    methods: {
        goToService(service){
            let el = document.getElementById(`${service.ref}Section`)
            el.scrollIntoView(true)
        }
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
