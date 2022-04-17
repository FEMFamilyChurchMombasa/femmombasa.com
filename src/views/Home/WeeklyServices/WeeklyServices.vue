<template>
    <div id="weekly-services" class="container margin-bottom-3">
        <service-vue v-bind="worshipService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="worshipService.ref"
                    src="/src/assets/worship_service.webp"
                    :alt="worshipService.ref + ' image'"
                />
            </template>
        </service-vue>

        <service-vue v-bind="zoomPrayerService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="zoomPrayerService.ref"
                    src="/src/assets/zoom.webp"
                    :alt="worshipService.ref + ' image'"
                />
            </template>
            <template #button>
                <button :id="zoomPrayerService.ref" class="btn-blue">
                    <icon icon="bxl:zoom" height="24" />
                    <span>Go to Zoom</span>
                </button>
            </template>
        </service-vue>

        <service-vue v-bind="takeOffService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="takeOffService.ref"
                    src="/src/assets/take_off_lunch_hour_service.webp"
                    :alt="takeOffService.ref + ' image'"
                />
            </template>
        </service-vue>

        <service-vue v-bind="openHeavensService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="openHeavensService.ref"
                    src="/src/assets/open_heaves_prayer_service.webp"
                    :alt="openHeavensService.ref + ' image'"
                />
            </template>
        </service-vue>
    </div>
</template>

<script>
import ServiceVue from "./SingleService/Service.vue";
import {
    worshipService,
    zoomPrayerService,
    takeOffService,
    openHeavensService
} from "./servicesData";
import { Icon } from "@iconify/vue";

export default {
    components: {
        ServiceVue,
        Icon
    },
    data() {
        return {
            worshipService,
            zoomPrayerService,
            takeOffService,
            openHeavensService
        };
    }
};
</script>

<style lang="scss" scoped>
img.serviceImage {
    object-fit: cover;
    height: 100%;
    width: 100%;

    &#worshipService {
        object-position: 90%;
    }
}
</style>
