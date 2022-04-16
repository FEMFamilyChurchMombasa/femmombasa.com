<template>
    <div id="weekly-services" class="container">
        <service-vue v-bind="worshipService">
            <template #image>
                <img
                    :id="worshipService.ref"
                    :src="worshipService.imageSrc"
                    :alt="worshipService.ref + ' image'"
                />
            </template>
        </service-vue>

        <service-vue v-bind="zoomPrayerService">
            <template #button>
                <button :id="zoomPrayerService.ref" class="btn-blue">
                    <icon icon="bxl:zoom" height="24"/>
                    <span>Go to Zoom</span>
                    <!-- <icon icon="eva:external-link-fill" height="12" /> -->
                </button>
            </template>
        </service-vue>
        <service-vue v-bind="takeOffService"></service-vue>
        <service-vue v-bind="openHeavensService"></service-vue>
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
    },
    created() {
        console.log(this.worshipService);
    }
};
</script>

<style lang="scss" scoped>
img#worshipService {
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 90%;
}
</style>
