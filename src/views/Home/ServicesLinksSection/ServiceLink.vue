<template>
    <div class="service-link">
        <div>
            <p>{{ serviceName }}</p>
            <p v-if="mq.xs" class="heading-4">{{ serviceTime }}</p>
            <a>
                <span>Click to learn more</span>
                <icon icon="akar-icons:arrow-right" />
            </a>
        </div>
        <p v-if="mq.smPlus" class="heading-4">{{ serviceTime }}</p>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    name: "Service Link",
    components: {
        Icon
    },
    props: {
        serviceName: String,
        serviceTime: String
    },
    inject: ["mq"]
};
</script>

<style lang="scss" scoped>
div.service-link {
    padding: 1.5rem;
    background-color: config.color("light-2");
    border-radius: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 200ms;

    p {
        @include config.breakpoint("sm") {
            margin-bottom: 0.5rem;
        }
        &.heading-4 {
            margin-bottom: 1rem;
            color: config.color("dark-2");

            @include config.breakpoint("sm") {
                margin-bottom: 0;
            }
        }
    }

    span {
        margin-right: 0.5rem;
    }

    a {
        display: inline-flex;
        align-items: center;
    }

    &:hover {
        background-color: config.color("magenta");
        * {
            color: white !important;
        }
    }
}
</style>
