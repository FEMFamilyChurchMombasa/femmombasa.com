<template>
    <section>
        <h2 class="heading-2 margin-bottom-1">Links</h2>
        <nav>
            <router-link @click="scrollToTop()" class="navlink" to="/"
                >Home
            </router-link>

            <router-link @click="scrollToTop()" class="navlink" to="/give"
                >Give
            </router-link>

            <router-link
                @click="scrollToTop()"
                class="navlink"
                to="/our-leadership"
                >Our Leadership
            </router-link>

            <a
                target="_blank"
                href="https://evangelistwairimu.org/"
                class="navlink"
            >
                <span>Faith Evangelistic Ministry </span>
                <icon icon="ci:external-link" />
            </a>
        </nav>
    </section>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    components: {
        Icon
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style lang="scss" scoped>
section {
    width: 100%;

    @include config.breakpoint("sm") {
        width: fit-content;
    }

    nav {
        .navlink {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 0.25rem;
            margin-bottom: 1rem;

            @include config.breakpoint('sm'){
                justify-content: flex-start;
            }
        }
    }
}
</style>
