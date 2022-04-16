<template>
    <section ref="ref">
        <details-vue v-bind="{ serviceName, serviceTimes, description }">
            <template #button>
                <slot name="button"></slot>
            </template>
        </details-vue>
        <image-vue>
            <template #image>
                <slot name="image"></slot>
            </template>
        </image-vue>
    </section>
    <hr v-if="!mq.lgPlus" />
</template>

<script>
import DetailsVue from "./Details/Details.vue";
import ImageVue from "./Image.vue";

export default {
    components: {
        DetailsVue,
        ImageVue
    },
    inject: ['mq'],
    props: ["ref", "serviceName", "serviceTimes", "description"],
};
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 1rem;

    @include config.breakpoint('sm'){
        gap: 2rem;
    }

    @include config.breakpoint("lg") {
        display: grid;
        grid-template-columns: 1.25fr 1fr;
        gap: 2rem;
        border-radius: 0rem;
        overflow: auto;
        background-color: unset;
    }
}

hr {
    order: 1;
    border: none;
    border-top: 1px solid config.color("light-3");
    margin-bottom: 2rem;
}
</style>
