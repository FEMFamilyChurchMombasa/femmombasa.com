<template>
    <div class="service-details">
        <header-vue v-bind="{ serviceName, serviceTimes }"></header-vue>
        <description-vue :description="description"></description-vue>

        <slot name="button">
            <button class="btn-blue">
                <span>Find our location</span>
                <icon icon="fa6-solid:location-dot" />
            </button>
        </slot>
    </div>
</template>

<script>
import HeaderVue from "./Header.vue";
import DescriptionVue from "./Description.vue";
import { Icon } from "@iconify/vue";

export default {
    components: {
        HeaderVue,
        DescriptionVue,
        Icon
    },
    props: ["serviceName", "serviceTimes", "description"],
};
</script>

<style lang="scss" scoped>
div.service-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    order: 2;
    background-color: config.color("light-2");

    @include config.breakpoint("lg") {
        padding: 3rem;
        order: 1;
        gap: 3rem;
    }
}
</style>
