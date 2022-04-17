<template>
    <div id="weekly-services" class="container margin-bottom-3">
        <service-vue :id="worshipService.ref" v-bind="worshipService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="worshipService.ref"
                    src="../../../assets/dad_preaching.webp"
                    :alt="worshipService.ref + ' image'"
                />
            </template>
        </service-vue>

        <service-vue :id="zoomPrayerService.ref" v-bind="zoomPrayerService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="zoomPrayerService.ref"
                    src="../../../assets/worship_service.webp"
                    :alt="worshipService.ref + ' image'"
                />
            </template>
            <template #button>
                <a target="_blank" href="https://us02web.zoom.us/j/82126364997">
                    <button :id="zoomPrayerService.ref" class="btn-blue">
                        <icon icon="bxl:zoom" height="24" />
                        <span>Go to Zoom</span>
                    </button>
                </a>
            </template>
        </service-vue>

        <service-vue :id="takeOffService.ref" v-bind="takeOffService">
            <template #image>
                <img
                    class="serviceImage"
                    :id="takeOffService.ref"
                    src="/src/assets/take_off_lunch_hour_service.webp"
                    :alt="takeOffService.ref + ' image'"
                />
            </template>
        </service-vue>

        <service-vue :id="openHeavensService.ref" v-bind="openHeavensService">
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
        object-position: 50%;
    }

    &#zoomPrayerService {
        object-position: 90%;
    }
}
</style>
